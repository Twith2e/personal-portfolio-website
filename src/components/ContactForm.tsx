import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";

import {
  contactFormSchema,
  contactFormType,
} from "../schema/contactForm.schema";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: contactFormType) {
    console.log(data);

    setIsLoading(true);
    try {
      const response = await axios.post("/api/sendMail", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      const err = error as AxiosError;
      const errResponse = err.response?.data as { error: string };
      const errMessage = errResponse?.error || "Something went wrong";
      toast.success(errMessage);
    } finally {
      reset();
      setIsLoading(false);
    }
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start gap-5 font-jakarta md:px-12">
      <h1 className="text-2xl font-bold self-center header">Contact Me</h1>
      <form
        onSubmit={handleSubmit(onSubmit, (error) => {
          console.log(error);
        })}
        className="w-full shadow-md py-3 bg-white md:px-12 px-6 text-[#2b2b2b] md:rounded-lg"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative flex flex-col gap-2 flex-1">
            <label className="font-semibold" htmlFor="name">
              Name *
            </label>
            <input
              {...register("name")}
              className={`outline-none px-3 py-2 rounded-lg focus:ring-2 bg-[#e5e5e5] focus:ring-[#2b2b2b]`}
              id="name"
              name="name"
              type="text"
            />
            {errors.name && (
              <p className="absolute -bottom-6 text-red-500 text-base font-jakarta">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col gap-2 flex-1">
            <label className="font-semibold" htmlFor="email">
              Email *
            </label>
            <input
              {...register("email")}
              className={`outline-none px-3 py-2 rounded-lg focus:ring-2 bg-[#e5e5e5] focus:ring-[#262626]`}
              id="email"
              name="email"
              type="email"
            />
            {errors.email && (
              <p className="absolute -bottom-6 text-red-500 text-base font-jakarta">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="relative flex flex-col gap-2 mt-5">
          <label className="font-semibold" htmlFor="message">
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            name="message"
            rows={12}
            className={`outline-none px-3 py-2 rounded-lg focus:ring-2 bg-[#e5e5e5] focus:ring-[#262626]`}
          />
          {errors.message && (
            <p className="absolute -bottom-6 text-red-500 text-base font-jakarta">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex justify-center w-full">
          <button
            className={`mt-9 flex justify-center px-3 py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 hover:opacity-70 text-[#fff] bg-[#2b2b2b]`}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <div className="border-2 border-t-transparent border-[#262626] h-7 w-7 rounded-full animate-spin"></div>
            ) : (
              <span className="text-base font-bold">Submit Form</span>
            )}
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
