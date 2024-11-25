// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-background text-primary py-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div>
//           <h3 className="font-basic-commercial font-bold">Logo</h3>
//           <p className="font-basic-commercial font-light">Call or Text: 123456</p>
//           <p className="font-basic-commercial font-light">Email: company@email</p>
//           <div className="flex space-x-3 mt-2">
//             <span className="bg-accent p-2 rounded-full">
//               <img 
//               src="/Facebook.png"
//               alt="Facebook"
//               className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//               <img 
//               src="/Twitter.png"
//               alt="Twitter"
//               className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//             <img 
//               src="/Linkedin.png"
//               alt="Linkedin"
//               className="w-[14px] h-[14px]"
//               />
//             </span>
//             <span className="bg-accent p-2 rounded-full">
//             <img 
//               src="/Instagram.png"
//               alt="Instagram"
//               className="w-[14px] h-[14px]"
//               />
//             </span>
//           </div>
//         </div>
//         <div>
//           <h3 className="font-basic-commercial font-bold">Quick Links</h3>
//           <ul className="font-basic-commercial font-light">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Services</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-basic-commercial font-bold">Other</h3>
//           <ul className="font-basic-commercial font-light">
//             <li>Contact Us</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//             <li>Live Support</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-basic-commercial font-bold">Others</h3>
//           <ul className="font-basic-commercial font-light">
//             <li>Contact Us</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//             <li>Live Support</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-basic-commercial font-bold">Address</h3>
//           <p className="font-basic-commercial font-light">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
//           </p>
//         </div>
//       </div>
//       <p className="text-center mt-10 text-sm font-poppins font-medium">
//         © Copyright 2022 by DPI_MEDIA - All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-primary py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-start justify-between gap-4">
        {/* Logo Section */}
        <div className="flex flex-col w-[20%] min-w-[150px]">
          <h3 className="font-basic-commercial font-bold">Logo</h3>
          <p className="font-basic-commercial font-light">Call or Text: 123456</p>
          <p className="font-basic-commercial font-light">Email: company@email</p>
          <div className="flex space-x-3 mt-2">
            <span className="bg-accent p-2 rounded-full">
              <img
                src="/Facebook.png"
                alt="Facebook"
                className="w-[14px] h-[14px]"
              />
            </span>
            <span className="bg-accent p-2 rounded-full">
              <img
                src="/Twitter.png"
                alt="Twitter"
                className="w-[14px] h-[14px]"
              />
            </span>
            <span className="bg-accent p-2 rounded-full">
              <img
                src="/Linkedin.png"
                alt="Linkedin"
                className="w-[14px] h-[14px]"
              />
            </span>
            <span className="bg-accent p-2 rounded-full">
              <img
                src="/Instagram.png"
                alt="Instagram"
                className="w-[14px] h-[14px]"
              />
            </span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col w-[15%] min-w-[120px]">
          <h3 className="font-basic-commercial font-bold">Quick Links</h3>
          <ul className="font-basic-commercial font-light space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Other Section */}
        <div className="flex flex-col w-[15%] min-w-[120px]">
          <h3 className="font-basic-commercial font-bold">Other</h3>
          <ul className="font-basic-commercial font-light space-y-1">
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Live Support</li>
          </ul>
        </div>

        {/* Others Section */}
        <div className="flex flex-col w-[15%] min-w-[120px]">
          <h3 className="font-basic-commercial font-bold">Others</h3>
          <ul className="font-basic-commercial font-light space-y-1">
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Live Support</li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="flex flex-col w-[30%] min-w-[200px]">
          <h3 className="font-basic-commercial font-bold">Address</h3>
          <p className="font-basic-commercial font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center mt-10 text-sm font-poppins font-medium">
        © Copyright 2022 by DPI_MEDIA - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


