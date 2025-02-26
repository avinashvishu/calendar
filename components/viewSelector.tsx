"use client"

import type { ViewType } from "@/lib/types"


interface ViewSelectorProps {
  view: ViewType
  onChange: (view: ViewType) => void
}

export function ViewSelector({ view, onChange }: ViewSelectorProps) {
    
  return (
    <div className="my-6 flex rounded-xl p-1 py-2 w-full bg-[#f6f6f6] overflow-hidden">
      {(["daily", "weekly", "monthly"] as const).map((viewType) => (
        <button
          key={viewType}
          onClick={() => onChange(viewType)}
          className={`flex-1 px-4 py-2 text-sm font-medium capitalize transition-colors ${view === viewType
            ? "bg-white text-foreground shadow-sm "
            : "text-muted-foreground hover:bg-background/50"} rounded-xl `}
        >
          {viewType}
        </button>
      ))}
    </div>
  )
}