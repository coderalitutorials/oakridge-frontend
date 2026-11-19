



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;

//           setIsScrolled((prev) => {
//             if (prev === shouldBeScrolled) return prev;
//             return shouldBeScrolled;
//           });

//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
//       isActive
//         ? "text-[#F36F21]"
//         : "text-white hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
//         : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited Logo"
//               className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2.5 text-slate-200 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/15 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap tracking-[0.1em]">
//                 12 Old Bond Street London England W1S4PW
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#F36F21]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>London, UK</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
//}




// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;
//           setIsScrolled((prev) =>
//             prev === shouldBeScrolled ? prev : shouldBeScrolled
//           );
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.11em] transition-colors duration-200 relative py-1 ${
//       isActive ? "text-[#F36F21]" : "text-white hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
//         : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-full">
//         <div className="flex items-center justify-between h-full gap-5">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//             aria-label="PrimeShield Kensington Home"
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Kensington Pest Control Logo"
//               className="h-16 md:h-20 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6 flex-1 min-w-0">
//             <div className="flex items-center gap-4 lg:gap-6 shrink-0">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2 text-slate-200 font-bold text-[9.5px] lg:text-[10.5px] xl:text-[11px] uppercase tracking-[0.025em] pl-3 lg:pl-5 border-l border-white/15 shrink-0 whitespace-nowrap">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>

//               <span>{address}</span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
//             aria-label="Toggle PrimeShield Kensington menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#F36F21]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/10 mt-3 pt-4 flex items-start gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>{address}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "PrimeShield Services Bromley";
//   const phone = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const serviceArea = "Bromley";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const desktopNavClass = ({ isActive }) =>
//     `relative px-3 py-2 text-[13px] lg:text-[14px] font-bold tracking-wide transition-colors duration-200 ${
//       isActive
//         ? "text-[#F47721]"
//         : "text-[#292929] hover:text-[#F47721]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `flex items-center justify-between px-4 py-4 text-[15px] font-bold border-b border-[#292929]/10 transition-colors ${
//       isActive
//         ? "text-[#F47721] bg-[#F47721]/5"
//         : "text-[#292929] hover:text-[#F47721]"
//     }`;

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
//           : ""
//       }`}
//     >
//       {/* =====================================================
//           TOP INFORMATION BAR
//       ====================================================== */}
//       <div className="hidden md:block bg-[#292929] text-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-10">
//           <div className="h-9 flex items-center justify-between">

//             <div className="flex items-center gap-6 text-[11px] font-semibold tracking-wide">
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
//                 <span>Serving {serviceArea}</span>
//               </div>

//               <div className="h-3.5 w-px bg-white/20" />

//               <span className="text-white/70">
//                 Professional Pest Control Services
//               </span>
//             </div>

//             <a
//               href={`tel:${phone.replace(/\s/g, "")}`}
//               className="flex items-center gap-2 text-[11px] font-bold tracking-wide hover:text-[#F47721] transition-colors"
//             >
//               <Phone className="w-3.5 h-3.5 text-[#F47721]" />
//               <span>{phone}</span>
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           MAIN NAVIGATION
//       ====================================================== */}
//       <nav
//         className={`bg-white transition-all duration-300 ${
//           isScrolled
//             ? "border-b border-[#292929]/10"
//             : "border-b border-[#292929]/10"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
//           <div className="h-[82px] md:h-[88px] flex items-center justify-between gap-6">

//             {/* LOGO */}
//             <Link
//               to="/"
//               onClick={() => setOpen(false)}
//               className="flex items-center shrink-0 group"
//               aria-label={`${companyName} Home`}
//             >
//               <img
//                 src="/images/primelogo.webp"
//                 alt={`${companyName} Logo`}
//                 className="h-[58px] md:h-[68px] lg:h-[74px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
//                 loading="eager"
//                 decoding="async"
//               />
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden md:flex items-center ml-auto gap-1">

//               <NavLink to="/" className={desktopNavClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/services" className={desktopNavClass}>
//                 Services
//               </NavLink>

//               <NavLink to="/about-us" className={desktopNavClass}>
//                 About Us
//               </NavLink>

//               <NavLink to="/contact-us" className={desktopNavClass}>
//                 Contact
//               </NavLink>

//             </div>

//             {/* DESKTOP PHONE CTA */}
//             <div className="hidden md:flex items-center ml-5 pl-5 border-l border-[#292929]/15">
//               <a
//                 href={`tel:${phone.replace(/\s/g, "")}`}
//                 className="group flex items-center gap-3 bg-[#F47721] hover:bg-[#292929] text-white px-5 py-3.5 transition-all duration-300"
//               >
//                 <span className="flex items-center justify-center w-8 h-8 bg-white/15">
//                   <Phone className="w-4 h-4" />
//                 </span>

//                 <span className="flex flex-col leading-none">
//                   <span className="text-[9px] uppercase tracking-[0.16em] font-semibold opacity-80 mb-1">
//                     Call PrimeShield
//                   </span>

//                   <span className="text-[14px] font-extrabold tracking-wide">
//                     {phone}
//                   </span>
//                 </span>

//                 <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               type="button"
//               onClick={() => setOpen((prev) => !prev)}
//               className="md:hidden w-12 h-12 flex items-center justify-center bg-[#292929] text-white transition-colors duration-200 hover:bg-[#F47721]"
//               aria-label={
//                 open
//                   ? "Close PrimeShield navigation menu"
//                   : "Open PrimeShield navigation menu"
//               }
//               aria-expanded={open}
//             >
//               {open ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* =====================================================
//           MOBILE NAVIGATION
//       ====================================================== */}
//       <div
//         className={`md:hidden absolute left-0 top-full w-full bg-white border-b border-[#292929]/15 shadow-2xl transition-all duration-300 ${
//           open
//             ? "opacity-100 translate-y-0 visible"
//             : "opacity-0 -translate-y-2 invisible pointer-events-none"
//         }`}
//       >
//         <div className="px-5 pt-5 pb-6">

//           {/* MOBILE BRAND INFO */}
//           <div className="bg-[#292929] text-white p-5 mb-4">
//             <div className="flex items-start gap-3">
//               <div className="w-9 h-9 shrink-0 bg-[#F47721] flex items-center justify-center">
//                 <MapPin className="w-4 h-4" />
//               </div>

//               <div>
//                 <p className="text-[10px] uppercase tracking-[0.16em] text-[#F47721] font-bold mb-1">
//                   Service Area
//                 </p>

//                 <p className="text-sm font-bold">
//                   {serviceArea}
//                 </p>

//                 <p className="text-[11px] text-white/65 mt-1 leading-relaxed">
//                   {address}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MOBILE LINKS */}
//           <div className="border border-[#292929]/10">

//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Home</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/services"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Services</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/about-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>About Us</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/contact-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Contact Us</span>
//               <ArrowUpRight className="w-4 h-4" />
//             </NavLink>

//           </div>

//           {/* MOBILE CALL BUTTON */}
//           <a
//             href={`tel:${phone.replace(/\s/g, "")}`}
//             className="mt-4 flex items-center justify-between bg-[#F47721] text-white px-5 py-4 hover:bg-[#292929] transition-colors duration-300"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 bg-white/15 flex items-center justify-center">
//                 <Phone className="w-4 h-4" />
//               </div>

//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.15em] font-bold opacity-80">
//                   Call Now
//                 </p>

//                 <p className="text-sm font-extrabold tracking-wide">
//                   {phone}
//                 </p>
//               </div>
//             </div>

//             <ArrowUpRight className="w-5 h-5" />
//           </a>

//         </div>
//       </div>
//     </header>
//   );
// }


















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "PrimeShield Services Carshalton";
//   const phone = "07438 756809";
//   const address = "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton & Nearby Areas";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const phoneLink = `tel:${phone.replace(/\s/g, "")}`;

//   const navClass = ({ isActive }) =>
//     `group relative px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
//       isActive
//         ? "text-[#EE6C1A]"
//         : "text-white/75 hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `flex items-center justify-between px-5 py-4 text-sm font-bold uppercase tracking-[0.1em] border-b border-white/10 transition-all duration-300 ${
//       isActive
//         ? "bg-[#EE6C1A] text-white"
//         : "text-white/80 hover:bg-[#3F3F3F] hover:text-white"
//     }`;

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full">

//       {/* TOP SERVICE STRIP */}
//       <div className="hidden lg:block bg-[#151414] border-b border-white/10">
//         <div className="max-w-[1440px] mx-auto px-8 xl:px-12">
//           <div className="h-10 flex items-center justify-between">

//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-bold text-white/75">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C1A]" />
//                 Serving {serviceArea}
//               </span>

//               <span className="w-px h-4 bg-white/15" />

//               <span className="text-[10px] uppercase tracking-[0.15em] text-white/45">
//                 Professional Pest Control
//               </span>
//             </div>

//             <a
//               href={phoneLink}
//               className="flex items-center gap-2 text-[11px] font-bold text-white hover:text-[#EE6C1A] transition-colors"
//             >
//               <Phone className="w-3.5 h-3.5 text-[#EE6C1A]" />
//               {phone}
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVIGATION */}
//       <nav
//         className={`transition-all duration-300 ${
//           isScrolled
//             ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
//             : "bg-black border-b border-white/10"
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-5 sm:px-7 xl:px-12">

