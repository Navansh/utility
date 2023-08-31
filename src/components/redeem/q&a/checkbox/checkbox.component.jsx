export const CheckboxComponent = ({ creatorQuestion, handleChange }) => {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        {creatorQuestion?.question}
      </label>
      <fieldset className="mt-4">
        <legend className="sr-only">Options</legend>
        <div className="space-y-5">
          {creatorQuestion?.options.map((option) => (
            <div className="relative flex items-start" key={option?.id + 'chk'}>
              <div className="flex h-6 items-center">
                <input
                  id={option?.id + 'chk'}
                  name="checkbox"
                  value={option?.value}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                  onChange={(e) => handleChange(e, creatorQuestion?.question)}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-600">
                  {option.value}
                </label>{' '}
                {option?.others && (
                  <span id="comments-description" className="text-gray-500">
                    {option?.others}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
