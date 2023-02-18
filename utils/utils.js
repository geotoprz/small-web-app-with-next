export const getReactSelectStyles = (isError) => {
  return {
    container: (provided) => ({
      ...provided,
      width: "8rem",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#334155",
      borderRadius: 0,
      boxShadow: "none",
      border: "none",
      "&:hover": {
        boxShadow: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      backgroundColor: "#334155",
      color: "white",
      "&:hover": {
        color: "#5EEAD4",
      },
    }),
    group: (provided) => ({
      ...provided,
      paddingLeft: "1rem",
      fontSize: "1rem",
    }),
    groupHeading: (provided) => ({
      ...provided,
      fontWeight: 700,
      fontSize: "1rem",
      paddingLeft: 0,
      color: "white",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      visibility: "hidden",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      padding: 0,
      margin: 0,
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0",
      zIndex: 30,
      backgroundColor: "#334155",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      "&::-webkit-scrollbar-thumb": {
        background: "#334155",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#5EEAD4" : "white",
      backgroundColor: "#334155",
      // backgroundColor: "red",
      "&:hover": {
        color: "#5EEAD4",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
  };
};

export const getMenuOptions = () => [
  {
    label: "Homepage",
    options: [
      { value: "/", label: "  All" },
      { value: "/?section=1", label: `${"  "}Section 1` },
      { value: "/?section=2", label: "  Section 2" },
    ],
  },
  { value: "/page2", label: "Page 2" },
];

export const formValidationRegExp = {
  phone: /^([0|\+[0-9]{1,3})?(6|2)\d{9}$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;'",.<>/?]).{8,}$/,
};
