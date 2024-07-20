import cn from "classnames";

import Icon from "./Icon";

type SectionTitleTagProps = {
  title: string;
  iconId?: string;
  bgColor?: string;
  textColor?: string;
  id: string;
};

const SectionTitleTag = ({
  iconId,
  title,
  bgColor = 'bg-pink',
  textColor = 'text-gray-dark',
  id,
}: SectionTitleTagProps) => {
  return (
    <div
      className={cn('flex items-center gap-2 rounded-[20px] w-max', bgColor, {
        'py-1 px-7': !iconId,
        'py-1 px-3': iconId,
      })}
    >
      {iconId && <Icon id={iconId} />}
      <h2
        id={id}
        className={cn('text-lg', textColor, { 'font-medium': !iconId })}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitleTag;
