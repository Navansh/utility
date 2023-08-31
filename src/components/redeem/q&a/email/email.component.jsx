import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export const EmailComponent = ({
  creatorQuestion,
  email,
  isValidEmail,
  handleChange,
}) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-base font-medium leading-6 text-gray-900"
      >
        {creatorQuestion?.question}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name={creatorQuestion?.question}
          id="email"
          required
          onChange={handleChange}
          className={`block w-full rounded-md border-0 py-1.5 pr-10 ${
            isValidEmail ? '' : 'text-red-500'
          } ring-1 ring-inset ${
            isValidEmail ? '' : 'ring-red-500'
          } placeholder:text-gray-400 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
          placeholder="you@example.com"
        />
        {!isValidEmail && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      <p
        className={`mt-2 text-sm ${
          isValidEmail ? 'text-red-900' : 'text-red-600'
        }`}
        id="email-error"
      >
        {isValidEmail ? '' : 'Not a valid email address.'}
      </p>
    </div>
  );
};
