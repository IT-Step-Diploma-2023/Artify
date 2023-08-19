import {FunctionComponent, ReactNode} from "react";
import classes from './CardContainer.module.css';

interface CardProps {
    children: ReactNode;
}

const CardContainer: FunctionComponent<CardProps> = ({children}) => {
    return <div className={classes["card-container"]}>{children}</div>

}

export default CardContainer;