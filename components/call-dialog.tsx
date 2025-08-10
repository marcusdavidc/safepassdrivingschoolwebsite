"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, Copy } from "lucide-react"

type CallDialogButtonProps = {
  phone?: string
  buttonText?: string
  className?: string
}

export default function CallDialogButton({
  phone = "416-271-1295",
  buttonText = "Book a Lesson",
  className,
}: CallDialogButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className + " bg-green-600 hover:bg-green-700 text-white"}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Call to Book</DialogTitle>
          <DialogDescription>We handle bookings by phone to find the best time for you.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-white hover:bg-green-700"
          >
            <Phone className="h-4 w-4" />
            <span>{"Call " + phone}</span>
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 hover:bg-gray-50"
          >
            <Copy className="h-4 w-4" />
            <span>{copied ? "Number Copied!" : "Copy Number"}</span>
          </button>
          <p className="text-xs text-gray-500 text-center">
            On desktop, clicking “Call” may not open a dialer. Copy the number and call from your phone.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
