'use client'
import React from 'react'
import Pengajian from '@/components/Pengajian'
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
      <Pengajian />
    </div>
  );
}

export default Page
