type StatsProps = {
  percentage: string;
  heading: string;
};

type Props = {
  heading: string;
  description: string;
  stats: StatsProps[];
};

export type Stats50Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Stats50 = (props: Stats50Props) => {
  const { heading, description, stats } = {
    ...Stats50Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl  lg:text-6xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className=" md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {stats.map((stat, index) => (
            <Card key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = (card: StatsProps) => {
  return (
    <div className="border border-border-primary p-8 text-center">
      <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
        {card.percentage}
      </p>
      <h3 className="text-md font-bold leading-[1.4]  md:text-xl">
        {card.heading}
      </h3>
    </div>
  );
};

export const Stats50Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  stats: [
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
  ],
};
