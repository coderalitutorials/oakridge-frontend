


// import React from 'react'
// import HeroSection from '../components/HeroSection'
// import StatsSection from '../components/StatsSection'
// import IronServices from '../components/IronServices'
// import IronFeatures from '../components/IronFeatures'
// import IronCallback from '../components/IronCallback'
// import CertifiedLogosSection from '../components/CertifiedLogosSection'
// import PesSaveFeatureSection from '../components/PesSaveFeatureSection'
// import PesSaveWhyChooseUs from '../components/PesSaveWhyChooseUs'
// import AboutIntroSection from '../components/AboutIntro'
// import MissionBannerSection from '../components/MissionBannerSection'
// // import WhyChoosePrimeShield from '../components/WhyChoosePrimeShield'
// import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'

// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <AboutIntroSection/>
//       <MissionBannerSection/>
//        <IronServices/>
       
//        {/* <WhyChoosePrimeShield/> */}
//        <PrimeShieldTestimonials/>
//        {/* <IronCallback/> */}
//        {/* <CertifiedLogosSection/> */}
//        {/* <StatsSection/> */}
        
//          {/* <PesSaveFeatureSection/> */}
//          {/* <PesSaveWhyChooseUs/> */}
      
    
//       {/* <IronFeatures/> */}
     
//     </div>
//   )
// }

// export default Home
















// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   SearchCheck,
//   Target,
//   LockKeyhole,
//   Home,
//   Building2,
//   Eye,
//   CircleCheck,
//   Check,
// } from "lucide-react";

// const businessName = "PrimeShield Services Sidcup";
// const phoneNumber = "07356 295780";
// const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
// const serviceArea = "Sidcup and nearby areas";

// const brandColors = {
//   orange: "#EE6C1A",
//   dark: "#151414",
//   black: "#050505",
//   grey: "#8B8B8B",
//   soft: "#E8E3DE",
//   muted: "#B9B2AA",
// };

// /* =========================================================
//    SERVICES
// ========================================================= */

// const services = [
//   {
//     number: "01",
//     eyebrow: "RODENT CONTROL",
//     title: "Rat & Mice\nControl",
//     description:
//       "Targeted rodent control for homes, flats, landlords and local businesses. We focus on identifying signs of activity and addressing the conditions that allow rodents to remain.",
//     image: "/images/rodents.webp",
//     path: "/services",
//   },
//   {
//     number: "02",
//     eyebrow: "BED BUG CONTROL",
//     title: "Bed Bug\nTreatment",
//     description:
//       "Careful treatment for bedrooms, rental properties and affected spaces, with the approach planned around the property and the extent of pest activity.",
//     image: "/images/bedbugs.webp",
//     path: "/services",
//   },
//   {
//     number: "03",
//     eyebrow: "WASP CONTROL",
//     title: "Wasp Nest\nTreatment",
//     description:
//       "Professional treatment for active wasp nests around residential and commercial properties, taking account of nest location and the surrounding environment.",
//     image: "/images/wasps.webp",
//     path: "/services",
//   },
// ];

// /* =========================================================
//    WHY CHOOSE
// ========================================================= */

// const reasons = [
//   {
//     number: "01",
//     icon: SearchCheck,
//     title: "Understand The Problem",
//     text: "We look at the signs, location and circumstances before deciding how the situation should be approached.",
//   },
//   {
//     number: "02",
//     icon: Target,
//     title: "Targeted Approach",
//     text: "Treatment is planned around the pest activity and the property rather than relying on a one-size-fits-all approach.",
//   },
//   {
//     number: "03",
//     icon: ShieldCheck,
//     title: "Professional Service",
//     text: "Clear communication from the initial contact through assessment, treatment and next steps.",
//   },
//   {
//     number: "04",
//     icon: LockKeyhole,
//     title: "Focus On Prevention",
//     text: "Where appropriate, we consider the conditions that may allow pest activity to return.",
//   },
// ];

// /* =========================================================
//    PROCESS
// ========================================================= */

// const process = [
//   {
//     number: "01",
//     title: "Get In Touch",
//     text: "Tell us what you are seeing and where the problem is occurring.",
//     icon: Phone,
//   },
//   {
//     number: "02",
//     title: "Assess The Situation",
//     text: "We establish the likely pest activity and understand the property.",
//     icon: Eye,
//   },
//   {
//     number: "03",
//     title: "Plan The Treatment",
//     text: "The appropriate treatment approach is explained before action is taken.",
//     icon: Target,
//   },
//   {
//     number: "04",
//     title: "Take Action",
//     text: "Treatment is carried out with attention to the affected area and surrounding environment.",
//     icon: CircleCheck,
//   },
// ];

// /* =========================================================
//    PROPERTY TYPES
// ========================================================= */

// const propertyTypes = [
//   {
//     number: "01",
//     title: "Homes & Flats",
//     text: "For homeowners, tenants and residential properties dealing with unwanted pest activity.",
//     icon: Home,
//   },
//   {
//     number: "02",
//     title: "Local Businesses",
//     text: "Professional pest-control support for local commercial environments and premises.",
//     icon: Building2,
//   },
// ];

// /* =========================================================
//    TESTIMONIALS
// ========================================================= */

// const testimonials = [
//   {
//     quote:
//       "The service was professional from the initial contact through to the treatment. Everything was explained clearly and the process was straightforward.",
//     name: "Local Homeowner",
//     area: "Sidcup",
//   },
//   {
//     quote:
//       "Very easy to deal with. We were able to explain what was happening and received clear information about the next steps.",
//     name: "Residential Customer",
//     area: "Sidcup",
//   },
//   {
//     quote:
//       "A professional service with good communication. The situation was assessed properly and the treatment was explained before anything was carried out.",
//     name: "Local Customer",
//     area: "South East London",
//   },
// ];

// /* =========================================================
//    ANIMATED NUMBER
// ========================================================= */

// function AnimatedNumber({
//   value,
//   prefix = "",
//   suffix = "",
//   duration = 1400,
// }) {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     amount: 0.55,
//   });

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;

//     let startTime = null;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;

//       const progress = Math.min(
//         (timestamp - startTime) / duration,
//         1
//       );

//       const eased = 1 - Math.pow(1 - progress, 4);
//       const current = Math.round(eased * value);

//       setCount(current);

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(value);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [inView, value, duration]);

//   return (
//     <span ref={ref}>
//       {prefix}
//       {count}
//       {suffix}
//     </span>
//   );
// }

// /* =========================================================
//    SECTION LABEL
// ========================================================= */

// function SectionLabel({ number, children, dark = false }) {
//   return (
//     <div
//       className={`flex items-center gap-3 text-[9px] font-semibold tracking-[0.3em] ${
//         dark ? "text-[#050505]/60" : "text-[#EE6C1A]"
//       }`}
//     >
//       <span
//         className={`flex h-7 w-7 items-center justify-center rounded-full border text-[8px] ${
//           dark
//             ? "border-[#050505]/20"
//             : "border-[#EE6C1A]/40"
//         }`}
//       >
//         {number}
//       </span>

