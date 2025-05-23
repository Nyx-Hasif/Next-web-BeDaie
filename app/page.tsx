"use client";
import { useRef,useState,useEffect } from "react";
// import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Interactive from "@/components/Interactive";
import Daie from "@/components/Daie";
import Content from "@/components/Content";
import Faqs from "@/components/Faqs";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
// import Pengajian from "@/components/Pengajian";
// import Buku from "@/components/Buku";
// import AboutUs from "@/components/AboutUs";
// import Markui from "@/components/Markui";
// import Official from "@/components/Official";
// import Goal from "@/components/Goal";
// import Galeri from "@/components/Galeri";
// import Carousel from "@/components/Carousel";
// import Filter from "@/components/Filter";
// import Contact from "@/components/Contact";

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Sesuaikan waktu loading sesuai kebutuhan
  }, []);

  //when open page initial isLoading true show preloader. during that time useEffect will count 1second...after 1 second setTimeout hide preloader when setIsLoading is false

  return (
    <div>
      {/* <Navbar /> */}
      {/* return true when isLoading true...return nothing when isLoading false */}
      {isLoading && <Preloader />}
      <Hero onBookingClick={handleScrollToForm} />
      <Ecosystem />
      <Interactive />
      <Daie />
      <Content />
      <Faqs />
      <div ref={formRef}>
        <Form />
      </div>
      <Footer />
      {/* Komponen lain yang anda komen */}
    </div>
  );
}
