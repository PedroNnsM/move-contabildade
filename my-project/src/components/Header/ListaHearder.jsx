export function LiHeader({ text }) {
  return (
    <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide ">
      <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>
        {text}
      </span>
    </li>
  )
}