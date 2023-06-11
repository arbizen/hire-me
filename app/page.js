import Input from "@/components/Input";
import Button from "@/components/Button";
import { Link } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-[#EFF2F7] overflow-x-hidden pt-[90px] h-screen w-screen md:flex md:justify-center md:items-center xl:flex xl:justify-center xl:items-center">
      <div className="h-auto w-full bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 md:h-auto md:w-2/3 xl:grid-cols-2 xl:h-auto xl:w-2/3">
        <div className="relative flex flex-col items-center md:border-r-2 xl:border-r-2">
          <img
            className="h-32 w-32 rounded-full absolute top-[-90px]"
            src="https://avatars.githubusercontent.com/u/34975329?v=4"
          />
          <div className="mt-16">
            <div className="border-b-2">
              <h1 className="font-extrabold text-3xl text-[#3D13FF] mb-1 text-center">
                Arb Rahim Badsa
              </h1>
              <p className="text-[#33475B] text-base text-center xl:text-lg">
                I craft designs and make unicorns.
              </p>
              <div className="text-[#33475B] text-base space-x-2 flex justify-center flex-wrap pt-1 xl:text-lg">
                <p>#ReactJs</p>
                <p>#NextJs</p>
                <p>#NodeJs</p>
                <p>#Javascript</p>
              </div>
              <a
                href="https://arbizen.com"
                className="text-base text-[#3D13FF] underline mt-2 font-bold text-center flex justify-center items-center gap-2 my-6"
              >
                <Link size={15} />
                <span>https://arbizen.com</span>
              </a>
            </div>
            <div className="mt-8 mb-6">
              <h3 className="font-bold text-[#3D13FF] text-xl mb-2">
                Recent Activities
              </h3>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3D13FF]"></div>
                  <a
                    className="underline underline-offset-1"
                    href="https://recap.arbizen.com/"
                    target="_blank"
                  >
                    Just launched Recap...
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3D13FF]"></div>
                  <a
                    href="https://github.com/Arbrahimbadsa/flame"
                    target="_blank"
                    className="underline underline-offset-1"
                  >
                    Published the new repo, just for you..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t-2 md:border-0 xl:flex xl:flex-col xl:pl-10 xl:items-center xl:border-0">
          <form className="space-y-6 w-full">
            <Input placeholder="me@example.com" type="input" label="Email" />
            <Input
              placeholder="I need a landing page designed for my grocery shop..."
              type="textarea"
              label="Describe your project"
            />
            <Input placeholder="$1000" type="input" label="Budget" />
            <Button>Hire Now</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
