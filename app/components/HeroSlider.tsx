"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/Banner.png",
    alt: "Kinderen spelen tijdens De Kindervakantiespelen in Wervershoof"
  },
  {
    src: "/images/Banner.png",
    alt: "Zomerse sfeer tijdens De Kindervakantiespelen bij De Westrand"
  },
  {
    src: "/images/Banner.png",
    alt: "Groep kinderen met vrijwilligers tijdens De Kindervakantiespelen"
  }
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-slider" aria-label="Impressie van De Kindervakantiespelen">
      {slides.map((slide, i) => (
        <div
          key={slide.alt + i}
          className={`hero-slide${i === index ? " hero-slide-active" : ""}`}
        >
          {i === index && (
            <Image
              src={slide.src}
              alt={slide.alt}
              width={640}
              height={360}
              sizes="(max-width: 900px) 100vw, 50vw"
              className="hero-slide-image"
              priority={i === 0}
            />
          )}
        </div>
      ))}
      <div className="hero-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot${i === index ? " hero-dot-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Toon afbeelding ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

