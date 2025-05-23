"use client";
import { assets } from "@/assets/assets";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenuFold4Fill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { FaBookReader, FaBookOpen } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) =>
    pathname === href ? "bg-black/20 rounded-[10px]" : "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex flex-1 border border-black p-5 lg:justify-around items-center">
        <Link href="/" className="lg:flex hidden shrink-0">
          <Image
            draggable={false}
            src={assets.logo}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="lg:flex hidden gap-4">
          <Link
            href="/"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/")}`}
          >
            <IoIosHome className="text-2xl" /> Utama
          </Link>
          <Link
            href="/pengajian"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/pengajian")}`}
          >
            <FaBookReader className="text-2xl" /> Pengajian
          </Link>
          <Link
            href="/buku"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/buku")}`}
          >
            <FaBookOpen className="text-2xl" /> Buku
          </Link>
          <Link
            href="/tentang-kami"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/tentang-kami")}`}
          >
            <HiUserGroup className="text-2xl" /> Tentang Kami
          </Link>
          <Link
            href="/galeri"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/galeri")}`}
          >
            <GrGallery className="text-2xl" /> Galeri
          </Link>
          <Link
            href="/hubungi-kami"
            className={`flex gap-1  p-1 items-center transition-all duration-200 hover:bg-black/20 hover:rounded-[10px] ${isActive("/hubungi-kami")}`}
          >
            <IoCall className="text-2xl" /> Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={openMenu}
          className="lg:hidden  cursor-pointer text-3xl"
        >
          {isOpen ? <RiMenuFold4Fill /> : <RxHamburgerMenu />}
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden mx-auto cursor-pointer">
          <Image
            draggable={false}
            src={assets.logo}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Mobile Menu Links */}
      <div
        ref={menuRef}
        className={`bg-blue-50 flex flex-col text-center border border-black-50 transition-all duration-300 overflow-hidden lg:hidden ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <Link href="/" onClick={handleMenuClick} className="border border-black py-2">
          Utama
        </Link>
        <Link href="/pengajian" onClick={handleMenuClick} className="border border-black py-2">
          Pengajian
        </Link>
        <Link href="/buku" onClick={handleMenuClick} className="border border-black py-2">
          Buku
        </Link>
        <Link href="/tentang-kami" onClick={handleMenuClick} className="border border-black py-2">
          Tentang Kami
        </Link>
        <Link href="/galeri" onClick={handleMenuClick} className="border border-black py-2">
          Galeri
        </Link>
        <Link href="/hubungi-kami" onClick={handleMenuClick} className="border border-black py-2">
          Hubungi Kami
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
