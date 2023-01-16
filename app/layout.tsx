import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gradient-to-r from-indigo-100 via-red-100 to-yellow-50 px-2 md:px-0">
        <Header />
        {children}
      </body>
    </html>
  );
}
