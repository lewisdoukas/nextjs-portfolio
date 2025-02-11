import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_sections/NavBar";

export const metadata: Metadata = {
  title: {
    default: "Lewis Doukas | Portfolio",
    template: "%s - Lewis Doukas | Portfolio",
  },
  description:
    "Welcome to Lewis Doukas portfolio website! - Lewis Doukas (Ilias Doukas) is a geoinformatics engineer and web developer based in Greece, passionated with creating unique projects that solve real world problems related to data analysis, finance and trading.",
  twitter: {
    card: "summary_large_image",
  },
  keywords: ["lewis", "ilias", "doukas", "developer"],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="max-w-7xl mx-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
