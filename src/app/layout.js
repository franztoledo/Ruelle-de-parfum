import "@/styles/globals.css";

export const metadata = {
  title: "Ruelle de Parfum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}