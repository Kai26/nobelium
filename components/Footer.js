import BLOG from '@/blog.config'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            <a href="https://blog.ygxlj.xyz/copyright">©{from === y || !from ? y : `${from} - ${y}`}</a> <a href="https://t.me/ygxgj" target="_blank" rel="noreferrer">{BLOG.author}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
