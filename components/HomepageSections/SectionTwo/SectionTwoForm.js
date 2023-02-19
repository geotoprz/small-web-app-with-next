import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationRegExp } from "@/utils/utils";
import BaseDescription from "@/components/UI/BaseDescription";
import BaseTitle from "@/components/UI/BaseTitle";

const schema = yup.object({
  phone: yup
    .string()
    .required("Phone is required")
    .matches(formValidationRegExp.phone, {
      message:
        "Phone number should start with a 2 or 6 (country code is optional e.g. +30) and be 10 numbers long",
    }),
  email: yup
    .string()
    .required("Email is required.")
    .matches(formValidationRegExp.email, { message: "Must be a valid email." }),
  password: yup
    .string()
    .required("Password is required.")
    .matches(formValidationRegExp.password, {
      message:
        "Password must have at least one number, one capital letter, one symbol, one lowercase letter and be more than 8 characters long.",
    }),
});

const SectionTwoForm = ({ formText, formLabels, buttonText }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "",
      email: "",
      password: "",
    },
  });

  const getInputEntity = (label) => {
    if (label.toLowerCase().includes("phone"))
      return { name: "phone", type: "number" };
    if (label.toLowerCase().includes("email"))
      return { name: "email", type: "text" };
    if (label.toLowerCase().includes("password"))
      return { name: "password", type: "password" };
    return null;
  };

  // const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    console.log("data", data);

    // we can use the data for a POST call on a given endpoint
    // EXAMPLE

    // setLoading(true)
    // try {
    //   await axios.post(process.env.NEXT_PUBLIC_HOME_API, data);
    // } catch (err) {
    //   console.log(err);
    // } finally{
    //   setLoadin(false)
    // }
  };

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <BaseTitle className="font-bold">
        {formText ?? "Validate your info"}
      </BaseTitle>
      <BaseDescription>
        We work with ecosystem leaders, corporations and startups worldwide. How
        can we help you?
      </BaseDescription>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-1"
      >
        {formLabels?.map((label, i) => {
          return (
            <>
              {getInputEntity(label) && (
                <div
                  className="flex w-full flex-col items-center gap-2"
                  key={`Form input ${i}`}
                >
                  <input
                    type={getInputEntity(label).type}
                    placeholder={label}
                    className={`w-64 border-2 bg-stone-100 py-2 px-4 outline-none ${
                      errors[getInputEntity(label).name]
                        ? "border-red-600 "
                        : "border-transparent"
                    }`}
                    {...register(getInputEntity(label).name)}
                  />
                  <BaseDescription className="pb-2 font-bold text-red-600">
                    {errors[getInputEntity(label).name]?.message}
                  </BaseDescription>
                </div>
              )}
            </>
          );
        })}
        <button className="bg-blue-500 px-8 py-3 text-white outline-none">
          {buttonText ?? "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SectionTwoForm;
