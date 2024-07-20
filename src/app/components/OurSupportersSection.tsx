import Icon from "@/components/Icon";
import Line from "@/components/Line";
import SectionTitleTag from "@/components/SectionTitleTag";

const supporter_logos = [
  { id: 'outreach-logo', label: 'Outreach Logo', width: 169 },
  { id: 'stripe-logo', label: 'Stripe Logo', width: 80 },
  { id: 'code-academy-logo', label: 'Code Academy Logo', width: 167 },
  { id: 'trust-pilot-logo', label: 'Trust Pilot Logo', width: 156 },
  { id: 'launch-darkly-logo', label: 'Launch Darkly Logo', width: 202 },
  { id: 'wealth-simple-logo', label: 'Wealth Simple Logo', width: 180 },
] as const;

const OurSupportersSection = () => {
  return (
    <section
      aria-labelledby="our-supporters-title"
      id="supporters-section"
      className="bg-pink w-full"
    >
      <div className="max-w-contentBody mx-auto py-[3.41rem]">
        <SectionTitleTag
          id="our-supporters-title"
          title="Our Supporters"
          bgColor="bg-white"
        />

        <Line className="mt-[1.5rem] mb-[2.9rem]" />

        <div className="flex flex-wrap justify-between">
          {supporter_logos.map((logo) => (
            <Icon
              key={logo.id}
              id={logo.id}
              aria_hidden={false}
              role="img"
              aria_label={logo.label}
              width={logo.width}
              height={48}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSupportersSection;
