'use client'
import React, { useEffect, useState } from 'react'
import Buku from '@/components/Buku'
import Preloader from "@/components/Preloader";


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
      <Buku />
    </div>
  );
}

export default Page
