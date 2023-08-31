import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const TextArea = forwardRef(function TextArea(
  {
    name,
    id,
    placeholder,
    className,
    value = '',
    label,
    errors = [],
    onBlur = () => {},
    onChange = () => {},
    required,
    disabled,
    // styleType = SINGLELINE_TYPE.NORMAL,
  },
  ref
) {
  let [text, setText] = useState(value || '');

  const inputRef = useRef(null);

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

  const onValueChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value, e);
  };

  const onValueBlur = (e) => {
    setText(e.target.value);
    onBlur(e.target.value, e);
  };

  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700"
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1">
        <textarea
          ref={inputRef}
          id={id}
          name={name}
          onChange={onValueChange}
          onBlur={onValueBlur}
          value={text}
          rows={3}
          placeholder={placeholder}
          disabled={disabled}
          className={`block w-full p-3 resize-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className} ${
            errors.length > 0 ? 'border-red-600' : ''
          }`}
        />
        {/* <span className={`${descriptionError ? "text-red-600 font-medium text-sm" : "hidden"}`}>
          *Please fill this field
        </span> */}
      </div>
    </>
  );
});
