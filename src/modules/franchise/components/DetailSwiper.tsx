import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Slide {
  image: string;
}

interface Props {
  slides: Slide[] | undefined;
}

export default function DetailSwiper(props: Props) {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
      >
        {props.slides?.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img className="aspect-[5/3] bg-slate-100" src={slide.image} alt={"empty"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
