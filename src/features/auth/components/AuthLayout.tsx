import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[286px] rounded-xl border border-border bg-card px-5 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
        {children}
      </div>
    </main>
  );
}