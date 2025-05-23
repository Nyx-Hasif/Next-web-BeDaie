import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Official = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh] page1-bg py-5'>
        <div className='flex flex-col page1-content gap-5 text-center '>
            <div className='flex lg:flex-row flex-col gap-5 '>
                <Image draggable={false} src={assets.rasmi} alt='official' width={0} height={0} className="xl:max-w-[700px] border-5 border-black rounded-3xl" />
                <div className='flex flex-col  gap-5'>

                

                  <div className=' flex xl:flex-row flex-col  gap-5'>
                    <div className='flex flex-col gap-2 items-center border-5 border-black lg:p-12 p-8 rounded-2xl m 'style={{ backgroundColor: '#f2dfd755' }}>
                      <h1 className='sm:text-7xl text-5xl font-bold'>25</h1>
                      <p className='sm:text-5xl text-3xl font-medium text-red-600'>Buah Negara</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center border-5 border-black lg:p-12 p-8 rounded-2xl  'style={{ backgroundColor: '#f2dfd755' }}>
                      <h1 className='sm:text-7xl text-5xl font-bold'>2021</h1>
                      <p className='sm:text-5xl text-3xl font-medium text-red-600'>Secara Rasmi Di Tubuhkan</p>
                    </div>
                  </div>

                  <div className=' flex xl:flex-row flex-col  gap-5'>
                    <div className='flex flex-col flex-1  gap-2 items-center border-5 border-black lg:p-12 p-8 rounded-2xl  'style={{ backgroundColor: '#f2dfd755' }}>
                      <h1 className='sm:text-7xl text-5xl font-bold'>2000</h1>
                      <p className='sm:text-5xl text-3xl font-medium text-red-600'>Tenaga Pengajar</p>
                    </div>
                  </div>
                  

                </div>


            </div>

            <div className=' flex lg:flex-row flex-col gap-5 '>
                    <div className='flex flex-col gap-2 items-center border-5 border-black lg:p-12 p-8 xl:min-w-[700px] rounded-2xl 'style={{ backgroundColor: '#f2dfd755' }}>
                      <h1 className='sm:text-7xl text-5xl font-bold'>70,000</h1>
                      <p className='sm:text-5xl text-3xl font-medium text-red-600'>Lebih Pelajar Berdaftar</p>
                    </div>
                    <div className='flex flex-col flex-1 gap-2 items-center border-5 border-black lg:p-12 p-8 rounded-2xl  'style={{ backgroundColor: '#f2dfd755' }}>
                      <h1 className=' sm:text-7xl text-5xl font-bold'>3000</h1>
                      <p className='sm:text-5xl text-3xl font-medium text-red-600'>Mualaf Baru</p>
                    </div>
             </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Official
