import { useFormikContext } from "formik";

type CheckboxGroupProps<T> = {
  name: keyof T;
  label: string;
  options: string[];
  helper_text: string;
  is_required?: boolean;
};

const CheckboxGroup = <T,>({
  name,
  label,
  options,
  helper_text,
  is_required,
}: CheckboxGroupProps<T>) => {
  const { errors, touched } = useFormikContext<T>();
  const _name = name as string;

  return (
    <fieldset
      aria-labelledby={`${_name}-legend`}
      aria-describedby={`${_name}-helper ${_name}-error`}
    >
      <legend
        id={`${_name}-legend`}
        className="text-gray-dark block mb-3 font-normal text-base"
      >
        {label}
      </legend>
      <div className="flex gap-6 flex-wrap">
        {options.map((option) => (
          <Checkbox<T> key={option} name={name} value={option} label={option} />
        ))}
      </div>
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
    </fieldset>
  );
};

type CheckboxProps<T> = {
  name: keyof T;
  value: string;
  label: string;
};

const Checkbox = <T,>({ name, value, label }: CheckboxProps<T>) => {
  const { values, handleChange, setFieldTouched } = useFormikContext<T>();
  const _name = name as string;
  const is_checked = (values[name] as unknown as string[]).includes(value);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={value}
        name={_name}
        value={value}
        checked={is_checked}
        aria-checked={is_checked}
        onChange={(e) => {
          handleChange(e);
          setFieldTouched(_name, true, false);
        }}
        className="accent-green-medium w-5 h-5 rounded-lg"
      />
      <label htmlFor={value} className="text-gray-darker text-sm ml-2">
        {label}
      </label>
    </div>
  );
};

export { Checkbox, CheckboxGroup };
