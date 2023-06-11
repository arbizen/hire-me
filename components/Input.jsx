export default function Input({ label, type, ...params }) {
  return (
    <div className="space-y-2">
      <p>{label}</p>
      {type === "input" ? (
        <input {...params} className="px-4 py-2 w-full rounded-md border-2" />
      ) : (
        <textarea
          {...params}
          className="px-4 py-2 w-full rounded-md border-2 h-32"
        />
      )}
    </div>
  );
}
