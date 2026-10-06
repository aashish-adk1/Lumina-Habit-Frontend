import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import GoogleButton from "./GoogleButton";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* Logo */}
      <div className="mb-3 flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-orange-100 bg-orange-50">
          <span className="text-[7px] font-bold text-orange-500">
            Lumina
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[16px] font-semibold leading-5 tracking-tight text-foreground">
          Create your Lumina account
        </h1>

        <p className="mt-1 text-[9px] leading-3 text-muted-foreground">
          Start building better habits and maintain momentum
        </p>
      </div>

      {/* Login / Signup */}
      <div className="mt-4 grid h-6 grid-cols-2 rounded-md bg-muted p-[2px]">
        <Link
          to="/login"
          className="flex items-center justify-center rounded-[5px] text-[8px] font-medium text-muted-foreground"
        >
          Log in
        </Link>

        <button
          type="button"
          className="rounded-[5px] bg-[#151515] text-[8px] font-medium text-white shadow-sm"
        >
          Sign Up
        </button>
      </div>

      {/* Google */}
      <div className="mt-3">
        <GoogleButton />
      </div>

      {/* Divider */}
      <div className="my-2.5 flex items-center gap-2">
        <Separator className="flex-1" />

        <span className="shrink-0 text-[7px] uppercase text-muted-foreground">
          or continue with email
        </span>

        <Separator className="flex-1" />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="signup-name"
          className="mb-1 block text-[8px] font-medium text-foreground"
        >
          Full name
        </label>

        <div className="relative">
          <User
            size={11}
            strokeWidth={1.6}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Alex Johnson"
            autoComplete="name"
            className="h-7 rounded-md pl-7 text-[8px] placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-2">
        <label
          htmlFor="signup-email"
          className="mb-1 block text-[8px] font-medium text-foreground"
        >
          Work or personal email
        </label>

        <div className="relative">
          <Mail
            size={11}
            strokeWidth={1.6}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            id="signup-email"
            name="email"
            type="email"
            placeholder="alex@lumina.app"
            autoComplete="email"
            className="h-7 rounded-md pl-7 text-[8px] placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mt-2">
        <label
          htmlFor="signup-password"
          className="mb-1 block text-[8px] font-medium text-foreground"
        >
          Password
        </label>

        <div className="relative">
          <LockKeyhole
            size={11}
            strokeWidth={1.6}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            id="signup-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            autoComplete="new-password"
            className="h-7 rounded-md pl-7 pr-8 text-[8px]"
          />

          <button
            type="button"
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? (
              <EyeOff size={11} strokeWidth={1.6} />
            ) : (
              <Eye size={11} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="mt-3 h-7 w-full rounded-md bg-[#151515] text-[8px] font-medium text-white hover:bg-[#252525]"
      >
        Create account

        <ArrowRight
          size={11}
          strokeWidth={2}
        />
      </Button>

      {/* Bottom divider */}
      <Separator className="my-3" />

      {/* Login */}
      <p className="text-center text-[7px] text-muted-foreground">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-foreground hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}