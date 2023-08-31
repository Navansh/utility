export const TextComponent = ({ creatorQuestion, handleChange }) => {
  return (
    <div>
      <label
        htmlFor="text"
        className="ml-px block text-base font-medium leading-6 text-gray-900"
      >
        {creatorQuestion?.question}
      </label>
      <div className="mt-2">
        <input
          type={creatorQuestion?.type}
          name="text"
          required
          id="text"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Your Answer"
          onChange={(e) => handleChange(e, creatorQuestion?.question)}
        />
      </div>
    </div>
  );
};