//           <div className="h-[78px] md:h-[86px] flex items-center justify-between gap-8">

//             {/* LOGO */}
//             <Link
//               to="/"
//               onClick={() => setOpen(false)}
//               className="relative flex items-center shrink-0 group"
//               aria-label={`${companyName} Home`}
//             >
//               <img
//                 src="/images/primelogo.webp"
//                 alt={`${companyName} Logo`}
//                 className="h-[52px] sm:h-[58px] md:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
//                 loading="eager"
//                 decoding="async"
//               />
//             </Link>

//             {/* DESKTOP NAVIGATION */}
//             <div className="hidden md:flex items-center ml-auto">

//               <NavLink to="/" className={navClass}>
//                 Home
//                 <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#EE6C1A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 Services
//                 <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#EE6C1A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 About Us
//                 <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#EE6C1A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 Contact
//                 <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#EE6C1A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//               </NavLink>

//             </div>

//             {/* DESKTOP CALL ACTION */}
//             <div className="hidden md:flex items-center ml-5">

//               <a
//                 href={phoneLink}
//                 className="group relative flex items-center gap-3 bg-[#EE6C1A] hover:bg-white text-black px-5 py-3.5 transition-all duration-300"
//               >
//                 <div className="flex items-center justify-center w-9 h-9 bg-black/15 group-hover:bg-black/10">
//                   <Phone className="w-4 h-4" />
//                 </div>

//                 <div className="flex flex-col leading-none">
//                   <span className="text-[8px] uppercase tracking-[0.2em] font-extrabold mb-1 opacity-65">
//                     Call Our Team
//                   </span>

//                   <span className="text-[14px] font-black tracking-wide">
//                     {phone}
//                   </span>
//                 </div>

//                 <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>

//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               type="button"
//               onClick={() => setOpen((prev) => !prev)}
//               className={`md:hidden w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
//                 open
//                   ? "bg-[#EE6C1A] border-[#EE6C1A] text-black"
//                   : "bg-[#3F3F3F] border-white/10 text-white hover:bg-[#EE6C1A] hover:text-black"
//               }`}
//               aria-label={
//                 open
//                   ? "Close PrimeShield navigation menu"
//                   : "Open PrimeShield navigation menu"
//               }
//               aria-expanded={open}
//             >
//               {open ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* MOBILE NAVIGATION */}
//       <div
//         className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ${
//           open
//             ? "opacity-100 translate-y-0 visible"
//             : "opacity-0 -translate-y-3 invisible pointer-events-none"
//         }`}
//       >
//         <div className="px-5 pt-5 pb-6">

//           {/* MOBILE SERVICE PANEL */}
//           <div className="relative overflow-hidden bg-[#3F3F3F] p-5 mb-4 border border-white/10">

//             <div className="absolute top-0 right-0 w-24 h-24 bg-[#EE6C1A]/10 rounded-full blur-2xl" />

//             <div className="relative flex items-start gap-4">

//               <div className="w-10 h-10 shrink-0 bg-[#EE6C1A] text-black flex items-center justify-center">
//                 <MapPin className="w-4 h-4" />
//               </div>

//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.2em] text-[#EE6C1A] font-black mb-1.5">
//                   Local Pest Control
//                 </p>

//                 <p className="text-base font-extrabold text-white">
//                   {serviceArea}
//                 </p>

//                 <p className="text-[11px] text-white/55 mt-1.5 leading-relaxed">
//                   Professional pest control services for homes and businesses.
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* MOBILE LINKS */}
//           <div className="border border-white/10">

//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Home</span>
//               <ArrowRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/services"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Services</span>
//               <ArrowRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/about-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>About Us</span>
//               <ArrowRight className="w-4 h-4" />
//             </NavLink>

