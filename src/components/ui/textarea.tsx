import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex rounded-lg h-10 min-h-[80px] w-full outline-none bg-background px-3 py-2 peer text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground transition-all disabled:cursor-not-allowed disabled:opacity-50 border-2 focus-within:border-primary ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
