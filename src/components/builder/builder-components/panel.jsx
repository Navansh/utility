import { FaCheck } from 'react-icons/fa';

export default function Example({ steps, handleTabChange }) {
  return (
    <nav aria-label="Progress" className="sticky top-0 z-0 w-full bg-white">
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative w-4/12 md:flex md:flex-1">
            {step.status === 'complete' ? (
              <a
                href={step.href}
                onClick={() => {
                  handleTabChange(stepIdx);
                }}
                className="group flex w-full items-center"
              >
                <span className="flex items-center px-2 py-4 text-sm font-medium">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center gap-1 rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <FaCheck
                      className="h-2 w-2 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className=" text-sm font-medium text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a
                href={step.href}
                onClick={() => {
                  handleTabChange(stepIdx);
                }}
                className="flex items-center gap-1 px-2 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-xs text-indigo-600">{step.id}</span>
                </span>
                <span className=" text-sm font-medium text-indigo-600">
                  {step.name}
                </span>
              </a>
            ) : (
              <a
                href={step.href}
                onClick={() => {
                  handleTabChange(stepIdx);
                }}
                className="group flex items-center"
              >
                <span className="flex items-center gap-1 px-2 py-4 text-sm font-medium">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-xs text-gray-500 group-hover:text-gray-900">
                      {step.id}
                    </span>
                  </span>
                  <span className=" text-sm font-medium text-gray-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// export default Panel
