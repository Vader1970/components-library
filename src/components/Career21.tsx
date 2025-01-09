import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { LuMapPin } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { RxChevronRight } from "react-icons/rx";

type PositionProps = {
  url: string;
  title: string;
  department: string;
  description: string;
  location: string;
  contractType: string;
  button: ButtonProps;
};

type PositionCardProps = {
  position: PositionProps;
};

type Tab = {
  value: string;
  trigger: string;
  content: PositionProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
};

export type Career21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Career21 = (props: Career21Props) => {
  const { tagline, heading, description, tabs } = {
    ...Career21Defaults,
    ...props,
  };

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='grid auto-cols-fr gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-x-20'>
          <div>
            <p className='mb-3 font-semibold md:mb-4'>{tagline}</p>
            <h2 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>{heading}</h2>
            <p className='md:text-md'>{description}</p>
          </div>
          <Tabs defaultValue={tabs[0].value} className='flex flex-col justify-start'>
            <TabsList className='no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:block md:w-full md:overflow-hidden md:pl-0'>
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className='px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black'
                >
                  {tab.trigger}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className='data-[state=active]:animate-tabs'>
                <div className='flex flex-col gap-6 md:gap-8'>
                  {tab.content.map((position, index) => (
                    <PositionCard key={index} position={position} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const PositionCard: React.FC<PositionCardProps> = ({ position }) => {
  return (
    <div className='border border-border-primary p-6 md:p-8'>
      <div className='mb-6 flex flex-wrap justify-between gap-4 md:mb-8'>
        <div className='flex items-center gap-4'>
          <a href={position.url}>
            <h3 className='text-xl font-bold md:text-2xl'>{position.title}</h3>
          </a>
          <p className='bg-background-secondary px-2 py-1 text-sm font-semibold'>{position.department}</p>
        </div>
        <Button {...position.button} asChild>
          <a href={position.url}>{position.button.title}</a>
        </Button>
      </div>
      <p className='mb-5 md:mb-6'>{position.description}</p>
      <div className='flex flex-wrap gap-y-3'>
        <div className='mr-6 flex items-center'>
          <div className='mr-3 flex-none'>
            <LuMapPin className='flex size-6 flex-col items-center justify-center' />
          </div>
          <span className='md:text-md'>{position.location}</span>
        </div>
        <div className='mr-6 flex items-center'>
          <div className='mr-3 flex-none'>
            <MdAccessTime className='flex size-6 flex-col items-center justify-center' />
          </div>
          <span className='md:text-md'>{position.contractType}</span>
        </div>
      </div>
    </div>
  );
};

const position = {
  url: "#",
  title: "Job Title",
  department: "Department",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  location: "Location",
  contractType: "Contract Type",
  button: { title: "Apply Now", variant: "link" as const, size: "link" as const, iconRight: <RxChevronRight /> },
};

export const Career21Defaults: Props = {
  tagline: "Tagline",
  heading: "Open Positions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  tabs: [
    {
      value: "view-all",
      trigger: "View all",
      content: [position, position, position],
    },
    {
      value: "department-one",
      trigger: "Department one",
      content: [position, position, position],
    },
    {
      value: "department-three",
      trigger: "Department Three",
      content: [position, position, position],
    },
    {
      value: "department-four",
      trigger: "Department Four",
      content: [position, position, position],
    },
  ],
};
