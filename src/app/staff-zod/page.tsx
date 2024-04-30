"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const schema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  age: z.number(),
  phoneNumbers: z.number().array(),
});

type FormFields = z.infer<typeof schema>;

export default function StaffZod() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[100vh]">
      <Link href="/" className="text-xl">
        (Home)
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            className="mb-3 block text-base font-medium text-[#07074D]"
            htmlFor="firstname"
          >
            Name
          </label>
          <input
            id="sfirstName"
            placeholder="First Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            {...register("firstName")}
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-3 block text-base font-medium text-[#07074D]"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            id="lastname"
            placeholder="Last Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            {...register("lastName")}
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-3 block text-base font-medium text-[#07074D]"
            htmlFor="age"
          >
            Age
          </label>
          <input
            id="age"
            placeholder="Age"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="number"
            {...register("age")}
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-3 block text-base font-medium text-[#07074D]"
            htmlFor="number1"
          >
            Mobile Number Home
          </label>
          <input
            id="number1"
            placeholder="Home Phone Number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="number"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div className="mb-5">
          <label
            className="mb-3 block text-base font-medium text-[#07074D]"
            htmlFor="number2"
          >
            Mobile Number Private
          </label>
          <input
            id="number2"
            placeholder="Private Phone Number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="number"
            {...register("phoneNumbers.1")}
          />
        </div>

        <button
          className="bg-slate-400 h-[50px] w-[100px]"
          // disabled={isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
