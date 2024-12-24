import Image from "next/image";
import img1 from "../../../public/image/html.png";
import img2 from "../../../public/image/css.jpeg";
import img3 from "../../../public/image/javascript.png";
import img4 from "../../../public/image/react.png";
import img5 from "../../../public/image/next.png";
import img6 from "../../../public/image/python.webp";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      img: img1,
      alt: "HTML",
      title: "HTML",
      description: "Learn the basics of structuring web content with HTML.",
      link: "/Html",  
    },
    {
      img: img2,
      alt: "CSS",
      title: "CSS",
      description: "Explore how to style and design web pages using CSS.",
      link: "/Css",  
    },
    {
      img: img3,
      alt: "JavaScript",
      title: "JavaScript",
      description: "Master JavaScript for dynamic and interactive websites.",
      link: "/Javascript",  
    },
    {
      img: img4,
      alt: "React",
      title: "React",
      description: "Build powerful UIs and SPAs with the React library.",
      link: "/React",  
    },
    {
      img: img5,
      alt: "Next.js",
      title: "Next.js",
      description: "Learn Next.js for server-side rendering and fast websites.",
      link: "/Nextjs",  
    },
    {
      img: img6,
      alt: "Python",
      title: "Python",
      description: "Master Python for web development, data science, and more.",
      link: "/Python",  
    },
  ];

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card bg-blue-400 shadow-sm p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg"
          >
            <figure className="flex justify-center mb-4">
              <Image
                src={blog.img}
                alt={blog.alt}
                width={200}
                height={200}
                className="object-cover rounded-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-gradient-to-r from-pink-500 text-sm md:text-base font-bold font-body">
                {blog.title}
              </h2>
              <p className="text-gray-800 text-xs md:text-sm font-body">{blog.description}</p>
              <div className="card-actions justify-center mt-4">
                <Link href={blog.link}>
                  <button className="btn bg-gradient-to-r from-teal-900 to-blue-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-sm shadow-sm">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
