"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Success() {
  const params = useSearchParams();
  const router = useRouter();
  const isSuccess = params.toString().includes("session_id");
  if (!isSuccess) {
    return (
      <div className="bg-[#EFF2F7] flex justify-center items-center h-screen w-screen">
        <div className="bg-white p-6 shadow-md rounded-md min-h-[30%] min-w-[95%] md:min-w-[75%] xl:min-w-[60%] flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Looks like you haven&apos;t ordered!
          </h1>
          <p className="text-gray-500 mt-2">
            Please go ahead and initiate an order!
          </p>
          <Link
            href="/"
            className="text-[#3D13FF] flex items-center gap-2 mt-6"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#EFF2F7] flex justify-center items-center h-screen w-screen">
      <div className="bg-white p-6 shadow-md rounded-md min-h-[30%] min-w-[95%] md:min-w-[75%] xl:min-w-[60%] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Thank you for hiring!
        </h1>
        <p className="text-gray-500 mt-2">
          You&apos;ll be notified on your email.
        </p>
        <Link href="/" className="text-[#3D13FF] flex items-center gap-2 mt-6">
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
