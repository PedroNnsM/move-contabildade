export function LiComponent({ tag, text }) {
  return (
    <>
      <li className="lg:px-5  block lg:py-2 font-semibold hover:text-move-blue-900 text-center  text-move-blue-500 text-2xl py-5  "><a href={`#${tag}`}>{text}</a></li>
    </>
  )
}