//             <NavLink
//               to="/contact-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <span>Contact Us</span>
//               <ArrowRight className="w-4 h-4" />
//             </NavLink>

//           </div>

//           {/* MOBILE CALL CTA */}
//           <a
//             href={phoneLink}
//             className="mt-4 flex items-center justify-between bg-[#EE6C1A] text-black px-5 py-4 hover:bg-white transition-colors duration-300"
//           >
//             <div className="flex items-center gap-3">

//               <div className="w-10 h-10 bg-black/15 flex items-center justify-center">
//                 <Phone className="w-4 h-4" />
//               </div>

//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.18em] font-black opacity-65">
//                   Speak To PrimeShield
//                 </p>

//                 <p className="text-sm font-black tracking-wide">
//                   {phone}
//                 </p>
//               </div>

//             </div>

//             <ArrowRight className="w-5 h-5" />
//           </a>

//         </div>
//       </div>

//     </header>
//   );
// }









// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "PrimeShield Services Sidcup";
//   const phone = "07356 295780";
//   const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
//   const serviceArea = "Sidcup & Nearby Areas";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const phoneLink = `tel:${phone.replace(/\s/g, "")}`;

//   const navClass = ({ isActive }) =>
//     `group relative flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] transition-all duration-300 ${
//       isActive
//         ? "bg-[#EE6C1A] text-black"
//         : "border border-white/10 bg-[#151414] text-white/65 hover:border-[#EE6C1A] hover:bg-[#EE6C1A] hover:text-black"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `group flex items-center justify-between border-b border-white/[0.07] px-5 py-4 text-xs font-black uppercase tracking-[0.1em] transition-all duration-300 ${
//       isActive
//         ? "bg-[#EE6C1A] text-black"
//         : "bg-[#151414] text-white/70 hover:bg-[#EE6C1A] hover:text-black"
//     }`;

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full">
//       {/* =====================================================
//           TOP LOCAL STRIP
//       ===================================================== */}
//       <div className="hidden border-b border-white/[0.07] bg-[#151414] lg:block">
//         <div className="mx-auto max-w-[1440px] px-8 xl:px-12">
//           <div className="flex h-9 items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2">
//                 <span className="relative flex h-1.5 w-1.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EE6C1A]/50" />
//                   <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
//                 </span>

//                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/55">
//                   Serving {serviceArea}
//                 </span>
//               </div>

//               <span className="h-3.5 w-px bg-white/10" />

//               <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/25">
//                 Professional Pest Control
//               </span>
//             </div>

//             <a
//               href={phoneLink}
//               className="group flex items-center gap-2 text-[10px] font-black tracking-[0.08em] text-white/55 transition-colors duration-300 hover:text-[#EE6C1A]"
//             >
//               <Phone
//                 className="h-3 w-3 text-[#EE6C1A]"
//                 strokeWidth={2.5}
//               />

//               {phone}

//               <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           MAIN NAVIGATION
//       ===================================================== */}
//       <nav
//         className={`transition-all duration-300 ${
//           isScrolled
//             ? "border-b border-white/10 bg-black/95 backdrop-blur-2xl"
//             : "border-b border-white/[0.08] bg-black"
//         }`}
//       >
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-7 xl:px-12">
//           <div className="flex h-[76px] items-center justify-between gap-5 md:h-[84px]">

//             {/* =================================================
//                 LOGO
//             ================================================= */}
//             <Link
//               to="/"
//               onClick={() => setOpen(false)}
//               className="group flex shrink-0 items-center"
//               aria-label={`${companyName} Home`}
//             >
//               <img
//                 src="/images/primelogo.webp"
//                 alt={`${companyName} Logo`}
//                 className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[56px] md:h-[62px]"
//                 loading="eager"
//                 decoding="async"
//               />
//             </Link>

//             {/* =================================================
//                 DESKTOP NAVIGATION
//             ================================================= */}
//             <div className="hidden items-center gap-2 md:flex">
//               <NavLink to="/" className={navClass}>
//                 <span>Home</span>
//                 <span className="h-1 w-1 rounded-full bg-current opacity-50" />
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 <span>Services</span>
//                 <span className="h-1 w-1 rounded-full bg-current opacity-50" />
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 <span>About Us</span>
//                 <span className="h-1 w-1 rounded-full bg-current opacity-50" />
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 <span>Contact Us</span>
//                 <span className="h-1 w-1 rounded-full bg-current opacity-50" />
//               </NavLink>
//             </div>

//             {/* =================================================
//                 DESKTOP CALL BUTTON
//             ================================================= */}
//             <div className="hidden md:block">
//               <a
//                 href={phoneLink}
//                 className="group relative flex items-center gap-3 border border-[#EE6C1A] bg-[#EE6C1A] px-4 py-2.5 text-black transition-all duration-300 hover:bg-[#151414] hover:text-white"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center bg-black/15 transition-colors duration-300 group-hover:bg-[#EE6C1A] group-hover:text-black">
//                   <Phone
//                     className="h-3.5 w-3.5"
//                     strokeWidth={2.5}
//                   />
//                 </span>

//                 <span className="flex flex-col leading-none">
//                   <span className="mb-1 text-[7px] font-black uppercase tracking-[0.2em] opacity-55">
//                     Call Our Team
//                   </span>

//                   <span className="text-[12px] font-black tracking-wide">
//                     {phone}
//                   </span>
//                 </span>

//                 <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>
//             </div>

//             {/* =================================================
//                 MOBILE MENU BUTTON
//             ================================================= */}
//             <button
//               type="button"
//               onClick={() => setOpen((prev) => !prev)}
//               className={`flex h-11 w-11 items-center justify-center border transition-all duration-300 md:hidden ${
//                 open
//                   ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                   : "border-white/10 bg-[#151414] text-white hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               }`}
//               aria-label={
//                 open
//                   ? "Close PrimeShield navigation menu"
//                   : "Open PrimeShield navigation menu"
//               }
//               aria-expanded={open}
//             >
//               {open ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* =====================================================
//           MOBILE NAVIGATION
//       ===================================================== */}
//       <div
//         className={`absolute left-0 top-full w-full border-b border-white/10 bg-black transition-all duration-300 md:hidden ${
//           open
//             ? "visible translate-y-0 opacity-100"
//             : "invisible -translate-y-3 pointer-events-none opacity-0"
//         }`}
//       >
//         <div className="px-5 pb-6 pt-5">

//           {/* MOBILE LOCATION */}
//           <div className="relative mb-4 overflow-hidden border border-white/10 bg-[#151414] p-5">
//             <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#EE6C1A]/10 blur-3xl" />

