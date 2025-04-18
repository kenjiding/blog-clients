import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/layout.css";
import { incognito } from "../../assets/font/font";
import { gitlabmono } from "../../assets/font/font";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import { Providers } from "../../providers";
import dynamic from "next/dynamic";

// const ClockWithWebComponent = dynamic(
//   () => import("@/components/Clock"), // 替换为实际组件路径
//   { ssr: false } // 禁用 SSR
// );

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "kenjiding | Software Developer",
  description:
    "kenjiding Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://www.kenjiding.com",
  ogImage:
    "",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "www.kenjiding.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Providers>
        <Navbar />
        {/* <animated-clock-com style={{transform: 'scale(0.5)'}}/> */}
        {children}
        <Footer />
      </Providers>
      <Script defer src="/js/clock.js" />
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </div>
  );
}
