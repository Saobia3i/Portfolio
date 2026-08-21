import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islamsaobia.vercel.app"),
  title: {
    default: "Saobia Islam Tinni | Developer",
    template: "%s | Saobia Islam Tinni",
  },
  description:
    "Portfolio of Saobia Islam Tinni — Full Stack Developer specializing in AI & Automation, Next.js, and modern web platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
