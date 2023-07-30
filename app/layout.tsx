import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Flexibble',
  description: 'showcase your design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </html>
  )
}
