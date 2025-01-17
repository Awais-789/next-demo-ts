// import React from "react";
// import { Button } from "@/components/ui/button"; 
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-secondary">
//       <nav className="container mx-auto flex items-center justify-between py-4">
//         {/* Logo Section */}
//         <Link href="/" className="text-primary font-bold text-lg">
//           Logo
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="text-primary hover:text-accent">
//             Home
//           </Link>
//           <Link href="/products" className="text-primary hover:text-accent">
//             Products
//           </Link>
//           <Link href="/about" className="text-primary hover:text-accent">
//             About Us
//           </Link>
//           <Link href="/contact" className="text-primary hover:text-accent">
//             Contact Us
//           </Link>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-4">
//           <Button variant="outline" className="text-primary border-primary">
//             Login
//           </Button>
//           <Button variant="default" className="bg-accent text-primary">
//             Sign Up
//           </Button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             type="button"
//             className="text-primary focus:outline-none"
//             aria-label="Toggle navigation"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// export default function Header() {

//   return (
//     <header className="bg-background">
//       <div className="flex justify-between items-center px-4 py-3 md:px-8">
//         {/* Logo */}
//         <div className="bg-secondary text-primary font-bold text-lg px-4 py-2 rounded-md">
//           Logo
//         </div>

//         {/* Navigation */}
//         <nav className="flex gap-6">
//           <a
//             href="#"
//             className="text-primary font-semibold hover:text-secondary relative"
//           >
//             Home
//             <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 text-primary text-sm font-basic-commercial font-bold">
//               •
//             </span>
//           </a>
//           <a
//             href="#"
//             className="text-secondary hover:text-primary transition-colors font-basic-commercial "
//           >
//             Products
//           </a>
//           <a
//             href="#"
//             className="text-secondary hover:text-primary transition-colors font-basic-commercial "
//           >
//             About Us
//           </a>
//           <a
//             href="#"
//             className="text-secondary hover:text-primary transition-colors font-basic-commercial "
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* Icons */}

//         <div className="flex gap-6 items-center">
//           {/* User Icon */}
//           <button className="text-primary flex items-center justify-center">
//             <img
//               src="/accountCircle.png"
//               alt="AccountCircle"
//               className="w-6 h-6"
//             />
//           </button>

//           {/* Cart Icon */}
//           <div className="relative flex items-center justify-center">
//             <button className="text-primary">
//               <img
//                 src="/shopping.png"
//                 alt="Shopping"
//                 className="w-6 h-6"
//               />
//             </button>
//             <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//               3
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const icons = [
    {
      src: "/accountCircle.png",
      alt: "AccountCircle",
      badge: null,
      href: "/account"
    },
    {
      src: "/shopping.png",
      alt: "Shopping",
      badge: 3,
      href: "/shopping"
    },
  ];

  return (
    <header className="bg-background">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="bg-secondary text-primary font-bold text-lg px-4 py-2 rounded-md ">
          Logo
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${link.active
                ? "text-primary font-semibold relative"
                : "text-[#9B9B9B] hover:text-primary transition-colors"
                } font-basic-commercial`}
            >
              {link.label}
              {link.active && (
                <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 text-primary text-sm font-basic-commercial font-bold">
                  •
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Icons */}
        {/* <div className="flex gap-6 items-center">
          {icons.map((icon, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <Link  className="text-primary">
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </Link>
              {icon.badge && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {icon.badge}
                </span>
              )}
            </div>
          ))}
        </div> */}
        <div className="flex gap-6 items-center">
          {icons.map((icon, index) => (
            <div key={index} className="relative flex items-center justify-center">
              {icon.href ? (
                <Link href={icon.href}>
                  <div className="text-primary">
                    <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                  </div>
                </Link>
              ) : (
                <button className="text-primary" aria-label={icon.alt}>
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </button>
              )}
              {icon.badge && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {icon.badge}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </header>
  );
}
