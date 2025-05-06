"use client";

import { useEffect, useState } from "react";
import { signup, loginWithGoogle } from "../lib/auth";
import { getIdToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl">Sign Up</h1>
      <form onSubmit={handleSignup}>
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
          className="mb-2 w-full bg-green-500 px-4 py-2 text-white"
        >
          Sign Up
        </button>
      </form>
      <button
        onClick={handleGoogleSignup}
        className="mb-4 w-full bg-red-500 px-4 py-2 text-white"
      >
        Sign up with Google
      </button>
      <p>
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login
        </a>
      </p>
    </div>
  );
}
