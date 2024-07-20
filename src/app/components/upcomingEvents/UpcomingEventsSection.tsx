import SectionTitleTag from "@/components/SectionTitleTag";

import ArticleCard, { ArticleCardProps } from "./ArticleCard";

const events = [
  {
    event_title: 'Community Care Gala Night',
    event_description:
      'Join us for an elegant evening of impact and inspiration as we celebrate our achievements and raise funds.',
    event_number: 1,
    image_url: '/event-1.png',
    image_alt: 'Community Care Gala Night event venue',
    event_link_label: 'Read more about Community Care Gala Night',
  },
  {
    event_title: 'Volunteer Training Workshop',
    event_description:
      'Calling all volunteers! Join us for an informative and interactive orientation and training workshop.',
    event_number: 2,
    image_url: '/event-2.png',
    image_alt: 'People attending Volunteer Training Workshop',
    event_link_label: 'Read more about Volunteer Training Workshop',
  },
  {
    event_title: 'Education Empowerment',
    event_description:
      'Unleash the power of education at our Education Empowerment Conference. Engage with educators and experts.',
    event_number: 3,
    image_url: '/event-3.png',
    image_alt: 'Child reading a book at Education Empowerment event',
    event_link_label: 'Read more about Education Empowerment',
  },
  {
    event_title: 'Health and Wellness Fair',
    event_description:
      'Embrace a healthier lifestyle at our Community Health and Wellness Fair. Engage in free health screenings.',
    event_number: 4,
    image_url: '/event-4.png',
    image_alt: 'Sign with "Be Kind" at Health and Wellness Fair',
    event_link_label: 'Read more about Health and Wellness Fair',
  },
] as const satisfies ArticleCardProps[];

const UpcomingEventsSection = () => {
  return (
    <section
      aria-labelledby="upcoming-events-title"
      id="events-section"
      className="bg-green-medium"
    >
      <div className="max-w-contentBody mx-auto py-[4.8rem]">
        <div className="flex justify-between items-start h-max mb-[3.125rem]">
          <SectionTitleTag id="upcoming-events-title" title="Upcoming Events" />
          <span
            className="block self-stretch w-[1px] bg-white-20"
            aria-hidden="true"
          />
          <p className="max-w-[55.4375rem] text-lg text-white">
            Stay connected and get involved with our vibrant community through
            our events section. Explore a diverse range of upcoming fundraisers,
            workshops, and community gatherings, providing opportunities to
            engage, learn, and contribute to our mission of creating positive
            social change. Join us in making a meaningful impact together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {events.map((event) => (
            <ArticleCard key={event.event_number} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
