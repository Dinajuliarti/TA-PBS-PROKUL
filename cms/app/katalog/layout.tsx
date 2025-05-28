import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="shadow-md">
          <div className="bg-white px-7 pt-6">
            <h1 className="text-xl font-bold text-gray-800">Kategori</h1>
          </div>
          <div className="bg-white px-6 py-4 flex flex-wrap gap-3">
            {[
              { label: "Semua Product", href: "/" },
              { label: "Roti Manis", href: "/" },
              { label: "Roti Isi", href: "/" },
              { label: "Roti Kering", href: "/" },
              { label: "Roti Lainnya", href: "/" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium hover:bg-amber-200 hover:text-amber-800 transition duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <main className="px-10 py-10">{children}</main>
      </body>
    </html>
  );
}
