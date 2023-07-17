import {FunctionComponent, ReactNode} from "react";
import classes from './Card.module.css';

interface CardProps {
    children: ReactNode;
    title: string;
}

const Card: FunctionComponent<CardProps> = ({children, title}) => {
    return <div className={classes.card}>
        <h3>{title}</h3>
        <hr/>
        {children}
    </div>
}

export default Card;