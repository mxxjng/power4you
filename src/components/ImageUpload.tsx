import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { IPowerSupplyForm } from "../types/form";
import CloseIcon from "./Icons/CloseIcon";
import CloudIcon from "./Icons/CloudIcon";
import ImageIcon from "./Icons/ImageIcon";

type ImageUploadProps = {
    name: keyof IPowerSupplyForm;
    label: string;
};

const ImageUpload = ({ name, label }: ImageUploadProps) => {
    const { register } = useFormContext();
    const [filename, setFilename] = useState("");

    function getFilenameFromPath(filename: string) {
        const splitted = filename.split("\\");

        return splitted[splitted.length - 1];
    }

    return (
        <div className="picture-upload">
            <label>{label}</label>
            <div
                className={`${
                    !filename ? "picture-upload__container--active" : ""
                } picture-upload__container`}
            >
                {!filename && (
                    <>
                        <CloudIcon />
                        <p className="picture-upload__text">
                            Drag & Drop Picture here OR
                        </p>
                    </>
                )}
                <input
                    {...register(name)}
                    className="picture-upload__input"
                    onChange={(e) => setFilename(e.target.value)}
                    id={name}
                    type="file"
                    multiple={false}
                />
                {!filename && <label htmlFor={name}>Browse Files</label>}
                {filename && (
                    <div className="picture-upload__filename">
                        <div className="picture-upload__filename__container">
                            <ImageIcon />
                            <p>{getFilenameFromPath(filename)}</p>
                        </div>
                        <div onClick={() => setFilename("")}>
                            <CloseIcon />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ImageUpload;
