

// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#111111] text-white overflow-hidden border-t border-[#F36F21]/20 z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               PrimeShield Services Limited provides professional pest control
//               support for London homes, landlords and businesses with reliable
//               treatments, inspections and prevention advice.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#F36F21]/10 border border-[#F36F21]/30 px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-200 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Treatment",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Treatment",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Control Services",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.08]">
//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Location
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//           {/* <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Company Number
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 17263881
//               </span>
//             </div>
//           </div> */}

//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Service Area
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 London, UK
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-300">
//               PrimeShield Services Limited
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] opacity-90" />
//             <span>PrimeShield Protection Framework</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   const phoneNumber = "07404 736153";
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   return (
//     <footer className="relative bg-[#111111] text-white overflow-hidden border-t border-[#F36F21]/20 z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Kensington Pest Control"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               PrimeShield Kensington provides professional pest control support
//               for homes, landlords and businesses across Kensington and South
//               Kensington, with clear inspections, safe treatments and prevention
//               advice from {address}.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#F36F21]/10 border border-[#F36F21]/30 px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-200 uppercase font-bold">
//                 Kensington Pest Control Support
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Kensington Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "PrimeShield Kensington Home", path: "/" },
//                   { name: "About PrimeShield Kensington", path: "/about-us" },
//                   { name: "Kensington Pest Services", path: "/services" },
//                   { name: "Contact Kensington Team", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Kensington Services
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control Kensington",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Treatment Kensington",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Treatment Kensington",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Control Kensington",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.08]">
//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Location
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 {address}
//               </span>
//             </div>
//           </div>

//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Call PrimeShield Kensington
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 {phoneNumber}
//               </span>
//             </div>
//           </a>

//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Service Area
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 Kensington & South Kensington, London
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-300">PrimeShield Kensington</span>. All
//             rights reserved.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] opacity-90" />
//             <span>PrimeShield Kensington Protection Framework</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ShieldCheck,
//   Phone,
//   MapPin,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";

// const Footer = () => {
//   const phoneNumber = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const email = "info@primeshieldbromley.uk";

//   const navigationLinks = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About PrimeShield",
//       path: "/about-us",
//     },
//     {
//       name: "Pest Control Services",
//       path: "/services",
//     },
//     {
//       name: "Contact Our Team",
//       path: "/contact-us",
//     },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control Bromley",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment Bromley",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control Bromley",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control Bromley",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#292929] text-white font-sans border-t border-[#F47B2B]/20">

//       {/* =========================================================
//           BACKGROUND DETAIL
//       ========================================================= */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
//             backgroundSize: "55px 55px",
//           }}
//         />
//       </div>

//       <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full border border-[#F47B2B]/10 pointer-events-none" />

//       <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full border border-[#F47B2B]/10 pointer-events-none" />

//       <div className="absolute left-[-180px] bottom-[-180px] w-[420px] h-[420px] rounded-full bg-[#F47B2B]/5 blur-3xl pointer-events-none" />

//       {/* TOP ACCENT */}
//       <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F47B2B]" />

//       {/* =========================================================
//           MAIN FOOTER
//       ========================================================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-20 md:pt-24 pb-10">

//         {/* =======================================================
//             BRAND / NAVIGATION
//         ======================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 pb-16 border-b border-white/10">

//           {/* BRAND AREA */}
//           <div className="lg:col-span-5">

//             <div className="flex flex-col items-start">

//               <img
//                 src="/images/primelogo.webp"
//                 alt="PrimeShield Services Bromley"
//                 className="h-20 sm:h-24 w-auto object-contain object-left"
//                 loading="lazy"
//                 decoding="async"
//               />

//               <div className="mt-7 flex items-center gap-3">

//                 <span className="w-10 h-[2px] bg-[#F47B2B]" />

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Bromley Pest Control
//                 </span>

//               </div>

//               <p className="mt-6 text-white/55 text-sm sm:text-[15px] leading-7 max-w-md">
//                 PrimeShield Services Bromley provides practical pest control
//                 support for homes, landlords and businesses across Bromley.
//                 From identifying pest activity to targeted treatment and
//                 property protection, our service is built around the problem
//                 at hand.
//               </p>

//               {/* BRAND TAG */}
//               <div className="mt-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-3">

//                 <div className="w-8 h-8 bg-[#F47B2B] text-[#292929] flex items-center justify-center">
//                   <ShieldCheck size={16} />
//                 </div>

//                 <div>
//                   <span className="block text-[9px] text-white/35 uppercase tracking-[0.18em] font-black">
//                     Local Service
//                   </span>

//                   <span className="block mt-0.5 text-[11px] text-white font-bold uppercase tracking-[0.08em]">
//                     Bromley Pest Control
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* NAVIGATION AREA */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">

//             {/* QUICK NAV */}
//             <div>

//               <div className="flex items-center gap-3 mb-7">

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Explore
//                 </span>

//                 <span className="h-px flex-1 bg-white/10" />

//               </div>

//               <nav className="space-y-4">

//                 {navigationLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="group flex items-center justify-between gap-4 text-white/55 hover:text-white transition-colors duration-200 max-w-[260px]"
//                   >

