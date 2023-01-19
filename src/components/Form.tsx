import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  FormEnum,
  FormState,
  IPowerSupplyForm,
  powerSupplyFormSchema,
} from "../types/form";
import FormInput from "./FormInput";
import ImageUpload from "./ImageUpload";
import RadioGroup from "./RadioGroup";
import Slider from "./Slider";

const defaultValues: IPowerSupplyForm = {
  name: "",
  channel: 1,
  outputVoltage: 0,
  picture: [],
};

const Form = () => {
  const [state, setState] = useState<FormState>({ state: FormEnum.Initial });
  const methods = useForm<IPowerSupplyForm>({
    resolver: joiResolver(powerSupplyFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = methods;

  const onSubmit: SubmitHandler<IPowerSupplyForm> = (data) => {
    setState({ state: FormEnum.Loading });
    setTimeout(() => {
      setState({ state: FormEnum.Success });
      console.log(data);
    }, 2000);
  };

  return (
    <div className="form">
      {state.state !== FormEnum.Success && (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              placeholder="E.g: N100B, N200B, N124B"
              name="name"
              label="Name"
            />
            <RadioGroup
              name="channel"
              label="Output Channel"
              data={[1, 2, 3, 4]}
            />
            <Slider
              name="outputVoltage"
              label="Output Voltage"
              min={0}
              max={100}
            />
            <ImageUpload name="picture" label="Picture Upload" />
            <button
              className={`${
                !isDirty || !isValid ? "button--disabled" : ""
              } button`}
              type="submit"
              disabled={!isDirty || !isValid}
            >
              {state.state === FormEnum.Loading ? "...loading" : "Submit"}
            </button>
          </form>
        </FormProvider>
      )}
      {state.state === FormEnum.Error && (
        <div>
          <p>Error..</p>
        </div>
      )}
      {state.state === FormEnum.Success && (
        <div>
          <p>Success..</p>
        </div>
      )}
    </div>
  );
};
export default Form;
