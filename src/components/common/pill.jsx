const Pill = (props) => {
  return (
    <div className="mb-4 flex w-56 rounded-2xl bg-indigo-200 px-2 py-1.5">
      <a
        href={props.link1}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl first-line: bg-white px-4 text-indigo-500"
      >
        {props.heading1}
      </a>
      <div className="ml-3 flex cursor-pointer items-center text-indigo-600">
        <a href={props.link2} target="_blank" rel="noreferrer">
          {props.heading2}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 inline h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Pill;