//                     <span className="text-sm font-medium">
//                       {link.name}
//                     </span>

//                     <ArrowUpRight
//                       size={15}
//                       className="text-white/20 group-hover:text-[#F47B2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
//                     />

//                   </Link>
//                 ))}

//               </nav>

//             </div>

//             {/* SERVICES */}
//             <div>

//               <div className="flex items-center gap-3 mb-7">

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Services
//                 </span>

//                 <span className="h-px flex-1 bg-white/10" />

//               </div>

//               <div className="space-y-4">

//                 {serviceLinks.map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="group flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200"
//                   >

//                     <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#F47B2B] transition-colors duration-200 shrink-0" />

//                     <span className="text-sm font-medium">
//                       {service.name}
//                     </span>

//                   </Link>
//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =======================================================
//             CONTACT STRIP
//         ======================================================= */}
//         <div className="py-10 border-b border-white/10">

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">

//             {/* LOCATION */}
//             <div className="bg-[#292929] p-6 sm:p-7 group">

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <MapPin size={19} />
//                 </div>

//                 <div>

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Local Base
//                   </span>

//                   <span className="block text-sm text-white/80 font-medium leading-6">
//                     {address}
//                   </span>

//                 </div>

//               </div>

//             </div>

//             {/* PHONE */}
//             <a
//               href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//               className="bg-[#292929] p-6 sm:p-7 group block hover:bg-[#F47B2B]/5 transition-colors duration-200"
//             >

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <Phone size={19} />
//                 </div>

//                 <div>

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Call Us
//                   </span>

//                   <span className="block text-sm text-white/80 font-bold leading-6 group-hover:text-[#F47B2B] transition-colors">
//                     {phoneNumber}
//                   </span>

//                 </div>

//               </div>

//             </a>

//             {/* EMAIL */}
//             <a
//               href={`mailto:${email}`}
//               className="bg-[#292929] p-6 sm:p-7 group block hover:bg-[#F47B2B]/5 transition-colors duration-200"
//             >

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <Mail size={19} />
//                 </div>

//                 <div className="min-w-0">

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Email
//                   </span>

//                   <span className="block text-sm text-white/80 font-medium leading-6 break-all group-hover:text-[#F47B2B] transition-colors">
//                     {email}
//                   </span>

//                 </div>

//               </div>

//             </a>

//           </div>

//         </div>

//         {/* =======================================================
//             SERVICE AREA BAR
//         ======================================================= */}
//         <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//           <div>

//             <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//               Service Area
//             </span>

//             <p className="text-white/70 text-sm font-medium">
//               Bromley and surrounding local areas
//             </p>

//           </div>

//           <div className="flex items-center gap-3">

//             <span className="w-8 h-px bg-[#F47B2B]" />

//             <span className="text-[9px] text-white/35 uppercase tracking-[0.18em] font-black">
//               Professional Pest Control Support
//             </span>

//           </div>

//         </div>

//         {/* =======================================================
//             COPYRIGHT
//         ======================================================= */}
//         <div className="pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">

//           <p className="text-[12px] text-white/30 text-center sm:text-left">
//             © {new Date().getFullYear()}{" "}
//             <span className="text-white/55">
//               PrimeShield Services Bromley
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex items-center gap-2">

//             <span className="w-1.5 h-1.5 rounded-full bg-[#F47B2B]" />

//             <span className="text-[9px] text-white/30 uppercase tracking-[0.16em] font-black">
//               Bromley • Pest Control • Property Protection
//             </span>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;








// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   ShieldCheck,
//   ArrowUpRight,
// } from "lucide-react";

// const Footer = () => {
//   const companyName = "PrimeShield Services Carshalton";
//   const phoneNumber = "07438 756809";
//   const email = "info@primeshieldcarshalton.uk";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   const navigationLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Pest Control Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-black font-sans text-white">
//       {/* Top accent */}
//       <div className="absolute left-0 top-0 h-[2px] w-full bg-[#EE6C1A]" />

//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
//         {/* =====================================================
//             BRAND HEADER
//         ===================================================== */}

//         <div className="flex flex-col gap-6 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
//           <Link to="/" className="group flex items-center gap-3.5">
//             <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#EE6C1A] text-black transition-transform duration-300 group-hover:scale-105">
//               <ShieldCheck size={19} strokeWidth={2.5} />
//             </div>

//             <div>
//               <p className="text-sm font-black tracking-[-0.025em] text-white">
//                 PrimeShield Services
//               </p>

//               <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Carshalton
//               </p>
//             </div>
//           </Link>

//           <p className="max-w-md text-xs leading-5 text-white/35 sm:text-right">
//             Professional pest control services for homes and businesses
//             across Carshalton and nearby areas.
//           </p>
//         </div>

//         {/* =====================================================
//             FOOTER CONTENT
//         ===================================================== */}

//         <div className="grid gap-10 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.25fr_0.8fr] lg:gap-12">
//           {/* Navigation */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Navigation
//             </p>

//             <nav className="space-y-3.5">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Services
//             </p>

//             <div className="space-y-3.5">
//               {serviceLinks.map((service) => (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {service.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Contact
//             </p>

