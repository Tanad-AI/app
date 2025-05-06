// app/signup/page.tsx
"use client";

import { useState } from "react";
import { signup } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl">Sign Up</h1>
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
        onClick={handleSignup}
        className="bg-green-500 px-4 py-2 text-white"
      >
        Sign Up
      </button>
    </div>
  );
}
