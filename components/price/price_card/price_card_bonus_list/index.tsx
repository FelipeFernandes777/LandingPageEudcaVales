import { PriceCardBonusItem } from "./price_card_bonus_item";
import { PriceCardBonusListContainer } from "./price_card_bonus_list_container";

export function PriceCardBonusList({benneficie}: {benneficie: {benneficies: string}[]}){

  return (
    <PriceCardBonusListContainer>
      <ul className="flex flex-col gap-2">
        {benneficie.map((item,i) => (
          <PriceCardBonusItem key={i} {...item}/>
        ))}
      </ul>
    </PriceCardBonusListContainer>
  )
}