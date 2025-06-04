import Image from "next/image";
import { PriceCardContainer } from "./price_card_container";
import { PriceCardFlag } from "./price_card_flag";
import { PriceCardHeaderSection } from "./price_card_header_section";
import { PriceCardTitle } from "./price_card_title";
import { PriceCardBodySection } from "./price_card_body_section";
import { PriceCardPrices } from "./price_card_prices";
import { PriceCardButton } from "./price_card_button";
import { PriceCardBonusList } from "./price_card_bonus_list";

export interface IPriceCard {
  img: {
    alt: string;
    src: string;
  };
  title: string;
  flag: string;
  price: string;
  benneficie: { benneficies: string }[];
}

export function PriceCard({ img, title, flag, price, benneficie }: IPriceCard) {
  return (
    <PriceCardContainer>
      <PriceCardHeaderSection>
        <Image alt={img.alt} src={img.src} width={60} height={60}/>
        <PriceCardTitle title={title} />
        <PriceCardFlag flag={flag} />
        <PriceCardPrices price={price} />
      </PriceCardHeaderSection>
      <PriceCardBodySection>
        <PriceCardBonusList benneficie={benneficie} />
        <PriceCardButton title="Matricule-se" />
      </PriceCardBodySection>
    </PriceCardContainer>
  );
}
