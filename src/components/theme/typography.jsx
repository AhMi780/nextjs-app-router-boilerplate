import React from "react";

//    typography heading component

export const Typography = ({
  tag,
  children,
  color,
  className,
  font,
  ...props
}) => {
  const tagMapping = {
    h1: {
      tag: "h1",
      classes:
        "2xl:text-[56px] 2xl:leading-[70px] xl:text-5xl  md:text-4xl text-dark1   sm:text-3xl text-2xl font-monserrat font-bold",
    },
    h2: {
      tag: "h2",
      classes:
        "2xl:text-4xl xl:text-3xl md:text-2xl sm:text-xl text-lg font-monserrat font-bold",
    },
    h3: {
      tag: "h3",
      classes:
        "2xl:text-[32px] 2xl:leading-[32px] lg:text-3xl md:text-2xl   sm:text-xl text-lg font-monserrat font-bold",
    },
    h4: {
      tag: "h4",
      classes:
        "2xl:text-[32px] 2xl:leading-[32px] lg:text-3xl md:text-2xl   sm:text-xl text-lg font-monserrat font-bold ",
    },
    h5: {
      tag: "h5",
      classes:
        "2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm font-monserrat font-medium ",
    },
    h6: { tag: "h6", classes: "h1" },
    p: {
      tag: "p",
      classes:
        "2xl:text-xl lg:text-lg sm:text-base text-sm  font-monserrat font-normal",
    },
    p1: {
      tag: "p",
      classes: "2xl:text-lg md:text-base text-sm   font-monserrat font-normal ",
    },
  };
  const colors = {
    primary: "",
    secondary: "",
    dark: "",
    light: "",
  };

  const classes = tagMapping[tag]?.classes || "";
  const Component = tagMapping[tag]?.tag || "p";
  const colorClass = colors[color];

  return (
    <Component className={`${classes} ${colorClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export const Headings = ({
  children,
  className,
  fifty_six,
  thirty_six,
  thirty_two,
  twenty_eight,
  twenty_four,
  twenty,
  eighteen,
  sixteen,
  style,
}) => {
  switch (true) {
    case fifty_six:
      return (
        <h1
          className={`2xl:text-[56px] 2xl:leading-[70px] xl:text-5xl  md:text-4xl text-dark1   sm:text-3xl text-2xl font-monserrat font-bold  ${className}`}
        >
          {children}
        </h1>
      );
    case thirty_six:
      return (
        <h2
          className={`2xl:text-4xl xl:text-3xl md:text-2xl sm:text-xl text-lg font-monserrat font-bold ${className}`}
        >
          {children}
        </h2>
      );
    case thirty_two:
      return (
        <h3
          className={`2xl:text-[32px] 2xl:leading-[32px] lg:text-3xl md:text-2xl   sm:text-xl text-lg font-monserrat font-bold ${className}`}
        >
          {children}
        </h3>
      );
    case twenty_eight:
      return (
        <h4
          className={`2xl:text-[28px] 2xl:leadiing-[28px] lg:text-2xl  md:text-xl  sm:text-lg text-dark1 text-base font-monserrat font-bold ${className}`}
          style={style}
        >
          {children}
        </h4>
      );
    case twenty_four:
      return (
        <h5
          className={`2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm font-monserrat font-medium ${className}`}
          style={style}
        >
          {children}
        </h5>
      );
    case twenty:
      return (
        <p
          className={`2xl:text-xl lg:text-lg sm:text-base text-sm  font-monserrat font-normal ${className}`}
        >
          {children}
        </p>
      );
    case eighteen:
      return (
        <p
          className={`2xl:text-lg md:text-base text-sm   font-monserrat font-normal ${className}`}
        >
          {children}
        </p>
      );
    case sixteen:
      return (
        <p
          className={`2xl:text-base sm:text-sm text-xs  font-monserrat font-normal ${className}`}
        >
          {children}
        </p>
      );

    default:
      return <h6 className={`text-xs sm:text-sm ${className}`}>{children}</h6>;
  }
};
