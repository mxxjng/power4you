import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Spinner from "./Spinner";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    loading?: boolean;
    isDirty?: boolean;
    isValid?: boolean;
};
const Button = ({
    loading = false,
    isDirty = false,
    isValid = true,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${
                !isDirty || !isValid ? "button--disabled" : ""
            } button`}
            {...props}
        >
            {loading ? (
                <div className="button--spinning">
                    <Spinner />
                    <span className="button__text--spinning">Submitting</span>
                </div>
            ) : (
                "Submit"
            )}
        </button>
    );
};
export default Button;
