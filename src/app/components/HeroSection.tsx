import Image from "next/image";

import Button from "@/components/Button";
import SectionTitleTag from "@/components/SectionTitleTag";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-black h-[calc(100vh-128px)] min-h-[754px]"
      id="hero-section"
    >
      <div className="flex justify-between h-full items-start gap-12 w-[calc(100%-100px)] ml-auto">
        <div className="w-[50%]">
          <div className="flex flex-col gap-6 items-start ">
            <SectionTitleTag
              id="hero-secondary-title"
              iconId="community"
              title="Change Our Community"
              bgColor="bg-white-10"
              textColor="text-white"
            />

            <h1
              id="hero-title"
              className="text-white uppercase text-7xl w-full "
            >
              Caring Together,&nbsp;
              <span className="text-green-light inline-block">Changing</span>
              &nbsp;Lives Forever
            </h1>

            <p className="text-white-80 w-full text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur. Nisi mauris malesuada in
              pulvinar quis vestibulum. Enim ac integer o
            </p>
          </div>

          <div className="mt-11">
            <Button
              bgColor="bg-green-light"
              textColor="text-gray-dark"
              width="w-[118px]"
              height="h-[48px]"
            >
              Donate
            </Button>
            <Button
              bgColor="bg-transparent"
              textColor="text-white"
              width="w-[118px]"
              height="h-[48px]"
              className="ml-5 border-[1px] border-white-50"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="h-full w-[45%] relative">
          <Image
            src="/hero-img.png"
            alt="hero image"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
