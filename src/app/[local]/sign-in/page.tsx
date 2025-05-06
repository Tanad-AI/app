"use client";

import { useState, useEffect } from "react";
import { login, loginWithGoogle } from "../lib/auth";
import { getIdToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuth();

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await login(email, password);
      const token = await getIdToken(userCredential.user, true);

      await fetch("/api/session", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
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
      router.refresh();
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

  // Only show login form if we're sure the user is not authenticated
  if (user) {
    return <div className="p-4 text-center">Redirecting to dashboard...</div>;
  }

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="mb-2 w-full border p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-2 w-full border p-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="mb-2 w-full bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="mb-4 w-full bg-red-500 px-4 py-2 text-white"
      >
        Sign in with Google
      </button>
      <p>
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
