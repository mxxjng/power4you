import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
    FormEnum,
    FormState,
    IPowerSupplyForm,
    powerSupplyFormSchema,
} from "../types/form";
import Button from "./Button";
import FormInput from "./FormInput";
import Ticket from "./Icons/Ticket";
import ImageUpload from "./ImageUpload";
import RadioGroup from "./RadioGroup";
import Slider from "./Slider";
import SuccessContainer from "./SuccessContainer";

const defaultValues: IPowerSupplyForm = {
    name: "",
    channel: 1,
    outputVoltage: 0,
    picture: [],
};

const Form = () => {
    const [state, setState] = useState<FormState>({ state: FormEnum.Initial });
    const methods = useForm<IPowerSupplyForm>({
        mode: "onChange",
        resolver: joiResolver(powerSupplyFormSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isDirty, isValid },
        reset,
    } = methods;

    const onSubmit: SubmitHandler<IPowerSupplyForm> = (data) => {
        setState({ state: FormEnum.Loading });
        setTimeout(() => {
            reset();
            setState({ state: FormEnum.Success });
            console.log(data);
        }, 2000);
    };

    return (
        <div className="form">
            {state.state !== FormEnum.Success && (
                <>
                    <div className="form__headline">
                        <Ticket />
                        <h3>Ticket</h3>
                    </div>
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
                            <ImageUpload
                                name="picture"
                                label="Picture Upload"
                            />
                            <Button
                                type="submit"
                                disabled={!isDirty || !isValid}
                                isValid={isValid}
                                isDirty={isDirty}
                                loading={state.state === FormEnum.Loading}
                            />
                        </form>
                    </FormProvider>
                </>
            )}
            {state.state === FormEnum.Success && (
                <SuccessContainer
                    back={() => setState({ state: FormEnum.Initial })}
                />
            )}
        </div>
    );
};
export default Form;
