export default function Input({
  label,
  inputType,
  register,
  name,
  required,
  type,
  ...params
}) {
  return (
    <div className="space-y-2">
      <p>{label}</p>
      {inputType === "input" ? (
        <input
          {...params}
          type={type}
          className="px-4 py-2 w-full rounded-md border-2"
          {...register(name, { required })}
        />
      ) : (
        <textarea
          {...params}
          className="px-4 py-2 w-full rounded-md border-2 h-32"
          {...register(name, { required })}
        />
      )}
    </div>
  );
}
