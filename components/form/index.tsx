import { FormCard } from "./form_card";
import { FormContainer } from "./form_container";
import { FormTitle } from "./form_title";

export default function Form(){
  return (
    <FormContainer>
      <FormTitle title="Entre em contato"/>
      <FormCard />
    </FormContainer>
  )
}