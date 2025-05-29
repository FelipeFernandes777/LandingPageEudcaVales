import Banner from "@/components/banner";
import Benneficies from "@/components/benneficies";
import Courses from "@/components/courses";
import Price from "@/components/price";

export default function HomePage() {
  return (
    <div className="w-screen overflow-hidden">
      <Banner />
      <Benneficies />
      <Courses />
      <Price />
    </div>
  );
}
