import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'Text-Scroll-Awwawards',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
