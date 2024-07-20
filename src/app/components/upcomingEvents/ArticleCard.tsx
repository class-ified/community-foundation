/* eslint-disable @next/next/no-img-element */

export type ArticleCardProps = {
  event_title: string;
  event_description: string;
  event_number: number;
  image_url: `/event-${number}.png`;
  image_alt: string;
  event_link_label: string;
};

const ArticleCard = ({
  event_description,
  event_number,
  event_title,
  event_link_label,
  image_alt,
  image_url,
}: ArticleCardProps) => {
  return (
    <article
      aria-labelledby={`event-${event_number}-title`}
      className="text-white"
    >
      <img
        src={image_url}
        alt={image_alt}
        className="w-full object-cover rounded-t-lg mb-4"
      />
      <h3
        id={`event-${event_number}-title`}
        className="text-xl font-normal mb-[7px]"
      >
        {event_title}
      </h3>
      <p className="text-gray-700 font-light mb-[7px]">{event_description}</p>
      <a
        href="/"
        className="text-base underline font-medium"
        aria-label={event_link_label}
      >
        Read More
      </a>
    </article>
  );
};

export default ArticleCard;