//             <div className="space-y-4">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="group flex items-start gap-3"
//               >
//                 <Phone
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="text-xs font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
//                   {phoneNumber}
//                 </span>
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="group flex items-start gap-3"
//               >
//                 <Mail
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="break-all text-xs font-semibold text-white/45 transition-colors duration-300 group-hover:text-white">
//                   {email}
//                 </span>
//               </a>

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="text-xs leading-5 text-white/40">
//                   {address}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Coverage */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Coverage
//             </p>

//             <div className="border-l border-[#EE6C1A]/40 pl-4">
//               <p className="text-sm font-black leading-6 text-white/70">
//                 {serviceArea}
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group mt-5 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]"
//               >
//                 Get in touch
//                 <ArrowUpRight
//                   size={13}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM BAR
//         ===================================================== */}

//         <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
//             © {new Date().getFullYear()} PrimeShield Services Carshalton
//           </p>

//           <div className="flex items-center gap-5">
//             <Link
//               to="/about-us"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               About
//             </Link>

//             <Link
//               to="/services"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Services
//             </Link>

//             <Link
//               to="/contact-us"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   ShieldCheck,
//   ArrowUpRight,
//   ArrowRight,
// } from "lucide-react";

// const Footer = () => {
//   const companyName = "PrimeShield Services Sidcup";
//   const phoneNumber = "07356 295780";
//   const email = "info@primeshieldsidcup.uk";
//   const address =
//     "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
//   const serviceArea = "Sidcup and nearby areas";

//   const navigationLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Pest Control Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-black font-sans text-white">
//       {/* Top accent */}
//       <div className="absolute left-0 top-0 h-[2px] w-full bg-[#EE6C1A]" />

//       {/* Subtle background detail */}
//       <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#EE6C1A]/10" />
//       <div className="pointer-events-none absolute -right-20 top-32 h-48 w-48 rounded-full border border-white/[0.03]" />

//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
//         {/* =====================================================
//             BRAND HEADER
//         ===================================================== */}

//         <div className="flex flex-col gap-7 border-b border-white/10 py-9 sm:flex-row sm:items-center sm:justify-between">
//           <Link to="/" className="group flex items-center gap-4">
//             <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-[#EE6C1A] text-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
//               <ShieldCheck size={20} strokeWidth={2.5} />

//               <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
//             </div>

//             <div>
//               <p className="text-[15px] font-black tracking-[-0.03em] text-white">
//                 PrimeShield Services
//               </p>

//               <div className="mt-1 flex items-center gap-2">
//                 <span className="h-px w-5 bg-[#EE6C1A]" />
//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   Sidcup
//                 </p>
//               </div>
//             </div>
//           </Link>

//           <div className="max-w-lg sm:text-right">
//             <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//               Local Pest Control
//             </p>

//             <p className="mt-2 text-xs leading-5 text-white/40">
//               Professional pest control services for homes and businesses
//               across Sidcup and nearby areas.
//             </p>
//           </div>
//         </div>

//         {/* =====================================================
//             FOOTER CONTENT
//         ===================================================== */}

//         <div className="grid gap-10 border-b border-white/10 py-11 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.3fr_0.9fr] lg:gap-12">
//           {/* Navigation */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 01
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Navigation
//               </p>
//             </div>

//             <nav className="space-y-3.5">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 02
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Services
//               </p>
//             </div>

//             <div className="space-y-3.5">
//               {serviceLinks.map((service) => (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {service.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 03
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Contact
//               </p>
//             </div>

//             <div className="space-y-5">
//               {/* Phone */}
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
//                   <Phone
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Phone
//                   </p>

//                   <span className="text-xs font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
//                     {phoneNumber}
//                   </span>
//                 </div>
//               </a>

//               {/* Email */}
//               <a
//                 href={`mailto:${email}`}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
//                   <Mail
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div className="min-w-0">
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Email
//                   </p>

//                   <span className="break-all text-xs font-semibold text-white/45 transition-colors duration-300 group-hover:text-white">
//                     {email}
//                   </span>
//                 </div>
//               </a>

//               {/* Address */}
//               <div className="flex items-start gap-3">
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414]">
//                   <MapPin
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Location
//                   </p>

//                   <span className="text-xs leading-5 text-white/40">
//                     {address}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Coverage */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 04
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Coverage
//               </p>
//             </div>

//             <div className="relative border-l border-[#EE6C1A]/40 pl-5">
//               <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />

//               <p className="text-[15px] font-black leading-6 tracking-[-0.02em] text-white/70">
//                 {serviceArea}
//               </p>

//               <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-white/25">
//                 Pest control support for residential and commercial
//                 properties in the local area.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group mt-6 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]"
//               >
//                 Get in touch

//                 <ArrowUpRight
//                   size={13}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM BAR
//         ===================================================== */}

//         <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex flex-col gap-1">
//             <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
//               © {new Date().getFullYear()} {companyName}
//             </p>

//             <p className="text-[7px] uppercase tracking-[0.16em] text-white/10">
//               Professional pest control • Sidcup
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-5">
//             <Link
//               to="/about-us"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               About
//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/services"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Services
//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/contact-us"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Contact
//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   ShieldCheck,
//   ArrowUpRight,
//   ArrowRight,
// } from "lucide-react";

