export function redirectToWhatsapp() {
  const number = "553192994899";
  const message =
    "Olá vim através da Landing Page do Google e gostaria de mais informações";

  const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}
