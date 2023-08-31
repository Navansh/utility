const BUTTON_TYPES = {
  PRIMARY: 'bg-indigo-700 border text-white',
  SECONDARY:
    'bg-transparent border-2 border-indigo-700 hover:bg-indigo-100 text-indigo-700',
  TERTIARY:
    'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-2',
  BRAND_PRIMARY:
    'primary-gradient-background border border-transparent text-white',
  BRAND_SECONDARY:
    'bg-transparent border-2 border-indigo-700 primary-gradient-text focus:ring-indigo-500',
};

const BUTTON_ROUNDED = {
  SMALL: 'rounded-sm',
  MEDIUM: 'rounded-md',
  LARGE: 'rounded-2xl',
};

export const Button = ({
  isLoading = false,
  children,
  className,
  onClick,
  type = 'PRIMARY',
  rounded = 'MEDIUM',
  //   size = BUTTON_SIZES.MEDIUM,
}) => {
  return (
    <>
      <button
        disabled={isLoading}
        onClick={onClick}
        className={`ml-3 ${BUTTON_TYPES[type]} ${BUTTON_ROUNDED[rounded]} inline-flex justify-center px-8 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      >
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-white" />
          </div>
        )}
        {!isLoading && children}
      </button>
    </>
  );
};
