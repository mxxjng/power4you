import SuccessIcon from "./Icons/SuccessIcon";

type SuccessContainerProps = {
    back: () => void;
};

const SuccessContainer = ({ back }: SuccessContainerProps) => {
    return (
        <div className="success-container">
            <SuccessIcon />
            <p className="success-container__message p-1">
                Ticket was successfully submitted!
            </p>
            <button className="back-button" onClick={() => back()}>
                Go Back
            </button>
        </div>
    );
};
export default SuccessContainer;
