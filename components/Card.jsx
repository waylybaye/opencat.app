import Link from 'next/link'

export const Card = ({ title, description, link }) => {
  if (typeof title === 'string' && typeof description === 'string' && typeof link === 'string'){
    return (
    <Link href={ link } className="group flex flex-col items-start p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl">
            <div className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold mb-2">
              { title }
            </div>
            <p className="text-gray-600 dark:text-gray-400">
            { description }
            </p>
    </Link>
  );
  } else if (Array.isArray(title) && Array.isArray(description) && Array.isArray(link)) {
    return (
      <div className='flex flex-col items-start bg-gray-200 dark:bg-gray-700 rounded-2xl divide-y divide-gray-300 dark:divide-gray-600'>
        {title.map((t, i) => (
          <Link key={i} href={link[i]} className="group flex flex-col items-start p-6">
            <div className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold mb-2">
              {t}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {description[i]}
            </p>
          </Link>
        ))}
      </div> 
    )
  }
}
