import HomePage from "@/features/home/components/HomePage";
import { HomeMetadata } from "./seo/home.seo";
export const metadata = HomeMetadata;
export default function Home() {
  return <HomePage />;
}
