import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "../assets/fonts/vazir/Vazir-Regular-FD-WOL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazir/Vazir-Bold-FD-WOL.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});
