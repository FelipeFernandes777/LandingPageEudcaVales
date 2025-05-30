import Image from "next/image";
import { FormCard } from "./form_card";
import { FormContainer } from "./form_container";
import { FormTitle } from "./form_title";

export default function Form() {
  return (
    <FormContainer>
      <FormTitle title="Entre em contato" />
      <div className="w-full h-full flex gap-3 justify-center items-center px-5">
        <div className="w-full h-full relative hidden lg:block">
          <Image
            src={"/form/Checklist.jpg"}
            alt="Imagem de um checklist"
            fill
            className="object-contain"
          />
        </div>
        <FormCard />
      </div>
    </FormContainer>
  );
}
