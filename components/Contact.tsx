import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  return (
    <div className="relative w-full min-h-[100vh] pt-20 ">
      {/* Background image */}
      <Image
        src={assets.office_bg}
        alt="office background"
        fill
        className="object-cover object-center z-0"
      />
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Kandungan */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-20 text-white">
        {/* Tajuk */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Hubungi Kami
        </h1>

        {/* Peta */}
        <div className="w-full max-w-3xl aspect-video border-4 border-black shadow-lg mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8978060392035!2d102.28417601193352!3d6.022771700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6bb2ec2985dc3%3A0x5a538a3b6e0848cb!2sBeDaie!5e0!3m2!1sen!2smy!4v1748014620985!5m2!1sen!2smy"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Maklumat pejabat */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 bg-white text-black p-6 rounded-lg shadow-lg">
          {/* Alamat */}
          <div className="text-center md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Pejabat</h2>
            <p className="md:text-lg text-md leading-relaxed">
              Lot 2853, Tingkat 2 Kampung Peringat,
              <br />
              Jalan Pasir Puteh, 16090
              <br />
              Kota Bharu, Kelantan
            </p>
          </div>
          {/* No telefon */}
          <div className="text-center md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">No Tel</h2>
            <p className="md:text-lg text-md">013-6612966</p>
          </div>
          {/* Waktu pejabat */}
          <div className="text-center md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Waktu Pejabat</h2>
            <p className="md:text-lg text-md">
              Sabtu - Khamis
              <br />
              9:00 Pagi - 5:30 Petang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
