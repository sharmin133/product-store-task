"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Sign in with credentials (NextAuth will auto-create user if not exist)
    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/products",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login </h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
           autoComplete="current-password"
        />
        <button className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600 text-center">
        If your email doesn’t exist, it will be created automatically.
      </p>
    </div>
  );
}
