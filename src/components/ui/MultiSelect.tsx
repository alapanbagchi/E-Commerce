import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Typography from "./Typography"

export type OptionType = Record<"value" | "label", string>

interface MultiSelectProps {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
  className?: string
  placeholder?: string
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ options, selected = [], onChange, className, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)

    const handleUnselect = (value: string) => {
      onChange(selected.filter((selectedValue) => selectedValue !== value));
    };
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Backspace" && selected.length > 0) {
          onChange(selected.filter((_, index) => index !== selected.length - 1))
        }
        if (e.key === "Escape") {
          setOpen(false)
        }
      }
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [onChange, selected])

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className={className}>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-full px-3 py-2 min-h-[46px] h-fit border-2 hover:bg-white rounded-lg justify-between`}
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-wrap items-center gap-1 font-normal">
              {selected.map((item) => (
                <Badge
                  variant="secondary"
                  key={item}
                  className="flex items-center gap-1 font-normal text-[14px] group-hover:bg-background"
                  onClick={() => handleUnselect(item)}
                >
                  {item}
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item)
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleUnselect(item)
                    }}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </Button>
                </Badge>
              ))}
              {selected.length === 0 && (
                <Typography variant="p_small" className="text-muted-foreground">
                  {props.placeholder ?? "Select ..."}
                </Typography>
              )}
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 relative">
          <Command className={className}>
            <CommandInput placeholder="Search" />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    const isSelected = selected.includes(option.value);
                    onChange(
                      isSelected
                        ? selected.filter((item) => item !== option.value)
                        : [...selected, option.value]
                    );
                    setOpen(true);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.some((item) => item === option.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

MultiSelect.displayName = "MultiSelect"

export { MultiSelect }