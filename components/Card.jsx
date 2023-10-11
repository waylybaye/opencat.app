import Link from 'next/link'

export const Card = ({ title, description, link }) => {
  return (
    <Link href={ link } className="group flex flex-col items-start p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl">
            <div className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl font-bold mb-2">
              { title }
            </div>
            <p className="text-base">
            { description }
            </p>
    </Link>
  );
}
