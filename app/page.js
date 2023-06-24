import { Info, Link } from "lucide-react";
import Form from "@/components/Form";
import { siteConfig } from "@/config/site";
import Activity from "@/components/Activity";

export default function Page() {
  return (
    <div className="bg-[#EFF2F7] overflow-x-hidden pt-[90px] h-screen w-screen 2xl:flex 2xl:justify-center 2xl:items-center">
      <div className="h-auto w-full bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:m-auto md:mb-12 md:grid-cols-2 md:h-auto md:w-[95%] 2xl:m-0 2xl:grid-cols-2 2xl:h-auto xl:w-2/3">
        <div className="relative flex flex-col items-center md:border-r-2 xl:border-r-2">
          <img
            className="h-32 w-32 rounded-full absolute top-[-90px]"
            src={siteConfig.avatarUrl}
          />
          <div className="mt-16">
            <div className="border-b-2">
              <h1 className="font-extrabold text-3xl text-[#3D13FF] mb-1 text-center">
                {siteConfig?.name}
              </h1>
              <p className="text-[#33475B] text-base text-center xl:text-lg">
                {siteConfig?.oneLiner}
              </p>
              <div className="text-[#33475B] text-base space-x-2 flex justify-center flex-wrap pt-1 xl:text-lg">
                {siteConfig?.skills?.map((skill, i) => (
                  <p className="text-base" key={i}>
                    {skill}
                  </p>
                ))}
              </div>
              <a
                href="https://arbizen.com"
                className="text-base text-[#3D13FF] underline mt-2 font-bold text-center flex justify-center items-center gap-2 my-6"
              >
                <Link size={15} />
                <span>{siteConfig?.portfolio}</span>
              </a>
            </div>
            <div className="mt-8 mb-6">
              <h3 className="font-bold text-[#3D13FF] text-xl mb-2">
                Recent Activities
              </h3>
              <div className="max-w-[280px] md:max-w-[300px]">
                {siteConfig?.activities?.map((act, i) => (
                  <Activity key={i} title={act.title} url={act.url} />
                ))}
              </div>
            </div>
            <div className="mt-8 mb-6">
              <div className="p-4 border-2 rounded-md text-gray-500">
                <span className="flex gap-2 items-center">
                  <Info size={15} /> Test card info:
                </span>
                <div className="py-2">
                  <p>
                    <b className="text-sm">Card number</b>: 4242424242424242
                  </p>
                  <p>
                    <b className="text-sm">Expiry Date</b>: Any future date
                  </p>
                  <p>
                    <b className="text-sm">CVC</b>: Any 3 digits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t-2 md:border-0 xl:flex xl:flex-col xl:pl-10 xl:items-center xl:border-0">
          <Form />
        </div>
      </div>
    </div>
  );
}
