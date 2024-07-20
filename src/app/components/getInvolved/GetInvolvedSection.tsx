import Line from "@/components/Line";
import SectionTitleTag from "@/components/SectionTitleTag";

import FormTabs from "./FormTabs";

const GetInvolvedSection = () => {
  return (
    <section
      aria-labelledby="get-involved-title"
      id="volunteer-section"
      className="bg-white w-full"
    >
      <div className="w-full max-w-contentBody  mx-auto py-9 flex gap-24">
        <div className="flex flex-col items-start gap-9 min-w-[35%] w-[35%]">
          <SectionTitleTag id="get-involved-title" title="Get Involved" />
          <Line width="w-[6.25rem]" />
          <p className="text-gray-darker text-lg font-normal">
            Explore our current projects that urgently require your support and
            donations. From education and healthcare to environmental
            conservation, your contribution can make a direct impact and bring
            positive change to the lives of those in need. Join us in making a
            difference today.
          </p>
        </div>
        <div className="bg-gray-10 p-8 flex-1 mr-[5rem]">
          <FormTabs />
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
