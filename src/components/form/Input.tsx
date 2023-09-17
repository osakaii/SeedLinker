import { useId } from "react";
import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldPath, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type InputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  errors: FieldErrors<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
};
const Input = <TFieldValues extends FieldValues>({ name, label, type, required, errors, register }: InputProps<TFieldValues>) => {
  const id = useId();
  const inputId = name + id;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={inputId}
          type={type}
          required={required}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register(name)}
        />
      </div>
      {
        // @ts-expect-error it's fine
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p className="text-red-500 text-xs">{message}</p>} />
      }
    </div>
  );
};

export default Input;
