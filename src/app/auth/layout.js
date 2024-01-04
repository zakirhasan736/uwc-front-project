import { Onest, Manrope } from 'next/font/google'
import '@/styles/globals.css'

const onest = Onest({ subsets: ['latin'], display: 'swap', })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', })

export const metadata = {
  title: 'Authentications',
  description: 'Generated by create next app',
}

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${manrope.variable}`}>
        {children}
        </body>
    </html>
  )
}
