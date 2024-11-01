import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LinguaQuest",
    template: "%s | LinguaQuest",
  },
  description:
    "A playground to explore new QrSearch features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "QrSearch Playground",
    description:
      "A playground to explore new QrSearch features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pb-36 bg-backgrounds-primary h-screen max-h-[-webkit-fill-available] overflow-auto ">
        <div className="rounded-lg bg-background-secondary ">{children}</div>
      </body>
    </html>
  );
}
