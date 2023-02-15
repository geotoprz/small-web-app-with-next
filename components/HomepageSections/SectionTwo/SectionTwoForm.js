import React from "react";
import { Controller, useForm } from "react-hook-form";

const SectionTwoForm = ({ formText, formLabels, buttonText }) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    clearErrors,
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      email: "",
      password: "newsletter_doc",
    },
  });

  return (
    <div className="flex w-1/2 flex-col gap-3">
      <h2>{formText}</h2>
      <h3>
        We work with ecosystem leaders, corporations and startups worldwide. How
        can we help you?
      </h3>
      <form>
        {formLabels.map((label) => {
          return (
            <div className="flex w-full flex-col gap-2" key={label}>
              {/* <label htmlFor="title" className="block text-lg font-medium">
            {t("news.title")} *
          </label> */}
              <input
                type="text"
                placeholder={label}
                className=""
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required.",
                  },
                })}
              />
              <div className="text-global-message-error text-xs">
                {errors.title?.message}
              </div>
            </div>
          );
        })}
        <button>{buttonText}</button>
      </form>
    </div>
  );
};

export default SectionTwoForm;
