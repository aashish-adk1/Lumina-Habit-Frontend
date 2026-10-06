import AuthLayout from "@/features/auth/components/AuthLayout";
import Login from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}