//             <div className="relative flex items-start gap-4">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                 <MapPin className="h-4 w-4" />
//               </div>

//               <div>
//                 <p className="mb-1.5 text-[8px] font-black uppercase tracking-[0.22em] text-[#EE6C1A]">
//                   Local Pest Control
//                 </p>

//                 <p className="text-[15px] font-black tracking-[-0.02em] text-white">
//                   {serviceArea}
//                 </p>

//                 <p className="mt-2 text-[10px] leading-5 text-white/35">
//                   Professional pest control for homes and businesses
//                   across Sidcup and nearby areas.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MOBILE LINKS */}
//           <div className="space-y-1">
//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-[8px] font-black text-[#EE6C1A]">
//                   01
//                 </span>

//                 <span>Home</span>
//               </div>

//               <ArrowUpRight className="h-4 w-4" />
//             </NavLink>

//             <NavLink
//               to="/services"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-[8px] font-black text-[#EE6C1A]">
//                   02
//                 </span>

//                 <span>Services</span>
//               </div>

//               <ArrowUpRight className="h-4 w-4" />
//             </NavLink>

//             <NavLink
//               to="/about-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-[8px] font-black text-[#EE6C1A]">
//                   03
//                 </span>

//                 <span>About Us</span>
//               </div>

//               <ArrowUpRight className="h-4 w-4" />
//             </NavLink>

//             <NavLink
//               to="/contact-us"
//               onClick={() => setOpen(false)}
//               className={mobileNavClass}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-[8px] font-black text-[#EE6C1A]">
//                   04
//                 </span>

//                 <span>Contact Us</span>
//               </div>

//               <ArrowUpRight className="h-4 w-4" />
//             </NavLink>
//           </div>

//           {/* MOBILE CALL CTA */}
//           <a
//             href={phoneLink}
//             className="group mt-4 flex items-center justify-between border border-[#EE6C1A] bg-[#EE6C1A] px-5 py-4 text-black transition-all duration-300 hover:bg-[#151414] hover:text-white"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 items-center justify-center bg-black/15 transition-colors duration-300 group-hover:bg-[#EE6C1A] group-hover:text-black">
//                 <Phone className="h-4 w-4" />
//               </div>

//               <div>
//                 <p className="text-[8px] font-black uppercase tracking-[0.18em] opacity-60">
//                   Speak To PrimeShield
//                 </p>

//                 <p className="mt-1 text-sm font-black tracking-wide">
//                   {phone}
//                 </p>
//               </div>
//             </div>

//             <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </a>

//           {/* MOBILE ADDRESS */}
//           <div className="mt-4 flex items-start gap-3 border-t border-white/[0.07] pt-4">
//             <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EE6C1A]" />

//             <p className="text-[9px] leading-5 text-white/30">
//               {address}
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
























// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "PrimeShield Pimlico";
//   const phone = "+44 7405 203539";
//   const address =
//     "91 Cambridge St, Pimlico, London SW1V 4PY, United Kingdom";
//   const serviceArea = "Pimlico & Nearby Areas";

//   const phoneLink = `tel:${phone.replace(/[^\d+]/g, "")}`;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Services", path: "/services/" },
//     { label: "About Us", path: "/about-us/" },
//     { label: "Contact Us", path: "/contact-us/" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-7">
//       {/* =========================================================
//           DESKTOP / MAIN NAVBAR
//       ========================================================= */}
//       <nav
//         className={`mx-auto max-w-[1480px] overflow-hidden rounded-[22px] border transition-all duration-500 ${
//           isScrolled
//             ? "border-white/[0.12] bg-[#050505]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl"
//             : "border-white/[0.10] bg-[#050505]/90 backdrop-blur-xl"
//         }`}
//       >
//         <div className="relative">
//           {/* Subtle orange glow */}
//           <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#EE6C1A]/[0.08] blur-3xl" />

//           <div className="relative flex min-h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
//             {/* =====================================================
//                 LOGO + LOCAL LABEL
//             ===================================================== */}
//             <Link
//               to="/"
//               onClick={() => setOpen(false)}
//               className="group flex shrink-0 items-center gap-3"
//               aria-label={`${companyName} Home`}
//             >
//               <div className="relative flex items-center">
//                 <img
//                   src="/images/primelogo.webp"
//                   alt={`${companyName} Logo`}
//                   className="h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[52px] lg:h-[56px]"
//                   loading="eager"
//                   decoding="async"
//                 />
//               </div>

//               <div className="hidden border-l border-white/10 pl-3 sm:block">
//                 <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/30">
//                   Local Pest Control
//                 </p>

//                 <p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#E8E3DE]">
//                   Pimlico
//                 </p>
//               </div>
//             </Link>

//             {/* =====================================================
//                 DESKTOP NAV
//             ===================================================== */}
//             <div className="hidden items-center gap-1 lg:flex">
//               {navItems.map((item, index) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   end={item.path === "/"}
//                   className={({ isActive }) =>
//                     `group relative flex items-center gap-2 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] transition-all duration-300 ${
//                       isActive
//                         ? "text-white"
//                         : "text-white/45 hover:text-white"
//                     }`
//                   }
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span
//                         className={`h-1 w-1 rounded-full transition-all duration-300 ${
//                           isActive
//                             ? "bg-[#EE6C1A] shadow-[0_0_10px_rgba(238,108,26,0.8)]"
//                             : "bg-transparent group-hover:bg-white/30"
//                         }`}
//                       />

//                       <span>{item.label}</span>

//                       {isActive && (
//                         <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#EE6C1A]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* =====================================================
//                 DESKTOP CONTACT AREA
//             ===================================================== */}
//             <div className="hidden items-center gap-4 lg:flex">
//               <div className="hidden xl:flex items-center gap-2 border-r border-white/10 pr-5">
//                 <span className="flex h-2 w-2">
//                   <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#EE6C1A]/40" />
//                   <span className="relative h-2 w-2 rounded-full bg-[#EE6C1A]" />
//                 </span>

//                 <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
//                   Serving {serviceArea}
//                 </span>
//               </div>

