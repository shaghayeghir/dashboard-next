import AuthForm from "@/features/auth/components/AuthForm";
import { loginMetadata } from "../seo/login.seo";
export const metadata = loginMetadata;
export default function LoginPage() {
  return <AuthForm />;
}
