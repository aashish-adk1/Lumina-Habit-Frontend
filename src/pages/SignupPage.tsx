import AuthLayout from "@/features/auth/components/AuthLayout";
import Signup from "@/features/auth/components/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}