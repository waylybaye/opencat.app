import Link from 'next/link'
import clsx from 'clsx'

export function MacAppLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="/release?version=latest"
      target="_blank"
      aria-label="Download on Official Website"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <div className="h-full flex items-center justify-center gap-2 p-2">
        <span>
          Download for Mac
        </span>
      </div>
    </Link>
  )
}
