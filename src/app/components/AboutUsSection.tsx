/* eslint-disable @next/next/no-img-element */
import Icon from "@/components/Icon";
import SectionTitleTag from "@/components/SectionTitleTag";

const AboutUsSection = () => {
  return (
    <section
      aria-labelledby="about-us-title"
      id="about-section"
      className="bg-white"
    >
      <div className="max-w-contentBody mx-auto py-[7.5rem]">
        <div className="flex justify-between items-start mb-[3.125rem]">
          <SectionTitleTag id="about-us-title" title="About Us - What we do" />
          <span className="block self-stretch w-[1px] bg-black-20" />
          <p className="max-w-[55.4375rem] text-lg text-gray-darker">
            Empowering communities, fostering a brighter future. Together, we
            make a difference, creating lasting impact through our unwavering
            commitment to positive change. Join us in building a stronger, more
            compassionate world. Through our impactful initiatives, we strive to
            uplift lives, promote equality, and create sustainable solutions.
          </p>
        </div>

        <div className="grid auto-rows-auto grid-cols-2 grid-rows-2 gap-x-8">
          <article
            aria-labelledby="empowering-education-title"
            className="col-start-1 col-end-2 row-start-1 row-end-2 mb-4 p-12 rounded-lg bg-pink"
          >
            <Icon id="education" size={48} />
            <h3
              id="empowering-education-title"
              className="text-[2.5rem] font-normal my-5 leading-[120%]"
            >
              Empowering Education
            </h3>
            <p className="text-gray-darker text-base font-light">
              Our NGO is dedicated to providing access to quality education for
              underserved communities. Through scholarships, school programs,
              and educational resources, we empower individuals to reach their
              full potential and break the cycle of poverty.
            </p>
          </article>

          <article
            aria-labelledby="health-wellness-title"
            className="col-start-1 col-end-2 row-start-2 row-end-3 mt-4 p-12 rounded-lg bg-pink"
          >
            <Icon id="health" size={48} />
            <h3
              id="health-wellness-title"
              className="text-[2.5rem] font-normal my-5 leading-[120%]"
            >
              Health and Wellness Initiatives
            </h3>
            <p className="text-gray-darker text-base font-light">
              We prioritize the well-being of our community by offering
              healthcare services, promoting preventive care, and organizing
              awareness campaigns. Our initiatives aim to improve physical and
              mental health, ensuring a healthier and happier future for all.
            </p>
          </article>

          <article
            aria-labelledby="sustainable-community-title"
            className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-lg bg-pink"
          >
            <img
              src="/community-development.png"
              alt="Group of volunteers working together"
              aspect-ratio="604/360"
              className="w-full rounded-ss-lg rounded-se-lg"
            />
            <div className="p-12">
              <h3
                id="sustainable-community-title"
                className="text-[2.5rem] font-normal my-5 leading-[120%]"
              >
                Sustainable Community Development
              </h3>
              <p className="text-gray-darker text-base font-light">
                Our NGO believes in creating sustainable change by fostering
                community development. We implement projects focused on
                infrastructure, livelihood programs, and environmental
                conservation, promoting self-sufficiency and long-term progress.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
