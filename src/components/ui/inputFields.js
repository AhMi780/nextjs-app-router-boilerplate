export const TextFields = ({
  label,
  labelClass,
  name,
  type,
  placeholder,
  onChange,
  inputClass,
  ...rest
}) => {
  return (
    <div className="flex flex-col text-sm gap-y-1 sm:text-base">
      <label className={` font-lato_semibold ${labelClass}`} htmlFor={name}>
        {label}
        <span className="text-primary"> *</span>
      </label>
      <input
        className={`bg-n2 py-2 md:py-[10px] sm:px-5 px-3 outline-none  w-full rounded-[10px] placeholder:text-n1 ${inputClass}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export const SelectField = ({
  label,
  name,
  type,
  placeholder,
  options,
  value,
  onChange,
  setValue,
}) => {
  return (
    <div className="relative flex flex-col w-full text-sm gap-y-1 sm:text-base">
      <label className=" font-lato_semibold" htmlFor={name}>
        {label}
        <span className="text-primary"> *</span>
      </label>
      <div className="relative sm:px-5 px-2 bg-n2 rounded-[10px]">
        <select
          className={` bg-n2 after:content-["&#8964;"] outline-none py-[13px]  w-full  ${
            value !== "" ? "" : "text-n1"
          }`}
          onChange={(e) => {
            let option = options.find((o) => o.title === e.target.value);
            if (option) {
              setValue({ id: option.id, title: option.title });
            } else {
              setValue({ id: "", title: e.target.value });
            }
          }}
          defaultValue={value.title}
          value={value.title ? value.title : ""}
          size={1}
          name={name}
        >
          {/* {placeholder && ( */}
          <option className=" placeholder" selected>
            {placeholder ? placeholder : "Select Field"}
          </option>
          {/* )} */}
          {options?.map((ls, index) => {
            const { title } = ls;
            return (
              <option
                // value={ls.id}

                // label={ls.title}
                // id={ls.id}
                key={index}
                // onClick={() => {
                //   setValue(ls);
                //   setShowOption(false);
                // }}
                className="cursor-pointer !hover:bg-n2 text-black "
                // style={{ color: "black", padding: "10px" }}
              >
                <span> {title}</span>
              </option>
            );
          })}
        </select>
        {/* <MdKeyboardArrowDown className="absolute inset-y-0 my-auto right-5" /> */}
      </div>
    </div>
  );
};
export const SelectOption = ({ children }) => {
  return <option>{children}</option>;
};

export const CheckBox = ({
  label,
  name,
  className,
  onChange,
  labelClass,
  value,
  defaultChecked,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <div className="flex items-center cursor-pointer gap-x-2 ">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        id={name}
        onChange={onChange}
        value={value}
        className={`cursor-pointer !accent-primary ${className}`}
        name={name}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <label className={`cursor-pointer ${labelClass}`} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
