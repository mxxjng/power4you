import Joi from "joi";

export const powerSupplyFormSchema = Joi.object({
  name: Joi.string().required(),
  channel: Joi.number().required(),
  outputVoltage: Joi.number().required(),
  picture: Joi.string().required(),
});

export interface IPowerSupplyForm {
  name: string;
  channel: number;
  outputVoltage: number;
  picture: string;
}