//               <a
//                 href={phoneLink}
//                 className="group flex items-center gap-3 rounded-full border border-[#EE6C1A]/60 bg-[#EE6C1A] px-4 py-2.5 text-black transition-all duration-300 hover:bg-transparent hover:text-white"
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-colors duration-300 group-hover:bg-[#EE6C1A] group-hover:text-black">
//                   <Phone
//                     className="h-3.5 w-3.5"
//                     strokeWidth={2.5}
//                   />
//                 </span>

//                 <span className="flex flex-col leading-none">
//                   <span className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] opacity-55">
//                     Call Pimlico
//                   </span>

//                   <span className="text-[11px] font-black tracking-wide">
//                     {phone}
//                   </span>
//                 </span>

//                 <ArrowUpRight
//                   className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   strokeWidth={2.5}
//                 />
//               </a>
//             </div>

//             {/* =====================================================
//                 MOBILE MENU BUTTON
//             ===================================================== */}
//             <button
//               type="button"
//               onClick={() => setOpen((prev) => !prev)}
//               className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
//                 open
//                   ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                   : "border-white/10 bg-white/[0.04] text-white hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               }`}
//               aria-label={
//                 open
//                   ? "Close PrimeShield navigation menu"
//                   : "Open PrimeShield navigation menu"
//               }
//               aria-expanded={open}
//             >
//               {open ? (
//                 <X className="h-[18px] w-[18px]" />
//               ) : (
//                 <Menu className="h-[18px] w-[18px]" />
//               )}
//             </button>
//           </div>

//           {/* =====================================================
//               MOBILE MENU
//           ===================================================== */}
//           <div
//             className={`grid transition-all duration-500 lg:hidden ${
//               open
//                 ? "grid-rows-[1fr] opacity-100"
//                 : "grid-rows-[0fr] opacity-0"
//             }`}
//           >
//             <div className="overflow-hidden">
//               <div className="border-t border-white/[0.08] px-4 pb-5 pt-4 sm:px-6">
//                 {/* Local identity card */}
//                 <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#151414] p-5">
//                   <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EE6C1A]/10 blur-3xl" />

//                   <div className="relative flex items-start gap-4">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EE6C1A] text-black">
//                       <MapPin className="h-4 w-4" />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#EE6C1A]">
//                         PrimeShield Pimlico
//                       </p>

//                       <p className="mt-1.5 text-sm font-black tracking-tight text-white">
//                         {serviceArea}
//                       </p>

//                       <p className="mt-2 max-w-[320px] text-[10px] leading-5 text-white/35">
//                         Pest control support for homes, flats,
//                         landlords and local businesses in and around
//                         Pimlico.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile links */}
//                 <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
//                   {navItems.map((item, index) => (
//                     <NavLink
//                       key={item.path}
//                       to={item.path}
//                       end={item.path === "/"}
//                       onClick={() => setOpen(false)}
//                       className={({ isActive }) =>
//                         `group flex items-center justify-between border-b border-white/[0.07] px-5 py-4 last:border-b-0 transition-all duration-300 ${
//                           isActive
//                             ? "bg-[#EE6C1A] text-black"
//                             : "bg-[#151414] text-white/65 hover:bg-white/[0.06] hover:text-white"
//                         }`
//                       }
//                     >
//                       {({ isActive }) => (
//                         <>
//                           <div className="flex items-center gap-4">
//                             <span
//                               className={`text-[8px] font-black ${
//                                 isActive
//                                   ? "text-black/50"
//                                   : "text-[#EE6C1A]"
//                               }`}
//                             >
//                               0{index + 1}
//                             </span>

//                             <span className="text-[11px] font-black uppercase tracking-[0.14em]">
//                               {item.label}
//                             </span>
//                           </div>

//                           <ArrowUpRight
//                             className={`h-4 w-4 transition-transform duration-300 ${
//                               isActive
//                                 ? "text-black"
//                                 : "text-white/30 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#EE6C1A]"
//                             }`}
//                           />
//                         </>
//                       )}
//                     </NavLink>
//                   ))}
//                 </div>

//                 {/* Mobile call */}
//                 <a
//                   href={phoneLink}
//                   className="group mt-4 flex items-center justify-between rounded-2xl bg-[#EE6C1A] px-5 py-4 text-black transition-all duration-300 hover:bg-white"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10">
//                       <Phone className="h-4 w-4" />
//                     </div>

//                     <div>
//                       <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-55">
//                         Speak To Our Team
//                       </p>

//                       <p className="mt-1 text-sm font-black tracking-wide">
//                         {phone}
//                       </p>
//                     </div>
//                   </div>

//                   <ArrowUpRight
//                     className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                     strokeWidth={2.5}
//                   />
//                 </a>

//                 {/* Address */}
//                 <div className="mt-4 flex items-start gap-3 px-1">
//                   <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EE6C1A]" />

//                   <p className="text-[9px] leading-5 text-white/30">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }























// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "Knockout Pest Control";
//   const phone = "074 389 85903";
//   const email = "info@knockoutpestcontrol.uk";
//   const location = "Tooting, London";

//   const phoneLink = `tel:+447438985903`;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 15);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Our Services", path: "/services/" },
//     { label: "About Us", path: "/about-us/" },
//     { label: "Contact", path: "/contact-us/" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       {/* Top information strip */}
//       <div className="hidden bg-[#02262F] text-white md:block">
//         <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 lg:px-10">
//           <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-white/75">
//             <MapPin className="h-3.5 w-3.5 text-[#FE312F]" />
//             <span>Local pest control specialists in {location}</span>
//           </div>

//           <div className="flex items-center gap-6">
//             <a
//               href={`mailto:${email}`}
//               className="flex items-center gap-2 text-[11px] font-medium text-white/75 transition hover:text-white"
//             >
//               <Mail className="h-3.5 w-3.5 text-[#FE312F]" />
//               {email}
//             </a>

//             <a
//               href={phoneLink}
//               className="flex items-center gap-2 text-[11px] font-bold text-white transition hover:text-[#FE312F]"
//             >
//               <Phone className="h-3.5 w-3.5 text-[#FE312F]" />
//               {phone}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav
//         className={`border-b border-[#465859]/10 bg-white transition-all duration-300 ${
//           isScrolled
//             ? "shadow-[0_8px_30px_rgba(2,38,47,0.09)]"
//             : "shadow-none"
//         }`}
//       >
//         <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-10">

//           {/* Brand */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${companyName} home`}
//             className="group flex shrink-0 items-center gap-3"
//           >
//             <img
//               src="/images/knockout.webp"
//               alt={`${companyName} Logo`}
//               className="h-[48px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[55px]"
//               loading="eager"
//               decoding="async"
//             />

//             <div className="hidden border-l border-[#465859]/20 pl-3 sm:block">
//               <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#02262F]">
//                 Knockout
//               </p>
//               <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#465859]">
//                 Pest Control
//               </p>
//             </div>
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden items-center gap-1 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 end={item.path === "/"}
//                 className={({ isActive }) =>
//                   `group relative px-4 py-3 text-[11px] font-bold transition-colors duration-200 ${
//                     isActive
//                       ? "text-[#FE312F]"
//                       : "text-[#02262F] hover:text-[#FE312F]"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     {item.label}
//                     <span
//                       className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left bg-[#FE312F] transition-transform duration-300 ${
//                         isActive
//                           ? "scale-x-100"
//                           : "scale-x-0 group-hover:scale-x-100"
//                       }`}
//                     />
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* Desktop contact button */}
//           <div className="hidden lg:block">
//             <a
//               href={phoneLink}
//               className="group flex items-center gap-3 rounded-md bg-[#FE312F] px-5 py-3 text-white transition-all duration-300 hover:bg-[#02262F]"
//             >
//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
//                 <Phone className="h-4 w-4" />
//               </span>