// const Footer = () => {
//   const companyName = "PrimeShield Pimlico";
//   const phoneNumber = "+44 7405 203539";
//   const email = "info@primeshieldpimlico.uk";
//   const address =
//     "91 Cambridge St, Pimlico, London SW1V 4PY, United Kingdom";
//   const serviceArea = "Pimlico and nearby areas";

//   const phoneLink = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;

//   const navigationLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us/" },
//     { name: "Pest Control Services", path: "/services/" },
//     { name: "Contact Us", path: "/contact-us/" },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-black font-sans text-white">
//       {/* =====================================================
//           TOP ACCENT
//       ===================================================== */}
//       <div className="absolute left-0 top-0 h-[2px] w-full bg-[#EE6C1A]" />

//       {/* =====================================================
//           SUBTLE BACKGROUND DETAIL
//       ===================================================== */}
//       <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#EE6C1A]/10" />

//       <div className="pointer-events-none absolute -right-20 top-32 h-48 w-48 rounded-full border border-white/[0.03]" />

//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
//         {/* =====================================================
//             BRAND HEADER
//         ===================================================== */}

//         <div className="flex flex-col gap-7 border-b border-white/10 py-9 sm:flex-row sm:items-center sm:justify-between">
//           <Link
//             to="/"
//             className="group flex items-center gap-4"
//           >
//             <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-[#EE6C1A] text-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
//               <ShieldCheck size={20} strokeWidth={2.5} />

//               <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
//             </div>

//             <div>
//               <p className="text-[15px] font-black tracking-[-0.03em] text-white">
//                 PrimeShield Pimlico
//               </p>

//               <div className="mt-1 flex items-center gap-2">
//                 <span className="h-px w-5 bg-[#EE6C1A]" />

//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   Pimlico
//                 </p>
//               </div>
//             </div>
//           </Link>

//           <div className="max-w-lg sm:text-right">
//             <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//               Local Pest Control
//             </p>

//             <p className="mt-2 text-xs leading-5 text-white/40">
//               Professional pest control services for homes and
//               businesses across Pimlico and nearby areas.
//             </p>
//           </div>
//         </div>

//         {/* =====================================================
//             FOOTER CONTENT
//         ===================================================== */}

//         <div className="grid gap-10 border-b border-white/10 py-11 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.3fr_0.9fr] lg:gap-12">
//           {/* ===================================================
//               NAVIGATION
//           =================================================== */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 01
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Navigation
//               </p>
//             </div>

//             <nav className="space-y-3.5">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />

//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* ===================================================
//               SERVICES
//           =================================================== */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 02
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Services
//               </p>
//             </div>

//             <div className="space-y-3.5">
//               {serviceLinks.map((service) => (
//                 <Link
//                   key={service.name}
//                   to="/services/"
//                   state={service.state}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />

//                   {service.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* ===================================================
//               CONTACT
//           =================================================== */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 03
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Contact
//               </p>
//             </div>

//             <div className="space-y-5">
//               {/* Phone */}
//               <a
//                 href={phoneLink}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
//                   <Phone
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Phone
//                   </p>

//                   <span className="text-xs font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
//                     {phoneNumber}
//                   </span>
//                 </div>
//               </a>

//               {/* Email */}
//               <a
//                 href={`mailto:${email}`}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
//                   <Mail
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div className="min-w-0">
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Email
//                   </p>

//                   <span className="break-all text-xs font-semibold text-white/45 transition-colors duration-300 group-hover:text-white">
//                     {email}
//                   </span>
//                 </div>
//               </a>

//               {/* Address */}
//               <div className="flex items-start gap-3">
//                 <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414]">
//                   <MapPin
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
//                     Location
//                   </p>

//                   <span className="text-xs leading-5 text-white/40">
//                     {address}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===================================================
//               COVERAGE
//           =================================================== */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                 04
//               </span>

//               <span className="h-px w-6 bg-[#EE6C1A]/50" />

//               <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                 Coverage
//               </p>
//             </div>

//             <div className="relative border-l border-[#EE6C1A]/40 pl-5">
//               <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />

//               <p className="text-[15px] font-black leading-6 tracking-[-0.02em] text-white/70">
//                 {serviceArea}
//               </p>

//               <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-white/25">
//                 Pest control support for residential and commercial
//                 properties throughout Pimlico and the surrounding
//                 local area.
//               </p>

//               <Link
//                 to="/contact-us/"
//                 className="group mt-6 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]"
//               >
//                 Get in touch

//                 <ArrowUpRight
//                   size={13}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM BAR
//         ===================================================== */}

//         <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex flex-col gap-1">
//             <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
//               © {new Date().getFullYear()} {companyName}
//             </p>

//             <p className="text-[7px] uppercase tracking-[0.16em] text-white/10">
//               Professional pest control • Pimlico
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-5">
//             <Link
//               to="/about-us/"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               About

//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/services/"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Services

//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/contact-us/"
//               className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Contact

//               <ArrowRight
//                 size={10}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



























// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   ArrowUpRight,
//   ArrowRight,
//   ShieldCheck,
//   Bug,
// } from "lucide-react";

