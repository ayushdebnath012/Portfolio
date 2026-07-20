import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata = {
  title: `${profile.name} — ${profile.institute}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.institute}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
