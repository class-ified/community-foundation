import cn from "classnames";

type LineProps = {
  width?: string;
  bgColor?: string;
  className?: string;
};

const Line = ({ width, bgColor, className }: LineProps) => {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block h-[1px]',
        width ?? 'w-full',
        bgColor ?? 'bg-gray',
        className
      )}
    />
  );
};

export default Line;
