import Banner from "@/components/banner";
import Benneficies from "@/components/benneficies";
import Courses from "@/components/courses";
import Form from "@/components/form";
import Price from "@/components/price";

export default function HomePage() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Banner />
      <Benneficies />
      <Courses />
      <Price />
      <Form />
    </div>
  );
}
