import Link from 'next/link'
import Image from 'next/image';

export const Card = ({ title, description, link, icon }) => {
  if (typeof title === 'string' && typeof description === 'string' && typeof link === 'string') {
    return (
      <Link href={link} className="group flex p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl gap-4 items-center w-full">
        { typeof icon === 'string' && icon && <Image src={icon} alt={title} width={50} height={50} className='h-14 w-14' />}
        <div className="flex flex-col items-start">
          <div className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold mb-2">
            {title}
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </Link>
    );
  } else if (Array.isArray(title) && Array.isArray(description) && Array.isArray(link)) {
    return (
      <div className='flex flex-col items-start bg-gray-200 dark:bg-gray-700 rounded-2xl divide-y divide-gray-300 dark:divide-gray-600'>
        {title.map((t, i) => (
          <Link key={i} href={link[i]} className="group flex p-6 gap-4 items-center w-full">
            { Array.isArray(icon) && icon[i] && <Image src={icon[i]} alt={t} width={50} height={50} className='h-14 w-14' />}
            <div className="flex flex-col items-start">
              <div className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold mb-2">
                {t}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {description[i]}
              </p>
            </div>
          </Link>
        ))}
      </div> 
    )
  }
}
