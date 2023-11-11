import type { Metadata } from 'next'
import './globals.css'
import { Graphik } from '@/lib/fonts'
import { Navbar } from '@/components/Navbar/Navbar'
import { Toaster } from "@/components/ui/toaster"
import { ModalManager } from '@/components/ModalManager'
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Joridiro'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = headers().get('x-next-pathname') as string;
  console.log(pathname);
  return (
    <html lang="en">
      <body className={Graphik.className}>
        {
          !pathname.startsWith('/me') && <Navbar />
        }
        <ModalManager />
        {children}
        <Toaster />
      </body>
    </html>
  )
}