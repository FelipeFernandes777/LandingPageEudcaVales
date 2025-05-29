
export function PriceCardBonusItem({benneficies}: {benneficies: string}){
  return (
    <li className="list-item w-full px-2 text-center">
      <span className="max-[321px]:text-base text-lg tracking-tight text-center"> {benneficies} </span>
    </li>
  )
}