//       <span>{children}</span>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN HOMEPAGE
// ========================================================= */

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   /* =========================================================
//      FORM
//   ========================================================= */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(
//         "https://primeshield-sidcup-backend.vercel.app/api/callback",
//         {
//           ...formData,
//           area: serviceArea,
//           business: businessName,
//           address,
//           phoneNumber,
//         }
//       ),
//       {
//         loading: "Sending your Sidcup callback request...",
//         success: () => {
//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           setLoading(false);

//           return `${businessName} will contact you shortly.`;
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Request failed. Please try again."
//           );
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "3px",
//           padding: "12px 18px",
//         },

//         success: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },

//         error: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: "1px solid #ef4444",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <div
//       className="min-h-screen overflow-x-hidden bg-[#151414] text-[#E8E3DE]"
//       style={{
//         fontFamily:
//           "Inter, Arial, Helvetica, sans-serif",
//       }}
//     >
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#151414",
//             color: "#FFFFFF",
//             border:
//               "1px solid rgba(238,108,26,0.45)",
//             borderRadius: "3px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow:
//               "0 20px 60px rgba(0,0,0,0.5)",
//           },
//         }}
//       />

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[780px] overflow-hidden bg-[#050505] sm:min-h-[850px] lg:min-h-[900px]">
//         <div className="absolute inset-0">
//           <img
//             src="/images/herohome.webp"
//             alt="PrimeShield Services Sidcup"
//             className="h-full w-full object-cover opacity-55"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/30" />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
//         </div>

//         <div className="absolute left-[8%] top-[22%] hidden h-40 w-40 rounded-full border border-[#EE6C1A]/15 lg:block" />

//         <div className="absolute right-[-140px] top-[20%] h-[500px] w-[500px] rounded-full border border-[#EE6C1A]/10" />

//         <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-end px-5 pb-12 pt-32 sm:min-h-[850px] sm:px-8 sm:pb-16 lg:min-h-[900px] lg:px-12 lg:pb-20">
//           <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_370px]">
//             <div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                 }}
//                 className="mb-7 flex items-center gap-3"
//               >
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A] shadow-[0_0_20px_rgba(238,108,26,.7)]" />

//                 <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#B9B2AA]">
//                   Local Pest Control · Sidcup
//                 </span>
//               </motion.div>

//               <motion.h1
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.9,
//                   delay: 0.1,
//                 }}
//                 className="max-w-5xl text-[3.7rem] font-bold leading-[0.9] tracking-[-0.055em] text-[#E8E3DE] sm:text-[5.4rem] md:text-[6.8rem] lg:text-[8.2rem]"
//               >
//                 Pest problems
//                 <span className="block italic font-semibold text-[#EE6C1A]">
//                   handled properly.
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.3,
//                 }}
//                 className="mt-10 max-w-3xl"
//               >
//                 <p className="max-w-xl text-sm leading-7 text-[#B9B2AA] sm:text-base">
//                   Professional pest control for homes,
//                   flats and local businesses across
//                   Sidcup and nearby areas. We focus on
//                   understanding the problem before
//                   deciding how it should be treated.
//                 </p>

//                 <div className="mt-7 flex flex-wrap gap-3">
//                   <Link
//                     to="/services"
//                     className="group inline-flex items-center gap-3 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050505]"
//                   >
//                     Explore services

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#EE6C1A] transition-transform group-hover:rotate-45">
//                       <ArrowUpRight size={13} />
//                     </span>
//                   </Link>

//                   <a
//                     href={phoneHref}
//                     className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                   >
//                     <Phone size={13} />
//                     {phoneNumber}
//                   </a>
//                 </div>
//               </motion.div>
//             </div>

//             {/* HERO INFO CARD */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 35,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//               }}
//               className="relative overflow-hidden rounded-[2rem] border border-[#E8E3DE]/10 bg-[#151414]/85 p-6 backdrop-blur-xl sm:p-7"
//             >
//               <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#EE6C1A]/10" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8B8B8B]">
//                     PrimeShield Sidcup
//                   </span>

//                   <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#EE6C1A]">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
//                     Local
//                   </span>
//                 </div>

//                 <div className="mt-12">
//                   <p className="max-w-xs text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-[#E8E3DE]">
//                     A clearer way to deal with pest problems.
//                   </p>

//                   <p className="mt-5 text-xs leading-6 text-[#8B8B8B]">
//                     Tell us what you are seeing, where it
//                     is happening and we'll discuss the
//                     situation with you.
//                   </p>
//                 </div>

//                 <a
//                   href={phoneHref}
//                   className="mt-8 flex items-center justify-between rounded-2xl bg-[#EE6C1A] px-5 py-4 text-[#050505] transition hover:bg-[#f47c32]"
//                 >
//                   <div>
//                     <p className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60">
//                       Call PrimeShield
//                     </p>

//                     <p className="mt-1 text-base font-bold">
//                       {phoneNumber}
//                     </p>
//                   </div>

//                   <ArrowUpRight size={20} />
//                 </a>

//                 <div className="mt-5 flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-5">
//                   <MapPin
//                     size={15}
//                     className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                   />

//                   <p className="text-[9px] leading-5 text-[#8B8B8B]">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* HERO BOTTOM RAIL */}

//         <div className="absolute bottom-0 left-0 w-full border-t border-[#E8E3DE]/10 bg-[#050505]/80 backdrop-blur-md">
//           <div className="mx-auto grid max-w-[1500px] grid-cols-2 sm:grid-cols-4">
//             {[
//               "Rodent Control",
//               "Bed Bug Treatment",
//               "Wasp Treatment",
//               "Residential + Commercial",
//             ].map((item, index) => (
//               <div
//                 key={item}
//                 className={`flex items-center gap-3 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#8B8B8B] sm:px-8 ${
//                   index < 3
//                     ? "border-r border-[#E8E3DE]/10"
//                     : ""
//                 } ${
//                   index > 1
//                     ? "hidden sm:flex"
//                     : ""
//                 }`}
//               >
//                 <span className="text-[#EE6C1A]">
//                   0{index + 1}
//                 </span>

//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="border-b border-[#E8E3DE]/10 bg-[#151414]">
//         <div className="mx-auto grid max-w-[1500px] grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               value: 10,
//               suffix: "+",
//               label: "Years Experience",
//               text: "Proven track record in pest management.",
//             },
//             {
//               value: 55,
//               suffix: "/",
//               label: "Client Rating",
//               text: "Consistently high standards of service.",
//             },
//             {
//               value: 100,
//               suffix: "%",
//               label: "Safe Methods",
//               text: "Eco-friendly, family-safe treatments.",
//             },
//             {
//               value: 500,
//               suffix: "+",
//               label: "Local Projects",
//               text: "Trusted across Sidcup & nearby areas.",
//             },
//           ].map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`group relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${
//                 index % 2 === 0
//                   ? "border-r border-[#E8E3DE]/10"
//                   : ""
//               } ${
//                 index < 2
//                   ? "border-b border-[#E8E3DE]/10 lg:border-b-0"
//                   : ""
//               } ${
//                 index !== 3
//                   ? "lg:border-r"
//                   : ""
//               }`}
//             >
//               <div className="flex items-start justify-between">
//                 <div className="text-[3.4rem] font-bold leading-none tracking-[-0.055em] text-[#E8E3DE] sm:text-[4.5rem] lg:text-[5rem]">
//                   <AnimatedNumber
//                     value={stat.value}
//                     suffix={stat.suffix}
//                   />
//                 </div>

//                 <span className="mt-1 text-[8px] text-[#8B8B8B]">
//                   0{index + 1}
//                 </span>
//               </div>

//               <h3 className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8E3DE]">
//                 {stat.label}
//               </h3>

//               <p className="mt-3 max-w-[240px] text-[11px] leading-5 text-[#8B8B8B]">
//                 {stat.text}
//               </p>

//               <div className="mt-7 h-px w-8 bg-[#EE6C1A] transition-all duration-500 group-hover:w-20" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
//             <SectionLabel number="01">
//               A DIFFERENT APPROACH
//             </SectionLabel>

//             <div>
//               <h2 className="max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl lg:text-8xl">
//                 See the problem.
//                 <br />

//                 <span className="italic font-semibold text-[#EE6C1A]">
//                   Understand the cause.
//                 </span>

//                 <br />

//                 Control it.
//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-[#E8E3DE]/10 pt-8 md:grid-cols-2">
//                 <p className="text-sm leading-7 text-[#B9B2AA]">
//                   Pest control is not simply about
//                   treating what you can see. The
//                   property, signs of activity and
//                   surrounding conditions all matter.
//                 </p>

//                 <p className="text-sm leading-7 text-[#8B8B8B]">
//                   PrimeShield Services Sidcup takes a
//                   clear, structured approach so you
//                   understand what is happening and
//                   what the next step involves.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//             <div>
//               <SectionLabel number="02">
//                 WHAT WE HANDLE
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl lg:text-7xl">
//                 Focused services.
//                 <br />

//                 <span className="italic font-semibold text-[#8B8B8B]">
//                   Clear treatment.
//                 </span>
//               </h2>
//             </div>

//             <Link
//               to="/services"
//               className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9B2AA]"
//             >
//               View all services

//               <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3DE]/15 transition group-hover:border-[#EE6C1A] group-hover:text-[#EE6C1A]">
//                 <ArrowRight size={15} />
//               </span>
//             </Link>
//           </div>

//           <div className="grid gap-5 lg:grid-cols-12">
//             {/* FEATURED */}

//             <motion.div
//               whileHover={{
//                 y: -5,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="group relative min-h-[570px] overflow-hidden rounded-[2rem] bg-[#050505] lg:col-span-7"
//             >
//               <img
//                 src={services[0].image}
//                 alt={services[0].title.replace(
//                   "\n",
//                   " "
//                 )}
//                 className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent" />

//               <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
//                 <span className="text-xs font-semibold text-[#EE6C1A]">
//                   {services[0].number}
//                 </span>

//                 <span className="h-px w-8 bg-[#EE6C1A]" />

//                 <span className="text-[8px] font-bold tracking-[0.2em] text-[#E8E3DE]">
//                   {services[0].eyebrow}
//                 </span>
//               </div>

//               <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
//                 <div className="flex items-end justify-between gap-5">
//                   <div>
//                     <h3 className="whitespace-pre-line text-4xl font-bold leading-[0.92] tracking-[-0.045em] text-[#E8E3DE] sm:text-5xl">
//                       {services[0].title}
//                     </h3>

//                     <p className="mt-5 max-w-xl text-xs leading-6 text-[#B9B2AA]">
//                       {services[0].description}
//                     </p>
//                   </div>

//                   <Link
//                     to={services[0].path}
//                     className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505] transition-transform group-hover:rotate-45"
//                   >
//                     <ArrowUpRight size={19} />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>

//             {/* TWO SMALL SERVICES */}

//             <div className="grid gap-5 lg:col-span-5">
//               {services.slice(1).map((service) => (
//                 <motion.div
//                   key={service.number}
//                   whileHover={{
//                     x: 5,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   className="group relative min-h-[275px] overflow-hidden rounded-[2rem] border border-[#E8E3DE]/10 bg-[#050505]"
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title.replace(
//                       "\n",
//                       " "
//                     )}
//                     className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

//                   <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-semibold text-[#EE6C1A]">
//                         {service.number}
//                       </span>

//                       <span className="text-[8px] font-bold tracking-[0.2em] text-[#8B8B8B]">
//                         {service.eyebrow}
//                       </span>
//                     </div>

//                     <div className="flex items-end justify-between gap-5">
//                       <div>
//                         <h3 className="whitespace-pre-line text-3xl font-bold leading-[0.92] tracking-[-0.04em] text-[#E8E3DE]">
//                           {service.title}
//                         </h3>

//                         <p className="mt-4 max-w-md text-[11px] leading-5 text-[#8B8B8B]">
//                           {service.description}
//                         </p>
//                       </div>

//                       <Link
//                         to={service.path}
//                         className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E8E3DE]/20 text-[#E8E3DE] transition group-hover:border-[#EE6C1A] group-hover:bg-[#EE6C1A] group-hover:text-[#050505]"
//                       >
//                         <ArrowUpRight size={17} />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHY CHOOSE
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               className="relative overflow-hidden rounded-[2rem]"
//             >
//               <img
//                 src="/images/why-choose-pest-control.webp"
//                 alt="PrimeShield professional pest control service"
//                 className="h-[500px] w-full object-cover sm:h-[620px] lg:h-[700px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-[#050505]/10" />

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
//                 <div className="flex items-end justify-between gap-5">
//                   <div>
//                     <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#EE6C1A]">
//                       Why PrimeShield
//                     </p>

//                     <p className="mt-2 max-w-xs text-2xl font-bold leading-tight text-[#E8E3DE]">
//                       A considered approach to pest control.
//                     </p>
//                   </div>

//                   <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#E8E3DE]/20 sm:flex">
//                     <ShieldCheck
//                       size={20}
//                       className="text-[#EE6C1A]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <div className="lg:pl-8">
//               <SectionLabel number="03">
//                 THE PRIMESHIELD WAY
//               </SectionLabel>

//               <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl lg:text-7xl">
//                 Professional service
//                 <span className="block italic font-semibold text-[#8B8B8B]">
//                   without the guesswork.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9B2AA]">
//                 Every pest problem has its own circumstances.
//                 We focus on understanding the situation,
//                 communicating clearly and planning the
//                 appropriate response.
//               </p>

//               <div className="mt-10 grid border-l border-t border-[#E8E3DE]/10 sm:grid-cols-2">
//                 {reasons.map((reason) => {
//                   const Icon = reason.icon;

//                   return (
//                     <motion.div
//                       key={reason.number}
//                       whileHover={{
//                         backgroundColor:
//                           "#151414",
//                       }}
//                       className="group min-h-[260px] border-b border-r border-[#E8E3DE]/10 p-6 transition sm:p-7"
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-[9px] font-bold text-[#EE6C1A]">
//                           {reason.number}
//                         </span>

//                         <Icon
//                           size={19}
//                           strokeWidth={1.5}
//                           className="text-[#8B8B8B] transition group-hover:text-[#EE6C1A]"
//                         />
//                       </div>

//                       <div className="mt-20">
//                         <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#E8E3DE]">
//                           {reason.title}
//                         </h3>

//                         <p className="mt-3 text-[11px] leading-5 text-[#8B8B8B]">
//                           {reason.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VISUAL PROBLEM SECTION
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
//             <div className="relative overflow-hidden rounded-[2rem]">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="Pest control inspection"
//                 className="h-[500px] w-full object-cover sm:h-[650px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
//                 <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
//                   Inspection first
//                 </p>

//                 <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-[#E8E3DE]">
//                   The visible pest may not be the whole story.
//                 </p>
//               </div>
//             </div>

//             <div className="lg:pl-8">
//               <SectionLabel number="04">
//                 THE RIGHT START
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl">
//                 See the signs.
//                 <span className="block italic font-semibold text-[#8B8B8B]">
//                   Understand the situation.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9B2AA]">
//                 Pest activity can be connected to where
//                 pests are entering, feeding, nesting or
//                 moving through a property. Understanding
//                 the situation comes before simply choosing
//                 a treatment.
//               </p>

//               <div className="mt-10 space-y-4">
//                 {[
//                   "Identify signs of activity",
//                   "Understand the affected area",
//                   "Discuss the appropriate treatment",
//                   "Consider prevention where relevant",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-4 border-b border-[#E8E3DE]/10 pb-4"
//                   >
//                     <span className="text-[9px] font-bold text-[#EE6C1A]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-sm text-[#E8E3DE]">
//                       {item}
//                     </span>

//                     <Check
//                       size={15}
//                       className="ml-auto text-[#8B8B8B]"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/about-us"
//                 className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#E8E3DE]/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 How we work
//                 <ArrowRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
//             <div>
//               <SectionLabel number="05">
//                 WHERE WE HELP
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//                 Residential
//                 <span className="block italic font-semibold text-[#EE6C1A]">
//                   or commercial.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-[#8B8B8B]">
//                 Different properties create different
//                 circumstances. The treatment approach
//                 should reflect the environment where the
//                 activity is taking place.
//               </p>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {propertyTypes.map((property) => {
//                 const Icon = property.icon;

//                 return (
//                   <motion.div
//                     key={property.number}
//                     whileHover={{
//                       y: -6,
//                     }}
//                     className="group rounded-[1.8rem] border border-[#E8E3DE]/10 bg-[#151414] p-7 sm:p-9"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-[9px] font-bold text-[#EE6C1A]">
//                         {property.number}
//                       </span>

//                       <Icon
//                         size={21}
//                         strokeWidth={1.5}
//                         className="text-[#8B8B8B] transition group-hover:text-[#EE6C1A]"
//                       />
//                     </div>

//                     <h3 className="mt-20 text-3xl font-bold tracking-[-0.035em] text-[#E8E3DE]">
//                       {property.title}
//                     </h3>

//                     <p className="mt-4 text-xs leading-6 text-[#8B8B8B]">
//                       {property.text}
//                     </p>

//                     <div className="mt-8 h-px w-8 bg-[#EE6C1A] transition-all duration-500 group-hover:w-full" />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] py-24 text-[#050505] sm:py-32">
//         <div className="absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full border border-[#050505]/10" />

//         <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full border border-[#050505]/10" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
//             <div>
//               <SectionLabel
//                 number="06"
//                 dark
//               >
//                 THE PROCESS
//               </SectionLabel>

//               <h2 className="mt-7 max-w-md text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl">
//                 Simple from first contact to treatment.
//               </h2>
//             </div>

//             <div className="relative">
//               <div className="absolute bottom-8 left-[15px] top-8 w-px bg-[#050505]/15 sm:left-[19px]" />

//               <div className="space-y-8">
//                 {process.map((step) => {
//                   const Icon = step.icon;

//                   return (
//                     <motion.div
//                       key={step.number}
//                       whileHover={{
//                         x: 8,
//                       }}
//                       className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
//                     >
//                       <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#050505] text-[#EE6C1A] sm:h-10 sm:w-10">
//                         <Icon size={15} />
//                       </div>

//                       <div className="border-b border-[#050505]/15 pb-8">
//                         <div className="flex items-baseline gap-4">
//                           <span className="text-[9px] font-bold opacity-50">
//                             {step.number}
//                           </span>

//                           <h3 className="text-2xl font-bold tracking-[-0.035em]">
//                             {step.title}
//                           </h3>
//                         </div>

//                         <p className="mt-3 max-w-xl text-sm leading-6 opacity-65">
//                           {step.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           REVIEWS
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14">
//             <SectionLabel number="07">
//               CUSTOMER EXPERIENCES
//             </SectionLabel>

//             <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//               Clear communication
//               <span className="italic font-semibold text-[#8B8B8B]">
//                 {" "}
//                 matters.
//               </span>
//             </h2>
//           </div>

//           <div className="grid gap-5 lg:grid-cols-12">
//             <div className="relative overflow-hidden rounded-[2rem] bg-[#050505] p-7 sm:p-10 lg:col-span-7 lg:p-14">
//               <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#EE6C1A]/10" />

//               <div className="relative">
//                 <div className="mb-12 flex gap-1 text-[#EE6C1A]">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span key={star}>★</span>
//                   ))}
//                 </div>

//                 <p className="max-w-3xl text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-[#E8E3DE] sm:text-3xl">
//                   “{testimonials[0].quote}”
//                 </p>

//                 <div className="mt-12 flex items-center gap-4 border-t border-[#E8E3DE]/10 pt-6">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE6C1A] text-xs font-bold text-[#050505]">
//                     LH
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold text-[#E8E3DE]">
//                       {testimonials[0].name}
//                     </p>

//                     <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//                       {testimonials[0].area}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-5 lg:col-span-5">
//               {testimonials.slice(1).map(
//                 (review, index) => (
//                   <div
//                     key={review.name}
//                     className="rounded-[2rem] border border-[#E8E3DE]/10 bg-[#050505] p-7 sm:p-9"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#EE6C1A]">
//                         0{index + 2} / Review
//                       </span>

//                       <span className="text-[#EE6C1A]">
//                         ★★★★★
//                       </span>
//                     </div>

//                     <p className="mt-12 text-sm leading-7 text-[#B9B2AA]">
//                       “{review.quote}”
//                     </p>

//                     <div className="mt-8 border-t border-[#E8E3DE]/10 pt-5">
//                       <p className="text-xs font-semibold text-[#E8E3DE]">
//                         {review.name}
//                       </p>

//                       <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//                         {review.area}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA + FORM
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="overflow-hidden rounded-[2.5rem] border border-[#E8E3DE]/10 bg-[#151414]">
//             <div className="grid lg:grid-cols-[.9fr_1.1fr]">
//               <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
//                 <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#EE6C1A]/20" />

//                 <SectionLabel number="08">
//                   TALK TO PRIMESHIELD
//                 </SectionLabel>

//                 <h2 className="mt-8 max-w-xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//                   Not sure what you're dealing with?
//                 </h2>

//                 <p className="mt-7 max-w-lg text-sm leading-7 text-[#8B8B8B]">
//                   Give us a few details about the pest
//                   problem and your property. Request a
//                   callback and we'll get back to you.
//                 </p>

//                 <a
//                   href={phoneHref}
//                   className="mt-10 inline-flex items-center gap-3 text-2xl font-bold tracking-[-0.025em] text-[#E8E3DE] transition hover:text-[#EE6C1A] sm:text-3xl"
//                 >
//                   {phoneNumber}

//                   <ArrowUpRight size={22} />
//                 </a>

//                 <div className="mt-10 flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-7">
//                   <MapPin
//                     size={16}
//                     className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                   />

//                   <span className="max-w-xs text-[10px] leading-5 text-[#8B8B8B]">
//                     {address}
//                   </span>
//                 </div>
//               </div>

//               <div className="border-t border-[#E8E3DE]/10 bg-[#050505] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-5"
//                 >
//                   {/* NAME + POSTCODE */}

//                   <div className="grid md:grid-cols-2 gap-5">
//                     <div>
//                       <label
//                         htmlFor="sidcup-name"
//                         className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                       >
//                         Name
//                       </label>

//                       <input
//                         id="sidcup-name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         required
//                         className="w-full h-14 bg-[#151414] border border-white/10 px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none focus:border-[#EE6C1A] transition-colors"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="sidcup-postcode"
//                         className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                       >
//                         Postcode
//                       </label>

//                       <input
//                         id="sidcup-postcode"
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="Your postcode"
//                         required
//                         className="w-full h-14 bg-[#151414] border border-white/10 px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none focus:border-[#EE6C1A] transition-colors"
//                       />
//                     </div>
//                   </div>

//                   {/* PHONE */}

//                   <div>
//                     <label
//                       htmlFor="sidcup-phone"
//                       className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                     >
//                       Phone Number
//                     </label>

//                     <input
//                       id="sidcup-phone"
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className={`w-full h-14 bg-[#151414] border px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none transition-colors ${
//                         phoneError
//                           ? "border-red-500"
//                           : "border-white/10 focus:border-[#EE6C1A]"
//                       }`}
//                     />
//                   </div>

//                   {phoneError && (
//                     <p className="text-xs font-semibold text-red-400">
//                       {phoneError}
//                     </p>
//                   )}

//                   {/* SUBMIT */}

//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
//                     <p className="text-[10px] leading-6 text-[#8B8B8B] max-w-sm">
//                       By submitting this form, you're asking PrimeShield
//                       Services Sidcup to contact you regarding your enquiry.
//                     </p>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group inline-flex items-center justify-center gap-5 bg-[#EE6C1A] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-white hover:text-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300"
//                     >
//                       {loading
//                         ? "Sending..."
//                         : "Request Contact"}

//                       {!loading && (
//                         <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CONTACT STRIP
//           NO FOOTER / NO NAVBAR
//       ===================================================== */}

//       <section className="border-t border-[#E8E3DE]/10 bg-[#151414]">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-14">
//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
//                 PrimeShield Services Sidcup
//               </p>

//               <p className="mt-3 max-w-xl text-2xl font-bold leading-tight text-[#E8E3DE] sm:text-3xl">
//                 Professional pest control for Sidcup and nearby areas.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center gap-2 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#050505]"
//               >
//                 <Phone size={13} />
//                 Call {phoneNumber}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 Contact us
//                 <ArrowUpRight size={13} />
//               </Link>
//             </div>
//           </div>

//           <div className="border-t border-[#E8E3DE]/10 py-5 text-[8px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//             © {new Date().getFullYear()} PrimeShield Services Sidcup
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   Search,
//   Target,
//   Check,
//   Home,
//   Building2,
//   Bug,
//   Mouse,
//   BedDouble,
//   CircleAlert,
//   Clock3,
//   ChevronDown,
// } from "lucide-react";

// const businessName = "PrimeShield Pimlico";
// const phoneNumber = "+44 7405 203539";
// const address = "91 Cambridge St, Pimlico, London SW1V 4PY, United Kingdom";
// const serviceArea = "Pimlico and nearby areas";

// const brandColors = {
//   orange: "#EE6C1A",
//   dark: "#151414",
//   black: "#050505",
//   grey: "#8B8B8B",
//   soft: "#E8E3DE",
//   muted: "#B9B2AA",
// };

// /*
//   IMPORTANT:
//   The existing PrimeShield image paths are intentionally preserved.
//   Replace none of these paths unless the image files themselves change.
// */
// const images = {
//   hero: "/images/herohome.webp",
//   rodents: "/images/rodents.webp",
//   bedbugs: "/images/bedbugs.webp",
//   wasps: "/images/wasps.webp",
//   why: "/images/why-choose-pest-control.webp",
//   inspection: "/images/about-pest-control.webp",
// };

// const services = [
//   {
//     title: "Rat & Mice Control",
//     category: "RODENTS",
//     text: "Practical rodent control for homes, flats, landlords and local businesses across Pimlico. We identify signs of activity, likely access points and the conditions helping rodents remain.",
//     image: images.rodents,
//     icon: Mouse,
//   },
//   {
//     title: "Bed Bug Treatment",
//     category: "BED BUGS",
//     text: "A careful treatment approach for bedrooms, rental properties and affected spaces, based on the level and location of the activity.",
//     image: images.bedbugs,
//     icon: BedDouble,
//   },
//   {
//     title: "Wasp Nest Treatment",
//     category: "WASPS",
//     text: "Professional treatment for active wasp nests around residential and commercial properties, with attention to nest location and the surrounding area.",
//     image: images.wasps,
//     icon: Bug,
//   },
// ];

// const faqs = [
//   {
//     q: "What areas does PrimeShield Pimlico cover?",
//     a: "We provide pest-control support throughout Pimlico and nearby areas. If you are unsure whether your property is within our service area, contact us and we can discuss your location.",
//   },
//   {
//     q: "Do you treat homes and flats?",
//     a: "Yes. Our service is suitable for homes, flats, rental properties, landlords and local businesses.",
//   },
//   {
//     q: "What happens when I contact you?",
//     a: "We first ask about what you have noticed, where the activity is occurring and the type of property involved. From there, we can discuss the appropriate next step.",
//   },
//   {
//     q: "Can pest problems be prevented from returning?",
//     a: "Where relevant, we look beyond the immediate activity and consider access points, conditions and other factors that may contribute to recurring pest problems.",
//   },
// ];

// function SectionTag({ children, light = false }) {
//   return (
//     <div
//       className={`inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] ${
//         light ? "text-[#050505]/65" : "text-[#EE6C1A]"
//       }`}
//     >
//       <span
//         className={`h-2 w-2 rounded-full ${
//           light ? "bg-[#050505]" : "bg-[#EE6C1A]"
//         }`}
//       />
//       <span>{children}</span>
//     </div>
//   );
// }

// function SplitLine() {
//   return <div className="h-px w-full bg-white/10" />;
// }

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");
//   const [openFaq, setOpenFaq] = useState(0);

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       /*
//         Same callback API pattern as the supplied PrimeShield site.
//         Only the Pimlico business details sent in the payload are changed.
//       */
//       axios.post(
//         "https://primeshield-pimlico-backend.vercel.app/api/callback",
//         {
//           ...formData,
//           area: serviceArea,
//           business: businessName,
//           address,
//           phoneNumber,
//         }
//       ),
//       {
//         loading: "Sending your Pimlico callback request...",
//         success: () => {
//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           setLoading(false);
//           return `${businessName} will contact you shortly.`;
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Request failed. Please try again."
//           );
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "3px",
//           padding: "12px 18px",
//         },
//         success: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: "1px solid #ef4444",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <main
//       className="min-h-screen overflow-x-hidden bg-[#151414] text-[#E8E3DE]"
//       style={{
//         fontFamily: "Inter, Arial, Helvetica, sans-serif",
//       }}
//     >
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#151414",
//             color: "#FFFFFF",
//             border: "1px solid rgba(238,108,26,0.45)",
//             borderRadius: "3px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
//           },
//         }}
//       />

//       {/* =========================================================
//           HERO — NEW EDITORIAL SPLIT LAYOUT
//       ========================================================= */}
//       <section className="relative bg-[#050505]">
//         <div className="mx-auto max-w-[1540px] px-5 pt-5 sm:px-8 lg:px-10">
//           <div className="grid min-h-[760px] overflow-hidden border border-white/10 lg:grid-cols-[1.08fr_.92fr]">
//             <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-14 xl:p-16">
//               <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full border border-[#EE6C1A]/20" />
//               <div className="absolute bottom-[-160px] right-[-100px] h-96 w-96 rounded-full border border-white/5" />

//               <div className="relative z-10">
//                 <SectionTag>PrimeShield Pimlico</SectionTag>

//                 <div className="mt-14 max-w-4xl">
//                   <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B8B8B]">
//                     Local pest control · SW1V
//                   </p>

//                   <h1 className="text-[3.1rem] font-bold leading-[0.86] tracking-[-0.065em] sm:text-[4rem] lg:text-[5rem] xl:text-[5.6rem]">
//                     Pest control
//                     <span className="block text-[#EE6C1A]">
//                       for Pimlico.
//                     </span>
//                   </h1>

//                   <p className="mt-10 max-w-xl text-sm leading-7 text-[#B9B2AA] sm:text-base">
//                     Professional pest-control support for homes, flats,
//                     landlords and local businesses in Pimlico and nearby
//                     areas. Clear advice, a considered approach and treatment
//                     based on the situation at your property.
//                   </p>

//                   <div className="mt-9 flex flex-wrap gap-3">
//                     <Link
//                       to="/services/"
//                       className="group inline-flex items-center gap-4 bg-[#EE6C1A] px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#050505] transition hover:bg-white"
//                     >
//                       Explore services
//                       <span className="flex h-7 w-7 items-center justify-center bg-[#050505] text-[#EE6C1A] transition group-hover:rotate-45">
//                         <ArrowUpRight size={13} />
//                       </span>
//                     </Link>

//                     <a
//                       href={phoneHref}
//                       className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                     >
//                       <Phone size={13} />
//                       {phoneNumber}
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative z-10 mt-14 grid border-t border-white/10 pt-5 sm:grid-cols-3">
//                 <div className="py-3 sm:border-r sm:border-white/10 sm:pr-5">
//                   <p className="text-2xl font-bold tracking-tight">01</p>
//                   <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Understand
//                   </p>
//                 </div>
//                 <div className="py-3 sm:px-5 sm:border-r sm:border-white/10">
//                   <p className="text-2xl font-bold tracking-tight">02</p>
//                   <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Treat
//                   </p>
//                 </div>
//                 <div className="py-3 sm:pl-5">
//                   <p className="text-2xl font-bold tracking-tight">03</p>
//                   <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Prevent
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative min-h-[520px] overflow-hidden bg-[#151414] lg:min-h-0">
//               <div className="absolute right-[8%] top-[7%] h-[76%] w-[70%] overflow-hidden rounded-[48%_52%_42%_58%/38%_42%_58%_62%] border-[10px] border-[#151414] shadow-2xl sm:right-[9%] sm:w-[68%]">
//                 <img
//                   src={images.hero}
//                   alt="PrimeShield Pimlico pest control"
//                   className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
//               </div>
//               <div className="absolute bottom-[9%] left-[8%] h-[30%] w-[28%] overflow-hidden rounded-[55%_45%_60%_40%/48%_62%_38%_52%] border-[7px] border-[#050505] shadow-xl sm:left-[7%] sm:w-[30%]">
//                 <img
//                   src={images.inspection}
//                   alt="Pest inspection in Pimlico"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="absolute left-[10%] top-[16%] h-3 w-3 rounded-full bg-[#EE6C1A]" />
//               <div className="absolute right-[10%] bottom-[13%] h-16 w-16 rounded-full border border-[#EE6C1A]/50" />
//               <div className="absolute bottom-8 right-5 flex items-center gap-3 sm:right-8">
//                 <span className="h-px w-10 bg-[#EE6C1A]" />
//                 <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#B9B2AA]">
//                   Pimlico · SW1V
//                 </span>
//               </div>

//               <div className="absolute bottom-8 left-8 max-w-[190px] sm:left-10 sm:bottom-10">
//                 <span className="inline-flex rounded-full bg-[#EE6C1A] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-[#050505]">
//                   Local coverage
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CALLBACK — MOVED DIRECTLY UNDER HERO
//       ========================================================= */}
//       <section className="bg-[#EE6C1A] text-[#050505]">
//         <div className="mx-auto max-w-[1540px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
//           <div className="grid gap-7 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.28em] opacity-60">
//                 Need a callback?
//               </p>
//               <h2 className="mt-2 max-w-md text-2xl font-bold leading-none tracking-[-0.045em] sm:text-2xl">
//                 Tell us what is happening.
//               </h2>
//               <p className="mt-3 max-w-md text-xs leading-5 opacity-70">
//                 Leave your details and PrimeShield Pimlico can contact you
//                 about your pest-control enquiry.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="grid gap-3 sm:grid-cols-3"
//             >
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 required
//                 className="h-14 border border-black/10 bg-white/85 px-4 text-sm text-[#050505] outline-none placeholder:text-black/40 focus:bg-white"
//               />

//               <input
//                 type="text"
//                 name="postcode"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 placeholder="Postcode"
//                 required
//                 className="h-14 border border-black/10 bg-white/85 px-4 text-sm text-[#050505] outline-none placeholder:text-black/40 focus:bg-white"
//               />

//               <div className="relative">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone number"
//                   required
//                   className={`h-14 w-full border bg-white/85 px-4 pr-12 text-sm text-[#050505] outline-none placeholder:text-black/40 focus:bg-white ${
//                     phoneError ? "border-red-700" : "border-black/10"
//                   }`}
//                 />

//                 {phoneError && (
//                   <p className="absolute left-0 top-[58px] text-[10px] font-bold text-red-800">
//                     {phoneError}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="group flex h-14 items-center justify-center gap-3 bg-[#050505] px-6 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#050505] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-3 lg:col-span-1"
//               >
//                 {loading ? "Sending..." : "Request callback"}
//                 {!loading && (
//                   <ArrowUpRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO — NEW NUMBERED EDITORIAL PANEL
//       ========================================================= */}
//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[.35fr_1fr_.65fr] lg:items-start">
//             <div>
//               <SectionTag>01 · The local difference</SectionTag>
//             </div>

//             <div>
//               <h2 className="max-w-4xl text-2xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
//                 A pest problem
//                 <span className="block text-[#EE6C1A]">
//                   needs context.
//                 </span>
//               </h2>
//             </div>

//             <div className="lg:pt-3">
//               <p className="text-sm leading-7 text-[#B9B2AA]">
//                 A sighting is only part of the picture. Where pests are
//                 appearing, how they are getting in and what conditions are
//                 helping them remain can all influence the right response.
//               </p>
//               <p className="mt-6 text-sm leading-7 text-[#8B8B8B]">
//                 PrimeShield Pimlico takes a property-focused approach so the
//                 next step is based on the situation rather than a generic
//                 solution.
//               </p>

//               <div className="mt-8 flex items-center gap-4">
//                 <span className="flex h-11 w-11 items-center justify-center border border-white/10">
//                   <Search size={17} className="text-[#EE6C1A]" />
//                 </span>
//                 <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
//                   Inspect · understand · respond
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES — ORGANIC IMAGE COMPOSITION
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#E8E3DE] py-24 text-[#050505] sm:py-28">
//         <div className="absolute -left-32 top-16 h-72 w-72 rounded-full border border-black/10" />
//         <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-black/10" />

//         <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
//             <div>
//               <SectionTag light>02 · What we deal with</SectionTag>
//               <h2 className="mt-6 max-w-lg text-3xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-[3.4rem]">
//                 Three common
//                 <span className="block text-[#EE6C1A]">pest problems.</span>
//               </h2>
//             </div>
//             <div className="max-w-lg lg:justify-self-end">
//               <p className="text-sm leading-7 text-black/55">
//                 Focused support for the pest problems most often found around
//                 Pimlico. Each service is presented around the problem itself,
//                 not a generic card layout.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-7 lg:mt-24">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               const rotations = ["md:-rotate-2", "md:rotate-2", "md:-rotate-1"];
//               const shapes = [
//                 "rounded-[58%_42%_55%_45%/42%_55%_45%_58%]",
//                 "rounded-[42%_58%_46%_54%/58%_40%_60%_42%]",
//                 "rounded-[52%_48%_40%_60%/45%_62%_38%_55%]"
//               ];
//               return (
//                 <motion.article
//                   key={service.title}
//                   whileHover={{ y: -8, rotate: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className={`relative ${rotations[index]} transition-transform duration-300`}
//                 >
//                   <div className="relative mx-auto h-[285px] w-[285px] max-w-full">
//                     <div className={`absolute inset-0 overflow-hidden bg-[#151414] ${shapes[index]}`}>
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                       />
//                     </div>
//                     <div className="absolute -bottom-3 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505] shadow-lg">
//                       <Icon size={19} strokeWidth={1.7} />
//                     </div>
//                     <span className="absolute -left-1 top-3 text-[9px] font-black tracking-[0.15em] text-[#EE6C1A]">
//                       0{index + 1}
//                     </span>
//                   </div>

//                   <div className="mt-10 px-2 text-center">
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                       {service.category}
//                     </p>
//                     <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em]">
//                       {service.title}
//                     </h3>
//                     <p className="mx-auto mt-4 max-w-xs text-xs leading-6 text-black/55">
//                       {service.text}
//                     </p>
//                     <Link
//                       to="/services/"
//                       className="mt-5 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] transition hover:text-[#EE6C1A]"
//                     >
//                       View service <ArrowUpRight size={13} />
//                     </Link>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INSPECTION — OFFSET IMAGE COMPOSITION
//       ========================================================= */}
//       <section className="bg-[#050505] py-20 sm:py-28">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
//             <div className="relative min-h-[500px]">
//               <div className="absolute left-[4%] top-6 h-[390px] w-[74%] overflow-hidden rounded-[48%_52%_58%_42%/56%_42%_58%_44%] border-[8px] border-[#050505] sm:h-[460px]">
//                 <img
//                   src={images.inspection}
//                   alt="Pest control inspection"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="absolute bottom-2 right-0 h-[170px] w-[42%] overflow-hidden rounded-[60%_40%_48%_52%/44%_58%_42%_56%] border-[7px] border-[#050505]">
//                 <img
//                   src={images.why}
//                   alt="Professional pest control"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="absolute bottom-5 left-0 max-w-[230px] border-l-2 border-[#EE6C1A] bg-[#151414] p-5 sm:p-6">
//                 <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#EE6C1A]">
//                   The first step
//                 </p>
//                 <p className="mt-3 text-lg font-bold leading-tight">
//                   Understand the signs before deciding what happens next.
//                 </p>
//               </div>
//               <div className="absolute right-[20%] top-0 h-3 w-3 rounded-full bg-[#EE6C1A]" />
//             </div>

//             <div className="lg:pl-8">
//               <SectionTag>03 · Before treatment</SectionTag>
//               <h2 className="mt-7 max-w-2xl text-4xl font-bold leading-[0.92] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
//                 Start with
//                 <span className="block text-[#EE6C1A]">the signs.</span>
//               </h2>
//               <p className="mt-7 max-w-xl text-sm leading-7 text-[#B9B2AA]">
//                 Pest activity can be connected to access points, food,
//                 nesting areas, movement routes and other property conditions.
//                 Understanding these details helps shape the next step.
//               </p>

//               <div className="mt-8 grid gap-0 border-t border-white/10 sm:grid-cols-2">
//                 {[
//                   "Look for signs of activity",
//                   "Understand where activity is occurring",
//                   "Discuss the appropriate treatment",
//                   "Consider prevention where relevant",
//                 ].map((item, index) => (
//                   <div key={item} className="flex items-center gap-4 border-b border-white/10 py-4 sm:pr-5">
//                     <span className="text-[9px] font-black text-[#EE6C1A]">0{index + 1}</span>
//                     <span className="text-xs leading-5">{item}</span>
//                     <Check size={14} className="ml-auto shrink-0 text-[#8B8B8B]" />
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/about-us/"
//                 className="mt-7 inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[9px] font-black uppercase tracking-[0.18em] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 How we work
//                 <ArrowRight size={14} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY CHOOSE — HORIZONTAL FEATURE STRIP
//       ========================================================= */}
//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
//             <div>
//               <SectionTag>04 · Why PrimeShield</SectionTag>
//               <h2 className="mt-7 text-2xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
//                 Clear service.
//                 <span className="block text-[#EE6C1A]">
//                   No guesswork.
//                 </span>
//               </h2>
//               <p className="mt-7 max-w-sm text-sm leading-7 text-[#8B8B8B]">
//                 A straightforward service should leave you knowing what was
//                 found, what is being done and what the next step is.
//               </p>
//             </div>

//             <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
//               {[
//                 {
//                   icon: Search,
//                   title: "Understand first",
//                   text: "We consider the signs, location and circumstances before deciding how to approach the problem.",
//                 },
//                 {
//                   icon: Target,
//                   title: "Targeted response",
//                   text: "The treatment approach is based around the pest activity and the property.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Professional communication",
//                   text: "Clear information from your initial enquiry through assessment and treatment.",
//                 },
//                 {
//                   icon: Check,
//                   title: "Think beyond today",
//                   text: "Where relevant, we consider conditions that may contribute to recurring activity.",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={item.title}
//                     whileHover={{ backgroundColor: "#050505" }}
//                     className="min-h-[250px] border-b border-r border-white/10 p-7 sm:p-9"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-[9px] font-black text-[#EE6C1A]">
//                         0{index + 1}
//                       </span>
//                       <Icon
//                         size={20}
//                         strokeWidth={1.5}
//                         className="text-[#8B8B8B]"
//                       />
//                     </div>

//                     <h3 className="mt-20 text-xl font-bold tracking-[-0.03em]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 text-xs leading-6 text-[#8B8B8B]">
//                       {item.text}
//                     </p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROPERTY TYPES — NEW DARK/ORANGE BAND
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#EE6C1A] py-24 text-[#050505] sm:py-32">
//         <div className="absolute -right-24 top-[-160px] h-[520px] w-[520px] rounded-full border border-black/10" />
//         <div className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full border border-black/10" />

//         <div className="relative mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
//             <div>
//               <SectionTag light>05 · Property support</SectionTag>

//               <h2 className="mt-7 max-w-xl text-2xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
//                 From front door
//                 <span className="block opacity-55">
//                   to business premises.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-md text-sm leading-7 opacity-70">
//                 Different properties can create different pest-control
//                 challenges. The response should reflect the environment.
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               <div className="border border-black/15 bg-white/10 p-7 sm:p-9">
//                 <Home size={25} />
//                 <h3 className="mt-14 text-2xl font-bold tracking-[-0.04em]">
//                   Homes & Flats
//                 </h3>
//                 <p className="mt-4 max-w-sm text-xs leading-6 opacity-70">
//                   Support for homeowners, tenants, rental properties and
//                   residential buildings dealing with unwanted pest activity.
//                 </p>
//               </div>

//               <div className="border border-black/15 bg-white/10 p-7 sm:p-9">
//                 <Building2 size={25} />
//                 <h3 className="mt-14 text-2xl font-bold tracking-[-0.04em]">
//                   Local Businesses
//                 </h3>
//                 <p className="mt-4 max-w-sm text-xs leading-6 opacity-70">
//                   Professional pest-control support for local commercial
//                   environments and premises.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL PIMLICO COVERAGE / ADDRESS
//       ========================================================= */}
//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
//             <div className="border border-white/10 p-7 sm:p-10 lg:p-14">
//               <div className="flex items-start justify-between gap-6">
//                 <SectionTag>06 · Local to Pimlico</SectionTag>

//                 <MapPin size={21} className="text-[#EE6C1A]" />
//               </div>

//               <h2 className="mt-12 max-w-4xl text-2xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
//                 Based around
//                 <span className="block text-[#EE6C1A]">
//                   Pimlico.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-[#B9B2AA]">
//                 PrimeShield Pimlico provides pest-control support across
//                 Pimlico and nearby areas, for both residential and local
//                 commercial properties.
//               </p>

//               <div className="mt-10 grid gap-5 sm:grid-cols-2">
//                 <div className="border-t border-white/10 pt-5">
//                   <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Service area
//                   </p>
//                   <p className="mt-2 text-lg font-semibold">
//                     {serviceArea}
//                   </p>
//                 </div>

//                 <div className="border-t border-white/10 pt-5">
//                   <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Address
//                   </p>
//                   <p className="mt-2 text-sm leading-6 text-[#B9B2AA]">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col justify-between bg-[#151414] p-7 sm:p-10 lg:p-12">
//               <div>
//                 <CircleAlert size={28} className="text-[#EE6C1A]" />

//                 <h3 className="mt-8 text-2xl font-bold leading-tight tracking-[-0.035em]">
//                   Not sure what pest you're dealing with?
//                 </h3>

//                 <p className="mt-5 text-sm leading-7 text-[#8B8B8B]">
//                   You do not need to diagnose the problem perfectly before
//                   getting in touch. Tell us what you have noticed and where it
//                   is happening.
//                 </p>
//               </div>

//               <a
//                 href={phoneHref}
//                 className="mt-12 flex items-center justify-between border border-white/10 bg-[#050505] p-5 transition hover:border-[#EE6C1A]"
//               >
//                 <div>
//                   <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Call PrimeShield
//                   </p>
//                   <p className="mt-1 text-xl font-bold">
//                     {phoneNumber}
//                   </p>
//                 </div>
//                 <ArrowUpRight className="text-[#EE6C1A]" size={22} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ — NEW SECTION
//       ========================================================= */}
//       <section className="bg-[#E8E3DE] py-24 text-[#050505] sm:py-32">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
//             <div>
//               <SectionTag light>07 · Questions</SectionTag>
//               <h2 className="mt-7 max-w-md text-2xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-4xl">
//                 Before you
//                 <span className="block text-[#EE6C1A]">
//                   call.
//                 </span>
//               </h2>
//               <p className="mt-7 max-w-sm text-sm leading-7 text-black/60">
//                 A few straightforward answers about contacting PrimeShield
//                 Pimlico.
//               </p>
//             </div>

//             <div className="border-t border-black/15">
//               {faqs.map((faq, index) => {
//                 const isOpen = openFaq === index;

//                 return (
//                   <div key={faq.q} className="border-b border-black/15">
//                     <button
//                       type="button"
//                       onClick={() => setOpenFaq(isOpen ? -1 : index)}
//                       className="flex w-full items-center gap-5 py-6 text-left"
//                     >
//                       <span className="text-[9px] font-black text-[#EE6C1A]">
//                         0{index + 1}
//                       </span>

//                       <span className="flex-1 text-lg font-bold tracking-[-0.025em] sm:text-xl">
//                         {faq.q}
//                       </span>

//                       <ChevronDown
//                         size={18}
//                         className={`shrink-0 transition-transform ${
//                           isOpen ? "rotate-180 text-[#EE6C1A]" : ""
//                         }`}
//                       />
//                     </button>

//                     {isOpen && (
//                       <div className="pb-7 pl-9 pr-8">
//                         <p className="max-w-2xl text-sm leading-7 text-black/60">
//                           {faq.a}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================= */}
//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="relative overflow-hidden border border-white/10 bg-[#151414] p-7 sm:p-12 lg:p-16">
//             <div className="absolute right-[-100px] top-[-180px] h-[420px] w-[420px] rounded-full border border-[#EE6C1A]/20" />

//             <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
//               <div>
//                 <SectionTag>08 · Talk to PrimeShield</SectionTag>

//                 <h2 className="mt-8 max-w-5xl text-2xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-4xl lg:text-5xl">
//                   Got a pest
//                   <span className="block text-[#EE6C1A]">
//                     problem?
//                   </span>
//                 </h2>

//                 <p className="mt-8 max-w-xl text-sm leading-7 text-[#8B8B8B]">
//                   Tell us what you are seeing, where it is happening and what
//                   type of property you have. We can discuss the situation and
//                   the next step.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-3">
//                   <a
//                     href={phoneHref}
//                     className="inline-flex items-center gap-3 bg-[#EE6C1A] px-7 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#050505] transition hover:bg-white"
//                   >
//                     <Phone size={14} />
//                     Call {phoneNumber}
//                   </a>

//                   <Link
//                     to="/contact-us/"
//                     className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-[10px] font-black uppercase tracking-[0.18em] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                   >
//                     Contact us
//                     <ArrowUpRight size={14} />
//                   </Link>
//                 </div>
//               </div>

//               <div className="max-w-xs border-l border-white/10 pl-6">
//                 <Clock3 size={20} className="text-[#EE6C1A]" />
//                 <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B8B8B]">
//                   PrimeShield Pimlico
//                 </p>
//                 <p className="mt-2 text-sm leading-6 text-[#B9B2AA]">
//                   Pest-control support for Pimlico and nearby areas.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CONTACT STRIP
//       ========================================================= */}
//       <section className="border-t border-white/10 bg-[#151414]">
//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
//           <div className="flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between sm:py-12">
//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
//                 {businessName}
//               </p>
//               <p className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-2xl">
//                 Professional pest control for Pimlico and nearby areas.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center gap-2 bg-[#EE6C1A] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#050505]"
//               >
//                 <Phone size={13} />
//                 Call {phoneNumber}
//               </a>

//               <Link
//                 to="/contact-us/"
//                 className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 Contact us
//                 <ArrowUpRight size={13} />
//               </Link>
//             </div>
//           </div>

//           <SplitLine />

//           <div className="py-5 text-[8px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//             © {new Date().getFullYear()} {businessName}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

























// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Phone,
//   CheckCircle2,
//   Building2,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Layers3,
//   LocateFixed,
//   MousePointer2,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   /* =========================================================
//      PRIME SHIELD PIMLICO DETAILS
//   ========================================================== */

//   const companyName = "PrimeShield Pimlico";
//   const phone = "+44 7405 203539";
//   const address =
//     "91 Cambridge St, Pimlico, London SW1V 4PY, United Kingdom";
//   const serviceArea = "Pimlico and nearby areas";

//   /* =========================================================
//      CATEGORIES
//   ========================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =========================================================
//      SERVICES
//   ========================================================== */

//   const servicesData = [
//     {
//       id: "01",
//       category: "Insects",
//       title: "Ant Control Pimlico",
//       image: "/images/ants.webp",
//       icon: Bug,
//       text:
//         "Practical ant control for activity around kitchens, food areas, cupboards, entrances and other parts of Pimlico properties.",
//     },
//     {
//       id: "02",
//       category: "Insects",
//       title: "Bed Bug Treatment Pimlico",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       text:
//         "Focused support for suspected bed bug activity around bedrooms, beds, furniture, upholstery and nearby living spaces.",
//     },
//     {
//       id: "03",
//       category: "Insects",
//       title: "Carpet Moth Treatment Pimlico",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       text:
//         "Targeted treatment support where carpet moth activity is affecting carpets, rugs, wardrobes, furnishings or fabrics.",
//     },
//     {
//       id: "04",
//       category: "Insects",
//       title: "Carpet Beetle Control Pimlico",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       text:
//         "Professional control for carpet beetle activity around carpets, fabrics, furnishings, storage areas and vulnerable materials.",
//     },
//     {
//       id: "05",
//       category: "Insects",
//       title: "Cockroach Control Pimlico",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       text:
//         "Focused cockroach control for kitchens, food preparation areas, flats, homes, workplaces and commercial premises.",
//     },
//     {
//       id: "06",
//       category: "Rodents & Wildlife",
//       title: "Rat & Mice Control Pimlico",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       text:
//         "Rodent control for signs of rats or mice around kitchens, cupboards, lofts, wall spaces, communal areas and businesses.",
//     },
//     {
//       id: "07",
//       category: "Insects",
//       title: "Flea Control Pimlico",
//       image: "/images/flea.webp",
//       icon: Bug,
//       text:
//         "Treatment support for flea activity affecting carpets, furniture, bedrooms, living rooms and other occupied areas.",
//     },
//     {
//       id: "08",
//       category: "Insects",
//       title: "Wasp Nest Removal Pimlico",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       text:
//         "Professional assistance with active wasp nests around roofs, gardens, walls, extensions, outbuildings and properties.",
//     },
//     {
//       id: "09",
//       category: "Insects",
//       title: "Bumble Bee Nest Support Pimlico",
//       image: "/images/bee.webp",
//       icon: Bug,
//       text:
//         "Assessment and practical guidance when a bumble bee nest is causing concern around a home, garden or commercial property.",
//     },
//     {
//       id: "10",
//       category: "Rodents & Wildlife",
//       title: "Squirrel Control Pimlico",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       text:
//         "Support for squirrel activity affecting roof spaces, lofts, cavities and other areas where wildlife can gain access.",
//     },
//     {
//       id: "11",
//       category: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Pimlico",
//       image: "/images/hygene.webp",
//       icon: Home,
//       text:
//         "Practical property measures designed around vulnerable access points, pest entry routes and hygiene concerns.",
//     },
//     {
//       id: "12",
//       category: "Birds & Prevention",
//       title: "Bird Control Services Pimlico",
//       image: "/images/birds.webp",
//       icon: Bird,
//       text:
//         "Bird management and property protection for roofs, ledges, buildings, commercial premises and exposed areas.",
//     },
//   ];

//   /* =========================================================
//      HANDLE ROUTING STATE
//   ========================================================== */

//   useEffect(() => {
//     if (!location.state) return;

//     const targetCategory = location.state.category || "All";

//     if (categories.includes(targetCategory)) {
//       setSelectedCategory(targetCategory);
//     }

//     if (location.state.scrollToService) {
//       const timer = setTimeout(() => {
//         const serviceName = location.state.scrollToService;

//         const element = document.querySelector(
//           `[data-title="${serviceName} Pimlico"], [data-title="${serviceName}"]`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }, 300);

//       return () => clearTimeout(timer);
//     }
//   }, [location]);

//   /* =========================================================
//      FILTER
//   ========================================================== */

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.category === selectedCategory
//         );

//   /* =========================================================
//      CARD CLICK
//   ========================================================== */

//   const handleServiceClick = () => {
//     navigate("/contact-us/");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-[#E8E3DE]">
//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <ServicesHeroSection />

//       {/* =========================================================
//           INTRO / SERVICE DIRECTORY
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#E8E3DE] py-24 text-[#050505] sm:py-28 lg:py-36">
//         <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full border border-black/10" />

//         <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-black/10" />

//         <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
//                   {companyName}
//                 </span>
//               </div>

//               <p className="mt-10 text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 01 · What we deal with
//               </p>

//               <h2 className="mt-6 max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-5xl lg:text-[4.4rem]">
//                 Pest problems
//                 <span className="block text-black/20">
//                   rarely stay simple.
//                 </span>
//               </h2>
//             </div>

//             <div className="max-w-xl lg:justify-self-end">
//               <p className="text-sm leading-7 text-black/55 sm:text-base">
//                 From insects appearing in kitchens to rodents moving through
//                 hidden spaces, pest activity can affect every type of
//                 property. PrimeShield Pimlico provides focused support across
//                 Pimlico and nearby areas, with services selected around the
//                 problem rather than a one-size-fits-all approach.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <div className="border border-black/10 px-4 py-3">
//                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">
//                     {servicesData.length} Services
//                   </span>
//                 </div>

//                 <div className="border border-black/10 px-4 py-3">
//                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">
//                     Residential
//                   </span>
//                 </div>

//                 <div className="border border-black/10 px-4 py-3">
//                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">
//                     Commercial
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               CATEGORY FILTER
//           ====================================================== */}

//           <div className="mt-20 border-t border-black/10 pt-6 lg:mt-24">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-3">
//                 <Layers3
//                   size={17}
//                   strokeWidth={1.5}
//                   className="text-[#EE6C1A]"
//                 />

//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[0.28em]">
//                     Explore services
//                   </p>

//                   <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/30">
//                     {String(filteredServices.length).padStart(2, "0")} shown
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       onClick={() => setSelectedCategory(category)}
//                       className={`border px-5 py-3 text-[8px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
//                         active
//                           ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                           : "border-black/10 text-black/45 hover:border-[#EE6C1A] hover:text-black"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           ORGANIC SERVICE COLLECTION
//           COMPLETELY DIFFERENT VISUAL IDENTITY
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#E8E3DE] pb-28 text-[#050505] sm:pb-36 lg:pb-44">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-28">
//             {filteredServices.map((service, index) => {
//               const Icon = service.icon;

//               const rotations = [
//                 "md:-rotate-2",
//                 "md:rotate-1",
//                 "md:-rotate-1",
//                 "md:rotate-2",
//                 "md:-rotate-1",
//                 "md:rotate-1",
//               ];

//               const shapes = [
//                 "rounded-[58%_42%_55%_45%/42%_55%_45%_58%]",
//                 "rounded-[42%_58%_46%_54%/58%_40%_60%_42%]",
//                 "rounded-[52%_48%_40%_60%/45%_62%_38%_55%]",
//                 "rounded-[45%_55%_60%_40%/52%_40%_60%_48%]",
//                 "rounded-[60%_40%_48%_52%/40%_58%_42%_60%]",
//                 "rounded-[48%_52%_55%_45%/60%_42%_58%_40%]",
//               ];

//               const shape = shapes[index % shapes.length];
//               const rotation = rotations[index % rotations.length];

//               return (
//                 <motion.article
//                   key={service.id}
//                   data-title={service.title}
//                   role="button"
//                   tabIndex={0}
//                   onClick={handleServiceClick}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       e.preventDefault();
//                       handleServiceClick();
//                     }
//                   }}
//                   whileHover={{
//                     y: -10,
//                     rotate: 0,
//                   }}
//                   transition={{ duration: 0.35 }}
//                   className={`group cursor-pointer ${rotation}`}
//                 >
//                   {/* IMAGE */}

//                   <div className="relative mx-auto h-[285px] w-[285px] max-w-full sm:h-[315px] sm:w-[315px]">
//                     <div
//                       className={`absolute inset-0 overflow-hidden bg-[#151414] ${shape}`}
//                     >
//                       <img
//                         src={service.image}
//                         alt={`PrimeShield Pimlico ${service.title}`}
//                         className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                         loading="lazy"
//                         decoding="async"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />

//                       <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/0" />
//                     </div>

//                     {/* NUMBER */}

//                     <span className="absolute -left-1 top-4 text-[9px] font-black tracking-[0.15em] text-[#EE6C1A]">
//                       {service.id}
//                     </span>

//                     {/* ICON */}

//                     <div className="absolute -bottom-3 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505] shadow-xl transition duration-300 group-hover:scale-110">
//                       <Icon size={19} strokeWidth={1.7} />
//                     </div>
//                   </div>

//                   {/* CONTENT */}

//                   <div className="mt-10 px-2 text-center">
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                       {service.category}
//                     </p>

//                     <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
//                       {service.title}
//                     </h3>

//                     <p className="mx-auto mt-4 max-w-xs text-xs leading-6 text-black/50">
//                       {service.text}
//                     </p>

//                     <div className="mt-6 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] transition duration-300 group-hover:text-[#EE6C1A]">
//                       Enquire about this service
//                       <ArrowUpRight size={13} />
//                     </div>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="py-24 text-center">
//               <p className="text-sm font-black uppercase tracking-[0.2em] text-black/40">
//                 No services found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICE APPROACH
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#EE6C1A]/10" />

//         <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[560px] w-[560px] rounded-full border border-white/[0.05]" />

//         <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 02 · How we approach it
//               </p>

//               <h2 className="mt-6 max-w-xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-[5.2rem]">
//                 See the
//                 <br />
//                 <span className="text-white/15">problem.</span>
//                 <br />
//                 Understand
//                 <br />
//                 the property.
//               </h2>
//             </div>

//             <div className="lg:pt-10">
//               <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
//                 Effective pest control is not only about identifying what has
//                 been seen. Location, access, property conditions and the
//                 pattern of activity can all influence what happens next.
//                 PrimeShield Pimlico keeps the process focused, practical and
//                 clear.
//               </p>

//               <div className="mt-12 grid border-t border-white/10 sm:grid-cols-3">
//                 <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-7">
//                   <Search
//                     size={20}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <p className="mt-7 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                     01
//                   </p>

//                   <h3 className="mt-3 text-xl font-black uppercase">
//                     Identify
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/25">
//                     Understand the signs and where activity has been noticed.
//                   </p>
//                 </div>

//                 <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:px-7">
//                   <LocateFixed
//                     size={20}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <p className="mt-7 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                     02
//                   </p>

//                   <h3 className="mt-3 text-xl font-black uppercase">
//                     Assess
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/25">
//                     Consider the surrounding environment and likely access
//                     points.
//                   </p>
//                 </div>

//                 <div className="py-8 sm:pl-7">
//                   <ShieldCheck
//                     size={20}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <p className="mt-7 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                     03
//                   </p>

//                   <h3 className="mt-3 text-xl font-black uppercase">
//                     Respond
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/25">
//                     Match the response to the pest issue and property
//                     involved.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROPERTY TYPES
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 03 · Property types
//               </p>

//               <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-6xl lg:text-[5.8rem]">
//                 Different
//                 <br />
//                 buildings.
//                 <br />
//                 <span className="text-white/15">Different needs.</span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-white/30">
//               Pest activity can behave differently in a flat, family home,
//               workplace or shared building. Our services are available for
//               residential and commercial properties across Pimlico and nearby
//               areas.
//             </p>
//           </div>

//           <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
//             {/* RESIDENTIAL */}

//             <div className="group relative min-h-[380px] bg-[#151414] p-8 transition-all duration-500 hover:bg-[#E8E3DE] hover:text-[#050505] sm:p-10">
//               <div className="flex items-start justify-between">
//                 <Home
//                   size={25}
//                   strokeWidth={1.3}
//                   className="text-[#EE6C1A]"
//                 />

//                 <span className="text-[8px] font-black text-white/20 group-hover:text-black/20">
//                   01
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                   Residential
//                 </p>

//                 <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/25 transition-colors group-hover:text-black/50">
//                   Pest-control support for homes, flats, bedrooms, kitchens,
//                   lofts, garages and other residential spaces.
//                 </p>
//               </div>
//             </div>

//             {/* COMMERCIAL */}

//             <div className="group relative min-h-[380px] bg-[#151414] p-8 transition-all duration-500 hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//               <div className="flex items-start justify-between">
//                 <Building2
//                   size={25}
//                   strokeWidth={1.3}
//                   className="text-[#EE6C1A] transition-colors group-hover:text-black"
//                 />

//                 <span className="text-[8px] font-black text-white/20 group-hover:text-black/30">
//                   02
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A] group-hover:text-black/60">
//                   Commercial
//                 </p>

//                 <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
//                   Workplaces
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/25 transition-colors group-hover:text-black/55">
//                   Support for offices, shops, workplaces, communal areas and
//                   other commercial environments.
//                 </p>
//               </div>
//             </div>

//             {/* LOCAL */}

//             <div className="group relative min-h-[380px] bg-[#EE6C1A] p-8 text-black transition-all duration-500 hover:bg-[#E8E3DE] sm:p-10">
//               <div className="flex items-start justify-between">
//                 <MapPin size={25} strokeWidth={1.3} />

//                 <span className="text-[8px] font-black opacity-40">
//                   03
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <p className="text-[8px] font-black uppercase tracking-[0.25em] text-black/45">
//                   Local coverage
//                 </p>

//                 <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
//                   Pimlico & Nearby
//                 </h3>

//                 <p className="mt-4 text-xs font-semibold leading-6 text-black/55">
//                   Local pest-control support from PrimeShield Pimlico for
//                   properties across Pimlico and surrounding areas.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL PIMLICO SECTION
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#E8E3DE] py-24 text-[#050505] sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute right-[-150px] top-[-180px] text-[280px] font-black leading-none tracking-[-0.14em] text-black/[0.035]">
//           SW1V
//         </div>

//         <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 04 · Local coverage
//               </p>

//               <h2 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.07em] sm:text-7xl lg:text-[9rem]">
//                 PIMLICO
//               </h2>

//               <div className="mt-8 flex flex-wrap gap-2">
//                 <span className="border border-black/10 px-4 py-3 text-[8px] font-black uppercase tracking-[0.2em]">
//                   SW1V
//                 </span>

//                 <span className="border border-black/10 px-4 py-3 text-[8px] font-black uppercase tracking-[0.2em]">
//                   Pimlico
//                 </span>

//                 <span className="border border-black/10 px-4 py-3 text-[8px] font-black uppercase tracking-[0.2em]">
//                   Nearby Areas
//                 </span>
//               </div>
//             </div>

//             <div className="border-t border-black/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
//               <div className="flex items-start gap-4">
//                 <MapPin
//                   size={20}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-black/35">
//                     Local address
//                   </p>

//                   <p className="mt-3 text-sm font-black leading-6">
//                     {address}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-9 border-t border-black/10 pt-8">
//                 <p className="text-[8px] font-black uppercase tracking-[0.28em] text-black/35">
//                   Direct enquiries
//                 </p>

//                 <a
//                   href="tel:+447405203539"
//                   className="mt-3 flex items-center gap-3 text-2xl font-black text-[#EE6C1A] transition hover:text-black"
//                 >
//                   <Phone size={18} />
//                   {phone}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           QUICK SERVICE GUIDE
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 05 · Need help choosing?
//               </p>

//               <h2 className="mt-6 max-w-lg text-5xl font-black uppercase leading-[0.85] tracking-[-0.065em] sm:text-6xl">
//                 Start with
//                 <br />
//                 <span className="text-white/15">what you've seen.</span>
//               </h2>
//             </div>

//             <div className="border-t border-white/10">
//               <div className="flex gap-6 border-b border-white/10 py-7">
//                 <MousePointer2
//                   size={18}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>
//                   <h3 className="text-lg font-black uppercase">
//                     Not sure which service you need?
//                   </h3>

//                   <p className="mt-3 max-w-2xl text-xs leading-6 text-white/30">
//                     You do not have to identify the exact pest before making
//                     contact. Tell us what you have noticed, where it is
//                     happening and what type of property you have.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-6 border-b border-white/10 py-7">
//                 <ShieldCheck
//                   size={18}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>
//                   <h3 className="text-lg font-black uppercase">
//                     Residential or commercial
//                   </h3>

//                   <p className="mt-3 max-w-2xl text-xs leading-6 text-white/30">
//                     PrimeShield Pimlico provides pest-control support for
//                     homes, flats, rental properties, workplaces and commercial
//                     premises across the local service area.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-6 py-7">
//                 <CheckCircle2
//                   size={18}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>
//                   <h3 className="text-lg font-black uppercase">
//                     Clear next steps
//                   </h3>

//                   <p className="mt-3 max-w-2xl text-xs leading-6 text-white/30">
//                     Once you get in touch, the pest issue and property can be
//                     discussed so the next step is clear.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-[#050505]">
//         <div className="pointer-events-none absolute -right-24 -top-28 text-[280px] font-black leading-none tracking-[-0.15em] text-black/[0.05]">
//           PS
//         </div>

//         <div className="relative mx-auto max-w-[1380px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.34em] text-black/55">
//                 06 · Start an enquiry
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.83] tracking-[-0.07em] sm:text-6xl lg:text-[6.5rem]">
//                 Something
//                 <br />
//                 <span className="text-black/25">unwanted moved in?</span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 Tell PrimeShield Pimlico what you have noticed and where the
//                 activity is occurring. You do not need to know exactly which
//                 pest you are dealing with before getting in touch.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">
//               <a
//                 href="tel:+447405203539"
//                 className="inline-flex items-center justify-center gap-3 bg-[#050505] px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
//               >
//                 <Phone size={17} />
//                 Call {phone}
//               </a>

//               <Link
//                 to="/contact-us/"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
//               >
//                 Contact PrimeShield
//                 <ArrowUpRight size={16} />
//               </Link>
//             </div>
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <CheckCircle2 size={17} />

//               <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//                 Residential & Commercial
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
//               <MapPin size={13} />
//               {serviceArea}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Services;









// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Target,
//   Phone,
//   Mail,
//   MapPin,
//   ShieldCheck,
//   Search,
//   Check,
//   Home,
//   Building2,
//   Bug,
//   Mouse,
//   BedDouble,
//   Clock3,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";

// const businessName = "Knockout Pest Control";
// const phoneNumber = "074 389 85903";
// const emailAddress = "info@knockoutpestcontrol.uk";
// const address = "Tooting, London";
// const serviceArea = "Tooting and surrounding areas";

// const brandColors = {
//   red: "#FF302E",
//   redAlt: "#FF3130",
//   slate: "#465859",
//   teal: "#02262F",
//   green: "#4A5B57",
//   white: "#FFFFFF",
// };

// const images = {
//   hero: "/images/herohome.jpg",
//   rodents: "/images/rodents.webp",
//   bedbugs: "/images/bedbugs.webp",
//   wasps: "/images/wasps.webp",
//   why: "/images/why-choose-pest-control.jpg",
//   inspection: "/images/about-pest-control.jpg",
// };

// const services = [
//   {
//     title: "Rat & Mice Control",
//     category: "RODENT CONTROL",
//     text: "From scratching sounds to visible signs of activity, we help identify the issue and plan a considered response for your home or business.",
//     image: images.rodents,
//     icon: Mouse,
//     number: "01",
//   },
//   {
//     title: "Bed Bug Treatment",
//     category: "BED BUG CONTROL",
//     text: "A focused approach to bed bug problems in bedrooms and other affected spaces, with attention to where activity has been found.",
//     image: images.bedbugs,
//     icon: BedDouble,
//     number: "02",
//   },
//   {
//     title: "Wasp Nest Treatment",
//     category: "WASP CONTROL",
//     text: "Help with active wasp nests around properties. The nest location and surrounding conditions are considered before treatment.",
//     image: images.wasps,
//     icon: Bug,
//     number: "03",
//   },
// ];

// const faqs = [
//   {
//     q: "Which areas do you cover?",
//     a: "Knockout Pest Control is based around Tooting, London. Contact us with your postcode and we can discuss whether your property is within our service area.",
//   },
//   {
//     q: "Do you help with both homes and businesses?",
//     a: "Yes. You can contact us about pest activity in houses, flats, rental properties and commercial premises.",
//   },
//   {
//     q: "What information should I provide when calling?",
//     a: "Tell us which pest you have noticed, where you have seen activity and your property postcode. This helps us understand the enquiry and discuss the next step.",
//   },
//   {
//     q: "Can you help with more than rodents?",
//     a: "You can contact us about a range of pest concerns, including rodents, bed bugs, wasps and other common insect problems. The appropriate response depends on the situation.",
//   },
// ];

// function Eyebrow({ children, light = false }) {
//   return (
//     <div
//       className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] ${
//         light ? "text-white/65" : "text-[#FF302E]"
//       }`}
//     >
//       <span className={`h-[3px] w-7 ${light ? "bg-[#FF302E]" : "bg-[#FF302E]"}`} />
//       {children}
//     </div>
//   );
// }

// function ActionLink({ to, children, light = false }) {
//   return (
//     <Link
//       to={to}
//       className={`group inline-flex items-center gap-3 rounded-sm px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.12em] transition ${
//         light
//           ? "border border-white/30 text-white hover:border-[#FF302E] hover:bg-[#FF302E]"
//           : "bg-[#FF302E] text-white hover:bg-[#02262F]"
//       }`}
//     >
//       {children}
//       <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//     </Link>
//   );
// }

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");
//   const [openFaq, setOpenFaq] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(
//         "https://knockout-backend.vercel.app/api/callback",
//         {
//           ...formData,
//           area: serviceArea,
//           business: businessName,
//           address,
//           phoneNumber,
//         }
//       ),
//       {
//         loading: "Sending your callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return `${businessName} will contact you shortly.`;
//         },
//         error: (error) => {
//           setLoading(false);
//           return (
//             error.response?.data?.message ||
//             "Your request could not be sent. Please try again."
//           );
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "8px",
//           padding: "12px 18px",
//         },
//         success: {
//           style: {
//             background: brandColors.teal,
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.red}`,
//           },
//         },
//         error: {
//           style: {
//             background: brandColors.teal,
//             color: "#FFFFFF",
//             border: "1px solid #ef4444",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <main
//       className="min-h-screen overflow-x-hidden bg-white text-[#02262F]"
//       style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif" }}
//     >
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{ top: "100px", zIndex: 999999 }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#02262F",
//             color: "#FFFFFF",
//             border: "1px solid rgba(254,49,47,0.5)",
//             borderRadius: "8px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 16px 45px rgba(2,38,47,0.18)",
//           },
//         }}
//       />

//       {/* HEADER */}
//       <header className="relative z-30 border-b border-[#02262F]/10 bg-white">
//         <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
//           <Link to="/" className="flex items-center gap-3" aria-label="Knockout Pest Control home">
//             <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF302E] text-white">
//               <Bug size={23} strokeWidth={2.2} />
//             </span>
//             <span className="leading-tight">
//               <span className="block text-[17px] font-black tracking-[-0.06em] text-[#02262F]">
//                 KNOCKOUT
//               </span>
//               <span className="block text-[9px] font-bold uppercase tracking-[0.23em] text-[#4A5B57]">
//                 Pest Control
//               </span>
//             </span>
//           </Link>

//           <nav className="hidden items-center gap-8 md:flex">
//             <Link to="/services/" className="text-xs font-bold text-[#465859] transition hover:text-[#FF302E]">Services</Link>
//             <Link to="/about-us/" className="text-xs font-bold text-[#465859] transition hover:text-[#FF302E]">About us</Link>
//             <a href="#faqs" className="text-xs font-bold text-[#465859] transition hover:text-[#FF302E]">FAQs</a>
//             <Link to="/contact-us/" className="text-xs font-bold text-[#465859] transition hover:text-[#FF302E]">Contact</Link>
//           </nav>

//           <div className="hidden items-center gap-4 md:flex">
//             <a href={phoneHref} className="flex items-center gap-2 text-xs font-extrabold text-[#02262F] hover:text-[#FF302E]">
//               <Phone size={15} className="text-[#FF302E]" />
//               {phoneNumber}
//             </a>
//             <Link to="/contact-us/" className="rounded-sm bg-[#02262F] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#FF302E]">
//               Get in touch
//             </Link>
//           </div>

//           <button
//             type="button"
//             onClick={() => setMenuOpen((value) => !value)}
//             className="flex h-10 w-10 items-center justify-center rounded-md border border-[#02262F]/10 text-[#02262F] md:hidden"
//             aria-label="Toggle navigation"
//           >
//             {menuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {menuOpen && (
//           <nav className="grid gap-1 border-t border-[#02262F]/10 bg-white px-5 py-4 md:hidden">
//             <Link onClick={() => setMenuOpen(false)} to="/services/" className="rounded-md px-3 py-3 text-sm font-bold hover:bg-[#FF302E]/10">Services</Link>
//             <Link onClick={() => setMenuOpen(false)} to="/about-us/" className="rounded-md px-3 py-3 text-sm font-bold hover:bg-[#FF302E]/10">About us</Link>
//             <a onClick={() => setMenuOpen(false)} href="#faqs" className="rounded-md px-3 py-3 text-sm font-bold hover:bg-[#FF302E]/10">FAQs</a>
//             <Link onClick={() => setMenuOpen(false)} to="/contact-us/" className="rounded-md px-3 py-3 text-sm font-bold hover:bg-[#FF302E]/10">Contact</Link>
//             <a href={phoneHref} className="mt-2 flex items-center gap-2 rounded-md bg-[#FF302E] px-3 py-3 text-sm font-extrabold text-white"><Phone size={16} />{phoneNumber}</a>
//           </nav>
//         )}
//       </header>

//       {/* HERO */}
//       <section className="relative overflow-hidden bg-[#F5F8F7]">
//         <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:py-20">
//           <div className="relative z-10">
//             <Eyebrow>Local pest control · Tooting, London</Eyebrow>
//             <h1 className="mt-7 max-w-2xl text-[3.25rem] font-black leading-[0.98] tracking-[-0.075em] text-[#02262F] sm:text-6xl lg:text-[5.1rem]">
//               Take back
//               <span className="block text-[#FF302E]">your space.</span>
//             </h1>
//             <p className="mt-7 max-w-xl text-sm leading-7 text-[#465859] sm:text-base sm:leading-8">
//               Unwanted pests can disrupt the comfort of your home and the day-to-day running of your business. Knockout Pest Control helps you tackle pest concerns with a practical, property-focused approach in Tooting and surrounding areas.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <ActionLink to="/services/">Explore our services</ActionLink>
//               <a href={phoneHref} className="inline-flex items-center gap-3 rounded-sm border border-[#02262F]/20 bg-white px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#02262F] transition hover:border-[#FF302E] hover:text-[#FF302E]">
//                 <Phone size={15} /> Call our team
//               </a>
//             </div>
//             <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#02262F]/10 pt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4A5B57]">
//               <span className="flex items-center gap-2"><Check size={14} className="text-[#FF302E]" /> Homes & flats</span>
//               <span className="flex items-center gap-2"><Check size={14} className="text-[#FF302E]" /> Business premises</span>
//               <span className="flex items-center gap-2"><Check size={14} className="text-[#FF302E]" /> Local coverage</span>
//             </div>
//           </div>

//           <div className="relative min-h-[390px] sm:min-h-[540px]">
//             <div className="absolute right-0 top-0 h-[82%] w-[88%] overflow-hidden rounded-[180px_18px_18px_18px] bg-[#DCE5E2]">
//               <img src={images.hero} alt="Pest control service at a property" className="h-full w-full object-cover" />
//             </div>
//             <div className="absolute bottom-0 left-0 h-[42%] w-[43%] overflow-hidden rounded-xl border-[7px] border-[#F5F8F7] shadow-xl">
//               <img src={images.inspection} alt="Property pest inspection" className="h-full w-full object-cover" />
//             </div>
//             <div className="absolute bottom-[8%] right-0 max-w-[205px] rounded-lg bg-[#FF302E] p-5 text-white shadow-xl sm:right-2">
//               <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/75">Knockout Pest Control</span>
//               <p className="mt-2 text-xl font-black leading-tight tracking-[-0.04em]">A clearer plan. A more comfortable space.</p>
//             </div>
//             <div className="absolute left-[8%] top-[8%] h-16 w-16 rounded-full border-[10px] border-[#FF302E]/15" />
//           </div>
//         </div>
//       </section>

//       {/* CALLBACK FORM */}
//       <section className="bg-[#FF302E]">
//         <div className="mx-auto grid max-w-[1320px] gap-7 px-5 py-9 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-10">
//           <div className="text-white">
//             <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/75">Let’s talk about the problem</p>
//             <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.045em] sm:text-3xl">Request a call back.</h2>
//             <p className="mt-2 max-w-md text-xs leading-6 text-white/85">Share a few details and our team can get back to you about your pest-control enquiry.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="h-12 min-w-0 rounded-sm border border-white/30 bg-white px-4 text-sm text-[#02262F] outline-none placeholder:text-[#465859]/60 focus:ring-2 focus:ring-[#02262F]/20" />
//             <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode" required className="h-12 min-w-0 rounded-sm border border-white/30 bg-white px-4 text-sm text-[#02262F] outline-none placeholder:text-[#465859]/60 focus:ring-2 focus:ring-[#02262F]/20" />
//             <div className="relative">
//               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required className={`h-12 w-full rounded-sm border bg-white px-4 text-sm text-[#02262F] outline-none placeholder:text-[#465859]/60 focus:ring-2 focus:ring-[#02262F]/20 ${phoneError ? "border-red-900" : "border-white/30"}`} />
//               {phoneError && <p className="absolute left-1 top-[51px] text-[10px] font-bold text-white">{phoneError}</p>}
//             </div>
//             <button type="submit" disabled={loading} className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#02262F] px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#02262F] disabled:cursor-not-allowed disabled:opacity-60">
//               {loading ? "Sending..." : "Request callback"} <ArrowRight size={15} />
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* INTRO / APPROACH */}
//       <section className="bg-white py-20 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
//           <div>
//             <Eyebrow>Problems handled with purpose</Eyebrow>
//             <h2 className="mt-6 max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.065em] text-[#02262F] sm:text-5xl">
//               Your property deserves a proper response.
//             </h2>
//           </div>
//           <div className="lg:pt-3">
//             <p className="text-base leading-8 text-[#465859]">
//               No two pest problems are quite the same. The type of pest, the location of activity and the layout of a property all matter when deciding what to do next.
//             </p>
//             <p className="mt-5 text-sm leading-7 text-[#4A5B57]">
//               We take time to understand what you have noticed, discuss the available approach and help you move towards a more manageable environment.
//             </p>
//             <Link to="/about-us/" className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#FF302E] pb-2 text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#02262F] transition hover:gap-5">
//               Get to know us <ArrowRight size={15} className="text-[#FF302E]" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="bg-[#F2F6F5] py-20 sm:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
//           <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <Eyebrow>What needs tackling?</Eyebrow>
//               <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.065em] text-[#02262F] sm:text-5xl">
//                 Pest problems. <span className="text-[#FF302E]">Practical solutions.</span>
//               </h2>
//             </div>
//             <p className="max-w-sm text-sm leading-7 text-[#465859]">Explore some of the pest-control services available for properties in and around Tooting.</p>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {services.map((service) => {
//               const Icon = service.icon;
//               return (
//                 <motion.article
//                   key={service.title}
//                   whileHover={{ y: -7 }}
//                   transition={{ duration: 0.25 }}
//                   className="group overflow-hidden rounded-xl border border-[#02262F]/8 bg-white shadow-[0_12px_35px_rgba(2,38,47,0.05)]"
//                 >
//                   <div className="relative h-[245px] overflow-hidden bg-[#DCE5E2]">
//                     <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
//                     <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[9px] font-extrabold tracking-[0.13em] text-[#02262F]">{service.number} / 03</span>
//                     <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF302E] text-white"><Icon size={20} /></span>
//                   </div>
//                   <div className="p-6 sm:p-7">
//                     <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#FF302E]">{service.category}</p>
//                     <h3 className="mt-3 text-2xl font-black tracking-[-0.045em] text-[#02262F]">{service.title}</h3>
//                     <p className="mt-3 min-h-[78px] text-xs leading-6 text-[#465859]">{service.text}</p>
//                     <Link to="/services/" className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#02262F] transition group-hover:text-[#FF302E]">
//                       Discover service <ArrowUpRight size={14} />
//                     </Link>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>
//           <div className="mt-9 flex justify-center">
//             <ActionLink to="/services/">View all services</ActionLink>
//           </div>
//         </div>
//       </section>

//       {/* INSPECTION / HOW IT WORKS */}
//       <section className="overflow-hidden bg-[#02262F] py-20 text-white sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10">
//           <div className="relative min-h-[430px]">
//             <div className="absolute left-0 top-0 h-[82%] w-[82%] overflow-hidden rounded-xl">
//               <img src={images.inspection} alt="Pest control inspection" className="h-full w-full object-cover" />
//             </div>
//             <div className="absolute bottom-0 right-0 h-[42%] w-[48%] overflow-hidden rounded-xl border-[7px] border-[#02262F] shadow-2xl">
//               <img src={images.why} alt="Professional pest control service" className="h-full w-full object-cover" />
//             </div>
//             <div className="absolute left-5 top-5 rounded-md bg-[#FF302E] px-4 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white">Understand the signs</div>
//           </div>

//           <div>
//             <Eyebrow light>Our approach</Eyebrow>
//             <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">
//               Start with the facts. Then decide the next move.
//             </h2>
//             <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
//               Good pest management begins by understanding the situation. We focus on the details that help shape a sensible response for the property.
//             </p>
//             <div className="mt-8 space-y-0 border-t border-white/15">
//               {[
//                 ["01", "Listen to what you have noticed"],
//                 ["02", "Understand where activity is happening"],
//                 ["03", "Discuss a suitable course of action"],
//                 ["04", "Consider prevention and next steps"],
//               ].map(([number, label]) => (
//                 <div key={number} className="flex items-center gap-5 border-b border-white/15 py-4">
//                   <span className="text-xs font-black text-[#FF302E]">{number}</span>
//                   <span className="flex-1 text-sm font-semibold text-white/90">{label}</span>
//                   <Check size={16} className="text-[#FF302E]" />
//                 </div>
//               ))}
//             </div>
//             <Link to="/about-us/" className="mt-8 inline-flex items-center gap-3 rounded-sm bg-white px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#02262F] transition hover:bg-[#FF302E] hover:text-white">
//               How we work <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE */}
//       <section className="bg-white py-20 sm:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
//           <div className="max-w-2xl">
//             <Eyebrow>Why contact Knockout?</Eyebrow>
//             <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.065em] text-[#02262F] sm:text-5xl">
//               A straightforward way to deal with pest concerns.
//             </h2>
//           </div>
//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               { icon: Search, title: "Understand the issue", text: "We begin with the pest activity and the details of your property." },
//               { icon: Target, title: "A focused approach", text: "The next step is considered in relation to the problem you report." },
//               { icon: ShieldCheck, title: "Clear communication", text: "Know what information is needed and what happens next." },
//               { icon: Check, title: "Prevention in mind", text: "Where appropriate, contributing conditions and access points can be considered." },
//             ].map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div key={item.title} whileHover={{ y: -5 }} className="rounded-xl border border-[#02262F]/10 bg-[#F7F9F8] p-6">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF302E]/10 text-[#FF302E]"><Icon size={21} /></div>
//                   <p className="mt-7 text-[9px] font-extrabold tracking-[0.16em] text-[#FF302E]">0{index + 1}</p>
//                   <h3 className="mt-2 text-lg font-black tracking-[-0.035em] text-[#02262F]">{item.title}</h3>
//                   <p className="mt-3 text-xs leading-6 text-[#465859]">{item.text}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY TYPES */}
//       <section className="bg-[#EAF0EE] py-20 sm:py-24">
//         <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
//           <div>
//             <Eyebrow>For every kind of property</Eyebrow>
//             <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.06em] text-[#02262F] sm:text-5xl">
//               From your home to your workplace.
//             </h2>
//             <p className="mt-6 max-w-md text-sm leading-7 text-[#465859]">
//               Pest activity can affect different environments in different ways. Tell us about your property and the issue you are facing.
//             </p>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-2">
//             <div className="rounded-xl bg-white p-7 sm:p-9">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF302E] text-white"><Home size={22} /></div>
//               <h3 className="mt-8 text-2xl font-black tracking-[-0.05em] text-[#02262F]">Homes & flats</h3>
//               <p className="mt-3 text-xs leading-6 text-[#465859]">Pest-control enquiries for homeowners, tenants, landlords and residential properties.</p>
//             </div>
//             <div className="rounded-xl bg-[#02262F] p-7 text-white sm:p-9">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF302E] text-white"><Building2 size={22} /></div>
//               <h3 className="mt-8 text-2xl font-black tracking-[-0.05em]">Business premises</h3>
//               <p className="mt-3 text-xs leading-6 text-white/65">Support for shops, offices and other commercial spaces affected by pest activity.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LOCAL AREA / CONTACT */}
//       <section className="bg-white py-20 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
//           <div className="rounded-xl bg-[#F2F6F5] p-7 sm:p-10 lg:p-12">
//             <Eyebrow>Local to Tooting</Eyebrow>
//             <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.065em] text-[#02262F] sm:text-5xl">
//               Pest control in Tooting, London.
//             </h2>
//             <p className="mt-6 max-w-xl text-sm leading-7 text-[#465859]">
//               Looking for help with unwanted pests in Tooting? Get in touch with Knockout Pest Control and tell us what is happening at your property.
//             </p>
//             <div className="mt-9 grid gap-5 border-t border-[#02262F]/10 pt-6 sm:grid-cols-2">
//               <div>
//                 <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#4A5B57]">Our location</p>
//                 <p className="mt-2 flex items-center gap-2 text-base font-black text-[#02262F]"><MapPin size={17} className="text-[#FF302E]" /> {address}</p>
//               </div>
//               <div>
//                 <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#4A5B57]">Service coverage</p>
//                 <p className="mt-2 text-base font-black text-[#02262F]">{serviceArea}</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col justify-between rounded-xl bg-[#02262F] p-7 text-white sm:p-10 lg:p-12">
//             <div>
//               <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF302E]"><Phone size={21} /></span>
//               <h3 className="mt-7 text-3xl font-black leading-tight tracking-[-0.05em]">Need to talk through a pest problem?</h3>
//               <p className="mt-4 text-sm leading-7 text-white/65">Give us a call or send an email with a few details about your enquiry.</p>
//             </div>
//             <div className="mt-10 space-y-3">
//               <a href={phoneHref} className="flex items-center justify-between gap-3 rounded-md bg-[#FF302E] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#02262F]">
//                 <span className="flex items-center gap-3"><Phone size={17} /> {phoneNumber}</span><ArrowUpRight size={18} />
//               </a>
//               <a href={`mailto:${emailAddress}`} className="flex items-center justify-between gap-3 rounded-md border border-white/20 px-5 py-4 text-sm font-bold text-white transition hover:border-[#FF302E] hover:text-[#FF302E]">
//                 <span className="flex min-w-0 items-center gap-3"><Mail size={17} /> <span className="truncate">{emailAddress}</span></span><ArrowUpRight size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section id="faqs" className="bg-[#F2F6F5] py-20 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
//           <div>
//             <Eyebrow>Questions answered</Eyebrow>
//             <h2 className="mt-5 max-w-md text-4xl font-black leading-[1.02] tracking-[-0.065em] text-[#02262F] sm:text-5xl">A few things you may want to know.</h2>
//             <p className="mt-5 max-w-sm text-sm leading-7 text-[#465859]">Here are some useful details before you get in touch with our team.</p>
//           </div>
//           <div className="border-t border-[#02262F]/15">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;
//               return (
//                 <div key={faq.q} className="border-b border-[#02262F]/15">
//                   <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center gap-4 py-6 text-left">
//                     <span className="text-[10px] font-black text-[#FF302E]">0{index + 1}</span>
//                     <span className="flex-1 text-base font-extrabold tracking-[-0.02em] text-[#02262F] sm:text-lg">{faq.q}</span>
//                     <ChevronDown size={18} className={`shrink-0 text-[#FF302E] transition-transform ${isOpen ? "rotate-180" : ""}`} />
//                   </button>
//                   {isOpen && <div className="pb-6 pl-9 pr-8"><p className="max-w-2xl text-sm leading-7 text-[#465859]">{faq.a}</p></div>}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-[#FF302E] py-16 text-white sm:py-20">
//         <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
//           <div>
//             <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/75">Ready for the next step?</p>
//             <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">Let’s get your pest problem under control.</h2>
//             <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">Tell us what you have noticed and where it is happening. We are ready to hear about your enquiry.</p>
//           </div>
//           <div className="flex shrink-0 flex-wrap gap-3">
//             <a href={phoneHref} className="inline-flex items-center gap-3 rounded-sm bg-[#02262F] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#02262F]"><Phone size={15} /> Call us</a>
//             <Link to="/contact-us/" className="inline-flex items-center gap-3 rounded-sm border border-white/60 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#02262F]">Contact us <ArrowUpRight size={15} /></Link>
//           </div>
//         </div>
//       </section>

  
//     </main>
//   );
// }






























import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Phone,
  Mail,
  MapPin,


  Plus,
  Minus,
  Mouse,
  Bug,
  BedDouble,
  Home,
  Building2,
  Check,
  CheckCircle2,
  ScanLine,
} from "lucide-react";

/* ==================================================
   BUSINESS DETAILS
================================================== */

const businessName = "Oakridge Pest Control UK";
const phoneNumber = "+44 7440 681717";
const phoneHref = "tel:+447440681717";
const emailAddress = "info@oakridgepestcontrol.uk";
const address = "Greenwich, London";
const serviceArea = "Greenwich, London";

/* ==================================================
   IMAGE ASSETS
================================================== */

const images = {
  logo: "/images/oakridge-logo.png",
  hero: "/images/oakridge-hero.webp",
  rodents: "/images/rodents.webp",
  bedbugs: "/images/bedbugs.webp",
  wasps: "/images/wasps.webp",
  inspection: "/images/birds.webp",
  residential: "/images/inspection.webp",
  commercial: "/images/oakridge-commercial.webp",
  greenwich: "/images/oakridge-greenwich.webp",
};

/* ==================================================
   SERVICES
================================================== */

const services = [
  {
    number: "01",
    title: "Rat & Mice Control",
    category: "Rodent management",
    description:
      "Address unwanted rodent activity with a considered approach to inspection, treatment and potential entry points.",
    image: images.rodents,
    alt: "Realistic mouse near the skirting board of a London property",
    icon: Mouse,
  },
  {
    number: "02",
    title: "Bed Bug Treatments",
    category: "Insect management",
    description:
      "Targeted support for bed bug activity in bedrooms, furniture and affected living spaces.",
    image: images.bedbugs,
    alt: "Professional inspection of mattress seams for signs of bed bugs",
    icon: BedDouble,
  },
  {
    number: "03",
    title: "Wasp Nest Control",
    category: "Nest management",
    description:
      "Professional assessment of wasp activity and suitable treatment options for accessible nests.",
    image: images.wasps,
    alt: "Natural wasp nest inside a sheltered roof space",
    icon: Bug,
  },
];

/* ==================================================
   PROCESS
================================================== */


/* ==================================================
   FAQ DATA
================================================== */

const faqs = [
  {
    question: "Do you provide pest control in Greenwich?",
    answer:
      "Oakridge Pest Control UK provides pest control services in Greenwich, London. Contact us with your postcode to confirm availability for your property.",
  },
  {
    question: "Can I contact you about a commercial property?",
    answer:
      "Yes. We welcome enquiries from business owners, property managers, landlords and residential customers experiencing pest-related concerns.",
  },
  {
    question: "What should I do if I discover a pest problem?",
    answer:
      "Make a note of where you have noticed activity and any visible signs. Avoid disturbing nests or applying unsuitable treatments. Contact our team to discuss the appropriate next step.",
  },
  {
    question: "Which types of pests can you help with?",
    answer:
      "You can contact us about rodent activity, bed bugs, wasp nests and other common pest concerns. The recommended approach will depend on the individual circumstances.",
  },
  {
    question: "Can I request a callback online?",
    answer:
      "Yes. Complete the callback request form with your name, postcode and telephone number so our team can contact you about your enquiry.",
  },
  {
    question: "Can pest problems be prevented from returning?",
    answer:
      "Preventative measures may help reduce the risk of recurring pest activity. These can include addressing access points, improving hygiene conditions and monitoring affected areas.",
  },
];

/* ==================================================
   SHARED ANIMATION COMPONENT
================================================== */

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ==================================================
   SHARED COMPONENTS
================================================== */

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] ${
        light ? "text-white" : "text-[#A82252]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF695B] to-[#FF4081]" />
      {children}
    </div>
  );
}

