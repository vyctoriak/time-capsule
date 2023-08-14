export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
      </div>

      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You haven't registered any memories, start to{' '}
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