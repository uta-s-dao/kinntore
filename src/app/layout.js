// layout.j"s
"use client";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>GEEM</title>
      </head>
      <body className="body">
        <div>
        {children}
        </div>
        <nav className='navbar'>
          <Link href='/' className='nav-link'>
            Home
          </Link>
          <Link href='/plans' className='nav-link'>
            plans
          </Link>
          <Link href='/record' className='nav-link'>
            record
          </Link>

          <Link href='/account' className='nav-link'>
            account
          </Link>
        </nav>
      </body>
    </html>
  );
}
