"use client"

import { useState, useEffect } from "react"
import type { CSSProperties } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RESOURCES, CATEGORIES } from "@/lib/data"
import type { DesignResource } from "@/lib/data"
import { PatternCard } from "@/components/pattern-card"
import { Github, Twitter, Cat, Search, Dices } from "lucide-react"
import { cn } from "@/lib/utils"

const defaultBackground: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage:
    "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
  backgroundSize: "24px 24px",
}

const isColorDark = (hexColor: string): boolean => {
  if (!hexColor || !hexColor.startsWith("#")) return false
  const hex = hexColor.replace("#", "")
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq < 140
}

export default function DesignCatLandingPage() {
  const [activeCategory, setActiveCategory] = useState("Geometric")
  const [searchQuery, setSearchQuery] = useState("")
  const [backgroundStyle, setBackgroundStyle] = useState<CSSProperties>(defaultBackground)
  const [injectedCss, setInjectedCss] = useState("")
  const [wrapperClassName, setWrapperClassName] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])
  const [isBgDark, setIsBgDark] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem("designcat-favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
      localStorage.setItem("designcat-favorites", JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  let filteredResources
  if (activeCategory === "Favourites") {
    filteredResources = RESOURCES.filter((r) => favorites.includes(r.id))
  } else if (activeCategory === "All Patterns") {
    filteredResources = RESOURCES
  } else {
    filteredResources = RESOURCES.filter((p) => p.category === activeCategory)
  }

  if (searchQuery) {
    filteredResources = filteredResources.filter((resource) =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  const handlePreview = (resource: DesignResource) => {
    const bgColor = resource.style.backgroundColor as string
    setIsBgDark(bgColor ? isColorDark(bgColor) : false)

    if (resource.type === "animation") {
      setBackgroundStyle({})
      setInjectedCss(resource.code)
      setWrapperClassName(resource.animationClassName || "")
    } else {
      setInjectedCss("")
      setWrapperClassName("")
      setBackgroundStyle({ ...resource.style, transition: "background 0.5s ease-in-out" })
    }
  }

  const handleRandomPreview = () => {
    const randomIndex = Math.floor(Math.random() * RESOURCES.length)
    const randomResource = RESOURCES[randomIndex]
    handlePreview(randomResource)
  }

  const resetPreview = () => {
    setBackgroundStyle(defaultBackground)
    setInjectedCss("")
    setWrapperClassName("")
    setIsBgDark(false)
  }

  return (
    <>
      <style>{injectedCss}</style>
      <div className={cn("w-full min-h-screen transition-colors", wrapperClassName)} style={backgroundStyle}>
        <div className="relative z-10">
          <header className="py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="#" className="flex items-center gap-2" onClick={resetPreview}>
                <Cat className={cn("h-8 w-8", isBgDark ? "text-white" : "text-indigo-500")} />
                <h1 className={cn("text-2xl font-bold tracking-tight", isBgDark ? "text-white" : "text-gray-900")}>
                  DesignCat
                </h1>
              </Link>
              <div className={cn("flex items-center gap-2", isBgDark ? "text-white" : "text-gray-800")}>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/vixclotet/designcat" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://x.com/vixclotet" target="_blank" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 md:px-8">
            <section className="text-center py-16">
              <Badge variant="outline" className={cn("mb-4 bg-white/50", isBgDark ? "border-gray-600 text-white" : "")}>
                Shadcn UI/UX Patterns & Animations
              </Badge>
              <h2
                className={cn(
                  "text-4xl md:text-6xl font-extrabold tracking-tighter mb-4",
                  isBgDark ? "text-white" : "text-gray-900",
                )}
              >
                Build Beautiful UIs in seconds
              </h2>
              <p className={cn("max-w-2xl mx-auto text-lg mb-8", isBgDark ? "text-gray-200" : "text-gray-600")}>
                An open-source library of UI/UX patterns and animations.
              </p>
              <Button asChild size="lg">
                <Link href="https://github.com/vixclotet/designcat" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute Here!
                </Link>
              </Button>
            </section>

            <section className="py-20">
              <Card className="p-8 bg-white/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-center mb-6">How to Use DesignCat</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl mb-2">🎲</div>
                    <h4 className="font-semibold mb-1">1. Discover</h4>
                    <p className="text-gray-600 text-sm">
                      Search, filter, or hit the random button to find new inspiration.
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⭐</div>
                    <h4 className="font-semibold mb-1">2. Save Favorites</h4>
                    <p className="text-gray-600 text-sm">
                      Click the star icon to save your favorite resources for later.
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">📋</div>
                    <h4 className="font-semibold mb-1">3. Preview & Copy</h4>
                    <p className="text-gray-600 text-sm">
                      Preview on the page, then click "Copy" to get the code snippet.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="pattern-library" className="py-12">
              <div className="text-center mb-8">
                <h3 className={cn("text-3xl font-bold", isBgDark ? "text-white" : "text-gray-900")}>Pattern Library</h3>
                <p className={cn("mt-2", isBgDark ? "text-gray-300" : "text-gray-500")}>
                  Tap on mobile or hover on desktop to see options
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200">
                  <nav className="flex flex-wrap justify-center items-center gap-2">
                    {CATEGORIES.map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "secondary" : "ghost"}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          activeCategory === category
                            ? "bg-gray-100 text-gray-900 shadow-inner"
                            : "text-gray-600 hover:bg-gray-100/50"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="max-w-md mx-auto mb-10">
                <div className="flex items-center gap-2">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search by name..."
                      className="w-full pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRandomPreview}
                    aria-label="Preview a random pattern"
                  >
                    <Dices className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="mb-10">
                <p className={cn("text-center", isBgDark ? "text-gray-300" : "text-gray-600")}>
                  Found {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
                  {searchQuery && ` for "${searchQuery}"`} in {activeCategory}
                </p>
              </div>

              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource) => (
                      <PatternCard
                        key={resource.id}
                        resource={resource}
                        onPreview={handlePreview}
                        isFavorite={favorites.includes(resource.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="col-span-full"
                    >
                      <p className={cn("text-center", isBgDark ? "text-gray-400" : "text-gray-500")}>
                        No resources found. Try a different search or category!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </section>
          </main>

          <footer
            className={cn("text-center py-8 mt-12 border-t", isBgDark ? "border-gray-700" : "border-gray-200/50")}
          >
            <p className={cn("text-sm", isBgDark ? "text-gray-300" : "text-gray-500")}>
              Built by the community. Contribute on{" "}
              <Link
                href="https://github.com/vixclotet/designcat"
                className={cn("underline", isBgDark ? "hover:text-white" : "hover:text-gray-800")}
              >
                GitHub
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
