// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-background text-primary py-10">
//       <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-start justify-between gap-4">
//         {/* Logo Section */}
//         <div className="flex flex-col w-[20%] min-w-[150px]">
//           <h3 className="font-basic-commercial font-bold">Logo</h3>
//           <p className="font-basic-commercial font-light">Call or Text: 123456</p>
//           <p className="font-basic-commercial font-light">Email: company@email</p>
//           <div className="flex space-x-3 mt-2">
//             <span className="bg-accent p-2 rounded-full">
//               <img
//                 src="/Facebook.png"
//                 alt="Facebook"
//                 className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//               <img
//                 src="/Twitter.png"
//                 alt="Twitter"
//                 className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//               <img
//                 src="/Linkedin.png"
//                 alt="Linkedin"
//                 className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//               <img
//                 src="/Instagram.png"
//                 alt="Instagram"
//                 className="w-[14px] h-[14px]"
//               />
//             </span>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="flex flex-col w-[15%] min-w-[120px]">
//           <h3 className="font-basic-commercial font-bold">Quick Links</h3>
//           <ul className="font-basic-commercial font-light space-y-1">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Services</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>

//         {/* Other Section */}
//         <div className="flex flex-col w-[15%] min-w-[120px]">
//           <h3 className="font-basic-commercial font-bold">Other</h3>
//           <ul className="font-basic-commercial font-light space-y-1">
//             <li>Contact Us</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//             <li>Live Support</li>
//           </ul>
//         </div>

//         {/* Others Section */}
//         <div className="flex flex-col w-[15%] min-w-[120px]">
//           <h3 className="font-basic-commercial font-bold">Others</h3>
//           <ul className="font-basic-commercial font-light space-y-1">
//             <li>Contact Us</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//             <li>Live Support</li>
//           </ul>
//         </div>

//         {/* Address Section */}
//         <div className="flex flex-col w-[30%] min-w-[200px]">
//           <h3 className="font-basic-commercial font-bold">Address</h3>
//           <p className="font-basic-commercial font-light">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s.
//           </p>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <p className="text-center mt-10 text-sm font-poppins font-medium">
//         © Copyright 2022 by DPI_MEDIA - All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const sections = [
    {
      title: "Logo",
      content: (
        <>
          <p className="font-basic-commercial font-light">
            Call or Text: 123456
          </p>
          <p className="font-basic-commercial font-light">
            Email: company@email
          </p>
          {/* <div className="flex space-x-3 mt-2">
            {["Facebook", "Twitter", "Linkedin", "Instagram"].map((name) => (
              <span key={name} className="bg-accent p-2 rounded-full">
                <Image
                  src={`/${name}.png`}
                  alt={name}
                  width={14}
                  height={14}
                />
              </span>
            ))}
          </div> */}
          {/* <div className="flex space-x-3 mt-2">
            {["Facebook", "Twitter", "Linkedin", "Instagram"].map((name) => (
              <Button key={name} size="icon" variant="outline" className="bg-accent p-2 rounded-full h-auto w-auto">
                <Image
                  src={`/${name.toLowerCase()}.png`}
                  alt={name}
                  width={14}
                  height={14}
                />
                <span className="sr-only">{name}</span>
              </Button>
            ))}
          </div> */}

          <div className="flex space-x-3 mt-2">
            {["Facebook", "Twitter", "Linkedin", "Instagram"].map((name) => (
              <Link key={name} href={`https://www.${name.toLowerCase()}.com/`}>
                <Button size="icon" variant="outline" className="bg-accent p-2 rounded-full h-auto w-auto">
                  <Image
                    src={`/${name.toLowerCase()}.png`}
                    alt={name}
                    width={14}
                    height={14}
                  />
                  <span className="sr-only">{name}</span>
                </Button>
              </Link>
            ))}
          </div>

        </>
      ),
      style: "w-[20%] min-w-[150px]",
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
      ],
      style: "w-[15%] min-w-[120px]",
    },
    {
      title: "Other",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Live Support", href: "/support" },
      ],
      style: "w-[15%] min-w-[120px]",
    },
    {
      title: "Others",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Live Support", href: "/support" },
      ],
      style: "w-[15%] min-w-[120px]",
    },
    {
      title: "Address",
      content: (
        <p className="font-basic-commercial font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      ),
      style: "w-[30%] min-w-[200px]",
    },
  ];

  return (
    <footer className="bg-background text-primary py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-start justify-between gap-4">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${section.style}`}>
            <h3 className="font-basic-commercial font-bold">{section.title}</h3>
            {section.links ? (
              <ul className="font-basic-commercial font-light space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}><Link key={i} href={link.href}>{link.name}</Link></li>
                ))}
              </ul>
            ) : (
              section.content
            )}
          </div>
        ))}
      </div>
      <p className="text-center mt-10 text-sm font-poppins font-medium">
        © Copyright 2022 by DPI_MEDIA - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const Footer = () => {
//   const sections = [
//     {
//       title: "Logo",
//       content: (
//         <>
//           <p className="text-sm">
//             Call or Text: 123456
//           </p>
//           <p className="text-sm">
//             Email: company@email
//           </p>
//           <div className="flex space-x-3 mt-2">
//             {["Facebook", "Twitter", "Linkedin", "Instagram"].map((name) => (
//               <Button key={name} size="icon" variant="outline" className="bg-accent p-2 rounded-full h-auto w-auto">
//                 <Image
//                   src={`/${name.toLowerCase()}.png`}
//                   alt={name}
//                   width={14}
//                   height={14}
//                 />
//                 <span className="sr-only">{name}</span>
//               </Button>
//             ))}
//           </div>
//         </>
//       ),
//       style: "w-full sm:w-[20%] min-w-[150px]",
//     },
//     {
//       title: "Quick Links",
//       links: [
//         { name: "Home", href: "/" },
//         { name: "About Us", href: "/about" },
//         { name: "Services", href: "/services" },
//         { name: "Contact Us", href: "/contact" },
//       ],
//       style: "w-full sm:w-[15%] min-w-[120px]",
//     },
//     {
//       title: "Other",
//       links: [
//         { name: "Contact Us", href: "/contact" },
//         { name: "Blog", href: "/blog" },
//         { name: "Pricing", href: "/pricing" },
//         { name: "Live Support", href: "/support" },
//       ],
//       style: "w-full sm:w-[15%] min-w-[120px]",
//     },
//     {
//       title: "Others",
//       links: [
//         { name: "Contact Us", href: "/contact" },
//         { name: "Blog", href: "/blog" },
//         { name: "Pricing", href: "/pricing" },
//         { name: "Live Support", href: "/support" },
//       ],
//       style: "w-full sm:w-[15%] min-w-[120px]",
//     },
//     {
//       title: "Address",
//       content: (
//         <p className="text-sm">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text
//           ever since the 1500s.
//         </p>
//       ),
//       style: "w-full sm:w-[30%] min-w-[200px]",
//     },
//   ];

//   return (
//     <footer className="bg-background text-primary py-10">
//       <div className="container mx-auto flex flex-wrap justify-between gap-8">
//         {sections.map((section, index) => (
//           <div key={index} className={`flex flex-col ${section.style}`}>
//             <h3 className="font-bold mb-4">{section.title}</h3>
//             {section.links ? (
//               <ul className="space-y-2">
//                 {section.links.map((link, i) => (
//                   <li key={i}>
//                     <Link href={link.href} className="text-sm hover:underline">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               section.content
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="container mx-auto mt-10">
//         <p className="text-center text-sm">
//           © Copyright 2022 by DPI_MEDIA - All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