function PrimaryLink({ to, children, onPink = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-between gap-7 rounded-full px-7 py-4 text-xs font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${onPink ? "bg-white text-[#A82252] hover:bg-[#FFF5F2]" : "bg-[#FE6387] text-white hover:bg-[#A82252]"}`}
    >
      {children}

      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/* ==================================================
   HOME PAGE
================================================== */

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const [activeSign, setActiveSign] = useState(0);
  const [activeZone, setActiveZone] = useState(0);

  const reduceMotion = useReducedMotion();

  /* PAGE SEO */

  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Pest Control Greenwich, London | Oakridge Pest Control UK";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    const createdMeta = !meta;
    const previousDescription =
      meta?.getAttribute("content");

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Oakridge Pest Control UK provides pest control services in Greenwich, London. Contact us for rat and mice control, bed bug treatments, wasp nest control and property pest management."
    );

    return () => {
      document.title = previousTitle;

      if (createdMeta) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute(
          "content",
          previousDescription || ""
        );
      } else {
        meta.removeAttribute("content");
      }
    };
  }, []);

  /* FORM HANDLERS */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!formData.phone.trim()) {
      setPhoneError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://oakridge-backend.vercel.app/api/callback",
        {
          ...formData,
          area: serviceArea,
          business: businessName,
          address,
          phoneNumber,
        }
      ),
      {
        loading: "Sending your callback request...",

        success: () => {
          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          setLoading(false);

          return `${businessName} will contact you shortly.`;
        },

        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Your request could not be sent. Please try again."
          );
        },
      },
      {
        style: {
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          borderRadius: "14px",
          padding: "15px 20px",
          background: "#FE6387",
          color: "#FFFFFF",
          border: "1px solid #FF695B",
        },
      }
    ).catch(() => {});
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#FFF5F2] text-[#A82252]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "100px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,
        }}
      />

{/* ============================================
          CINEMATIC FULL-WIDTH HERO
      ============================================ */}

      <section className="relative mx-3 isolate overflow-hidden rounded-[28px] bg-[#FE6387] sm:mx-6 sm:rounded-[40px] lg:mx-10">
        <img
          src={images.hero}
          alt="Professional pest control technician attending a modern Greenwich residential property"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#24242C] via-[#24242C]/85 to-[#24242C]/25" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#24242C]/70 via-transparent to-transparent" />

        <div className="mx-auto flex min-h-[650px] max-w-[1400px] flex-col justify-center px-6 pb-32 pt-20 text-white sm:px-12 lg:min-h-[750px] lg:px-20">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
            }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em]">
              <MapPin size={14} className="text-[#FFA58A]" />

              Pest control in Greenwich, London
            </div>

            <h1 className="mt-9 text-[3.4rem] font-medium leading-[0.99] tracking-normal sm:text-[5.2rem] lg:text-[7rem]">
              A better space.

              <span className="mt-2 block bg-gradient-to-r from-[#FFA58A] via-[#FF8072] to-[#FF5891] bg-clip-text font-bold not-italic text-transparent">
                Begins with
              </span>

              peace of mind.
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-8 text-white/80 sm:text-base">
              Make unwanted pests one less thing to worry
              about. Oakridge Pest Control UK offers
              property-focused pest management for homes
              and businesses in Greenwich, London.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services/"
                className="group inline-flex items-center gap-6 rounded-full bg-gradient-to-r from-[#FFA58A] to-[#FF5891] px-7 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none"
              >
                Explore our services
                <ArrowUpRight size={19} />
              </Link>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white hover:text-[#A82252]"
              >
                <Phone size={17} />
                Speak to our team
              </a>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between gap-5 border-t border-white/20 pt-6 text-white/70 sm:left-12 sm:right-12 lg:left-20 lg:right-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Homes · Businesses · Prevention
            </p>

            <a
              href="#callback"
              aria-label="Scroll to callback form"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-[#A82252]"
            >
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FLOATING CALLBACK FORM
      ============================================ */}

      <section
        id="callback"
        className="relative z-10 mx-auto -mt-5 max-w-[1320px] scroll-mt-10 px-5 sm:-mt-8 sm:px-10"
      >
        <div className="rounded-[28px] border border-[#FE6387]/5 bg-white p-6 shadow-[0_20px_80px_rgba(254,99,135,0.09)] sm:p-9 lg:p-11">
          <div className="grid gap-8 xl:grid-cols-[0.65fr_1.35fr] xl:items-center">
            <div>
              <SectionLabel>
                Your first step
              </SectionLabel>

              <h2 className="mt-4 text-3xl font-medium tracking-normal">
                Let's talk pests.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#A82252]">
                Leave your details and request a callback
                from Oakridge.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_0.8fr_1fr_auto] xl:items-end"
            >
              <div>
                <label
                  htmlFor="callback-name"
                  className="mb-2 block text-xs font-semibold"
                >
                  Full name
                </label>

                <input
                  id="callback-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="h-14 w-full min-w-0 rounded-xl border border-[#FE6387]/10 bg-[#FFF5F2] px-4 text-sm outline-none transition-colors focus:border-[#FF4081]"
                />
              </div>

              <div>
                <label
                  htmlFor="callback-postcode"
                  className="mb-2 block text-xs font-semibold"
                >
                  Postcode
                </label>

                <input
                  id="callback-postcode"
                  type="text"
                  name="postcode"
                  autoComplete="postal-code"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. SE10"
                  required
                  className="h-14 w-full min-w-0 rounded-xl border border-[#FE6387]/10 bg-[#FFF5F2] px-4 text-sm outline-none transition-colors focus:border-[#FF4081]"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="callback-phone"
                  className="mb-2 block text-xs font-semibold"
                >
                  Phone number
                </label>

                <input
                  id="callback-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your number"
                  aria-invalid={Boolean(phoneError)}
                  required
                  className={`h-14 w-full min-w-0 rounded-xl border bg-[#FFF5F2] px-4 text-sm outline-none transition-colors focus:border-[#FF4081] ${
                    phoneError
                      ? "border-red-600"
                      : "border-[#FE6387]/10"
                  }`}
                />

                {phoneError && (
                  <p
                    role="alert"
                    className="mt-1 text-xs text-red-700"
                  >
                    {phoneError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-14 items-center justify-center gap-3 rounded-xl bg-[#FE6387] px-6 text-xs font-bold text-white transition-colors hover:bg-[#A82252] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request callback"}

                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PEST FINDER */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-10 sm:py-28">
        <Reveal>
          <SectionLabel>Identify the signs</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">What have you noticed?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#A82252]">Select a sign below for general guidance. An inspection may be needed to confirm the cause.</p>
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#FE6387]/15 bg-white lg:grid-cols-[1fr_1.3fr]">
            <div className="divide-y divide-[#FE6387]/10">
              {["Scratching or droppings", "Marks on bedding", "Wasps entering a gap"].map((label, i) => (
                <button key={label} type="button" aria-pressed={activeSign === i} onClick={() => setActiveSign(i)} className={`flex w-full items-center justify-between gap-4 p-6 text-left font-bold transition-colors ${activeSign === i ? "bg-[#FE6387] text-white" : "hover:bg-[#FFF5F2]"}`}>
                  {label}<ArrowRight size={20} />
                </button>
              ))}
            </div>
            <div aria-live="polite" className="bg-[#FFF5F2] p-8 sm:p-12">
              <h3 className="text-2xl font-bold">{["Possible rodent activity", "Possible bed bug activity", "Possible wasp nest"][activeSign]}</h3>
              <p className="mt-4 leading-7">{["Avoid touching droppings and note where sounds or signs appear.", "Check mattress seams for visible signs. Skin marks alone cannot confirm bed bugs.", "Keep your distance and avoid blocking or disturbing a suspected nest."][activeSign]}</p>
              <div className="mt-7"><PrimaryLink to="/contact-us/">Discuss your concern</PrimaryLink></div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SPLIT PANEL SERVICE CARDS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-10">
          <Reveal>
            <SectionLabel>Featured services</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">Specialist pest control services</h2>
            <p className="mt-4 max-w-xl leading-7 text-[#A82252]">Explore practical solutions for common pest concerns in Greenwich.</p>
          </Reveal>
          <div className="mt-10 space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={index * 0.06}>
                  <Link to="/services/" className="group grid overflow-hidden rounded-2xl border border-[#FE6387]/15 bg-[#FFF5F2] transition-colors hover:border-[#FF4081] sm:grid-cols-[64px_220px_1fr] lg:grid-cols-[90px_310px_1fr]">
                    <div className="flex items-center justify-between gap-3 bg-gradient-to-b from-[#FFA58A] to-[#FF5891] px-5 py-3 text-white sm:flex-col sm:justify-center sm:py-8">
                      <span className="text-3xl font-bold">{service.number}</span><Icon size={26} />
                    </div>
                    <div className="overflow-hidden bg-[#FFA58A]/20" style={{clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)"}}>
                      <img src={service.image} alt={service.alt} loading="lazy" decoding="async" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none sm:h-full sm:min-h-[210px]" />
                    </div>
                    <div className="flex items-center justify-between gap-5 p-6 lg:p-9">
                      <div><p className="text-xs font-bold uppercase text-[#AC3054]">{service.category}</p><h3 className="mt-3 text-2xl font-bold sm:text-3xl">{service.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-[#A82252]">{service.description}</p><span className="mt-4 inline-block text-sm font-bold text-[#AC3054]">Explore service</span></div>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE6387] text-white transition-transform group-hover:translate-x-1 motion-reduce:transform-none"><ArrowRight size={22}/></span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10"><PrimaryLink to="/services/">View all services</PrimaryLink></div>
        </div>
      </section>

      {/* PROPERTY RISK ZONES */}
      <section className="bg-[#FE6387] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
          <Reveal><SectionLabel light>Know your property</SectionLabel><h2 className="mt-5 text-3xl font-bold sm:text-5xl">Where pests may hide</h2></Reveal>
          <div className="mt-9 flex flex-wrap gap-3">{["Kitchen", "Bedroom", "Loft", "Outside"].map((zone,i)=>(<button key={zone} type="button" aria-pressed={activeZone===i} onClick={()=>setActiveZone(i)} className={`rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors ${activeZone===i ? "bg-white text-[#A82252]" : "hover:bg-white/10"}`}>{zone}</button>))}</div>
          <div className="mt-8 grid overflow-hidden rounded-2xl bg-white text-[#A82252] md:grid-cols-2">
            <img src={[images.rodents,images.bedbugs,images.wasps,images.residential][activeZone]} alt={[services[0].alt,services[1].alt,services[2].alt,"British residential property exterior"][activeZone]} loading="lazy" className="h-64 w-full object-cover md:h-full md:min-h-[280px]"/>
            <div aria-live="polite" className="p-8 sm:p-12"><h3 className="text-2xl font-bold">{["Food and access points", "Sleeping areas", "Sheltered roof spaces", "External gaps"][activeZone]}</h3><p className="mt-5 leading-7">{["Check for gaps near pipes, food storage and signs of rodent activity.","Inspect mattress seams and nearby furniture for unusual marks or insects.","Avoid disturbing suspected nests in roof spaces and report unusual insect activity.","Look for damaged vents and gaps around doors. Seek advice before sealing potentially active entry points."][activeZone]}</p><div className="mt-7"><PrimaryLink to="/contact-us/">Get advice</PrimaryLink></div></div>
          </div>
        </div>
      </section>

      {/* ============================================
          EXPERTISE / INSPECTION
      ============================================ */}

      <section className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-14">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-t-[180px] rounded-b-[28px] bg-[#FFA58A]/20 sm:rounded-t-[250px]">
                <img
                  src={images.inspection}
                  alt="Pest control technician carefully inspecting potential pest entry points inside a property"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-6 right-4 max-w-[220px] rounded-2xl bg-white p-5 shadow-xl sm:-right-8 sm:p-7">
                <ScanLine
                  size={30}
                  className="text-[#AC3054]"
                />

                <p className="mt-4 text-xl font-semibold leading-tight tracking-normal">
                  Attention to the details that matter.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>
              Looking beneath the surface
            </SectionLabel>

            <h2 className="mt-7 text-5xl font-medium leading-[1.03] tracking-normal sm:text-6xl">
              More than what

              <span className="block font-bold not-italic text-[#AC3054]">
                meets the eye.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#A82252]">
              Visible pest activity is not always the whole
              story. Small gaps, concealed spaces, food
              sources and environmental conditions can all
              have an influence.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#A82252]">
              At Oakridge, we focus on understanding the
              circumstances behind a pest concern rather than
              treating every property in exactly the same
              way.
            </p>

            <div className="mt-9 divide-y divide-[#FE6387]/10 border-y border-[#FE6387]/10">
              {[
                "Consider the signs of pest activity",
                "Understand the affected environment",
                "Discuss suitable treatment options",
                "Identify practical prevention measures",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-5"
                >
                  <span className="text-xs font-bold text-[#AC3054]">
                    0{index + 1}
                  </span>

                  <span className="flex-1 text-sm font-semibold">
                    {item}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#AC3054]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-9">
              <PrimaryLink to="/about-us/">
                Learn about our approach
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREVENTION GUIDE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><SectionLabel>Prevention guide</SectionLabel><h2 className="mt-5 text-3xl font-bold sm:text-5xl">Small changes can reduce pest risks</h2><p className="mt-5 leading-7 text-[#A82252]">Everyday property maintenance can help make your surroundings less attractive to pests.</p></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">{[["Store food securely","Keep dry foods in sealed containers and clear away crumbs."],["Manage waste","Use suitable bins and remove accumulated rubbish."],["Check access points","Report gaps around pipes and doors for assessment."],["Monitor unusual activity","Note where and when signs appear before contacting a professional."]].map(([title,text],i)=>(<Reveal key={title} delay={i*0.06} className="border-l-4 border-[#FF695B] bg-[#FFF5F2] p-6"><CheckCircle2 className="text-[#AC3054]" size={25}/><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7">{text}</p></Reveal>))}</div>
        </div>
      </section>
      {/* BEFORE YOU BOOK */}
      <section className="bg-[#FFF5F2] py-16"><Reveal className="mx-auto max-w-[1320px] px-6 sm:px-10"><div className="rounded-2xl bg-gradient-to-r from-[#FFA58A] to-[#FF5891] p-8 text-white sm:p-12"><h2 className="text-3xl font-bold sm:text-4xl">Before you book</h2><p className="mt-4 max-w-2xl leading-7">Having a few details ready helps us understand your enquiry.</p><div className="mt-7 grid gap-4 sm:grid-cols-3">{["Your property postcode","Where you noticed activity","When the signs first appeared"].map(t=><div key={t} className="flex items-center gap-3 rounded-xl bg-white/85 p-5 font-semibold text-[#A82252]"><Check size={20} className="shrink-0"/>{t}</div>)}</div><div className="mt-8"><PrimaryLink to="/contact-us/" onPink>Contact our team</PrimaryLink></div></div></Reveal></section>

      {/* ============================================
          RESIDENTIAL & COMMERCIAL
      ============================================ */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <Reveal className="text-center">
            <SectionLabel>
              Spaces worth protecting
            </SectionLabel>

            <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-medium leading-[1.05] tracking-normal sm:text-7xl">
              Wherever life

              <span className="block font-bold not-italic text-[#AC3054]">
                takes place.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Residential pest control",
                category: "For your home",
                image: images.residential,
                alt: "Beautiful modern British residential home in Greenwich London",
                icon: Home,
                text: "Support for homeowners, tenants and landlords dealing with pest concerns in houses, flats and residential properties.",
              },
              {
                title: "Commercial pest control",
                category: "For your business",
                image: images.commercial,
                alt: "Clean and professionally maintained commercial premises in London",
                icon: Building2,
                text: "Property-focused pest management enquiries for workplaces, shops, offices and commercial environments.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.1}
                >
                  <Link
                    to="/contact-us/"
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#FFF5F2]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
                      />

                      <span className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                        <Icon size={24} />
                      </span>
                    </div>

                    <div className="border-b border-[#FE6387]/15 px-1 pb-8 pt-7">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#AC3054]">
                        {item.category}
                      </span>

                      <div className="mt-3 flex items-center justify-between gap-4">
                        <h3 className="text-3xl font-medium tracking-normal sm:text-4xl">
                          {item.title}
                        </h3>

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FE6387]/15 transition-colors group-hover:bg-[#FE6387] group-hover:text-white">
                          <ArrowUpRight size={20} />
                        </span>
                      </div>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-[#A82252]">
                        {item.text}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          GREENWICH LOCAL AREA
      ============================================ */}

      <section className="px-3 py-3 sm:px-6 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[#FE6387] text-white">
          <img
            src={images.greenwich}
            alt="Historic buildings and riverside architecture in Greenwich London"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#24242C] via-[#24242C]/90 to-[#24242C]/35" />

          <div className="mx-auto max-w-[1400px] px-7 py-24 sm:px-14 sm:py-32 lg:px-20">
            <Reveal className="max-w-3xl">
              <SectionLabel light>
                Local knowledge. Property-focused care.
              </SectionLabel>

              <h2 className="mt-7 text-5xl font-medium leading-[1.04] tracking-normal sm:text-7xl">
                Pest control in

                <span className="block font-bold not-italic text-[#FFA58A]">
                  Greenwich,
                </span>

                London.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/80">
                From residential streets to busy commercial
                premises, Oakridge Pest Control UK welcomes
                enquiries from customers experiencing pest
                problems in Greenwich.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                Contact us with your postcode to discuss
                your pest concern and confirm service
                availability for your property.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#A82252] transition-colors hover:bg-[#FFA58A]"
                >
                  <Phone size={17} />
                  {phoneNumber}
                </a>

                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white hover:text-[#A82252]"
                >
                  Contact Oakridge
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          FREQUENTLY ASKED QUESTIONS
      ============================================ */}

      <section
        id="faqs"
        className="scroll-mt-10 py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionLabel>
              Helpful information
            </SectionLabel>

            <h2 className="mt-7 text-5xl font-medium leading-[1.02] tracking-normal sm:text-6xl">
              Good questions.

              <span className="block font-bold not-italic text-[#AC3054]">
                Clear answers.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#A82252]">
              Find useful information about contacting
              Oakridge and taking the first step towards
              addressing your pest concerns.
            </p>

            <div className="mt-9">
              <PrimaryLink to="/contact-us/">
                Ask us a question
              </PrimaryLink>
            </div>
          </Reveal>

          <Reveal className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#FF695B]/50 bg-white"
                      : "border-[#FE6387]/10 bg-transparent"
                  }`}
                >
                  <button
                    id={`faq-button-${index}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="text-xs font-bold text-[#AC3054]">
                      0{index + 1}
                    </span>

                    <span className="flex-1 text-sm font-semibold leading-relaxed sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#FE6387] text-white"
                          : "bg-[#FFA58A]/20 text-[#A82252]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-7 pl-12 text-sm leading-7 text-[#A82252] sm:pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ============================================
          PREMIUM CLOSING CONTACT SECTION
      ============================================ */}

      <section className="bg-white px-3 pb-3 pt-3 sm:px-6 sm:pb-6 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFA58A] via-[#FF8072] to-[#FF5891] px-7 py-20 text-white sm:px-14 sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[550px] w-[550px] rounded-full border-[90px] border-white/15"
          />

          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em]">
                Let's make a start
              </p>

              <h2 className="mt-7 text-5xl font-medium leading-[1.02] tracking-normal sm:text-7xl">
                Your space.

                <span className="block font-bold not-italic">
                  Your comfort.
                </span>

                Your next step.
              </h2>

              <p className="mt-7 max-w-lg text-sm font-medium leading-7">
                Tell Oakridge what is happening at your
                property. Start a conversation about
                suitable pest control options today.
              </p>

              <div className="mt-9">
                <PrimaryLink to="/contact-us/" onPink>
                  Get in touch today
                </PrimaryLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] bg-[#FE6387] p-7 text-white sm:p-10">
                <img
                  src={images.logo}
                  alt="Oak Ridge original company logo"
                  loading="lazy"
                  className="h-24 w-36 object-contain"
                />

                <h3 className="mt-6 text-2xl font-medium tracking-normal">
                  Speak to Oakridge
                </h3>

                <div className="mt-8 divide-y divide-white/15">
                  <a
                    href={phoneHref}
                    className="group flex items-center gap-4 py-5"
                  >
                    <Phone
                      size={21}
                      className="shrink-0 text-white"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white">
                        Call our team
                      </p>

                      <p className="mt-1 text-sm font-semibold sm:text-lg">
                        {phoneNumber}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="group flex items-center gap-4 py-5"
                  >
                    <Mail
                      size={21}
                      className="shrink-0 text-white"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white">
                        Send an email
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold">
                        {emailAddress}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0"
                    />
                  </a>

                  <div className="flex items-center gap-4 py-5">
                    <MapPin
                      size={21}
                      className="shrink-0 text-white"
                    />

                    <div>
                      <p className="text-xs text-white">
                        Service location
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}