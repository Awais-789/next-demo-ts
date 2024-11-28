// "use client";

// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { formSchema, FormValues } from "@/app/schemas/formSchema";
// import { z } from "zod";

// export default function ModalForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <Dialog>
//       <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Form</DialogTrigger>
//       <DialogContent className="max-w-lg p-6">
//         <DialogHeader>
//           <DialogTitle>Chronic Kidney Disease</DialogTitle>
//           <p className="text-sm text-muted-foreground">
//             Your answers are treated as personal information according to our <a href="#" className="underline">Privacy Policy</a>.
//           </p>
//         </DialogHeader>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
//             <input
//               id="email"
//               type="email"
//               className="w-full mt-1 p-2 border rounded-md"
//               {...register("email")}
//             />
//             {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
//           </div>

//           {/* Dropdown Field */}
//           <div>
//             <label htmlFor="condition" className="block text-sm font-medium">What brings you here?</label>
//             <select
//               id="condition"
//               className="w-full mt-1 p-2 border rounded-md"
//               {...register("condition")}
//             >
//               <option value="">Select...</option>
//               <option value="condition">I have / had this condition</option>
//               <option value="family">A family member has this condition</option>
//               <option value="curiosity">I'm curious about this condition</option>
//             </select>
//             {errors.condition && <p className="text-sm text-red-500">{errors.condition.message}</p>}
//           </div>

//           {/* Age Field */}
//           <div>
//             <label htmlFor="age" className="block text-sm font-medium">How old are you?</label>
//             <input
//               id="age"
//               type="number"
//               className="w-full mt-1 p-2 border rounded-md"
//               {...register("age", { valueAsNumber: true })}
//             />
//             {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
//           </div>

//           {/* Radio Buttons */}
//           <div>
//             <p className="text-sm font-medium">Your sex at birth</p>
//             <div className="flex items-center space-x-4 mt-1">
//               <label className="flex items-center space-x-1">
//                 <input type="radio" value="Male" {...register("sex")} />
//                 <span>Male</span>
//               </label>
//               <label className="flex items-center space-x-1">
//                 <input type="radio" value="Female" {...register("sex")} />
//                 <span>Female</span>
//               </label>
//               <label className="flex items-center space-x-1">
//                 <input type="radio" value="Other" {...register("sex")} />
//                 <span>Other</span>
//               </label>
//             </div>
//             {errors.sex && <p className="text-sm text-red-500">{errors.sex.message}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
//           >
//             Submit
//           </button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Headphones } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container flex items-center justify-between py-6">
        <div className="bg-secondary px-8 py-4 rounded-md">
          <span className="text-xl font-bold">Logo</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="default" className="text-primary font-semibold">
            Sign in
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full px-8">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container relative pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              We Always Provide Best Products
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl max-w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full px-8 py-6 text-lg">
              Get started
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Fresh produce"
              width={600}
              height={600}
              className="object-cover rounded-2xl"
              priority
            />

            {/* Floating Cards */}
            <Card className="absolute -top-10 right-0 p-4 bg-white rounded-xl shadow-lg w-48">
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-2 rounded-full">
                  <Headphones className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">24hr Support</h3>
                  <p className="text-xs text-gray-500">Lorem ipsum text</p>
                </div>
              </div>
            </Card>

            <Card className="absolute bottom-10 -left-10 p-4 bg-white rounded-xl shadow-lg w-64">
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

