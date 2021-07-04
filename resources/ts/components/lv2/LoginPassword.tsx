import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { LoginData } from "../../type/api/LoginData";

type Props = { register: UseFormRegister<LoginData> };

const LoginPassword: React.VFC<Props> = ({ register }: Props) => {
    const [isRevealPassword, setIsRevealPassword] = useState(false);

    const togglePassword = (): void => {
        setIsRevealPassword((prevState) => !prevState);
    };

    return (
        <>
            <input
                type={isRevealPassword ? "text" : "password"}
                autoComplete="off"
                placeholder="Password"
                className="border rounded-lg px-3 py-2 mt-1 z-50 text-sm w-11/12"
                {...register("password", {
                    required: true,
                })}
            />
            <span onClick={togglePassword}>
                {isRevealPassword ? (
                    <i className="far fa-eye pl-2 text-gray-600" />
                ) : (
                    <i className="far fa-eye-slash pl-2 text-gray-600" />
                )}
            </span>
        </>
    );
};

export default LoginPassword;
