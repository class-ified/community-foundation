import cn from "classnames";

import icons from "@/assets/icon-sprite.svg";

type Dimensions = {
  size: number | string;
  width: number;
  height: number;
};

type IconSizing = Partial<Dimensions> &
  (
    | { size: number | string; width?: never; height?: never }
    | { width: number; height: number; size?: never }
    | { height: number; width: number; size?: never }
    | { size?: never; width?: never; height?: never }
  );

type AriaProperties =
  | { aria_hidden?: true; role?: never; aria_label?: never }
  | { aria_hidden: false; role: 'img'; aria_label: string };

type IconProps = {
  id: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
} & IconSizing &
  AriaProperties &
  (
    | { onClick?: never; disabled?: never }
    | { onClick: () => void; disabled?: boolean }
  );

const Icon: React.FC<IconProps> = ({
  size,
  width,
  height,
  id,
  className,
  onClick,
  disabled,
  onMouseEnter,
  onMouseLeave,
  role,
  aria_label,
  aria_hidden,
}) => (
  <>
    {onClick ? (
      <button disabled={disabled} onClick={!disabled ? onClick : undefined}>
        <svg
          width={size ?? width ?? icons.width}
          height={size ?? height ?? icons.height}
          className={cn(
            className,
            { 'opacity-7': disabled },
            { 'cursor-pointer': Boolean(onClick) }
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <use xlinkHref={`${icons.src}#${id}`} />
        </svg>
      </button>
    ) : (
      <svg
        width={size ?? width ?? icons.width}
        height={size ?? height ?? icons.height}
        className={className ?? ''}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role={role}
        aria-label={aria_label}
        aria-hidden={aria_hidden ?? true}
      >
        <use xlinkHref={`${icons.src}#${id}`} />
      </svg>
    )}
  </>
);

export default Icon;
