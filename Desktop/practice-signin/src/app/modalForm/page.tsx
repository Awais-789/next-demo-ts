"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "@/app/schemas/formSchema";
import { z } from "zod";

export default function ModalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Form</DialogTrigger>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle>Chronic Kidney Disease</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Your answers are treated as personal information according to our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-2 border rounded-md"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Dropdown Field */}
          <div>
            <label htmlFor="condition" className="block text-sm font-medium">What brings you here?</label>
            <select
              id="condition"
              className="w-full mt-1 p-2 border rounded-md"
              {...register("condition")}
            >
              <option value="">Select...</option>
              <option value="condition">I have / had this condition</option>
              <option value="family">A family member has this condition</option>
              <option value="curiosity">I'm curious about this condition</option>
            </select>
            {errors.condition && <p className="text-sm text-red-500">{errors.condition.message}</p>}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium">How old are you?</label>
            <input
              id="age"
              type="number"
              className="w-full mt-1 p-2 border rounded-md"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
          </div>

          {/* Radio Buttons */}
          <div>
            <p className="text-sm font-medium">Your sex at birth</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center space-x-1">
                <input type="radio" value="Male" {...register("sex")} />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" value="Female" {...register("sex")} />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" value="Other" {...register("sex")} />
                <span>Other</span>
              </label>
            </div>
            {errors.sex && <p className="text-sm text-red-500">{errors.sex.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
