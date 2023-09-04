import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "TRAVAUX LTD.",
  description: "ENGINEERED SOLUTIONS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        {children}
      </body>
    </html>
  );
}
