import RegisterForm from "@/features/auth/register/components/RegisterForm";
import { registerMetadata } from "../seo/register.seo";
export const metadata = registerMetadata;
export default function LoginPage() {

  return (
       <RegisterForm />
  );
}
