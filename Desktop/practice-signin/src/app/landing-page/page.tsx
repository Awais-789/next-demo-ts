import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Leaf, ShoppingCart, MapPin, Check, Star, Heart, Quote, Omega } from 'lucide-react';
import { Headphones } from "lucide-react";
import Footer from '@/app/footer/footer';
import { Input } from "@/components/ui/input";



export default function LandingPage() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-black" />,
      title: "Fill the form at the begining.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-[#FBD54E]"
    },
    {
      icon: <Leaf className="w-6 h-6 text-black" />,
      title: "Select the products you want.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-[#FBD54E]/30"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-black" />,
      title: "Add products to the cart.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-[#FBD54E]/30"
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: "Get delivered to your door step.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "bg-[#FBD54E]/30"
    }
  ];

  const stats = [
    {
      number: "850",
      title: "Professionals Team",
      description: "Highly Verified"
    },
    {
      number: "1500+",
      title: "Happy Customers",
      description: "Got their treatments"
    },
    {
      number: "95.8%",
      title: "Positive Feedback",
      description: "From our customers"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#EFEFEF] relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto">
        <div className="bg-[#D9D9D9] p-4 rounded">
          <span className="text-black font-bold">Logo</span>
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className="hidden md:block">
            Sign in
          </Button>
          <Button className="bg-[#FBD54E] text-black hover:bg-[#FBD54E]/90">
            Sign up
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              We Always Provide Best Products
            </h1>
            <p className="text-gray-500 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <Button className="bg-[#FBD54E] text-black hover:bg-[#FBD54E]/90 px-8 py-6 text-lg">
              Get started
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lady-trans-1.png"
                alt="Woman with groceries"
                className="w-[90%] h-auto object-cover"
              />
            </div>

            {/* Support Card */}
            <div className="flex flex-col items-center justify-center absolute top-[-80px] right-[-10px] bg-white p-4 w-[139px] h-[140px] rounded-xl shadow-lg z-20 max-w-[200px]">
              <div className="flex flex-col items-center justify-between gap-2 mb-2 rounded-[20px] ">
                <div className="bg-[#FBD54E]/20 p-2 rounded-full">
                  <Headphones className="w-5 h-5 text-[#FBD54E]" />
                </div>
                <span className="font-semibold">24hr Support</span>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum is a dummy text for long
              </p>
            </div>

            {/* Review Card */}
            <div className="absolute bottom-12 left-32  bg-white p-3 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src="/Rectangle-6.png"
                    alt="Review avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-cente gap-1">
                  <div className="w-[126px] h-2 rounded-[9px] bg-gray-200 " />
                  <div className="w-[91px] h-2 rounded-[9px] bg-gray-200 " />
                </div>
              </div>
            </div>

            {/* Background Circle */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FBD54E]/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EFEFEF] py-16 px-4 md:px-6">
        {/* Services Section */}
        <div className="max-w-7xl mx-auto mb-32 text-center">
          <Badge variant="secondary" className="mb-8 " >
            Services
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Easy steps to get your product
          </h2>

          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                <div className={`${step.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Products
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold">
                We are offering specialist certified products.
              </h2>

              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="text-black" />
                  <span>You can find the product easily.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-black" />
                  <span>Latest and healthy products.</span>
                </div>
              </div>

              <Button className="bg-[#FBD54E] text-black hover:bg-[#FBD54E]/90 mt-4">
                See products
                <span className="ml-2">→</span>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/Rectangle-47.png"
                alt="Doctor with certification"
                className="w-full rounded-lg"
              />

              {/* Certification Card */}
              <Card className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg max-w-[240px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FBD54E]/20 p-2 rounded-full">
                    <Check className="w-5 h-5 text-[#FBD54E]" />
                  </div>
                  <span className="font-semibold">Product verified by</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">Dr. James Jones</p>
                      <p className="text-xs text-gray-500">Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold">Dr. Lauren Alexandra</p>
                      <p className="text-xs text-gray-500">Specialist</p>
                    </div>
                  </div>
                </div>

                <Button variant="default" className="w-full mt-3 text-sm">
                  See more
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EFEFEF] py-16 px-4 md:px-6">
        {/* Feedback Section */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/Rectangle-49.png"
                alt="Customer with groceries"
                className="w-full rounded-lg"
              />

              {/* Review Card */}
              <Card className="absolute bottom-32 left-24 bg-white p-6 rounded-xl shadow-lg max-w-[340px] h-[184px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/Ellipse-16.png"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Anna Marie</h4>
                    <p className="text-sm text-gray-500">Since 2021</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBD54E] text-[#FBD54E]" />
                  ))}
                </div>

                <p className="text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>

                {/* Small profile card */}
                {/* <div className="absolute -top-3 right-4 bg-white p-2 rounded-lg shadow-md">
                <div className="w-8 h-8 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/32/32"
                    alt="Small profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}

                <div className="absolute  bottom-56 left-56  bg-white p-3 rounded-xl shadow-lg z-20">
                  <div className="absolute -top-3 -right-3 bg-[#FBD54E] p-2 rounded-lg">
                    <Heart className="w-4 h-4 text-black" fill="#000000" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src="/Rectangle-61.png"
                        alt="Review avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-cente gap-1">
                      <div className="w-[126px] h-2 rounded-[9px] bg-gray-200 " />
                      <div className="w-[91px] h-2 rounded-[9px] bg-gray-200 " />
                    </div>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="absolute -top-[-19px] -right-[-10px] p-2 rounded-lg">
                  <img src="/quote.png" alt="" />
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Feedbacks
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold">
                Read the best reviews from our users
              </h2>

              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <Button className="bg-[#FBD54E] text-black hover:bg-[#FBD54E]/90">
                See more
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8">
            Services
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our long journey
          </h2>

          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#FBD54E]/10 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="font-semibold mb-2">{stat.title}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section
  className="relative flex items-center justify-center w-full h-screen overflow-hidden"
>
  <div
    className="relative w-full max-w-[1087px] h-[344px] rounded-[43px] overflow-hidden"
  >
    <img
      src="/Rectangle-20.png"
      alt="Newsletter Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-center z-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl " >
        Sign Up For Our News Letter
      </h2>

    
      <div className="flex items-center mx-auto max-w-[600px] space-x-2">
        <div className="relative w-[347px]">
          <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
            <img
              src="/msg.png"
              alt="Message Icon"
              className="w-5 h-5"
            />
          </span>

          <input
            className="w-full h-12 bg-white text-gray-900 rounded-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none"
            placeholder="Put your email address here..."
            type="email"
          />
        </div>

        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 w-[120px] h-12">
          Send
        </button>
      </div>
    </div>
  </div>
</section>


      <div>
        <Footer />
      </div>
    </div>

  );
}

