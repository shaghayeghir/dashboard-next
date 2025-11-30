import LoginForm from "@/features/auth/login/components/LoginForm";
import { loginMetadata } from "../seo/login.seo";
export const metadata = loginMetadata;
export default function LoginPage() {

  return (
       <LoginForm />
  );
}
