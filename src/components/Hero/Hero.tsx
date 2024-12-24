"use client";

import Image from "next/image";
import hero from "../../../public/image/hero.jpg"; 

const Hero = () => {
  return (
    <section className="bg-white text-gray-800 body-font py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 px-4 lg:px-8 mb-10 lg:mb-0 py-4">
          <h1 className="text-center text-3xl lg:text-4xl font-extrabold mb-6 font-serif">
            Mastering Web Development: HTML, CSS, JavaScript, React, Next.js & Python
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-4 text-center">
            Unlock the potential of modern programming with essential technologies like HTML, CSS, JavaScript, React.js, Next.js, and Python. From building visually stunning and responsive web interfaces with HTML and CSS to creating dynamic functionality with JavaScript, these tools form the foundation of web development. Dive deeper with React.js for component-driven UI, Next.js for server-side rendering and performance optimization, and Python for versatile backend solutions and data processing. Whether you are a beginner or an experienced developer, mastering these languages will empower you to craft innovative, scalable applications and stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="flex justify-center lg:w-1/2 px-4">
          <div className="mockup-phone hover:scale-105 transform transition duration-700 ease-in-out">
            <div className="display justify-center">
              <Image
                src={hero}
                alt="Hero Image"
                className="rounded-xl object-cover"
                width={600}
                height={800}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
