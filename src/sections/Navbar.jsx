import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.1"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.3"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 6,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -6,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Navigation */}
      <nav
        ref={navRef}
        className="fixed z-40 flex flex-col justify-between 
         w-full h-full px-6 py-16 gap-y-10 
         uppercase bg-black text-white/80
         sm:w-2/3 sm:left-1/3 
         md:w-1/2 md:left-1/2 
         lg:w-1/3 lg:left-2/3 
         transition-all duration-500 ease-in-out 
         transform translate-x-full md:translate-x-0"
      >
        <div className="flex flex-col text-2xl gap-y-4 md:text-3xl lg:text-4xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="cursor-pointer hover:text-transparent hover:bg-clip-text 
           hover:bg-gradient-to-tl from-violet-700 via-violet-700 to-blue-800 
           transition-all duration-300 text-3xl md:text-4xl font-bold"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={1100}
                  onClick={() => toggleMenu()} // Close menu after clicking link
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-6 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-lg md:text-xl tracking-widest lowercase">
              shivamyadav10981@gmail.com
            </p>
          </div>
        </div>
      </nav>

      {/* Burger / Cross Button */}
      <div
        className={`fixed z-50 flex flex-col items-center justify-center gap-1 
        transition-all duration-300 bg-black rounded-full cursor-pointer 
        w-12 h-12 md:w-16 md:h-16 top-4 right-6 
        ${!showBurger && !isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
        onClick={toggleMenu}
      >
        <span
          ref={topLineRef}
          className="block w-7 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-7 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
