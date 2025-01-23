/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime, Duration } from "luxon";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronLeft } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Date = {
  weekday: string;
  day: string;
  month: string;
  year: string | null;
};

type CountdownValues = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type CountdownProps = {
  countdownIsoDate: string;
  className?: string;
  cellClassName?: string;
  dividerClassName?: string;
};

type Props = {
  backLink: {
    url: string;
    button: ButtonProps;
  };
  heading: string;
  description: string;
  image: ImageProps;
  inputPlaceholder: string;
  button: ButtonProps;
  termsAndConditions: string;
  date: Date;
  countdownIsoDate: string;
  amountLeft: string;
};

export type EventItemHeader5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const EventItemHeader5 = (props: EventItemHeader5Props) => {
  const {
    backLink,
    heading,
    description,
    image,
    inputPlaceholder,
    button,
    termsAndConditions,
    date,
    countdownIsoDate,
    amountLeft,
  } = {
    ...EventItemHeader5Defaults,
    ...props,
  };
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-rows-[auto] items-center gap-x-20 gap-y-12 text-text-alternative md:min-h-0 md:grid-flow-row md:grid-cols-1 md:gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <Button
              {...backLink.button}
              className="py-1 text-text-alternative"
              asChild
            >
              <a href={backLink.url}>{backLink.button.title}</a>
            </Button>
            <h1 className="mt-6 text-5xl font-bold md:mt-8 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">{description}</p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form
                className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                onSubmit={handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder={inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="text-text-primary"
                />
                <Button {...button}>{button.title}</Button>
              </form>
              <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-center">
            <div className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
              {date.weekday} {date.day} {date.month}
            </div>
            <Countdown
              countdownIsoDate={countdownIsoDate}
              className="mt-5 border-border-alternative md:mt-6"
              dividerClassName="bg-background-primary"
            />
            <p className="mt-4 bg-background-secondary px-2 py-1 text-sm font-semibold text-text-primary">
              {amountLeft} Spots left!
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 ">
          <img
            src={image.src}
            className="size-full object-cover"
            alt={image.alt}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
};

const Countdown: React.FC<CountdownProps> = ({
  countdownIsoDate,
  className,
  cellClassName,
  dividerClassName,
}) => {
  const [countdown, setCountdown] = useState<CountdownValues>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = DateTime.fromISO(countdownIsoDate);

    const updateCountdown = () => {
      const now = DateTime.now();
      const diff = targetDate.diff(now);

      if (diff.milliseconds <= 0) {
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const duration = Duration.fromObject(diff.toObject()).shiftTo(
        "days",
        "hours",
        "minutes",
        "seconds"
      );

      const padZero = (num: number): string => {
        return num < 10 ? `0${num}` : num.toString();
      };

      setCountdown({
        days: padZero(duration.days),
        hours: padZero(duration.hours),
        minutes: padZero(duration.minutes),
        seconds: padZero(Math.floor(duration.seconds)),
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [countdownIsoDate]);

  const renderCell = (value: string, label: string) => (
    <div
      className={twMerge(
        clsx("flex min-w-18 flex-col items-center", cellClassName)
      )}
    >
      <span className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
        {value}
      </span>
      <span>{label}</span>
    </div>
  );

  const renderDivider = () => (
    <div
      className={twMerge(
        clsx("hidden w-px bg-background-alternative sm:block", dividerClassName)
      )}
    />
  );

  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-wrap justify-center gap-4 border border-border-primary px-4 py-4 sm:flex-nowrap sm:px-6",
          className
        )
      )}
    >
      {renderCell(countdown.days, "Days")}
      {renderDivider()}
      {renderCell(countdown.hours, "Hours")}
      {renderDivider()}
      {renderCell(countdown.minutes, "Mins")}
      {renderDivider()}
      {renderCell(countdown.seconds, "Secs")}
    </div>
  );
};

export const EventItemHeader5Defaults: Props = {
  backLink: {
    url: "#",
    button: {
      title: "All events",
      variant: "link",
      size: "link",
      iconLeft: <RxChevronLeft />,
    },
  },
  heading: "Event title heading",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  inputPlaceholder: "Enter your email",
  button: { title: "Save my spot" },
  termsAndConditions: `
  <p class='text-xs'>
    By clicking Save my spot you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  `,
  date: {
    weekday: "Sat",
    day: "10",
    month: "Feb",
    year: null,
  },
  countdownIsoDate: "2025-12-14T01:23:29.000+01:00",
  amountLeft: "10",
};
