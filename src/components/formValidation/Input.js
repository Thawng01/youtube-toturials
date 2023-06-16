import React from "react";

const Input = ({ errors, label, name, value, onChange, ...otherProps }) => {
    return (
        <label className="block my-4">
            <span className="block after:content-['*'] after:ml-1 after:text-[red]">
                {label}
            </span>
            <input
                className="w-full border border-[lightgray] p-2 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                name={name}
                onChange={onChange}
                value={value}
                {...otherProps}
            />
            {errors[name] && <span className="text-[red]">{errors[name]}</span>}
        </label>
    );
};

export default Input;
