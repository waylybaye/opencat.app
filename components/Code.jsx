import ReactMarkdown from 'react-markdown'
import { CodeBlock } from './CodeBlock'

export default function({ content }) {
  return <ReactMarkdown
    className="prose dark:prose-invert"
    components={{
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');

        return !inline && match ? (
          <CodeBlock
            key={Math.random()}
            language={match[1]}
            value={String(children).replace(/\n$/, '')}
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      table({ children }) {
        return (
          <table className="border-collapse border border-black py-1 px-3 dark:border-white">
            {children}
          </table>
        );
      },
      th({ children }) {
        return (
          <th className="break-words border border-black bg-gray-500 py-1 px-3 text-white dark:border-white">
            {children}
          </th>
        );
      },
      td({ children }) {
        return (
          <td className="break-words border border-black py-1 px-3 dark:border-white">
            {children}
          </td>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
}