//               <span className="flex flex-col text-left leading-tight">
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
//                   Call our team
//                 </span>
//                 <span className="mt-1 text-[12px] font-extrabold tracking-wide">
//                   {phone}
//                 </span>
//               </span>

//               <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             onClick={() => setOpen((prev) => !prev)}
//             className={`flex h-11 w-11 items-center justify-center rounded-md transition-all duration-300 lg:hidden ${
//               open
//                 ? "bg-[#FE312F] text-white"
//                 : "bg-[#02262F] text-white hover:bg-[#FE312F]"
//             }`}
//             aria-label={
//               open
//                 ? "Close Knockout navigation menu"
//                 : "Open Knockout navigation menu"
//             }
//             aria-expanded={open}
//           >
//             {open ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         <div
//           className={`grid transition-all duration-300 lg:hidden ${
//             open
//               ? "grid-rows-[1fr] opacity-100"
//               : "grid-rows-[0fr] opacity-0"
//           }`}
//         >
//           <div className="overflow-hidden">
//             <div className="border-t border-[#465859]/10 bg-white px-5 pb-6 pt-3 sm:px-7">

//               {/* Mobile links */}
//               <div className="divide-y divide-[#465859]/10">
//                 {navItems.map((item, index) => (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     end={item.path === "/"}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `flex items-center justify-between py-4 transition-colors ${
//                         isActive
//                           ? "text-[#FE312F]"
//                           : "text-[#02262F] hover:text-[#FE312F]"
//                       }`
//                     }
//                   >
//                     {({ isActive }) => (
//                       <>
//                         <div className="flex items-center gap-4">
//                           <span className="text-[10px] font-black text-[#FE312F]">
//                             0{index + 1}
//                           </span>
//                           <span className="text-[12px] font-bold tracking-wide">
//                             {item.label}
//                           </span>
//                         </div>

//                         <ChevronRight
//                           className={`h-4 w-4 ${
//                             isActive ? "text-[#FE312F]" : "text-[#465859]/50"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* Mobile location information */}
//               <div className="mt-5 flex items-center gap-3 rounded-md bg-[#F3F6F5] p-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#02262F] text-white">
//                   <MapPin className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#465859]">
//                     Your local pest control team
//                   </p>
//                   <p className="mt-1 text-sm font-extrabold text-[#02262F]">
//                     {location}
//                   </p>
//                 </div>
//               </div>

//               {/* Mobile call button */}
//               <a
//                 href={phoneLink}
//                 className="mt-4 flex items-center justify-between rounded-md bg-[#FE312F] px-5 py-4 text-white transition-colors hover:bg-[#02262F]"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
//                     <Phone className="h-4 w-4" />
//                   </div>

//                   <div>
//                     <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75">
//                       Speak to our team
//                     </p>
//                     <p className="mt-1 text-sm font-extrabold">
//                       {phone}
//                     </p>
//                   </div>
//                 </div>

//                 <ArrowUpRight className="h-5 w-5" />
//               </a>

//               {/* Mobile email */}
//               <a
//                 href={`mailto:${email}`}
//                 className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#465859] transition hover:text-[#FE312F]"
//               >
//                 <Mail className="h-4 w-4 text-[#FE312F]" />
//                 {email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const companyName = "Knockout Pest Control";
//   const phone = "074 389 85903";
//   const email = "info@knockoutpestcontrol.uk";
//   const location = "Tooting, London";

//   const phoneLink = "tel:+447438985903";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 15);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "Our Services", path: "/services/" },
//     { label: "About Us", path: "/about-us/" },
//     { label: "Contact", path: "/contact-us/" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       {/* Top information strip */}
//       <div className="hidden bg-[#02262F] text-white md:block">
//         <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 lg:px-10">
//           <div className="flex items-center gap-3 text-[13px] font-medium tracking-wide text-white/75">
//             <MapPin className="h-4 w-4 text-[#FE312F]" />
//             <span>Local pest control specialists in {location}</span>
//           </div>

//           <div className="flex items-center gap-8">
//             <a
//               href={`mailto:${email}`}
//               className="flex items-center gap-2 text-[13px] font-medium text-white/75 transition hover:text-white"
//             >
//               <Mail className="h-4 w-4 text-[#FE312F]" />
//               {email}
//             </a>

//             <a
//               href={phoneLink}
//               className="flex items-center gap-2 text-[13px] font-bold text-white transition hover:text-[#FE312F]"
//             >
//               <Phone className="h-4 w-4 text-[#FE312F]" />
//               {phone}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav
//         className={`border-b border-[#465859]/10 bg-white transition-all duration-300 ${
//           isScrolled
//             ? "shadow-[0_8px_30px_rgba(2,38,47,0.09)]"
//             : "shadow-none"
//         }`}
//       >
//         <div className="mx-auto flex min-h-[125px] max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-10 lg:min-h-[145px]">

//           {/* Brand */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${companyName} home`}
//             className="group flex shrink-0 items-center gap-4"
//           >
//             <img
//               src="/images/knockout.webp"
//               alt={`${companyName} Logo`}
//               className="h-[85px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[100px] lg:h-[115px]"
//               loading="eager"
//               decoding="async"
//             />

