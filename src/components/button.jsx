export const Button = ({
  id,
  rightIcon,
  leftIcon,
  title,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-4 py-2 flex items-center justify-center gap-2 ${containerClass}`}
    >
      {leftIcon && (
        <div className="flex items-center">
          {leftIcon}
        </div>
      )}
      <p className="text-colorLight text-xs uppercase font-medium">
        {title}
      </p>
      {rightIcon && (
        <div className="flex items-center">
          {rightIcon}
        </div>
      )}
    </button>
  );
};
