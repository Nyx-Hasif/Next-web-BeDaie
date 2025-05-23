import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Goal = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh]]'>
      {/* Visi Section */}
        <div className='flex flex-col md:flex-row w-full'>
        {/* Image Box - letak dahulu di mobile, kedua di desktop */}
        <div className='w-full md:w-1/2  order-1 md:order-2' >
            <Image draggable={false} src={assets.visi_bg} alt='goal' width={0} height={0} className="w-full h-full object-cover" />
        </div>

        {/* Text Box - kedua di mobile, pertama di desktop=================================FOKUS HERE */}
        <div className="relative w-full md:w-1/2 p-6 md:p-10  order-2 md:order-1 overflow-hidden">
        {/* Background image layer (lutsinar) */}
        <div className="absolute inset-0 bg-[url(/vision_bg.png)] bg-cover bg-center bg-no-repeat opacity-10 z-0"></div>

        {/* Content layer (kekal jelas) */}
        <div className="relative z-10">
            <div className='flex items-center gap-4 mb-4'>
            <Image draggable={false} src={assets.icon_visi} alt='goal' width={100} height={100} />
            <h1 className='text-3xl md:text-5xl font-bold'>VISI</h1>
            </div>
            <h2 className='text-2xl md:text-4xl font-medium mb-4'>Legasi Ummah Berakhlak Al-Quran</h2>
            <p className='text-lg md:text-2xl font-light'>
            Wahai Tuhan Kami! Utuslah kepada mereka seorang Rasul dari kalangan mereka sendiri, yang akan membacakan kepada mereka ayat-ayatMu (firmanMu) dan mengajarkan mereka isi kandungan Kitab (Al-Quran) serta Hikmat kebijaksanaan dan membersihkan (hati dan jiwa) mereka (dari syirik dan maksiat). Sesungguhnya Engkaulah yang Maha Kuasa, lagi Maha Bijaksana. (Surah Al-Baqarah, 2:129)
            </p>
        </div>
        {/* ============================================================================================== */}
     </div>

        </div>

      {/* Misi Section */}
      <div className='flex flex-col md:flex-row w-full'>
        {/* Image Box */}
        <div className='w-full md:w-1/2 ' >
          <Image draggable={false} src={assets.misi_bg} alt='goal' width={0} height={0} className="w-full h-full object-cover" />
        </div>
       
        {/* Text Box - kedua di mobile, pertama di desktop=================================FOKUS HERE */}
        <div className="relative w-full md:w-1/2 p-6 md:p-10  order-2 md:order-1 overflow-hidden">
        {/* Background image layer (lutsinar) */}
        <div className="absolute inset-0 bg-[url(/mission_bg.png)] bg-cover bg-center bg-no-repeat opacity-10 z-0"></div>

        {/* Content layer (kekal jelas) */}
        <div className="relative z-10">
            <div className='flex items-center gap-4 mb-4'>
            <Image draggable={false} src={assets.icon_visi} alt='goal' width={100} height={100} />
            <h1 className='text-3xl md:text-5xl font-bold'>VISI</h1>
            </div>
            <h2 className='text-2xl md:text-4xl font-medium mb-4'>Interaksi dengan Al-Quran secara Total melalui Baca, Faham & Amal
            </h2>
            <p className='text-lg md:text-2xl font-light'>
            Dialah yang telah mengutuskan dalam kalangan orang-orang (Arab) yang Ummiyyin, seorang Rasul (Nabi Muhammad s.a.w) dari bangsa mereka sendiri, yang membacakan kepada mereka ayat-ayat Allah (yang membuktikan keesaan Allah dan kekuasaanNya), dan membersihkan mereka (dari iktiqad yang sesat), serta mengajarkan mereka Kitab Allah (Al-Quran) dan Hikmah (sunnah Nabi) dan sesungguhnya mereka sebelum (kedatangan Nabi Muhammad) itu adalah dalam kesesatan yang nyata. (Surah al-Jumuah, 62:2)
            </p>
        </div>
        {/* ============================================================================================== */}
     </div>
      </div>
    </div>
  )
}

export default Goal
