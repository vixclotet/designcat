import type { CSSProperties } from "react"

export type ResourceType = "pattern" | "animation"

export interface DesignResource {
  id: number
  name: string
  type: ResourceType
  category: "Gradients" | "Geometric" | "Decorative" | "Effects" | "Animations"
  isNew: boolean
  style: CSSProperties
  code: string
  animationClassName?: string
}

export const CATEGORIES = [
  "All Patterns",
  "Gradients",
  "Geometric",
  "Decorative",
  "Effects",
  "Animations",
  "Favourites",
]

export const RESOURCES: DesignResource[] = [
  // Existing Resources
  {
    id: 1,
    name: "Purple Gradient Grid",
    type: "pattern",
    category: "Geometric",
    isNew: false,
    style: {
      backgroundColor: "#e9d5ff",
      backgroundImage:
        "linear-gradient(315deg, #e9d5ff 0%, #ffffff 74%), linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px)",
      backgroundSize: "100%, 20px 20px",
    },
    code: `background-color: #e9d5ff;
background-image: linear-gradient(315deg, #e9d5ff 0%, #ffffff 74%), linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px);
background-size: 100%, 20px 20px;`,
  },
  {
    id: 9,
    name: "Gradient Shift",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {},
    animationClassName: "animate-gradient-shift",
    code: `.animate-gradient-shift {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 10,
    name: "Pulsing Background",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {
      backgroundColor: "#dbeafe",
    },
    animationClassName: "animate-pulse-bg",
    code: `.animate-pulse-bg {
  animation: pulse-bg 4s ease-in-out infinite;
}

@keyframes pulse-bg {
  0% { background-color: #dbeafe; }
  50% { background-color: #bfdbfe; }
  100% { background-color: #dbeafe; }
}`,
  },
  {
    id: 2,
    name: "Soft Blue Grid",
    type: "pattern",
    category: "Geometric",
    isNew: false,
    style: {
      backgroundColor: "#dbeafe",
      backgroundImage:
        "linear-gradient(to right, rgba(191, 219, 254, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(191, 219, 254, 0.5) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    },
    code: `background-color: #dbeafe;
background-image: linear-gradient(to right, rgba(191, 219, 254, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(191, 219, 254, 0.5) 1px, transparent 1px);
background-size: 20px 20px;`,
  },
  {
    id: 3,
    name: "Minty Fresh",
    type: "pattern",
    category: "Gradients",
    isNew: false,
    style: {
      backgroundColor: "#d1fae5",
      backgroundImage: "linear-gradient(45deg, #d1fae5 0%, #a7f3d0 100%)",
    },
    code: `background-color: #d1fae5;
background-image: linear-gradient(45deg, #d1fae5 0%, #a7f3d0 100%);`,
  },
  {
    id: 4,
    name: "Subtle Dots",
    type: "pattern",
    category: "Decorative",
    isNew: false,
    style: {
      backgroundColor: "#f3f4f6",
      backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
      backgroundSize: "15px 15px",
    },
    code: `background-color: #f3f4f6;
background-image: radial-gradient(#d1d5db 1px, transparent 1px);
background-size: 15px 15px;`,
  },
  {
    id: 5,
    name: "Sunset Fade",
    type: "pattern",
    category: "Gradients",
    isNew: false,
    style: {
      backgroundColor: "#fef3c7",
      backgroundImage: "linear-gradient(to top, #fef3c7 0%, #fbcfe8 100%)",
    },
    code: `background-color: #fef3c7;
background-image: linear-gradient(to top, #fef3c7 0%, #fbcfe8 100%);`,
  },
  {
    id: 6,
    name: "Wavy Lines",
    type: "pattern",
    category: "Effects",
    isNew: false,
    style: {
      backgroundColor: "#e0e7ff",
      backgroundImage: "repeating-linear-gradient(45deg, #c7d2fe, #c7d2fe 10px, #e0e7ff 10px, #e0e7ff 20px)",
    },
    code: `background-color: #e0e7ff;
background-image: repeating-linear-gradient(45deg, #c7d2fe, #c7d2fe 10px, #e0e7ff 10px, #e0e7ff 20px);`,
  },
  {
    id: 7,
    name: "Dark Checkers",
    type: "pattern",
    category: "Geometric",
    isNew: false,
    style: {
      backgroundColor: "#e5e7eb",
      backgroundImage:
        "linear-gradient(45deg, #d1d5db 25%, transparent 25%), linear-gradient(-45deg, #d1d5db 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d1d5db 75%), linear-gradient(-45deg, transparent 75%, #d1d5db 75%)",
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    },
    code: `background-color: #e5e7eb;
background-image: linear-gradient(45deg, #d1d5db 25%, transparent 25%), linear-gradient(-45deg, #d1d5db 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d1d5db 75%), linear-gradient(-45deg, transparent 75%, #d1d5db 75%);
background-size: 20px 20px;
background-position: 0 0, 0 10px, 10px -10px, -10px 0px;`,
  },
  {
    id: 8,
    name: "Pink Noise",
    type: "pattern",
    category: "Effects",
    isNew: false,
    style: {
      backgroundColor: "#fce7f3",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9a8d4' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
    },
    code: `background-color: #fce7f3;
background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9a8d4' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");`,
  },
  {
    id: 11,
    name: "Aurora Gradient",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {},
    animationClassName: "animate-aurora",
    code: `.animate-aurora {
  background: linear-gradient(125deg, #ff3cac, #784ba0, #2b86c5);
  background-size: 600% 600%;
  animation: aurora-flow 20s ease infinite;
}

@keyframes aurora-flow {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`,
  },
  {
    id: 12,
    name: "Diagonal Stripes",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {
      backgroundColor: "#f1f5f9",
    },
    animationClassName: "animate-stripes",
    code: `.animate-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    #e2e8f0,
    #e2e8f0 10px,
    #f1f5f9 10px,
    #f1f5f9 20px
  );
  background-size: 200% 200%;
  animation: stripe-flow 10s linear infinite;
}

@keyframes stripe-flow {
  0% { background-position: 0 0; }
  100% { background-position: 200% 0; }
}`,
  },
  {
    id: 13,
    name: "Starfield",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {
      backgroundColor: "#0f172a",
    },
    animationClassName: "animate-starfield",
    code: `.animate-starfield {
  background-image: 
    radial-gradient(white, rgba(255,255,255,0) 2px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,0) 1px, transparent 20px),
    radial-gradient(white, rgba(255,255,255,0) 1px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,0) 2px, transparent 30px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  animation: star-flow 150s linear infinite;
}

@keyframes star-flow {
   from { background-position: 0 0, 40px 60px, 130px 270px, 70px 100px; }
   to { background-position: -10000px 5000px, -10000px 5000px, -10000px 5000px, -10000px 5000px; }
}`,
  },
  {
    id: 14,
    name: "Hypnotic Rings",
    type: "animation",
    category: "Animations",
    isNew: false,
    style: {
      backgroundColor: "#e0f2fe",
    },
    animationClassName: "animate-rings",
    code: `.animate-rings {
  background-image: repeating-radial-gradient(circle at center, #bae6fd, #bae6fd 10px, #e0f2fe 10px, #e0f2fe 20px);
  background-size: 200% 200%;
  animation: ring-flow 4s linear infinite;
}

@keyframes ring-flow {
  0% { background-size: 200% 200%; }
  100% { background-size: 0% 0%; }
}`,
  },

  // New Gradients
  {
    id: 15,
    name: "Oceanic Deep",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "radial-gradient(circle, #1e3a8a, #172554)",
    },
    code: "background-image: radial-gradient(circle, #1e3a8a, #172554);",
  },
  {
    id: 16,
    name: "Fiery Sunset",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(to right, #f97316, #fde047, #ef4444)",
    },
    code: "background-image: linear-gradient(to right, #f97316, #fde047, #ef4444);",
  },
  {
    id: 17,
    name: "Lush Meadow",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(to top, #22c55e, #a3e635)",
    },
    code: "background-image: linear-gradient(to top, #22c55e, #a3e635);",
  },
  {
    id: 18,
    name: "Royal Purple",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "conic-gradient(from 90deg at 50% 50%, #6d28d9, #a855f7, #d8b4fe)",
    },
    code: "background-image: conic-gradient(from 90deg at 50% 50%, #6d28d9, #a855f7, #d8b4fe);",
  },
  {
    id: 19,
    name: "Cotton Candy",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(45deg, #f9a8d4, #93c5fd)",
    },
    code: "background-image: linear-gradient(45deg, #f9a8d4, #93c5fd);",
  },
  {
    id: 20,
    name: "Arctic Dawn",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "radial-gradient(at top left, #e0f2fe, #ffffff)",
    },
    code: "background-image: radial-gradient(at top left, #e0f2fe, #ffffff);",
  },
  {
    id: 21,
    name: "Desert Mirage",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(to bottom, #fde68a, #d97706)",
    },
    code: "background-image: linear-gradient(to bottom, #fde68a, #d97706);",
  },
  {
    id: 22,
    name: "Emerald Isle",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "conic-gradient(at 75% 25%, #059669, #6ee7b7)",
    },
    code: "background-image: conic-gradient(at 75% 25%, #059669, #6ee7b7);",
  },
  {
    id: 23,
    name: "Ruby Glow",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "radial-gradient(ellipse at bottom, #dc2626, #fecaca)",
    },
    code: "background-image: radial-gradient(ellipse at bottom, #dc2626, #fecaca);",
  },
  {
    id: 24,
    name: "Sapphire Night",
    type: "pattern",
    category: "Gradients",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(135deg, #0c0a09, #2563eb)",
    },
    code: "background-image: linear-gradient(135deg, #0c0a09, #2563eb);",
  },

  // New Geometric
  {
    id: 25,
    name: "Honeycomb Mesh",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#fefce8",
      backgroundImage:
        "linear-gradient(30deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(150deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(30deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(150deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(60deg, #fde047 25%, transparent 25.5%, transparent 75%, #fde047 75%, #fde047), linear-gradient(60deg, #fde047 25%, transparent 25.5%, transparent 75%, #fde047 75%, #fde047)",
      backgroundSize: "40px 70px",
      backgroundPosition: "0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px",
    },
    code: `background-color: #fefce8;
background-image: linear-gradient(30deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(150deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(30deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(150deg, #facc15 12%, transparent 12.5%, transparent 87%, #facc15 87.5%, #facc15), linear-gradient(60deg, #fde047 25%, transparent 25.5%, transparent 75%, #fde047 75%, #fde047), linear-gradient(60deg, #fde047 25%, transparent 25.5%, transparent 75%, #fde047 75%, #fde047);
background-size: 40px 70px;
background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;`,
  },
  {
    id: 26,
    name: "Triangle Field",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#f0f9ff",
      backgroundImage:
        "linear-gradient(45deg, #7dd3fc 50%, transparent 50%), linear-gradient(135deg, transparent 50%, #7dd3fc 50%)",
      backgroundSize: "40px 40px",
    },
    code: `background-color: #f0f9ff;
background-image: linear-gradient(45deg, #7dd3fc 50%, transparent 50%), linear-gradient(135deg, transparent 50%, #7dd3fc 50%);
background-size: 40px 40px;`,
  },
  {
    id: 27,
    name: "Crosshatch",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#f1f5f9",
      backgroundImage:
        "repeating-linear-gradient(45deg, #cbd5e1 0, #cbd5e1 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #cbd5e1 0, #cbd5e1 1px, transparent 0, transparent 50%)",
      backgroundSize: "10px 10px",
    },
    code: `background-color: #f1f5f9;
background-image: repeating-linear-gradient(45deg, #cbd5e1 0, #cbd5e1 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #cbd5e1 0, #cbd5e1 1px, transparent 0, transparent 50%);
background-size: 10px 10px;`,
  },
  {
    id: 28,
    name: "Chevron Stripes",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#fef2f2",
      backgroundImage:
        "repeating-linear-gradient(135deg, #fca5a5, #fca5a5 10px, transparent 10px, transparent 20px), repeating-linear-gradient(45deg, #fca5a5, #fca5a5 10px, transparent 10px, transparent 20px)",
    },
    code: `background-color: #fef2f2;
background-image: repeating-linear-gradient(135deg, #fca5a5, #fca5a5 10px, transparent 10px, transparent 20px), repeating-linear-gradient(45deg, #fca5a5, #fca5a5 10px, transparent 10px, transparent 20px);`,
  },
  {
    id: 29,
    name: "Large Polka Dots",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#fafafa",
      backgroundImage: "radial-gradient(#a1a1aa 15%, transparent 16%)",
      backgroundSize: "50px 50px",
    },
    code: `background-color: #fafafa;
background-image: radial-gradient(#a1a1aa 15%, transparent 16%);
background-size: 50px 50px;`,
  },
  {
    id: 30,
    name: "Square Dance",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#111827",
      backgroundImage:
        "linear-gradient(45deg, #374151 25%, transparent 25%), linear-gradient(-45deg, #374151 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #374151 75%), linear-gradient(-45deg, transparent 75%, #374151 75%)",
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
    },
    code: `background-color: #111827;
background-image: linear-gradient(45deg, #374151 25%, transparent 25%), linear-gradient(-45deg, #374151 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #374151 75%), linear-gradient(-45deg, transparent 75%, #374151 75%);
background-size: 40px 40px;
background-position: 0 0, 0 20px, 20px -20px, -20px 0px;`,
  },
  {
    id: 31,
    name: "Pyramid Steps",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#f5f3ff",
      backgroundImage:
        "linear-gradient(135deg, #a78bfa 25%, transparent 25%), linear-gradient(225deg, #a78bfa 25%, transparent 25%), linear-gradient(45deg, #a78bfa 25%, transparent 25%), linear-gradient(315deg, #a78bfa 25%, #f5f3ff 25%)",
      backgroundSize: "30px 30px",
    },
    code: `background-color: #f5f3ff;
background-image: linear-gradient(135deg, #a78bfa 25%, transparent 25%), linear-gradient(225deg, #a78bfa 25%, transparent 25%), linear-gradient(45deg, #a78bfa 25%, transparent 25%), linear-gradient(315deg, #a78bfa 25%, #f5f3ff 25%);
background-size: 30px 30px;`,
  },
  {
    id: 32,
    name: "Sharp Zigzag",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#fdf2f8",
      backgroundImage:
        "linear-gradient(135deg, #ec4899 25%, transparent 25%), linear-gradient(225deg, #ec4899 25%, transparent 25%)",
      backgroundSize: "20px 20px",
    },
    code: `background-color: #fdf2f8;
background-image: linear-gradient(135deg, #ec4899 25%, transparent 25%), linear-gradient(225deg, #ec4899 25%, transparent 25%);
background-size: 20px 20px;`,
  },
  {
    id: 33,
    name: "Concentric Squares",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#ecfdf5",
      backgroundImage:
        "repeating-radial-gradient( circle at 0 0, transparent 0, #ecfdf5 20px ), repeating-linear-gradient( #a7f3d0, #a7f3d0 )",
    },
    code: `background-color: #ecfdf5;
background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #ecfdf5 20px ), repeating-linear-gradient( #a7f3d0, #a7f3d0 );`,
  },
  {
    id: 34,
    name: "Brick Wall",
    type: "pattern",
    category: "Geometric",
    isNew: true,
    style: {
      backgroundColor: "#fee2e2",
      backgroundImage:
        "linear-gradient(335deg, #b91c1c 23px, transparent 23px), linear-gradient(155deg, #b91c1c 23px, transparent 23px), linear-gradient(335deg, #b91c1c 23px, transparent 23px), linear-gradient(155deg, #b91c1c 23px, transparent 23px)",
      backgroundSize: "58px 58px",
      backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
    },
    code: `background-color: #fee2e2;
background-image: linear-gradient(335deg, #b91c1c 23px, transparent 23px), linear-gradient(155deg, #b91c1c 23px, transparent 23px), linear-gradient(335deg, #b91c1c 23px, transparent 23px), linear-gradient(155deg, #b91c1c 23px, transparent 23px);
background-size: 58px 58px;
background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;`,
  },

  // New Decorative
  {
    id: 35,
    name: "Art Deco Fans",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#18181b",
      backgroundImage:
        "radial-gradient(circle at 100% 100%, transparent 20px, #fde047 21px, #fde047 24px, transparent 25px), radial-gradient(circle at 0 100%, transparent 20px, #fde047 21px, #fde047 24px, transparent 25px)",
      backgroundSize: "50px 50px",
    },
    code: `background-color: #18181b;
background-image: radial-gradient(circle at 100% 100%, transparent 20px, #fde047 21px, #fde047 24px, transparent 25px), radial-gradient(circle at 0 100%, transparent 20px, #fde047 21px, #fde047 24px, transparent 25px);
background-size: 50px 50px;`,
  },
  {
    id: 36,
    name: "Tartan Plaid",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#be123c",
      backgroundImage:
        "repeating-linear-gradient(45deg, #9f1239 0, #9f1239 10px, transparent 10px, transparent 20px), repeating-linear-gradient(-45deg, #9f1239 0, #9f1239 10px, transparent 10px, transparent 20px)",
    },
    code: `background-color: #be123c;
background-image: repeating-linear-gradient(45deg, #9f1239 0, #9f1239 10px, transparent 10px, transparent 20px), repeating-linear-gradient(-45deg, #9f1239 0, #9f1239 10px, transparent 10px, transparent 20px);`,
  },
  {
    id: 37,
    name: "Cloudy Sky",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#38bdf8",
      backgroundImage:
        "radial-gradient(circle at 15% 50%, #f0f9ff 20%, transparent 20.5%), radial-gradient(circle at 80% 20%, #f0f9ff 15%, transparent 15.5%), radial-gradient(circle at 50% 85%, #f0f9ff 25%, transparent 25.5%)",
    },
    code: `background-color: #38bdf8;
background-image: radial-gradient(circle at 15% 50%, #f0f9ff 20%, transparent 20.5%), radial-gradient(circle at 80% 20%, #f0f9ff 15%, transparent 15.5%), radial-gradient(circle at 50% 85%, #f0f9ff 25%, transparent 25.5%);`,
  },
  {
    id: 38,
    name: "Water Ripples",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#e0f2fe",
      backgroundImage:
        "repeating-radial-gradient(circle at 50% 50%, #7dd3fc, #7dd3fc 10px, transparent 10px, transparent 20px)",
    },
    code: `background-color: #e0f2fe;
background-image: repeating-radial-gradient(circle at 50% 50%, #7dd3fc, #7dd3fc 10px, transparent 10px, transparent 20px);`,
  },
  {
    id: 39,
    name: "Wood Grain",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#a16207",
      backgroundImage: "repeating-linear-gradient(90deg, #ca8a04, #ca8a04 10px, #a16207 10px, #a16207 20px)",
    },
    code: `background-color: #a16207;
background-image: repeating-linear-gradient(90deg, #ca8a04, #ca8a04 10px, #a16207 10px, #a16207 20px);`,
  },
  {
    id: 40,
    name: "Zebra Stripes",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#ffffff",
      backgroundImage: "repeating-linear-gradient(110deg, #000000, #000000 15px, transparent 15px, transparent 30px)",
    },
    code: `background-color: #ffffff;
background-image: repeating-linear-gradient(110deg, #000000, #000000 15px, transparent 15px, transparent 30px);`,
  },
  {
    id: 41,
    name: "Leopard Spots",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#f59e0b",
      backgroundImage: "radial-gradient(#78350f 15%, transparent 16%), radial-gradient(#78350f 15%, transparent 16%)",
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 20px 20px",
    },
    code: `background-color: #f59e0b;
background-image: radial-gradient(#78350f 15%, transparent 16%), radial-gradient(#78350f 15%, transparent 16%);
background-size: 40px 40px;
background-position: 0 0, 20px 20px;`,
  },
  {
    id: 42,
    name: "Floral Damask",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#fdf4ff",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23d8b4fe' fill-opacity='0.4' d='M14 16L0 2S0 0 2 0h12l14 14-14 16zm62 48L80 50S80 48 78 48H66L52 62l14 16zm-48 2L0 64S0 62 2 62h12l14 14-14 16zm62-48L80 2S80 0 78 0H66L52 14l14 16z'%3E%3C/path%3E%3C/svg%3E\")",
    },
    code: `background-color: #fdf4ff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23d8b4fe' fill-opacity='0.4' d='M14 16L0 2S0 0 2 0h12l14 14-14 16zm62 48L80 50S80 48 78 48H66L52 62l14 16zm-48 2L0 64S0 62 2 62h12l14 14-14 16zm62-48L80 2S80 0 78 0H66L52 14l14 16z'%3E%3C/path%3E%3C/svg%3E");`,
  },
  {
    id: 43,
    name: "Paisley Swirl",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#f0fdfa",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235eead4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    },
    code: `background-color: #f0fdfa;
background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235eead4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`,
  },
  {
    id: 44,
    name: "Marble Veins",
    type: "pattern",
    category: "Decorative",
    isNew: true,
    style: {
      backgroundColor: "#ffffff",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d4d4d8' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0h1v5h5v1H6v5H5V6H0V5h5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    },
    code: `background-color: #ffffff;
background-image: url("data:image/svg+xml,...");`,
  },

  // New Effects
  {
    id: 45,
    name: "Brushed Metal",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#d4d4d8",
      backgroundImage:
        "linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(0,0,0,0.1) 50%, transparent 50%)",
      backgroundSize: "10px 10px, 20px 20px",
    },
    code: `background-color: #d4d4d8;
background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(0,0,0,0.1) 50%, transparent 50%);
background-size: 10px 10px, 20px 20px;`,
  },
  {
    id: 46,
    name: "TV Static",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.2'/%3E%3C/svg%3E\")",
    },
    code: `background-image: url("data:image/svg+xml,...");`,
  },
  {
    id: 47,
    name: "Linen Texture",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#e7e5e4",
      backgroundImage:
        "linear-gradient(0deg, #d6d3d1 50%, transparent 50%), linear-gradient(90deg, #d6d3d1 50%, transparent 50%)",
      backgroundSize: "4px 4px",
    },
    code: `background-color: #e7e5e4;
background-image: linear-gradient(0deg, #d6d3d1 50%, transparent 50%), linear-gradient(90deg, #d6d3d1 50%, transparent 50%);
background-size: 4px 4px;`,
  },
  {
    id: 48,
    name: "Carbon Fiber",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#262626",
      backgroundImage:
        "linear-gradient(45deg, #404040 25%, transparent 25%, transparent 75%, #404040 75%, #404040), linear-gradient(-45deg, #404040 25%, transparent 25%, transparent 75%, #404040 75%, #404040)",
      backgroundSize: "10px 10px",
    },
    code: `background-color: #262626;
background-image: linear-gradient(45deg, #404040 25%, transparent 25%, transparent 75%, #404040 75%, #404040), linear-gradient(-45deg, #404040 25%, transparent 25%, transparent 75%, #404040 75%, #404040);
background-size: 10px 10px;`,
  },
  {
    id: 49,
    name: "Frosted Glass",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)' opacity='0.1'/%3E%3C/svg%3E\")",
    },
    code: `background-color: rgba(255, 255, 255, 0.1);
background-image: url("data:image/svg+xml,...");
backdrop-filter: blur(10px);`,
  },
  {
    id: 50,
    name: "Paper Texture",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#f5f5f4",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' stitchTiles='stitch'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.1'/%3E%3C/svg%3E\")",
    },
    code: `background-color: #f5f5f4;
background-image: url("data:image/svg+xml,...");`,
  },
  {
    id: 51,
    name: "Liquid Metal",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundImage:
        "radial-gradient(ellipse at 20% 80%, #e2e8f0, #64748b), radial-gradient(ellipse at 80% 10%, #94a3b8, #334155)",
    },
    code: "background-image: radial-gradient(ellipse at 20% 80%, #e2e8f0, #64748b), radial-gradient(ellipse at 80% 10%, #94a3b8, #334155);",
  },
  {
    id: 52,
    name: "Glitter Dust",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#1e293b",
      backgroundImage:
        "radial-gradient(circle at 10% 20%, #e2e8f0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #e2e8f0 1px, transparent 1px), radial-gradient(circle at 50% 50%, #94a3b8 1px, transparent 1px)",
      backgroundSize: "50px 50px, 70px 70px, 30px 30px",
    },
    code: `background-color: #1e293b;
background-image: radial-gradient(circle at 10% 20%, #e2e8f0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #e2e8f0 1px, transparent 1px), radial-gradient(circle at 50% 50%, #94a3b8 1px, transparent 1px);
background-size: 50px 50px, 70px 70px, 30px 30px;`,
  },
  {
    id: 53,
    name: "Holographic Foil",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundImage: "linear-gradient(110deg, #ff00ff, #00ffff, #ffff00, #ff00ff)",
      backgroundSize: "200% 200%",
    },
    code: `background-image: linear-gradient(110deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
background-size: 200% 200%;
/* For animation, add: animation: holo-flow 5s linear infinite; */`,
  },
  {
    id: 54,
    name: "Cracked Earth",
    type: "pattern",
    category: "Effects",
    isNew: true,
    style: {
      backgroundColor: "#78350f",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23422006' d='M0 0h50v50H0zM50 50h50v50H50z'/%3E%3Cpath fill='%23572a0a' d='M0 50h50v50H0zM50 0h50v50H50z'/%3E%3Cpath fill-opacity='0.4' fill='%23000000' d='M49 49h2v2h-2zM49 99h2v2h-2zM99 49h2v2h-2zM2 49h-2v2h2zM2 99h-2v2h2zM49 2h2v-2h-2zM99 2h2v-2h-2z'/%3E%3C/svg%3E\")",
    },
    code: `background-color: #78350f;
background-image: url("data:image/svg+xml,...");`,
  },
]
