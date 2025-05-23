import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";


const Faqs = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg pt-5'>
      <div className='flex flex-col gap-5 page1-content'>
        <h1 className='sm:text-7xl text-4xl font-bold text-center'>FAQs</h1>
        <p className='sm:text-5xl text-2xl font-medium text-center'>Segala yang anda perlu tahu sebelum bermula</p>


        <div className='border border-black' style={{ backgroundColor: '#38b6ff28' }}>
            <div className='border border-black p-4 flex flex-row gap-10 rounded-3xl items-center m-8 bg-white'>
               <FontAwesomeIcon icon={faCirclePlus} size='2xl' className='min-w-10 h-10 cursor-pointer' />
                <h2 className='md:text-4xl text-xl'>Bagaimanakah mod pembelajaran secara online dan offline?</h2>
            </div>  
            <div className='border border-black p-4 flex flex-row gap-10 rounded-3xl items-center m-8 bg-white' >
            <FontAwesomeIcon icon={faCirclePlus} size='2xl' className='min-w-10 h-10 cursor-pointer' />
                <h2 className='md:text-4xl text-xl'>Berapa lamakah masa yang diperlukan untuk pandai mengaji?</h2>
            </div>  
            <div className='border border-black p-4 flex flex-row gap-10 rounded-3xl items-center m-8 bg-white '>
            <FontAwesomeIcon icon={faCirclePlus} size='2xl' className='min-w-10 h-10 cursor-pointer' />
                <h2 className='md:text-4xl text-xl'>Adakah terdapat had umur untuk mendaftar mengaji?</h2>
            </div>  
            <div className='border border-black p-4 flex flex-row gap-10 rounded-3xl items-center m-8 bg-white'>
            <FontAwesomeIcon icon={faCirclePlus} size='2xl' className='min-w-10 h-10 cursor-pointer' />
                <h2 className='md:text-4xl text-xl'>Apakah yang boleh dipelajari di BeDaie.com?</h2>
            </div>  
            <div className='border border-black p-4 flex flex-row gap-10 rounded-3xl items-center m-8 bg-white'>
            <FontAwesomeIcon icon={faCirclePlus} size='2xl' className='min-w-10 h-10 cursor-pointer' />
                <h2 className='md:text-4xl text-xl'>Bolehkah saya mengajak pasangan atau anak untuk belajar bersama</h2>
            </div>  
        </div>


      </div>
    </div>
  );
}

export default Faqs
