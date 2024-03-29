import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
