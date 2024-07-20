import cn from "classnames";

import Icon from "@/components/Icon";

const marquee_items = [
  { name: 'Money raised', value: '1,500,000' },
  { name: 'Volunteers', value: '90,000' },
  { name: 'People Helped', value: '100,000' },
  // duplicate items for continuous scrolling effect
  { name: 'Money raised', value: '1,500,000' },
  { name: 'Volunteers', value: '90,000' },
  { name: 'People Helped', value: '100,000' },
];

const Marquee = () => {
  return (
    <div
      className="relative flex overflow-x-hidden bg-gray-medium"
      aria-label="Updates on money raised, volunteers, and people helped"
    >
      <div
        aria-hidden="true"
        className="py-8 animate-marquee will-change-transform whitespace-nowrap flex gap-10 pl-10"
      >
        {marquee_items.map((item) => (
          <MarqueeItem
            key={`${item.name}${item.value}`}
            name={item.name}
            value={item.value}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="py-8 absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap flex gap-10 pl-10"
      >
        {marquee_items.map((item) => (
          <MarqueeItem
            key={`${item.name}${item.value}`}
            name={item.name}
            value={item.value}
          />
        ))}
      </div>

      {/* Static content for screen readers */}
      <div className="sr-only">
        {marquee_items.map((item, index) => {
          if (index > 2) return null;
          return (
            <MarqueeItem name={item.name} value={item.value} key={index} />
          );
        })}
      </div>
    </div>
  );
};

const MarqueeItem = ({ name, value }: (typeof marquee_items)[number]) => {
  const is_money_raised = name === 'Money raised';

  return (
    <div
      key={value}
      className={cn({
        'text-green-light': is_money_raised,
        'text-white': !is_money_raised,
      })}
    >
      <p
        className={cn('font-semibold text-sm', {
          'text-white': !is_money_raised,
        })}
      >
        {name}
      </p>

      <div className="flex items-center">
        <p className="text-[2.8125rem] font-medium">
          {is_money_raised && <span className="inline-block text-3xl">$</span>}
          {value}
        </p>
        <Icon
          id={`arrow-up-${is_money_raised ? 'green' : 'white'}`}
          size={51}
        />
      </div>
    </div>
  );
};

export default Marquee;
