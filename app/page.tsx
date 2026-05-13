import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Disciplines from '@/components/Disciplines'
import Schedule from '@/components/Schedule'
import Coaches from '@/components/Coaches'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Disciplines />
        <Schedule />
        <Coaches />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