// const Footer = () => {
//   const companyName = "Knockout Pest Control";
//   const phoneNumber = "074 389 85903";
//   const email = "info@knockoutpestcontrol.uk";
//   const location = "Tooting, London";

//   const phoneLink = "tel:+447438985903";

//   const navigationLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us/" },
//     { name: "Pest Control Services", path: "/services/" },
//     { name: "Contact Us", path: "/contact-us/" },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="bg-[#02262F] font-sans text-white">

//       {/* Top contact banner */}
//       <div className="border-b border-white/10 bg-[#FE312F]">
//         <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14 lg:py-12">

//           <div className="max-w-xl">
//             <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
//               <span className="h-[2px] w-6 bg-white" />
//               Knockout Pest Control
//             </p>

//             <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
//               Need help with a pest problem?
//             </h2>

//             <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
//               Tell us what is happening at your property. Our team is here
//               to help you explore the right pest control solution.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <a
//               href={phoneLink}
//               className="group inline-flex items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-[#02262F] transition-all duration-300 hover:bg-[#02262F] hover:text-white"
//             >
//               <Phone className="h-4 w-4" />

//               <span className="text-xs font-black tracking-wide">
//                 {phoneNumber}
//               </span>

//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//             </a>

//             <Link
//               to="/contact-us/"
//               className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/60 px-6 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#02262F]"
//             >
//               <span className="text-xs font-black uppercase tracking-wide">
//                 Get in touch
//               </span>

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Main footer content */}
//       <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-14">

//         {/* Brand introduction */}
//         <div className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:py-14">

//           <div>
//             <Link
//               to="/"
//               className="inline-flex items-center gap-3"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE312F] text-white">
//                 <Bug className="h-6 w-6" />
//               </div>

//               <div>
//                 <p className="text-lg font-black leading-tight tracking-tight text-white">
//                   Knockout
//                 </p>
//                 <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FE312F]">
//                   Pest Control
//                 </p>
//               </div>
//             </Link>

//             <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
//               Practical pest control support for residential and commercial
//               properties. From unwanted insects to rodent activity, we help
//               you take the next step towards a cleaner, more comfortable
//               property.
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between md:ml-auto md:w-full md:max-w-[440px]">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FE312F] text-white">
//                 <MapPin className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/50">
//                   Our location
//                 </p>
//                 <p className="mt-1 text-sm font-extrabold text-white">
//                   {location}
//                 </p>
//               </div>
//             </div>

//             <Link
//               to="/contact-us/"
//               className="inline-flex items-center gap-2 text-[11px] font-black text-[#FE312F] transition-colors hover:text-white"
//             >
//               Contact us
//               <ArrowUpRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>

//         {/* Footer navigation columns */}
//         <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[0.85fr_1fr_1.15fr_1fr] lg:gap-12 lg:py-14">

//           {/* Quick links */}
//           <div>
//             <div className="mb-6">
//               <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FE312F]">
//                 Explore
//               </p>
//               <h3 className="mt-2 text-lg font-black tracking-tight text-white">
//                 Quick Links
//               </h3>
//             </div>

//             <nav className="space-y-4">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group flex w-fit items-center gap-2 text-[13px] font-medium text-white/55 transition-colors duration-200 hover:text-white"
//                 >
//                   <ArrowRight className="h-3.5 w-3.5 text-[#FE312F] transition-transform duration-200 group-hover:translate-x-1" />
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div>
//             <div className="mb-6">
//               <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FE312F]">
//                 What we do
//               </p>
//               <h3 className="mt-2 text-lg font-black tracking-tight text-white">
//                 Our Services
//               </h3>
//             </div>

//             <div className="space-y-4">
//               {serviceLinks.map((service) => (
//                 <Link
//                   key={service.name}
//                   to="/services/"
//                   state={service.state}
//                   className="group flex w-fit items-center gap-2 text-[13px] font-medium text-white/55 transition-colors duration-200 hover:text-white"
//                 >
//                   <ArrowRight className="h-3.5 w-3.5 text-[#FE312F] transition-transform duration-200 group-hover:translate-x-1" />
//                   {service.name}
//                 </Link>
//               ))}

//               <Link
//                 to="/services/"
//                 className="inline-flex items-center gap-2 pt-1 text-[11px] font-black text-[#FE312F] transition-colors hover:text-white"
//               >
//                 View all services
//                 <ArrowUpRight className="h-3.5 w-3.5" />
//               </Link>
//             </div>
//           </div>

//           {/* Contact details */}
//           <div>
//             <div className="mb-6">
//               <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FE312F]">
//                 Get in touch
//               </p>
//               <h3 className="mt-2 text-lg font-black tracking-tight text-white">
//                 Contact Details
//               </h3>
//             </div>

//             <div className="space-y-5">

//               <a
//                 href={phoneLink}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#FE312F] transition-colors group-hover:bg-[#FE312F] group-hover:text-white">
//                   <Phone className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
//                     Call our team
//                   </p>
//                   <p className="mt-1 text-sm font-extrabold text-white/85 transition-colors group-hover:text-[#FE312F]">
//                     {phoneNumber}
//                   </p>
//                 </div>
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="group flex items-start gap-3"
//               >
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#FE312F] transition-colors group-hover:bg-[#FE312F] group-hover:text-white">
//                   <Mail className="h-4 w-4" />
//                 </div>

