'use client'
import React from "react";
import Galeri from "@/components/Galeri";
import Carousel from "@/components/Carousel";
import Filter from "@/components/Filter";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";

const Page = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Sesuaikan waktu loading sesuai kebutuhan
  }, []);

  return (
    <div>
      {isLoading && <Preloader />}
      <Galeri />
      <Carousel />
      <Filter />
    </div>
  );
};

export default Page;
