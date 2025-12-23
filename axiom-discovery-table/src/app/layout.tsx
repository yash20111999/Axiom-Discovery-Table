import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Axiom Discovery",
  description: "Axiom discovery table clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
