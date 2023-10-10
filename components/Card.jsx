import Link from 'next/link'

export const Card = ({ title, description, link }) => {
  return (
    <Link href={ link } className="hover:text-blue-500 hover:border-blue-500 flex flex-col items-start p-6 bg-gray-200 dark:bg-gray-700 rounded-2xl">
            <h3 className="hover:text-blue-500 text-2xl font-bold mb-2">
              { title }
            </h3>
            <p className="text-base">
            { description }
            </p>
    </Link>
  );
}
