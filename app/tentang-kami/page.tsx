'use client'
import React from 'react'
import AboutUs from '@/components/AboutUs'
import Markui from '@/components/Markui'
import Goal from '@/components/Goal'
import Official from '@/components/Official'
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
      <AboutUs />
      <Goal />
      <Markui />
      <Official />
    </div>
  );
}

export default Page
