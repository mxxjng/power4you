import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { IPowerSupplyForm, powerSupplyFormSchema } from "../types/form";
import FormInput from "./FormInput";

const defaultValues: IPowerSupplyForm = {
  name: "",
  channel: 1,
  outputVoltage: 0,
  picture: "dd",
};

const Form = () => {
  const methods = useForm<IPowerSupplyForm>({
    resolver: joiResolver(powerSupplyFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid },
    watch,
    register,
    trigger,
  } = methods;

  const onSubmit: SubmitHandler<IPowerSupplyForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            placeholder="E.g: N100B, N200B, N124B"
            name="name"
            label="Name"
          />
          <button
            className={`${
              !isDirty || !isValid ? "button--disabled" : ""
            } button`}
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
export default Form;
