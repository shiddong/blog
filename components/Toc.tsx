export type Toc = {
  value: string
  depth: number
  url: string
}[]

export interface TOCInlineProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={`${
            heading.depth >= indentDepth && 'ml-6'
          }  tracking-wide text-gray-500 hover:font-bold hover:text-cyan-600 dark:text-gray-400`}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="pt-4 xl:pt-8">
      <h2 className="pb-4 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Table of Contents
      </h2>
      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {tocList}
      </div>
    </div>
  )
}

export default TOCInline
