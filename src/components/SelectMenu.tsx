import { useFormikContext } from "formik";

type SelectMenuProps<T> = {
  label: string;
  name: keyof T;
  helper_text: string;
  options: string[];
  is_required?: boolean;
};

const SelectMenu = <T,>({
  label,
  name,
  helper_text,
  options,
  is_required,
}: SelectMenuProps<T>) => {
  const { handleBlur, handleChange, values, errors, touched, setFieldError } =
    useFormikContext<T>();
  const _name = name as string;

  return (
    <div>
      <label
        className="text-gray-dark block mb-3 font-normal text-base"
        htmlFor={_name}
      >
        {label}
      </label>
      <select
        id={_name}
        name={_name}
        className="bg-cyan-dark-20 border border-gray-light rounded-[4px] p-3 w-full text-gray-dark/80 text-xs font-normal"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name] as unknown as string}
        aria-describedby={`${_name}-helper ${_name}-error`}
        aria-invalid={touched[name] && errors[name] ? 'true' : 'false'}
        aria-required={is_required ?? 'false'}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

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

export default SelectMenu;
