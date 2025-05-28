import { BenneficiesCardContainer } from "./benneficies_card_container";
import { BenneficiesCardDescription } from "./benneficies_card_description";
import { BenneficiesCardImage, IBenneficiesCardImage } from "./benneficies_card_image";
import { BenneficiesCardTitle } from "./benneficies_card_title";

export interface BenneficiesCard {
  img: IBenneficiesCardImage
  title: string,
  description:string
}

export function BenneficiesCard({img, description,title}: BenneficiesCard){
  return (
    <BenneficiesCardContainer>
      <div className="w-full h-7/12 mb-1">
      <BenneficiesCardImage src={img.src} alt={img.alt}/>
      </div>
      <div className="h-5/12 flex flex-col w-full gap justify-center p-2">
      <BenneficiesCardTitle title={title}/>
      <BenneficiesCardDescription description={description} />
      </div>
    </BenneficiesCardContainer>
  )
}