//                 <div className="min-w-0">
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
//                     Send an email
//                   </p>
//                   <p className="mt-1 break-all text-sm font-extrabold text-white/85 transition-colors group-hover:text-[#FE312F]">
//                     {email}
//                   </p>
//                 </div>
//               </a>

//               <div className="flex items-start gap-3">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#FE312F]">
//                   <MapPin className="h-4 w-4" />
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
//                     Service location
//                   </p>
//                   <p className="mt-1 text-sm font-extrabold text-white/85">
//                     {location}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Service promise */}
//           <div>
//             <div className="mb-6">
//               <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FE312F]">
//                 Knockout approach
//               </p>
//               <h3 className="mt-2 text-lg font-black tracking-tight text-white">
//                 A Clear Way Forward
//               </h3>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
//               <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FE312F] text-white">
//                 <ShieldCheck className="h-5 w-5" />
//               </div>

//               <h4 className="mt-4 text-sm font-black text-white">
//                 Focused on your property
//               </h4>

//               <p className="mt-2 text-xs leading-6 text-white/55">
//                 We help identify the pest issue and discuss suitable
//                 treatment or prevention options for your property.
//               </p>

//               <Link
//                 to="/contact-us/"
//                 className="mt-5 inline-flex items-center gap-2 text-[11px] font-black text-[#FE312F] transition-colors hover:text-white"
//               >
//                 Discuss your problem
//                 <ArrowUpRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/10 bg-[#011D24]">
//         <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">

//           <div>
//             <p className="text-[11px] font-bold text-white">
//               © {new Date().getFullYear()} {companyName}
//             </p>
//             <p className="mt-1 text-[10px] text-white/45">
//               Pest control services in {location}.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
//             <Link
//               to="/about-us/"
//               className="text-[10px] font-semibold text-white/55 transition-colors hover:text-white"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/services/"
//               className="text-[10px] font-semibold text-white/55 transition-colors hover:text-white"
//             >
//               Services
//             </Link>

//             <Link
//               to="/contact-us/"
//               className="text-[10px] font-semibold text-white/55 transition-colors hover:text-white"
//             >
//               Contact
//             </Link>

//             <span className="h-1.5 w-1.5 rounded-full bg-[#FE312F]" />

//             <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
//               Knockout Pest Control
//             </span>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;























import React from "react";
import { Link } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Bug,
  Home,
  Building2,
  ChevronRight,
} from "lucide-react";

/* ==========================================
   BUSINESS DETAILS
========================================== */

const companyName = "Oakridge Pest Control UK";

const phoneNumber = "+44 7440 681717";

const phoneLink = "tel:+447440681717";

const email = "info@oakridgepestcontrol.uk";

const location = "Greenwich, London";

/* ==========================================
   NAVIGATION LINKS
========================================== */

const navigationLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us/",
  },
  {
    name: "Pest Control Services",
    path: "/services/",
  },
  {
    name: "Contact Us",
    path: "/contact-us/",
  },
];

/* ==========================================
   SERVICE LINKS
   EXISTING FILTER FUNCTIONALITY PRESERVED
========================================== */

const serviceLinks = [
  {
    name: "Rat & Mice Control",
    state: {
      scrollToService: "Rat & Mice Control",
      category: "Rodents & Wildlife",
    },
  },
  {
    name: "Bed Bug Treatment",
    state: {
      scrollToService: "Bed Bug Treatment",
      category: "Insects",
    },
  },
  {
    name: "Cockroach Control",
    state: {
      scrollToService: "Cockroach Control",
      category: "Insects",
    },
  },
  {
    name: "Flea Control",
    state: {
      scrollToService: "Flea Control",
      category: "Insects",
    },
  },
];

/* ==========================================
   SHARED CLASSES
========================================== */

const wrap =
  "mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16";

const footerLink =
  "group flex w-fit items-center gap-3 text-sm font-medium text-white transition-all duration-300 hover:translate-x-1 motion-reduce:transform-none";

