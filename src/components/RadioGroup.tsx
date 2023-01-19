import { useFormContext } from "react-hook-form";
import { IPowerSupplyForm } from "../types/form";

type RadioGroupProps = {
    name: keyof IPowerSupplyForm;
    label: string;
    data: number[];
};

const RadioGroup = ({ name, label, data }: RadioGroupProps) => {
    const { watch, setValue } = useFormContext();

    const currentVal = watch(name);

    function handleClick(value: number) {
        setValue(name, value);
    }

    return (
        <div>
            <label>{label}</label>
            <div className="radio-group">
                {data.map((d) => {
                    return (
                        <div
                            key={d}
                            className={`${
                                d === currentVal
                                    ? "radio-group__item--active"
                                    : null
                            } radio-group__item`}
                            onClick={() => handleClick(d)}
                        >
                            <label>
                                <span>CH {d}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default RadioGroup;
