"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Info, LoaderIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { checkout } from "@/lib/checkout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please type a valid email.")
      .required("You must type your email."),
    description: yup.string().min(10, "Minimum 10 characters, please."),
    tos: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions."),
    budget: yup
      .number()
      .typeError("Please type your budget.")
      .required("Please type your budget")
      .min(50, "Budget must be $50 or more."),
  })
  .required();

export const ErrorMessage = ({ children }) => {
  return <p className="mt-2 text-red-500">{children}</p>;
};

export default function Form() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // do the checkout
    setIsLoading(true);
    const checkoutData = await checkout(data?.budget);
    setIsLoading(false);
    router.push(checkoutData?.url);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div>
          <Input
            placeholder="me@example.com"
            inputType="input"
            label="Email"
            register={register}
            name="email"
            required={true}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div>
          <Input
            placeholder="I need a landing page designed for my grocery shop..."
            inputType="textarea"
            label="Describe your project"
            register={register}
            name="description"
            required={true}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
        <div>
          <Input
            placeholder="$1000"
            inputType="input"
            label="Budget"
            register={register}
            name="budget"
            required={true}
            type="number"
          />
          <ErrorMessage>{errors.budget?.message}</ErrorMessage>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <input
              {...register("tos", { required: true })}
              id="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox">
              I agree to the{" "}
              <Link href="/tos">
                <span className="underline">terms and conditions</span>
              </Link>
              .
            </label>
          </div>
          <ErrorMessage>{errors.tos?.message}</ErrorMessage>
        </div>
        <Button type="submit">
          {!isLoading ? "Hire Now" : <>
          <LoaderIcon size={15} className="animate-spin" />
          Loading...
          </>}
        </Button>
      </form>
      <p className="mt-6 text-gray-500 flex items-center gap-2 text-left">
        <Info size={15} />
        You&apos;ll be redirected to the payment page.
      </p>
    </>
  );
}
