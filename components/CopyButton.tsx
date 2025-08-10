'use client'

import { useState } from 'react'

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="px-4 py-2 text-sm font-semibold text-white bg-cyan-500 rounded-md hover:bg-cyan-600 transition-colors"
            aria-label="Copy phone number"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    )
}
