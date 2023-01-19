import Joi from "joi";

export const powerSupplyFormSchema = Joi.object({
    name: Joi.string().alphanum().required(),
    channel: Joi.number().required(),
    outputVoltage: Joi.number().required(),
    picture: Joi.object().not().empty().required(),
});

export interface IPowerSupplyForm {
    name: string;
    channel: number;
    outputVoltage: number;
    picture: Object;
}

export enum FormEnum {
    Initial,
    Loading,
    Success,
    Error,
}

export type FormState = {
    state: FormEnum;
    message?: string;
};
