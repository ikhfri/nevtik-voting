import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Input = ({ label, icon, showeye, name, innerRef }) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [inputType, setInputType] = useState(showeye ? "password" : "text");

    const handleFocus = () => {
        setIsFocus(true);
    };

    const handleBlur = () => {
        setIsFocus(inputValue !== "");
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        setInputType(isPasswordVisible ? "password" : "text");
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div
            className={`input-div mb-4 grid-cols-10 ${isFocus ? "focus" : ""}`}
        >
            <div className="col-span-1 flex justify-center items-center text-dark-blue transition duration-300">
                <Icon icon={icon} width={25} />
            </div>
            <div className="div col-span-8">
                <h5 className="text-dark-blue">{label}</h5>
                <input
                    name={name}
                    ref={innerRef}
                    type={inputType}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    value={inputValue}
                    autoComplete="off"
                />
            </div>
            <div className="col-span-1 flex justify-center items-center">
                {showeye && (
                    <button type="button" onClick={togglePasswordVisibility}>
                        <Icon
                            className="text-dark-blue"
                            icon={
                                isPasswordVisible
                                    ? "radix-icons:eye-open"
                                    : "eva:eye-off-2-fill"
                            }
                            width={25}
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
