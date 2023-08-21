import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  variant,
  size,
  fullWidth,
  isLoading,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "rounded px-4 py-2 transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "text-blue-600 border border-blue-600 hover:bg-blue-100 focus:ring-blue-500",
  };

  const sizeStyles = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  fullWidth: false,
  isLoading: false,
  className: "",
};

export default Button;
