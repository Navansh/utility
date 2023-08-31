export const RadioComponent = ({ creatorQuestion, handleChange }) => {
  return (
    <div>
      <label className="text-base font-semibold text-gray-900">
        {creatorQuestion?.question}
      </label>
      <fieldset className="mt-4">
        <legend className="sr-only">Options</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {creatorQuestion?.options.map((option) => (
            <div key={option?.id + 'rdo'} className="flex items-center">
              <input
                id={option?.id + 'rdo'}
                name="notification-method"
                type="radio"
                value={option?.value}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={(e) => handleChange(e, creatorQuestion?.question)}
              />
              <label
                htmlFor={option?.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-700"
              >
                {option.value}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
