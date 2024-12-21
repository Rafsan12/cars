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
          className={`carousel-item absolute inset-0 w-full h-full ${
            currentSlide === index ? "block" : "hidden"
          }`}
        >
          {/* Image Section */}
          <img
            src={slide}
            className="w-full h-full object-cover rounded-2xl"
            alt={`Slide ${index + 1}`}
          />

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 bottom-5 flex justify-end gap-8">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + slides.length) % slides.length
                )
              }
              className="btn btn-circle bg-gray-800 hover:bg-gray-600 text-white"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % slides.length)
              }
              className="btn btn-circle bg-red-600 hover:bg-red-500 text-white"
            >
              ❯
            </button>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/60 to-transparent">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h1 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form.
              </p>
              <div className="flex gap-4">
                <button className="btn btn-success">Discover More</button>
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
