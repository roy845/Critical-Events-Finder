import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import EventsPerDayChart from "./EventsPerDayCharts";
import EventTypesFrequencyChart from "./EventTypesFrequencyChart";
import IntersectionFrequencyChart from "./IntersectionFrequencyChart";

type GraphsCarouselProps = {
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
};

const GraphsCarousel = ({
  activeSlide,
  setActiveSlide,
}: GraphsCarouselProps) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper: SwiperType) =>
          setActiveSlide(swiper.activeIndex)
        }
      >
        <SwiperSlide>
          <EventsPerDayChart />
        </SwiperSlide>
        <SwiperSlide>
          <EventTypesFrequencyChart />
        </SwiperSlide>
        <SwiperSlide>
          <IntersectionFrequencyChart />
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-4">Graph {activeSlide + 1}/3</div>
    </>
  );
};

export default GraphsCarousel;
