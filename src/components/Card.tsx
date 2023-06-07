import {FC} from "react";
import {ColorTheme} from "../App";

const Card: FC<{linkText: string;}> = ({linkText}) => {

    return (
        <div className={`card w-64 p-16 rounded-xl border-solid border-2 text-center`}>
            <p className={`text-xl`}>{linkText}</p>
        </div>
    );
}

export default Card;
