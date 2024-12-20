import { useEffect, useState } from "react";
import Img1 from "../../../assets/images/banner/1.jpg";
import Img2 from "../../../assets/images/banner/2.jpg";
import Img3 from "../../../assets/images/banner/3.jpg";
import Img4 from "../../../assets/images/banner/4.jpg";
import Img5 from "../../../assets/images/banner/5.jpg";
import Img6 from "../../../assets/images/banner/6.jpg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Img1, Img2, Img3, Img4, Img5, Img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full h-[600px] relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            currentSlide === index ? "block" : "hidden"
          }`}
        >
          <img src={slide} className="w-full rounded-2xl" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-8">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + slides.length) % slides.length
                )
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % slides.length)
              }
              className="btn btn-circle bg-red-600"
            >
              ❯
            </button>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform  gap-8">
            <div className="text-gray-300 space-y-7">
              <h1 className="text-6xl font-bold w-1/4">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn btn-success mr-6">Discover More</button>
                <button className="btn btn-outline btn-primary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
