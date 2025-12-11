"use client";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function handleSignup(e: any) {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    if (!confirmPassword.trim()) {
      alert("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    login(email);

    setTimeout(() => {
      router.push("/");
    }, 50);
  }



  return (
    <div className="p-6 max-w-md mx-auto space-y-6 my-[10%]">

      {/* Logo */}
      <Image
        src="/images/Logo-For-black.png"
        className="m-auto mt-6 pb-28"
        alt="Logo"
        width={264}
        height={40}
      />

      <h1 className="text-[22px] text-center font-medium text-[#878787] font-inter mb-[50px]">
        Sign up
      </h1>

      <form onSubmit={handleSignup} className="space-y-6">

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[16px] font-semibold font-inter text-[#525256]">Enter your Email</label>
          <input
            className="w-full border rounded-lg p-3 text-[15px]"
            placeholder="demo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-[16px] font-semibold font-inter text-[#525256]">Password</label>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className="w-full border rounded-lg p-3 text-[15px] pr-10"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <p className="text-xs text-[#999DA3] font-normal font-inter">
            Password must include at least 8 characters, one uppercase letter,
            one number, and one special character.
          </p>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-[16px] font-semibold font-inter text-[#525256]">Confirm Password</label>

          <div className="relative">
            <input
              type={showConfirmPass ? "text" : "password"}
              className="w-full border rounded-lg p-3 text-[15px] pr-10"
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-[#299D91] text-white py-3 rounded-lg text-[16px] font-semibold cursor-pointer">
          Signup
        </button>
      </form>

      <p className="text-center text-[16px] text-[#999DA3] font-inter font-normal">
        Already have an account?{" "}
        <a href="/sign-in" className="text-black font-bold font-inter text-[16px]">
          Sign in
        </a>
      </p>
    </div>
  );
}
