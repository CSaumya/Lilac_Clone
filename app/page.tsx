import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Specialists from "@/components/Specialists"
import Support from "@/components/Support"
import Chat from "@/components/Chat"
import Faq from "@/components/Faq"
import ProfessionalBg from "@/components/ProfessionalBg"
import GetStarted from "@/components/GetStarted"
import Footer_1 from "@/components/Footer_1"
import Footer_2 from "@/components/Footer_2"

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Specialists />
      <Support />
      <Chat />
      <Faq />
      <ProfessionalBg />
      <GetStarted />
      <Footer_1 />
      <Footer_2 />
    </div>
  )
}

export default page
