// import { User } from 'lucide-react'
// import Image from 'next/image'
// import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { Signin } from '@/components/Signin'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <Signin />

        <Hero />

        <Copyright />
      </div>

      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You have not registered any memories, start to{' '}
            <a href="" className="underline hover:text-gray-50">
              create now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
