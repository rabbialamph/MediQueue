"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash, BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ✅ FIX: use next-themes instead of local darkMode state
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const isDark = theme === "dark";

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: redirect,
    });

    if (error) {
      toast.error(error.message || "Login failed");
    } else {
      toast.success("Login successful");
      router.push(redirect);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black dark:text-white text-black px-4 py-4 overflow-hidden transition-all">

      {/* THEME TOGGLE (FIXED) */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 dark:bg-black/10"
      >
        {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-white/10 dark:border-black/10 rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center">Welcome Back</h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Login to continue your learning journey
        </p>

        <Form onSubmit={onSubmit} className="space-y-5">

          {/* EMAIL */}
          <TextField isRequired>
            <Label className="text-gray-500 text-sm">Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 rounded-full 
              bg-white dark:bg-white/5 
              border border-gray-200 dark:border-white/10 
              text-black dark:text-white 
              placeholder-gray-500 outline-none 
              focus:border-indigo-500 transition"
            />
            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>

          {/* PASSWORD */}
          <TextField className="relative" isRequired>
            <Label className="text-gray-500 text-sm">Password</Label>

            <Input
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              className="w-full mt-2 px-4 py-2 rounded-full 
              bg-white dark:bg-white/5 
              border border-gray-200 dark:border-white/10 
              text-black dark:text-white 
              placeholder-gray-500 outline-none 
              focus:border-indigo-500 transition"
            />

            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="absolute right-3 top-11 text-gray-400 hover:text-white transition"
            >
              {isVisible ? <BsEye size={18} /> : <BsEyeSlash size={18} />}
            </button>

            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>

          {/* FORGOT PASSWORD */}
          <div className="text-right -mt-3">
            <Link
              href="#"
              className="text-sm text-indigo-400 hover:underline"
              onClick={() => toast.info("Forgot password feature coming soon")}
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <Button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.02] transition font-semibold shadow-lg cursor-pointer"
          >
            Login
          </Button>
        </Form>

        {/* OR */}
        <div className="flex items-center gap-3 my-6 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-white/10"></div>
          OR
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* GOOGLE */}
        <div className="mb-4">
          <Button className="w-full cursor-pointer py-2 rounded-full bg-white text-black hover:scale-[1.02] transition font-medium flex items-center justify-center gap-2">
            <FcGoogle size={22} />
            Login with Google
          </Button>
        </div>

        {/* REGISTER */}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default LoginPage;