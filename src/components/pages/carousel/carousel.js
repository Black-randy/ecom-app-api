import { Carousel as FlowbiteCarousel } from "flowbite-react";
import {  Flowbite } from "flowbite-react";

function Carousel() {
    return (
        <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <FlowbiteCarousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </FlowbiteCarousel>
      </div>
      </div>
      </section>
      );
}

export default Carousel;
