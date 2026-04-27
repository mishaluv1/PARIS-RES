import { useEffect, useState } from "react"

export default function TypingText({
  text,
  speed = 90
}: {
  text: string
  speed?: number
}) {

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index])
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }

  }, [index, text, speed])

  return (
    <span className="font-bold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}