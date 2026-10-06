import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import GoogleButton from "./GoogleButton";

export default function Login() {
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
          Welcome back to Lumina
        </h1>

        <p className="mt-1 text-[9px] leading-3 text-muted-foreground">
          Sign in to track your habits and maintain momentum
        </p>
      </div>

      {/* Login / Signup */}
      <div className="mt-4 grid h-6 grid-cols-2 rounded-md bg-muted p-[2px]">
        <button
          type="button"
          className="rounded-[5px] bg-[#151515] text-[8px] font-medium text-white shadow-sm"
        >
          Log in
        </button>

        <Link
          to="/signup"
          className="flex items-center justify-center rounded-[5px] text-[8px] font-medium text-muted-foreground"
        >
          Sign Up
        </Link>
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

      {/* Email */}
      <div>
        <label
          htmlFor="login-email"
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
            id="login-email"
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
        <div className="mb-1 flex items-center justify-between">
          <label
            htmlFor="login-password"
            className="text-[8px] font-medium text-foreground"
          >
            Password
          </label>

          <Link
            to="/forgot-password"
            className="text-[7px] font-medium text-orange-600 hover:text-orange-700"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <LockKeyhole
            size={11}
            strokeWidth={1.6}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            autoComplete="current-password"
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

      {/* Remember */}
      <div className="mt-2 flex items-center gap-1.5">
        <Checkbox
          id="remember"
          className="h-2.5 w-2.5 rounded-[2px]"
        />

        <label
          htmlFor="remember"
          className="cursor-pointer text-[7px] text-muted-foreground"
        >
          Remember this device for 30 days
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="mt-2.5 h-7 w-full rounded-md bg-[#151515] text-[8px] font-medium text-white hover:bg-[#252525]"
      >
        Sign in to Workspace

        <ArrowRight
          size={11}
          strokeWidth={2}
        />
      </Button>

      {/* Bottom divider */}
      <Separator className="my-3" />

      {/* Signup */}
      <p className="text-center text-[7px] text-muted-foreground">
        Don't have an account yet?{" "}
        <Link
          to="/signup"
          className="font-semibold text-foreground hover:underline"
        >
          Sign up for free
        </Link>
      </p>
    </div>
  );
}