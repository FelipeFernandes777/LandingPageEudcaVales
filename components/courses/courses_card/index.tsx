import { CoursesCardContainer } from "./courses_card_container";
import { CoursesCardDescription } from "./courses_card_description";
import { CoursesCardFlag } from "./courses_card_flag";
import { CoursesCardInfoContainer } from "./courses_card_info_container";
import { CoursesCardTitle } from "./courses_card_title";
import { CoursesCardImage, ICoursesCardImage } from "./courses_card_image";

export interface ICourseCard {
  img: ICoursesCardImage;
  title: string;
  description: string;
}

export function CoursesCard({ description, img, title }: ICourseCard) {
  return (
    <CoursesCardContainer>
      <CoursesCardImage alt={img.alt} src={img.src} />
      <CoursesCardInfoContainer>
        <CoursesCardTitle title={title} />
        <div className="w-full flex h-full items-center justify-center">
          <CoursesCardDescription description={description} />
        </div>
        <CoursesCardFlag />
      </CoursesCardInfoContainer>
    </CoursesCardContainer>
  );
}