//             <div className="hidden border-l-2 border-[#465859]/20 pl-4 sm:block">
//               <p className="text-[14px] font-black uppercase tracking-[0.13em] text-[#02262F]">
//                 Knockout
//               </p>
//               <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#465859]">
//                 Pest Control
//               </p>
//             </div>
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden items-center gap-2 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 end={item.path === "/"}
//                 className={({ isActive }) =>
//                   `group relative px-5 py-4 text-[15px] font-bold transition-colors duration-200 xl:text-[17px] ${
//                     isActive
//                       ? "text-[#FE312F]"
//                       : "text-[#02262F] hover:text-[#FE312F]"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     {item.label}
//                     <span
//                       className={`absolute bottom-1 left-5 right-5 h-[3px] origin-left bg-[#FE312F] transition-transform duration-300 ${
//                         isActive
//                           ? "scale-x-100"
//                           : "scale-x-0 group-hover:scale-x-100"
//                       }`}
//                     />
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* Desktop contact button */}
//           <div className="hidden lg:block">
//             <a
//               href={phoneLink}
//               className="group flex items-center gap-3 rounded-md bg-[#FE312F] px-6 py-4 text-white transition-all duration-300 hover:bg-[#02262F] xl:px-7"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
//                 <Phone className="h-5 w-5" />
//               </span>

//               <span className="flex flex-col text-left leading-tight">
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
//                   Call our team
//                 </span>
//                 <span className="mt-1.5 text-[15px] font-extrabold tracking-wide">
//                   {phone}
//                 </span>
//               </span>

//               <ArrowUpRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             onClick={() => setOpen((prev) => !prev)}
//             className={`flex h-12 w-12 items-center justify-center rounded-md transition-all duration-300 lg:hidden ${
//               open
//                 ? "bg-[#FE312F] text-white"
//                 : "bg-[#02262F] text-white hover:bg-[#FE312F]"
//             }`}
//             aria-label={
//               open
//                 ? "Close Knockout navigation menu"
//                 : "Open Knockout navigation menu"
//             }
//             aria-expanded={open}
//           >
//             {open ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         <div
//           className={`grid transition-all duration-300 lg:hidden ${
//             open
//               ? "grid-rows-[1fr] opacity-100"
//               : "grid-rows-[0fr] opacity-0"
//           }`}
//         >
//           <div className="overflow-hidden">
//             <div className="border-t border-[#465859]/10 bg-white px-5 pb-6 pt-4 sm:px-7">

//               {/* Mobile links */}
//               <div className="divide-y divide-[#465859]/10">
//                 {navItems.map((item, index) => (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     end={item.path === "/"}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `flex items-center justify-between py-5 transition-colors ${
//                         isActive
//                           ? "text-[#FE312F]"
//                           : "text-[#02262F] hover:text-[#FE312F]"
//                       }`
//                     }
//                   >
//                     {({ isActive }) => (
//                       <>
//                         <div className="flex items-center gap-5">
//                           <span className="text-[12px] font-black text-[#FE312F]">
//                             0{index + 1}
//                           </span>
//                           <span className="text-[15px] font-bold tracking-wide">
//                             {item.label}
//                           </span>
//                         </div>

//                         <ChevronRight
//                           className={`h-5 w-5 ${
//                             isActive ? "text-[#FE312F]" : "text-[#465859]/50"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* Mobile location information */}
//               <div className="mt-5 flex items-center gap-3 rounded-md bg-[#F3F6F5] p-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#02262F] text-white">
//                   <MapPin className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#465859]">
//                     Your local pest control team
//                   </p>
//                   <p className="mt-1 text-base font-extrabold text-[#02262F]">
//                     {location}
//                   </p>
//                 </div>
//               </div>

//               {/* Mobile call button */}
//               <a
//                 href={phoneLink}
//                 className="mt-4 flex items-center justify-between rounded-md bg-[#FE312F] px-5 py-5 text-white transition-colors hover:bg-[#02262F]"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
//                     <Phone className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75">
//                       Speak to our team
//                     </p>
//                     <p className="mt-1 text-base font-extrabold">
//                       {phone}
//                     </p>
//                   </div>
//                 </div>

//                 <ArrowUpRight className="h-6 w-6" />
//               </a>

//               {/* Mobile email */}
//               <a
//                 href={`mailto:${email}`}
//                 className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-[#465859] transition hover:text-[#FE312F]"
//               >
//                 <Mail className="h-5 w-5 text-[#FE312F]" />
//                 {email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }



















import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Bug,
  ChevronRight,
} from "lucide-react";

/* ==========================================
   BUSINESS DETAILS
========================================== */

const companyName = "Oakridge Pest Control UK";
const phone = "+44 7440 681717";
const phoneLink = "tel:+447440681717";
const email = "info@oakridgepestcontrol.uk";
const businessLocation = "Greenwich, London";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Our Services",
    path: "/services/",
  },
  {
    label: "About Us",
    path: "/about-us/",
  },
  {
    label: "Contact",
    path: "/contact-us/",
  },
];

