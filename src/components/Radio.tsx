import cn from "classnames";
import { useFormikContext } from "formik";

type RadioGroupProps<T> = {
  name: keyof T;
  options: string[];
  label: string;
  helper_text: string;
  is_required?: boolean;
};

const RadioGroup = <T,>({
  name,
  options,
  label,
  helper_text,
  is_required,
}: RadioGroupProps<T>) => {
  const { errors, touched } = useFormikContext<T>();
  const _name = name as string;

  return (
    <fieldset
      role="radiogroup"
      aria-invalid={touched[name] && errors[name] ? 'true' : 'false'}
      aria-required={is_required ?? 'false'}
      aria-labelledby={`${_name}-legend`}
      aria-describedby={`${_name}-helper ${_name}-error`}
    >
      <legend id={`${_name}-legend`} className="sr-only">
        {label}
      </legend>
      <div className="flex gap-6 flex-wrap">
        {options.map((option) => (
          <Radio<T> key={option} name={name} value={option} />
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

type RadioProps<T> = {
  name: keyof T;
  value: string;
};

const Radio = <T,>({ name, value }: RadioProps<T>) => {
  const { values, handleChange, setFieldTouched, handleBlur } =
    useFormikContext<T>();
  const _name = name as string;
  const is_checked = (values[name] as unknown as string) === value;

  return (
    <div>
      <input
        type="radio"
        id={value}
        name={_name}
        value={value}
        checked={is_checked}
        onChange={(e) => {
          handleChange(e);
          setFieldTouched(_name, true, false);
        }}
        onBlur={handleBlur}
        className="sr-only peer"
      />
      <label
        htmlFor={value}
        className={cn(
          'inline-block text-base font-normal rounded-[4px] px-[19px] py-[8px] cursor-pointer peer-focus-visible:ring',
          {
            'text-white bg-green-medium': is_checked,
            'text-gray-darker border border-gray': !is_checked,
          }
        )}
      >
        {value}
      </label>
    </div>
  );
};

export default RadioGroup;
