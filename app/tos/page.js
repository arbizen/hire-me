import { tosData } from "@/data/tos";

export default function TOS() {
  return (
    <div className="bg-[#EFF2F7] h-auto w-full p-6">
      <div className="flex flex-col md:w-[80%] md:mx-auto xl:w-[50%] xl:mx-auto">
        {tosData.sections.map((section, i) => (
          <div key={i} className="bg-white my-4 p-6 rounded-md">
            <h3 className="font-bold text-xl mb-2">{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
