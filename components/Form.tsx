'use client'
import React, { useState } from "react";

const Form = () => {

    const [kelasDipilih, setKelasDipilih] = useState("");
    const [kaedah, setKaedah] = useState("");
    const [tempoh, setTempoh] = useState("");

    const pilihanKelas = [
      "Belajar Asas",
      "Belajar Membaca Dengan Lancar",
      "Belajar Fardhu Ain",
    ];

    const pilihan = [
        "Kelas Online",
        "Kelas Offline"
      ];

      const pilihanbulan = [
        "Bulanan",
        "Pakej 6 Bulan",
        "Pakej Setahun"
      ];

      

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]  page1-bg py-5">
      <div className="flex flex-col gap-5 page1-content">
        <h1 className="sm:text-7xl text-4xl font-bold text-center">
          Jom Belajar Mengaji Sekarang
        </h1>
        <p className="sm:text-3xl text-xl font-medium text-center">
          Belajar Al-Quran secara persendirian di rumah atau secara online
          dengan guru pilihan pada masa yang anda tetapkan!
        </p>

        <form
          className="border border-black p-8 flex flex-col gap-2 justify-center  " style={{ backgroundColor: "#b2873728" }}>
          <div >
            {/* Nama & Email */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  Apakah nama penuh anda?
                </label>
                <input type="text" className="border p-2 bg-white" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  Isikan Email anda dibawah
                </label>
                <input type="email" className="border p-2 w-2/4 bg-white" />
              </div>
            </div>

            {/* Nombor & Alamat & Negara */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">
                  Nombor telefon untuk dihubungi?
                </label>
                <input type="tel" className="border p-2 w-1/4 bg-white" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">Alamat</label>
                <input type="text" className="border p-2 bg-white" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold mb-1">Negara</label>
                <input type="text" className="border p-2 w-2/4 bg-white" />
              </div>
            </div>

            {/* Kelas */}
            <div className="flex flex-col gap-4">
              <label className="text-lg font-semibold">
                Kelas yang manakah anda berminat?
              </label>
              <div className="flex flex-wrap gap-4">
                {pilihanKelas.map((kelas, index) => (
                  <div
                    key={index}
                    onClick={() => setKelasDipilih(kelas)}
                    className={`cursor-pointer border px-4 py-2 rounded-lg transition-all
                    ${
                      kelasDipilih === kelas
                        ? "bg-blue-500 text-white border-blue-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {kelas}
                  </div>
                ))}
              </div>

              {/* Hidden input for form submission */}
              <input type="hidden" name="kelas" value={kelasDipilih} />
            </div>

            {/* Pilihan belajar */}
            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-semibold">
                Ingin guru datang ke rumah atau belajar secara online?
              </label>
              <div className="flex gap-4">
                {pilihan.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setKaedah(item)}
                    className={`cursor-pointer border px-4 py-2 rounded-lg transition-all
                    ${
                      kaedah === item
                        ? "bg-blue-500 text-white border-blue-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Hidden input untuk submit */}
              <input type="hidden" name="kaedah_pembelajaran" value={kaedah} />
            </div>

            {/* Tempoh kelas */}
            <div className="flex flex-col gap-4 mt-6">
              <label className="text-lg font-semibold">
                Pilih tempoh langganan kelas:
              </label>
              <div className="flex flex-wrap gap-4">
                {pilihanbulan.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setTempoh(item)}
                    className={`cursor-pointer border px-4 py-2 rounded-lg transition-all text-center
                    ${
                      tempoh === item
                        ? "bg-green-500 text-white border-green-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Hidden input untuk dihantar dalam form */}
              <input type="hidden" name="tempoh_pembayaran" value={tempoh} />
            </div>
          </div>
        </form>

        {/* Button */}
        <div className=" mx-auto lg:mx-0 ">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
