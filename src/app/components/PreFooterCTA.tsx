import Button from "@/components/Button";

const PreFooterCTA = () => {
  return (
    <section className="bg-black">
      <div className="max-w-contentBody mx-auto flex items-center py-[6.53125rem] justify-between pr-[6rem]">
        <h2 className="text-[2.8125rem] font-medium text-white max-w-[43rem] uppercase">
          Caring Together, <span className="text-green-light">Changing</span>{' '}
          Lives Forever
        </h2>

        <Button
          bgColor="bg-green-medium"
          textColor="text-white"
          width="w-[139px]"
          height="h-[61px]"
        >
          Donate Now
        </Button>
      </div>
    </section>
  );
};

export default PreFooterCTA;