const headingStyle =
  "mb-7 text-xl font-bold text-white";

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-[#FE6387] via-[#E84F78] to-[#A82252] text-white"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >

      {/* ======================================
          DECORATIVE BACKGROUND ELEMENTS
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[220px] -top-[220px] h-[650px] w-[650px] rounded-full border-[90px] border-white/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[200px] -left-[200px] h-[600px] w-[600px] rounded-full border-[80px] border-white/[0.04]"
      />

      {/* ======================================
          01 — PREMIUM CONTACT INTRODUCTION
      ====================================== */}

      <section className="relative pt-12 sm:pt-16 lg:pt-20">

        <div className={wrap}>

          <div className="grid overflow-hidden rounded-[30px] bg-[#FFF5F2] lg:grid-cols-[1.35fr_0.65fr]">

            {/* INTRODUCTION CONTENT */}

            <div className="p-7 text-[#A82252] sm:p-12 lg:p-14">

              <div className="flex w-fit items-center gap-2 rounded-full border border-[#FE6387]/30 bg-white px-4 py-2">

                <span className="h-2 w-2 rounded-full bg-[#FE6387]" />

                <span className="text-xs font-bold text-[#A82252]">
                  Your local pest control team
                </span>

              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-[#A82252] sm:text-5xl lg:text-[52px]">

                A property should feel like
                <span className="block text-[#A82252]">
                  yours. Not theirs.
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#A82252] sm:text-base">

                Whether you have discovered unwanted insects,
                signs of rodent activity or a recurring pest
                concern, Oakridge is here to discuss the
                next steps for your property.

              </p>

              {/* PROPERTY TYPES */}

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full border border-[#FE6387]/25 bg-white px-4 py-2.5 text-xs font-bold text-[#A82252]">

                  <Home size={17} />

                  Residential

                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#FE6387]/25 bg-white px-4 py-2.5 text-xs font-bold text-[#A82252]">

                  <Building2 size={17} />

                  Commercial

                </div>

              </div>

            </div>

            {/* CONTACT ACTION PANEL */}

            <div className="relative flex flex-col justify-center overflow-hidden bg-[#A82252] p-7 text-white sm:p-10 lg:p-12">

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.07]"
              />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white">

                  <Phone size={26} />

                </div>

                <p className="mt-6 text-sm font-bold text-white">

                  Let's talk about your property

                </p>

                <a
                  href={phoneLink}
                  className="mt-3 block text-2xl font-bold text-white transition-opacity hover:opacity-80 sm:text-3xl"
                >

                  {phoneNumber}

                </a>

                <p className="mt-4 text-sm leading-7 text-white">

                  Speak directly with Oakridge or send us
                  the details of your pest concern.

                </p>

                <Link
                  to="/contact-us/"
                  className="group mt-7 flex items-center justify-between gap-4 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#A82252] transition-colors hover:bg-[#FFF5F2]"
                >

                  Request assistance

                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================
          02 — BRAND INTRODUCTION
      ====================================== */}

      <section className="relative">

        <div className={wrap}>

          <div className="grid items-center gap-8 border-b border-white/30 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr]">

            {/* BRAND IDENTITY */}

            <div>

              <Link
                to="/"
                aria-label="Oakridge Pest Control UK Home"
                className="group inline-flex items-center gap-4"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-white/40 bg-white/10 text-white transition-transform duration-300 group-hover:rotate-6 motion-reduce:transform-none sm:h-16 sm:w-16">

                  <Bug size={31} />

                </div>

                <div>

                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">

                    Oakridge

                  </p>

                  <p className="mt-1 text-xs font-bold tracking-[0.18em] text-white">

                    PEST CONTROL UK

                  </p>

                </div>

              </Link>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white">

                Pest management begins with understanding
                the environment. Oakridge Pest Control UK
                provides property-focused pest control
                support for homes and businesses, combining
                practical assessment, appropriate treatment
                options and preventative guidance.

              </p>

            </div>

            {/* LOCAL COVERAGE PANEL */}

            <div className="relative overflow-hidden rounded-[24px] border border-white/35 bg-white/10 p-6 sm:p-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-10 text-white/[0.08]"
              >

                <MapPin size={190} strokeWidth={1} />

              </div>

              <div className="relative">

                <div className="flex items-center gap-3">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#A82252]">

                    <MapPin size={21} />

                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">

                    Rooted in London

                  </p>

                </div>

                <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">

                  Greenwich, London.

                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white">

                  Local pest control enquiries for residential
                  and commercial properties. Contact us with
                  your postcode to discuss service coverage.

                </p>

                <Link
                  to="/contact-us/"
                  className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/50 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#A82252]"
                >

                  Discuss your location

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================
          03 — MAIN FOOTER DIRECTORY
      ====================================== */}

      <section className="relative">

        <div className={wrap}>

          <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-[0.8fr_1fr_1.3fr_0.9fr] lg:gap-8">

            {/* ==================================
                COLUMN 01 — NAVIGATION
            ================================== */}

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-white" />

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">

                  01 / Discover

                </p>

              </div>

              <h3 className={headingStyle}>

                Explore Oakridge

              </h3>

              <nav
                aria-label="Footer navigation"
                className="space-y-5"
              >

                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={footerLink}
                  >

                    <ChevronRight
                      size={16}
                      className="shrink-0 text-white"
                    />

                    {link.name}

                  </Link>
                ))}

              </nav>

            </div>

            {/* ==================================
                COLUMN 02 — PEST SERVICES
            ================================== */}

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-white" />

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">

                  02 / Solutions

                </p>

              </div>

              <h3 className={headingStyle}>

                Pest Management

              </h3>

              <div className="space-y-5">

                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to="/services/"
                    state={service.state}
                    className={footerLink}
                  >

                    <ChevronRight
                      size={16}
                      className="shrink-0 text-white"
                    />

                    {service.name}

                  </Link>
                ))}

                <Link
                  to="/services/"
                  className="group mt-2 inline-flex items-center gap-3 rounded-full border border-white/40 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#A82252]"
                >

                  See all services

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  />

                </Link>

              </div>

            </div>

            {/* ==================================
                COLUMN 03 — CONTACT INFORMATION
            ================================== */}

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-white" />

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">

                  03 / Connect

                </p>

              </div>

              <h3 className={headingStyle}>

                Talk to Our Team

              </h3>

              <div className="space-y-3">

                {/* PHONE CARD */}

                <a
                  href={phoneLink}
                  className="group flex items-center gap-3 rounded-2xl border border-white/25 bg-white/[0.08] p-4 transition-colors duration-300 hover:bg-white/15"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#A82252] transition-transform duration-300 group-hover:rotate-6 motion-reduce:transform-none">

                    <Phone size={19} />

                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-[11px] text-white">

                      Telephone

                    </p>

                    <p className="mt-1.5 text-sm font-bold text-white">

                      {phoneNumber}

                    </p>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-white"
                  />

                </a>

                {/* EMAIL CARD */}

                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/25 bg-white/[0.08] p-4 transition-colors duration-300 hover:bg-white/15"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#A82252] transition-transform duration-300 group-hover:rotate-6 motion-reduce:transform-none">

                    <Mail size={19} />

                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-[11px] text-white">

                      Email enquiries

                    </p>

                    <p className="mt-1.5 break-all text-xs font-bold leading-5 text-white">

                      {email}

                    </p>

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-white"
                  />

                </a>

                {/* LOCATION CARD */}

                <div className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/[0.08] p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#A82252]">

                    <MapPin size={19} />

                  </div>

                  <div>

                    <p className="text-[11px] text-white">

                      Local service area

                    </p>

                    <p className="mt-1.5 text-sm font-bold text-white">

                      {location}

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ==================================
                COLUMN 04 — PROPERTY FOCUS
            ================================== */}

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-white" />

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">

                  04 / Our Focus

                </p>

              </div>

              <h3 className={headingStyle}>

                Beyond Treatment

              </h3>

              <div className="rounded-[22px] bg-[#FFF5F2] p-6 text-[#A82252]">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A82252] text-white">

                  <Bug size={23} />

                </div>

                <h4 className="mt-5 text-lg font-bold leading-tight text-[#A82252]">

                  Understand.
                  <br />
                  Address.
                  <br />
                  Prevent.

                </h4>

                <p className="mt-4 text-xs leading-6 text-[#A82252]">

                  Our approach considers the pest activity,
                  the property itself and practical ways
                  to reduce the likelihood of future problems.

                </p>

                <Link
                  to="/about-us/"
                  className="group mt-6 inline-flex items-center gap-2 border-b border-[#A82252]/30 pb-2 text-xs font-bold text-[#A82252]"
                >

                  Discover our approach

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================
          04 — OVERSIZED BRAND SIGNATURE
      ====================================== */}

      <section className="relative">

        <div className={wrap}>

          <div className="relative border-t border-white/25 pt-9 sm:pt-12">

            {/* BRAND LABEL */}

            <div className="flex flex-wrap items-center justify-between gap-5">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-white" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">

                  Pest management. Property focused.

                </p>

              </div>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex items-center gap-3 rounded-full border border-white/40 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#A82252]"
              >

                Back to top

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#A82252]">

                  <ArrowUp
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />

                </span>

              </button>

            </div>

            {/* OVERSIZED BRAND TEXT */}

            <div
              aria-hidden="true"
              className="select-none overflow-hidden pb-3 pt-8 sm:pt-10"
            >

              <p className="whitespace-nowrap text-center text-[clamp(40px,13vw,190px)] font-bold leading-[0.9] tracking-[-0.065em] text-white">

                OAKRIDGE

              </p>

            </div>

            <div className="flex items-center justify-center gap-4 pb-9 pt-3 sm:gap-6 sm:pb-12">

              <span className="h-px max-w-[140px] flex-1 bg-white/50" />

              <span className="whitespace-nowrap text-[10px] font-bold tracking-[0.25em] text-white sm:text-sm sm:tracking-[0.5em]">

                PEST CONTROL UK

              </span>

              <span className="h-px max-w-[140px] flex-1 bg-white/50" />

            </div>

          </div>

        </div>

      </section>

      {/* ======================================
          05 — COPYRIGHT BOTTOM BAR
      ====================================== */}

      <div className="relative border-t border-white/20 bg-[#A82252]">

        <div className={wrap}>

          <div className="flex flex-col items-start justify-between gap-5 py-6 md:flex-row md:items-center">

            {/* COPYRIGHT */}

            <div>

              <p className="text-xs font-bold text-white">

                © {new Date().getFullYear()} {companyName}.

              </p>

              <p className="mt-2 text-[11px] leading-5 text-white">

                All rights reserved. Greenwich, London, United Kingdom.

              </p>

            </div>

            {/* BOTTOM NAVIGATION */}

            <nav
              aria-label="Footer bottom navigation"
              className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7"
            >

              <Link
                to="/"
                className="text-xs font-medium text-white hover:underline"
              >

                Home

              </Link>

              <Link
                to="/about-us/"
                className="text-xs font-medium text-white hover:underline"
              >

                About

              </Link>

              <Link
                to="/services/"
                className="text-xs font-medium text-white hover:underline"
              >

                Services

              </Link>

              <Link
                to="/contact-us/"
                className="text-xs font-medium text-white hover:underline"
              >

                Contact

              </Link>

            </nav>

          </div>

        </div>

      </div>

    </footer>
  );
}