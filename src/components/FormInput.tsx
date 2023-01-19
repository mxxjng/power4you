import { useFormContext } from "react-hook-form";
import { IPowerSupplyForm } from "../types/form";

type FormInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
    name: keyof IPowerSupplyForm;
    type?: string;
    required?: boolean;
    disabled?: boolean;
};

const FormInput = ({
    type = "text",
    name,
    label,
    required = false,
    disabled = false,
    ...rest
}: FormInputProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="input">
            {label && (
                <label className="input__label" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                {...register(name)}
                className={`${
                    errors[name] ? "input__field--error" : ""
                } input__field`}
                {...rest}
            />
            {errors[name] && (
                <small className="input__field__error-message">
                    {`${errors[name]?.message}`}
                </small>
            )}
        </div>
    );
};
export default FormInput;
