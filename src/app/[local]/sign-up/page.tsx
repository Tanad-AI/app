"use client";

import { useEffect, useState } from "react";
import { signup, loginWithGoogle } from "../lib/auth";
import { getIdToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useLocale, useTranslations } from "next-intl";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { TanadLogo } from "@/assets";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("Auth");
  const locale = useLocale();
  const isRtl = locale === "ar";

  useEffect(() => {
    // Check if auth state has been determined
    if (user) {
      setIsLoading(false);
      if (user) {
        router.push("/dashboard");
      }
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signup(email, password);
      const token = await getIdToken(userCredential.user, true);

      await fetch("/api/session", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await loginWithGoogle();
      const token = await getIdToken(result.user, true);

      await fetch("/api/session", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Show loading state while authentication state is being determined
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4">Loading...</div>
          {/* You could add a spinner here if desired */}
        </div>
      </div>
    );
  }

  if (user) {
    return <div className="p-4 text-center">Redirecting to dashboard...</div>;
  }

  return (
    <div
      className={`flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8 ${
        isRtl ? "rtl" : "ltr"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex w-full justify-center">
          <TanadLogo />
        </div>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {t("createAccount")}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{t("joinUs")}</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-gray-200 bg-white px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("emailAddress")}
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div
                  className={`absolute inset-y-0 ${
                    isRtl ? "right-0 pr-3" : "left-0 pl-3"
                  } pointer-events-none flex items-center`}
                >
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`block w-full rounded-md border border-gray-300 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary sm:text-sm ${
                    isRtl ? "pl-3 pr-10" : "pl-10 pr-3"
                  }`}
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t("password")}
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div
                  className={`absolute inset-y-0 ${
                    isRtl ? "right-0 pr-3" : "left-0 pl-3"
                  } pointer-events-none flex items-center`}
                >
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className={`block w-full rounded-md border border-gray-300 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary sm:text-sm ${
                    isRtl ? "pl-10 pr-10" : "pl-10 pr-10"
                  }`}
                  placeholder={t("passwordPlaceholder")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={`absolute inset-y-0 ${
                    isRtl ? "left-0 pl-3" : "right-0 pr-3"
                  } flex items-center`}
                >
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {t("passwordRequirements")}
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="terms"
                className={`block text-sm text-gray-700 ${
                  isRtl ? "mr-2" : "ml-2"
                }`}
              >
                {t("agreeToTerms")}{" "}
                <a href="#" className="text-primary hover:text-primary">
                  {t("termsOfService")}
                </a>
              </label>
            </div>

            <div>
              <button
                onClick={handleSignup}
                className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-150 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {t("signUp")}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {t("orContinueWith")}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignup}
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-150 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg
                  className={`h-5 w-5 ${isRtl ? "ml-2" : "mr-2"}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
                {t("signUpWithGoogle")}
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            {t("alreadyHaveAccount")}{" "}
            <a
              href="/sign-in"
              className="font-medium text-primary hover:text-primary"
            >
              {t("signIn")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
