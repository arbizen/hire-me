"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { siteConfig } from "@/config/site";

export default function Success() {
  const params = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("Loading...");
  const sessionId = params.get("session_id");
  const clientEmail = params.get("email");
  const description = params.get("description");

  useEffect(() => {
    const getCustomer = async () => {
      setIsLoading(true);
      const { data: response } = await axios.post("/api/order/success", {
        sessionId,
      });
      console.log(response);
      if (response?.message === "success") {
        setStatus("Sending email...");
        // send emails here
        // send an email to the client
        const adminEmail = siteConfig.adminEmail;
        const { data: clientEmailData } = await axios.post(`/api/send-mail`, {
          from: adminEmail,
          to: clientEmail,
          subject: `You've successfully hired ${siteConfig.name} 🎉!`,
          replyTo: siteConfig.email,
          data: {
            ...response?.data,
            description,
          },
          templateType: "client",
        });
        const { data: myEmailData } = await axios.post(`/api/send-mail`, {
          from: adminEmail,
          to: siteConfig.email,
          replyTo: clientEmail,
          subject: `You've been hired by ${response?.data?.customerName} 🎉!`,
          data: {
            ...response?.data,
            clientEmail,
            description,
          },
          templateType: "me",
        });
        console.log("email sent to client", clientEmailData);
        console.log("email sent to client", myEmailData);
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setIsSuccess(false);
      }
      return null;
    };
    getCustomer();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-[#EFF2F7] flex justify-center items-center h-screen w-screen">
          <div className="bg-white p-6 shadow-md rounded-md min-h-[30%] min-w-[95%] md:min-w-[75%] xl:min-w-[60%] flex flex-col justify-center items-center">
            <p>{status}</p>
          </div>
        </div>
      ) : (
        <>
          {isSuccess ? (
            <div className="bg-[#EFF2F7] flex justify-center items-center h-screen w-screen">
              <div className="bg-white p-6 shadow-md rounded-md min-h-[30%] min-w-[95%] md:min-w-[75%] xl:min-w-[60%] flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                  Thank you for hiring!
                </h1>
                <p className="text-gray-500 mt-2">
                  You&apos;ll be notified on your email.
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
          ) : (
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
          )}
        </>
      )}
    </>
  );
}