/* ==========================================
   NAVBAR COMPONENT
========================================== */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  /* ========================================
     SCROLL EFFECT
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================== */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ========================================
     CLOSE MENU WITH ESCAPE KEY
  ======================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <header
      className="sticky inset-x-0 top-0 z-50 w-full"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ======================================
          01 — TOP INFORMATION STRIP
      ====================================== */}

      <div className="hidden bg-[#FE6387] text-white md:block">

        <div className="mx-auto flex min-h-[42px] max-w-[1500px] items-center justify-between gap-5 px-6 lg:px-12">

          {/* LOCATION */}

          <div className="flex items-center gap-2.5">

            <MapPin
              size={16}
              className="shrink-0 text-white"
            />

            <span className="text-xs font-bold tracking-wide text-white">
              Local pest control in Greenwich, London
            </span>

          </div>

          {/* RIGHT INFORMATION */}

          <div className="flex items-center gap-6">

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-xs font-bold text-white transition-opacity hover:opacity-80"
            >
              <Mail
                size={15}
                className="text-white"
              />

              {email}
            </a>

            <span className="h-4 w-px bg-white/40" />

            <span className="hidden items-center gap-2 text-xs font-bold text-white xl:flex">

              <Bug size={15} />

              Residential & Commercial

            </span>

          </div>

        </div>
      </div>

      {/* ======================================
          02 — MAIN NAVIGATION
      ====================================== */}

      <nav
        aria-label="Main navigation"
        className={`relative bg-white transition-shadow duration-300 ${
          isScrolled
            ? "shadow-[0_10px_35px_rgba(168,34,82,0.12)]"
            : "shadow-none"
        }`}
      >

        <div className="mx-auto flex min-h-[88px] max-w-[1500px] items-center justify-between gap-4 px-5 sm:min-h-[100px] sm:px-8 lg:min-h-[112px] lg:gap-5 lg:px-12">

          {/* ==================================
              BRAND LOGO
          ================================== */}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label={`${companyName} home`}
            className="group flex shrink-0 items-center"
          >

            <img
              src="/images/oakridge-logo.png"
              alt="Oakridge Pest Control UK Logo"
              loading="eager"
              decoding="async"
              className="h-[65px] w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none sm:h-[78px] sm:max-w-[220px] lg:h-[90px]"
            />

          </Link>

          {/* ==================================
              DESKTOP CAPSULE NAVIGATION
          ================================== */}

          <div className="hidden items-center gap-1 rounded-full border border-[#FE6387]/20 bg-[#FFF5F2] p-1.5 lg:flex xl:gap-2 xl:p-2">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative flex items-center justify-center whitespace-nowrap rounded-full px-4 py-3.5 text-sm font-bold transition-all duration-300 xl:px-6 ${
                    isActive
                      ? "bg-[#A82252] text-white shadow-[0_5px_18px_rgba(168,34,82,0.18)]"
                      : "text-[#A82252] hover:bg-[#FE6387]/10"
                  }`
                }
              >

                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white" />
                    )}

                    {item.label}
                  </>
                )}

              </NavLink>
            ))}

          </div>

          {/* ==================================
              DESKTOP TELEPHONE BUTTON
          ================================== */}

          <a
            href={phoneLink}
            className="group hidden shrink-0 items-center gap-3 rounded-full bg-[#FE6387] p-2 pr-4 text-white transition-all duration-300 hover:bg-[#A82252] lg:flex xl:pr-5"
          >

            {/* PHONE ICON */}

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#A82252] transition-transform duration-300 group-hover:-rotate-12 motion-reduce:transform-none">

              <Phone size={20} />

            </span>

            {/* PHONE DETAILS */}

            <span className="flex flex-col gap-1 text-white">

              <span className="text-[11px] font-bold text-white">
                Speak to our team
              </span>

              <span className="whitespace-nowrap text-sm font-bold text-white xl:text-base">
                {phone}
              </span>

            </span>

            <ArrowUpRight
              size={19}
              className="hidden shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none xl:block"
            />

          </a>

          {/* ==================================
              MOBILE HEADER ACTIONS
          ================================== */}

          <div className="flex items-center gap-2.5 lg:hidden">

            {/* MOBILE PHONE ICON */}

            <a
              href={phoneLink}
              aria-label={`Call Oakridge on ${phone}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FE6387]/30 bg-[#FFF5F2] text-[#A82252] transition-colors hover:bg-[#A82252] hover:text-white sm:h-12 sm:w-12"
            >

              <Phone size={20} />

            </a>

            {/* MOBILE MENU TOGGLE */}

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              aria-controls="oakridge-mobile-navigation"
              className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors duration-300 sm:h-12 sm:w-12 ${
                open
                  ? "bg-[#A82252]"
                  : "bg-[#FE6387] hover:bg-[#A82252]"
              }`}
            >

              {open ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}

            </button>

          </div>

        </div>

        {/* ====================================
            BRAND GRADIENT DIVIDER
        ==================================== */}

        <div className="h-[3px] w-full bg-gradient-to-r from-[#FFA58A] via-[#FE6387] to-[#FF4081]" />

        {/* ====================================
            03 — PREMIUM MOBILE NAVIGATION
        ==================================== */}

        <div
          id="oakridge-mobile-navigation"
          hidden={!open}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-105px)] overflow-y-auto overscroll-contain bg-[#FFF5F2] shadow-[0_25px_50px_rgba(168,34,82,0.15)] md:max-h-[calc(100dvh-150px)] lg:hidden"
        >

          <div className="mx-auto max-w-[700px] px-5 pb-7 pt-6 sm:px-8">

            {/* MOBILE MENU INTRO */}

            <div className="flex items-center justify-between border-b border-[#FE6387]/20 pb-5">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#AC3054]">
                  Explore Oakridge
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#A82252]">
                  How can we help?
                </h2>

              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE6387] text-white">

                <Bug size={23} />

              </div>

            </div>

            {/* MOBILE NAVIGATION LINKS */}

            <div className="mt-5 space-y-2.5">

              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl border p-4 transition-colors duration-200 sm:p-5 ${
                      isActive
                        ? "border-[#A82252] bg-[#A82252] text-white"
                        : "border-[#FE6387]/20 bg-white text-[#A82252] hover:border-[#FE6387]"
                    }`
                  }
                >

                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-4">

                        {/* LINK NUMBER */}

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#FFF5F2] text-[#A82252]"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        {/* LINK LABEL */}

                        <span className="text-base font-bold">
                          {item.label}
                        </span>

                      </div>

                      <ChevronRight
                        size={21}
                        className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                      />

                    </>
                  )}

                </NavLink>
              ))}

            </div>

            {/* ==================================
                MOBILE BUSINESS CONTACT CARD
            ================================== */}

            <div className="relative mt-6 overflow-hidden rounded-[24px] bg-[#FE6387] p-6 text-white">

              {/* DECORATIVE CIRCLES */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-[30px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full border-[25px] border-white/10"
              />

              <div className="relative">

                {/* LOCATION */}

                <div className="flex items-center gap-2 text-sm font-bold text-white">

                  <MapPin size={17} />

                  {businessLocation}

                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                  Let's discuss your pest concern.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white">
                  Contact Oakridge for residential and
                  commercial pest control enquiries.
                </p>

                {/* DIRECT CALL BUTTON */}

                <a
                  href={phoneLink}
                  className="mt-6 flex items-center justify-between gap-3 rounded-full bg-white p-2.5 pr-5 text-[#A82252] transition-colors hover:bg-[#FFF5F2]"
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A82252] text-white">

                      <Phone size={18} />

                    </span>

                    <span className="text-sm font-bold sm:text-base">
                      {phone}
                    </span>

                  </div>

                  <ArrowUpRight size={20} />

                </a>

                {/* EMAIL LINK */}

                <a
                  href={`mailto:${email}`}
                  className="mt-5 flex items-center gap-2 break-all text-xs font-bold text-white sm:text-sm"
                >

                  <Mail
                    size={17}
                    className="shrink-0 text-white"
                  />

                  {email}

                </a>

              </div>

            </div>

            {/* CONTACT PAGE LINK */}

            <Link
              to="/contact-us/"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 rounded-full border border-[#FE6387]/30 bg-white px-5 py-4 text-sm font-bold text-[#A82252] transition-colors hover:bg-[#A82252] hover:text-white"
            >

              Request an enquiry

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </nav>

      {/* ======================================
          MOBILE BACKDROP
      ====================================== */}

      {open && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close mobile navigation"
          tabIndex={-1}
          className="fixed inset-0 -z-10 bg-[#A82252]/20 lg:hidden"
        />
      )}

    </header>
  );
}