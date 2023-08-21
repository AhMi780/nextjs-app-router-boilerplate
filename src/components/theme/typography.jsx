import React from "react";
import PropTypes from "prop-types";

//    typography heading component

const Typography = ({
  variant,
  children,
  color,
  className,
  font,
  ...props
}) => {
  const variantMapping = {
    h1: {
      variant: "h1",
      classes: "text-6xl   font-monserrat font-bold",
    },
    h2: {
      variant: "h2",
      classes: "text-5xl  font-monserrat font-bold",
    },
    h3: {
      variant: "h3",
      classes: "text-4xl  font-monserrat font-bold",
    },
    h4: {
      variant: "h4",
      classes: "text-3xl font-monserrat font-bold ",
    },
    h5: {
      variant: "h5",
      classes: "text-2xl  font-monserrat font-medium ",
    },
    h6: { variant: "h6", classes: "text-xl  font-monserrat font-medium" },
    p: {
      variant: "p",
      classes: "text-lg  font-monserrat font-normal",
    },
    p1: {
      variant: "p",
      classes: "text-base  font-monserrat font-normal ",
    },
  };
  const colors = {
    primary: "",
    secondary: "",
    dark: "",
    light: "",
  };

  const classes = variantMapping[variant]?.classes || "";
  const Component = variantMapping[variant]?.variant || "p";
  const colorClass = colors[color];

  return (
    <Component className={`${classes} ${colorClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "p1"])
    .isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: "",
  variant: "h3",
};

export default Typography;
