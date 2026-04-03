import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { AnimatedBackground } from "@/components/animated-background";

export const metadata: Metadata = {
  title: {
    default: "Ahmed Shawky | Senior Mobile Engineer",
    template: "%s | Ahmed Shawky",
  },
  description:
    "Portfolio of Ahmed Shawky, a Senior Mobile Engineer specializing in Flutter, iOS with SwiftUI, and Android with Kotlin.",
  keywords: [
    "Ahmed Shawky",
    "Senior Mobile Engineer",
    "Flutter Developer",
    "SwiftUI Engineer",
    "Kotlin Android Developer",
    "Mobile Architect",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="relative z-20">
          <AnimatedBackground />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
