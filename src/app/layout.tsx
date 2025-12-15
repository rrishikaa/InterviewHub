
import { AuthProvider } from "@/app/context/AuthContext"; 
import "./globals.css";
import Navbar from "@/app/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body>
        <AuthProvider>
          <Navbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
