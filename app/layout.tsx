import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saobiaislam.me"),
  title: {
    default: "Saobia Islam Tinni | Developer",
    template: "%s | Saobia Islam Tinni",
  },
  description:
    "Portfolio of Saobia Islam Tinni — Full Stack Developer specializing in AI & Automation, Next.js, and modern web platforms.",
};

// Runs before React hydrates so the saved theme applies on the very first paint —
// otherwise every navigation/reload briefly shows the light default before the
// client-side effect in Nav.tsx corrects it.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var theme = localStorage.getItem("portfolio-theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") document.body.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
