import React from "react";

const InputText = ({
    name,
    label,
    placeholder,
    type,
    innerRef,
    value,
    onChange,
}) => {
    return (
        <div className="form-control w-full my-2">
            <label className="label">
                <span className="label-text text-white transition duration-300 text-base capitalize">
                    {label}
                </span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={innerRef}
                value={value}
                onChange={onChange}
                className="input input-bordered w-full bg-white transition duration-300"
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};

export default InputText;
