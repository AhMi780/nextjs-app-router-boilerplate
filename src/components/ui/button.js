import React from "react";
import Link from "next/link";

export const ButtonV2 = ({
  children,
  className,
  onClick,
  isLoading,
  type,
  transparent,
  disabled,
  href,
  ContainerClass,
  showTransition,
  ...rest
}) => {
  const Buttons = () => {
    return (
      <button
        {...rest}
        onClick={onClick}
        disabled={disabled}
        className={` ${
          transparent
            ? "bg-white border border-white hover:!border-primary text-primary  hover:text-white"
            : "bg-primary border !border-transparent text-white hover:!border-transparent"
        } outline-none disabled:bg-gray-500 disabled:text-gray2 relative overflow-hidden px-3 sm:px-5 group disabled:cursor-not-allowed p-2 2xl:py-[11px] py-[8px] 2xl:text-base text-sm font-lato_bold rounded-[30px] ${className}`}
        type={type}
      >
        {isLoading ? (
          <div
            className={`${
              transparent
                ? "from-primary animate-spin via-primary to-white"
                : "from-white animate-spin via-white to-primary"
            } bg-gradient-to-b w-6 h-6 mx-auto rounded-full flex items-center`}
          >
            <div
              className={`${
                transparent ? "bg-white" : "bg-primary"
              }  w-5 h-5 m-auto rounded-full`}
            ></div>
          </div>
        ) : (
          <>
            {showTransition && (
              <div
                style={{ backgroundColor: showTransition }}
                className={`absolute z-[1] content-[' '] transition-all duration-300 group-hover:w-full h-full top-0 left-0 w-0 
                
                `}
                // ${
                //   transparent ? "bg-primary" : "bg-primary/50"
                // }
              ></div>
            )}
            <div className="relative z-10">{children}</div>
          </>
        )}
      </button>
    );
  };
  return (
    <div className={`max-w-max ${ContainerClass}`}>
      {href ? (
        <Link href={href ? href : ""}>
          <Buttons />
        </Link>
      ) : (
        <>
          <Buttons />
        </>
      )}
    </div>
  );
};

export const Spinner = ({ transparent }) => {
  return (
    <div
      className={`${
        transparent
          ? "from-primary animate-spin via-primary to-white"
          : "from-white animate-spin via-white to-primary"
      } bg-gradient-to-b  w-6 h-6 mx-auto rounded-full flex items-center`}
    >
      <div
        className={`${
          transparent ? "bg-white" : "bg-primary"
        }  w-5 h-5 m-auto rounded-full`}
      ></div>
    </div>
  );
};
