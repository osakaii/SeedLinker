import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  image: string;
}

interface Props {
  slides: Slide[];
}

export default function DetailSwiper(props: Props) {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={true}
        slidesPerView={1.2}
      >
        {props.slides.map((slide) => (
          <SwiperSlide>
            <img src={slide.image} alt={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
