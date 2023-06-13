import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Cancel() {
  return (
    <div className="bg-[#EFF2F7] flex justify-center items-center h-screen w-screen">
      <div className="bg-white p-6 shadow-md rounded-md min-h-[30%] min-w-[95%] md:min-w-[75%] xl:min-w-[60%] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Ops, you cancelled the order!
        </h1>
        <p className="text-gray-500 mt-2">Please go ahead and try again.</p>
        <Link href="/" className="text-[#3D13FF] flex items-center gap-2 mt-6">
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
