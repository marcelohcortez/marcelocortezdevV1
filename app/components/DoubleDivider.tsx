export default function DoubleDivider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <span className="doubleDivider flex bg-white h-0.5 w-[25%]"></span>
        {children}
      <span className="doubleDivider flex bg-white h-0.5 w-[25%]"></span>
    </>
  )
}
