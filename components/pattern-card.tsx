"use client"

import { motion } from "framer-motion"
import type { DesignResource } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Star, Sparkles, Eye, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface PatternCardProps {
  resource: DesignResource
  onPreview: (resource: DesignResource) => void
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export function PatternCard({ resource, onPreview, isFavorite, onToggleFavorite }: PatternCardProps) {
  const { toast } = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText(resource.code)
    toast({
      title: "Code Copied!",
      description: `The code for ${resource.name} is on your clipboard.`,
    })
  }

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Card className="group relative aspect-square overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg h-full w-full">
        {resource.type === "animation" && <style>{resource.code}</style>}
        <div
          className={`h-full w-full transition-transform group-hover:scale-105 ${resource.animationClassName || ""}`}
          style={resource.style}
        >
          {resource.type === "animation" && (
            <div className="flex h-full w-full items-center justify-center bg-black/20 p-4 text-center font-bold text-white">
              {resource.name}
            </div>
          )}
        </div>

        <div className="absolute top-3 left-3 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/50 backdrop-blur-sm"
            onClick={() => onToggleFavorite(resource.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Star
              className={cn("h-4 w-4 text-yellow-400 transition-all", isFavorite ? "fill-current" : "fill-transparent")}
            />
          </Button>
        </div>

        {resource.isNew && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-gray-800 border-gray-200">
              <Sparkles className="h-3 w-3 mr-1.5 text-indigo-500" />
              New
            </Badge>
          </div>
        )}

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <h4 className="text-white font-bold text-lg text-center mb-4">{resource.name}</h4>
          <div className="flex flex-col gap-2 w-full max-w-[150px]">
            <Button
              onClick={() => onPreview(resource)}
              variant="outline"
              className="bg-white/90 hover:bg-white border-gray-300 text-gray-800 w-full"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleCopy} className="bg-gray-800/80 hover:bg-gray-800 text-white w-full">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
