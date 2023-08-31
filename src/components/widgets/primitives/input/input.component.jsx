import {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export const Input = forwardRef(function Input(
  {
    name,
    id,
    placeholder,
    className,
    value = '',
    label,
    errors = [],
    onBlur = () => {},
    onChange,
    type = 'text',
    required,
    disabled,
    // styleType = SINGLELINE_TYPE.NORMAL,
    // size = SINGLELINE_SIZES.MEDIUM
  },
  ref
) {
  const [text, setText] = useState(value || '');

  const inputRef = useRef(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  const onValueChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value, e);
  };

  const onValueBlur = (e) => {
    setText(e.target.value);
    onBlur(e.target.value, e);
  };

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
      select: () => {
        inputRef.current.select();
      },
    };
  });

  return (
    <Fragment>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700"
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1">
        <input
          ref={inputRef}
          type={type}
          name={name}
          disabled={disabled}
          value={text}
          id={id}
          className={`block w-full rounded-md p-3 border-gray-300 text-gray-700 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className} ${
            errors.length > 0 ? 'border-red-600' : ''
          }`}
          placeholder={placeholder}
          onChange={onValueChange}
          onBlur={onValueBlur}
        />
        {/* <span className={`${nameError ? "text-red-600 font-medium text-sm" : "hidden"}`}>
          *Please fill this field
        </span> */}
      </div>
    </Fragment>
  );
});
