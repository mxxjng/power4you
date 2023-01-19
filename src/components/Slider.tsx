import { useFormContext } from "react-hook-form";

import { IPowerSupplyForm } from "../types/form";

type SliderProps = {
    name: keyof IPowerSupplyForm;
    label: string;
    min: number;
    max: number;
};

const Slider = ({ name, label, min, max }: SliderProps) => {
    const { register, watch } = useFormContext();

    const currentVal = watch(name);

    return (
        <div className="slider">
            <div className="slider__flex">
                <label htmlFor={name}>{label}</label>
                <span className="slider__value">
                    {currentVal > min
                        ? `${min} V - ${currentVal} V`
                        : `${currentVal} V`}
                </span>
            </div>
            <input
                {...register(name)}
                className="slider__input"
                type="range"
                id={name}
                name={name}
                min={min}
                max={max}
            />
            <div className="slider__flex">
                <span>{min} V</span>
                <span>{max} V</span>
            </div>
        </div>
    );
};
export default Slider;
