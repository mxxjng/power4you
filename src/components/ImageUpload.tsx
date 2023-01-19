import { useFormContext } from "react-hook-form";
import { IPowerSupplyForm } from "../types/form";

type ImageUploadProps = {
    name: keyof IPowerSupplyForm;
    label: string;
};

const ImageUpload = ({ name, label }: ImageUploadProps) => {
    const { register } = useFormContext();

    return (
        <div className="picture-upload">
            <label htmlFor={name}>{label}</label>
            <input
                className="picture-upload__input"
                id={name}
                {...register(name)}
                type="file"
                multiple={false}
            />
        </div>
    );
};
export default ImageUpload;
