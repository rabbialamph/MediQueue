"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const RegisterPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.photo,
      password: userData.password,
    });

    if (error) {
      toast.error(error.message || "SignUp failed");
    } else {
      toast.success("SignUp successful");
      router.push("/auth/login");
    }
  };

  const GoogleHandleSignIn = async () =>{
    await authClient.signIn.social({
      provider: 'google'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black dark:text-white text-black px-4 py-4 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10"
      >

        <h2 className="text-3xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Join SkillSphere and start learning today
        </p>


        <Form className="space-y-5" onSubmit={onSubmit}>

          <TextField
            isRequired
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-gray-500 text-sm">Name</Label>
            <Input
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>

          <TextField
            isRequired
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-500 text-sm">Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>


          <TextField
          isRequired
          >
            <Label className="text-gray-500 text-sm">Photo URL</Label>
            <Input
             
              name="photo"
              type="text"
              placeholder="Enter image URL"
              className="w-full mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
          </TextField>


          <TextField
            className="relative"
            isRequired
            minLength={8}
            type={isVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-gray-500 text-sm">Password</Label>

            <Input
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
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


          <Button
            type="submit"
            className="w-full cursor-pointer py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.02] transition font-semibold shadow-lg"
          >
            Register
          </Button>

        </Form>

        <div className="flex items-center gap-3 my-6 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-white/10"></div>
          OR
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <Button  onClick={GoogleHandleSignIn} className="w-full cursor-pointer py-2 rounded-full bg-white text-black hover:scale-[1.02] transition font-medium flex items-center justify-center gap-2">
          <FcGoogle size={22} />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default RegisterPage;