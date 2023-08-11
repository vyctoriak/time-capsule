export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="flex flex-col items-start justify-between px-28 py-16">

      </div>

      {/* right */}

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You haven't registered any memories, Start{' '}
            <a href="" className="underline hover:text-gray-50">
              creating now!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}