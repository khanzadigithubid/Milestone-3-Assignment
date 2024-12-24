import Navbar from "../components/Navbar/Navbar";
import Blog from "../components/Blog/Blog";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Blog/>
     <Footer/>
    </>
  );
}