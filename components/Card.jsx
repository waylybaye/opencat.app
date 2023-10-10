import Link from 'next/link'

export const Card = ({ title, description, link }) => {
  return (
    <Link href={ link } className="hover:text-blue-500 hover:border-blue-500 flex flex-col items-start p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="hover:text-blue-500 text-2xl font-bold mb-2">
              { title }
              <span className="arrow"> &rarr; </span>
            </h3>
            <p className="text-base">
            { description }
            </p>
    </Link>
  );
}
