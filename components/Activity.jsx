export default function Activity({ title, url }) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <div className="h-2 w-2 rounded-full bg-[#3D13FF]"></div>
      </div>
      <a
        className="underline underline-offset-1 truncate"
        href={url}
        target="_blank"
      >
        {title}
      </a>
    </div>
  );
}
