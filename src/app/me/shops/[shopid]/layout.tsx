import MainMenu from '@/components/MainMenu/MainMenu'
import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-screen h-screen flex overflow-x-hidden'>
      <div className='w-80 h-full'>
        <MainMenu />
      </div>
      <div className='w-full h-full'>
        {children}
      </div>
    </div>
  )
}
