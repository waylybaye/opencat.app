'use client'

import { useState } from 'react'

// Encoded email address
const _e = [115, 117, 112, 112, 111, 114, 116, 64, 100, 114, 101, 97, 109, 111, 111, 110, 46, 97, 105]
const _s = 'Contact for OpenCat'

export function ContactLink({ label, className, subject }: { label: string, className?: string, subject?: string }) {
  const [href, setHref] = useState<string | undefined>(undefined)

  const activate = () => {
    if (!href) {
      const email = String.fromCharCode(..._e)
      setHref(`mailto:${email}?subject=${encodeURIComponent(subject ?? _s)}`)
    }
  }

  return (
    <a
      href={href ?? '#'}
      onMouseEnter={activate}
      onFocus={activate}
      className={className ?? "text-sm text-gray-500 hover:text-gray-700 transition-colors"}
    >
      {label}
    </a>
  )
}
