export function redirectToWhatsapp() {
  const url =
    "https://api.whatsapp.com/send/?phone=5531992281545&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0";

  //Redireciona para uma nova pagina
  window.open(url, "_blank");
}
