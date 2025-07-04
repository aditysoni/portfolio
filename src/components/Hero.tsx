import CryptoTicker  from "@/components/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react"
import FloatingWordsBackground from "@/components/BgFloat"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden ">
      <CryptoTicker />
      <FloatingWordsBackground/>
      <div className="container mx-auto text-center relative z-10">
     
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
            ADITYA
            <span className="text-yellow-400"> SONI</span>
          </h1>
  

          <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed">
            Building SECURE and SCALABLE applications for the Future.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Solidity Expert
            </span>
            <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
              DeFi Specialist
            </span>
            <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
             Full-Stack Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
