import { Children, cloneElement, useState } from 'react';
import { HiCheck } from 'react-icons/hi/index';

export const StepsGroup = ({ active = 0, children }) => {
  const _children = Children.toArray(children);

  const [current, setCurrent] = useState(active);

  // TODO: expose API for next and previous
  // useImperativeHandle()

  const onChange = (stepId) => {
    setCurrent(stepId);
  };

  return _children.map((child) =>
    cloneElement(child, { active: current, onChange })
  );
};

export const Steps = ({ active, children, onChange }) => {
  const _children = Children.toArray(children);
  const totalSteps = _children.length;

  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
      >
        {_children.map((child, index) =>
          cloneElement(child, { active, totalSteps, onChange, stepId: index })
        )}
      </ol>
    </nav>
  );
};

export const Step = ({ stepId, children, active, totalSteps, onChange }) => {
  const isCompleted = active > stepId;
  const isRemaining = active < stepId;
  const isCurrent = active === stepId;

  return (
    <li key={stepId} className="relative md:flex md:flex-1">
      <div
        onClick={() => onChange(stepId)}
        className="group flex w-full cursor-pointer items-center"
      >
        <span className="flex items-center px-3 py-2 text-sm font-medium">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              isCompleted ? 'bg-indigo-600 group-hover:bg-indigo-800' : ''
            } ${isCurrent ? 'border-2 border-indigo-600' : ''} ${
              isRemaining
                ? 'border-2 border-gray-300 group-hover:border-gray-400'
                : ''
            }`}
          >
            {isCompleted && (
              <HiCheck className="h-4 w-4 text-white" aria-hidden="true" />
            )}
            {isCurrent && <span className="text-indigo-600">{stepId}</span>}
            {isRemaining && (
              <span className="text-gray-500 group-hover:text-gray-900">
                {stepId}
              </span>
            )}
          </span>
          <span className="ml-2 text-sm font-medium text-gray-900">
            {children}
          </span>
        </span>
      </div>

      {stepId !== totalSteps - 1 ? (
        <>
          <div
            className="absolute right-0 top-0 hidden h-full w-3 md:block"
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
  );
};

export const StepPanels = ({ active = 0, children, className }) => {
  const _children = Children.toArray(children);
  const totalSteps = _children.length;

  return (
    <div className={`m-4 ${className}`}>
      {_children.map((child, index) =>
        cloneElement(child, { active, totalSteps, stepId: index })
      )}
    </div>
  );
};

export const StepPanel = ({ children, active, stepId, className }) => {
  const isActive = active === stepId;

  return isActive ? <div className={`${className}`}>{children}</div> : null;
};
