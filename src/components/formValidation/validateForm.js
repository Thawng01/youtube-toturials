export const validateForm = (formData, formRef, setErrors) => {
    let isError = true;

    if (!formData.username.trim()) {
        formRef.current.username.classList.add("error");
        setErrors({ username: "Username is required." });
        return isError;
    }

    if (!formData.email) {
        formRef.current.email.classList.add("error");
        setErrors({ email: "Email is required." });
        return isError;
    } else if (!isEmailValid(formData.email)) {
        formRef.current.email.classList.add("error");
        setErrors({ email: "Email is invalid." });
        return isError;
    }

    if (!formData.password.trim()) {
        formRef.current.password.classList.add("error");
        setErrors({ password: "Password is required." });
        return isError;
    } else if (formData.password.length < 6) {
        formRef.current.password.classList.add("error");
        setErrors({ password: "Password must be at least 6 characters long." });
        return isError;
    }

    if (!formData.confirmPassword.trim()) {
        formRef.current.confirmPassword.classList.add("error");
        setErrors({ confirmPassword: "Password is required." });
        return isError;
    } else if (formData.password !== formData.confirmPassword) {
        formRef.current.confirmPassword.classList.add("error");
        setErrors({ confirmPassword: "Password do not match." });
        return isError;
    }

    // if there is no error
    return (isError = false);
};

const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};
