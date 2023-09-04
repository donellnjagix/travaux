'use client';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/public/images/logo.jpeg";
import Link from "./Link";
import { SelectedPage } from "@/app/types/types";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  const router = useRouter();

  const navBackground = isTopOfPage ? "" : "drop-shadow";
  return (
    <nav>
      <div className={`${navBackground} bg-accent-white fixed top-0 z-30 w-full py-4`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* left */}
          <a href="#home">
          <Image src={Logo} alt="logo" height="70" width="70" className="object-cover scale-125" />
          </a>
          {/* right */}
          {isAboveMediaScreens ? (
                <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                   <Link
                    page="Team"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                    <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer" onClick={() => router.push("/properties")}>Properties</p>
                </div>
          ) : (
            <button 
            className="rounded-full bg-accent-orange p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
                <Bars3Icon className="h-6 w-6 text-accent-white"/>
            </button>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediaScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-alice-blue drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="gray-50 w-6 h-6"/>
                </button>
            </div>
            {/* MENU ITEMS */}
            <div className={`flex flex-col gap-10 ml-[33%] text-2xl`}>
            <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                   <Link
                    page="Team"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                     <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer" onClick={() => router.push("/properties")}>Properties</p>
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
