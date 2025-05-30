import { BenneficiesFloatCardContainer } from "./benneficies_float_card_container";
import {
  BenneficiesFloatCardImage,
  IBenneficiesFloatCardImage,
} from "./benneficies_float_card_image";
import { BenneficiesFloatCardText } from "./benneficies_float_card_text";
import { BenneficiesFloatCardTextContainer } from "./benneficies_float_card_text_container";

export interface IBenneficiesFloarCard {
  img: IBenneficiesFloatCardImage;
  text: string;
  i: number;
}

export function BenneficiesFloatCard({ img, text, i }: IBenneficiesFloarCard) {
  return (
    <BenneficiesFloatCardContainer>
      <BenneficiesFloatCardImage {...img} />
      <BenneficiesFloatCardTextContainer i={i}>
        <BenneficiesFloatCardText text={text} />
      </BenneficiesFloatCardTextContainer>
    </BenneficiesFloatCardContainer>
  );
}
