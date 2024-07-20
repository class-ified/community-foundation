import cn from "classnames";
import { useFormikContext } from "formik";

type InputProps<T> = {
  label: string;
  name: keyof T;
  type: 'text' | 'number' | 'email';
  helper_text: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  width?: string;
  is_required?: boolean;
};

const Input = <T,>({
  label,
  name,
  helper_text,
  type,
  handleChange: customHandleChange,
  width,
  is_required,
}: InputProps<T>) => {
  const { handleBlur, handleChange, values, errors, touched } =
    useFormikContext<T>();
  const _name = name as string;

  return (
    <div className={cn(width ?? 'w-full')}>
      <label
        className="text-gray-dark block mb-3 font-normal text-base"
        htmlFor={_name}
      >
        {label}
      </label>
      <input
        type={type}
        id={_name}
        name={_name}
        onChange={customHandleChange ?? handleChange}
        onBlur={handleBlur}
        value={values[name] as unknown as string}
        aria-describedby={`${_name}-helper ${_name}-error`}
        aria-invalid={touched[name] && errors[name] ? 'true' : 'false'}
        aria-required={is_required ?? 'false'}
        className="bg-cyan-dark-20 border border-gray-light rounded-[4px] p-3 w-full text-gray-dark/80 text-xs font-normal"
      />
      {touched[name] && errors[name] ? (
        <p
          id={`${_name}-error`}
          className="text-xs text-red mt-1"
          aria-live="polite"
        >
          {errors[name] as unknown as string}
        </p>
      ) : null}
      <p className="sr-only" id={`${_name}-helper`}>
        {helper_text}
      </p>
    </div>
  );
};

export default Input;
