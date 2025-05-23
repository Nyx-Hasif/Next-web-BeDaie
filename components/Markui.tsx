import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Marquee from "react-fast-marquee";

const Markui = () => {
  return (
    <div className='max-h-[max-content] py-5 '>
        <div className='p-5'>
            
        
            <Marquee pauseOnHover={false} speed={100} gradient={true}   >
                <div className='mx-6'>
                <Image  draggable={false} src={assets.al_hijrah} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto" />
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.sinar} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.ump} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.dw} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.omf} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.astro} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.kyouth} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.rockstar} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
                <div className='mx-6'>
                <Image  draggable={false} src={assets.quran_hour} alt='marquee' width={0} height={0} className="w-24 sm:w-40 h-auto"/>
                </div>
            
            </Marquee>
        </div>
    </div>
  )
}

export default Markui
