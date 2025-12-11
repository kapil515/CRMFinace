"use client";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);


function handleLogin(e: any) {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    alert("Fill all fields");
    return;
  }

  login(email.trim());  

  router.push("/");   
}





  return (
    <div className="p-6 max-w-md mx-auto space-y-6 my-[8%]">

      {/* Logo */}
      <Image
        src="/images/Logo-For-black.png"
        className="m-auto mt-6 pb-28"
        alt="Logo"
        width={264}
        height={40}
      />

      <h1 className="text-[22px] text-center font-medium text-[#878787] font-inter mb-[50px]">
        Sign in
      </h1>

      <form onSubmit={handleLogin} className="space-y-6">

        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-[16px] font-semibold font-inter text-[#525256]">
            Enter your Email
          </label>
          <input
            className="w-full border rounded-lg p-3 text-[15px]"
            placeholder="demo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className="text-[16px] font-semibold font-inter text-[#525256]">
            Password
          </label>

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
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-[#299D91] text-white py-3 rounded-lg text-[16px] font-semibold cursor-pointer">
          Sign in
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-[16px] text-[#999DA3] font-inter font-normal">
        No account yet?{" "}
        <a href="/sign-up" className="text-black font-bold font-inter text-[16px]">
          Sign up
        </a>
      </p>
    </div>
  );
}
