
export function CoursesCardDescription({description}: {description: string}){
  return (
    <span className="text-sm tracking-tight max-[321px]:text-[12.2px] md:text-center">
      {description}
    </span>
  )
}