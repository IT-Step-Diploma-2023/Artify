import React, {ButtonHTMLAttributes} from "react";
import classes from './Button.module.css';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...rest}) => {
    return <>
        <button className={classes["button-10"]} {...rest} role={"button"}>
            {children}
        </button>
    </>
}

export default Button;