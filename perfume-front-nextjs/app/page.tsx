'use client'

import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/SearchBar"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from "react"
import Image from 'next/image'

const displayScents = [
  { name: "Chanel No. 5", key: 68 },
  { name: "Dior Sauvage", key: 43 },
  { name: "Creed Aventus", key: 2 },
  { name: "YSL Black Opium", key: 70 },
]

export default function Home() {
  const [randomKey, setRandomKey] = useState(0)

  const findRandom = () => {
    const randomRange = 1000
    return Math.floor(Math.random() * randomRange)
  }
  
  useEffect(() => {
    setRandomKey(findRandom())
  }, [])

  return (
    <div className="flex flex-col grow justify-center relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Larger orange image positioned lower on the right */}
      <div className="absolute right-0 top-[75%] -translate-y-1/2 h-[110%] w-auto max-w-[65%]">
  <Image 
    src="/orange.png" 
    alt="Perfume bottle" 
    width={1200}  // Significantly increased size
    height={1300} // Increased proportionally
    className="h-full w-auto object-contain"
    priority
    style={{
      maxHeight: 'none' // Remove any default max-height constraints
    }}
  />
</div>
      
      {/* Main content shifted to the left */}
      <main className="flex py-14 px-6 relative z-10 w-[55%] ml-8"> {/* Reduced width and added left margin */}
        <div className="max-w-2xl flex flex-col items-start gap-6">
          <h1 className="text-3xl text-primary md:text-5xl font-bold text-left drop-shadow-sm shadow-teaRose">
            Find Your Signature Scent
          </h1>
          <p className="text-primary font-semibold text-lg md:text-2xl text-left max-w-[90%]"> {/* Added max-width */}
            Search for your favorite perfumes to find alternatives and fragrances that will give the same vibes.
          </p>
          <div className="w-full flex flex-col gap-4 md:gap-12">
            <div className="flex items-center gap-4 w-full max-w-[90%]"> {/* Added max-width */}
              <SearchBar />
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2 justify-start">
              {displayScents.map((scent) => (
                <Link key={scent.key} href={`/recommendation/${encodeURIComponent(scent.key)}`}>
                  <Button
                    variant="ghost"
                    className="rounded-full bg-earthYellow text-primary px-4 py-2 hover:bg-muted-90 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary flex items-center gap-2"
                  >
                    {scent.name}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
              <Link href={`/recommendation/${randomKey}`}>
                <Button
                  variant="ghost"
                  className="rounded-full border-muted border-2 bg-teaRose text-primary px-4 py-2 hover:bg-muted-90 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary flex items-center gap-2"
                >
                  Suggest Me A Random Perfume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}