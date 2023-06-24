import { Info, Link } from "lucide-react";
import { siteConfig } from "@/config/site";
import Activity from "@/components/Activity";

export default function InfoTemplate() {
  return (
    <>
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
              <p className="mt-2 max-w-[280px]">
                An email will be sent after successful payment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
