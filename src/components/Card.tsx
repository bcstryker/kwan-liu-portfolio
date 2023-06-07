import {FC} from "react";
import {ColorTheme} from "../App";

const Card: FC<{colors: ColorTheme; linkText: string;}> = ({colors, linkText}) => {

    return (
        <div style={{borderColor: colors.accent}} className={`w-64 p-16 rounded-xl border-solid border-2 text-center`}>
            <p style={{color: colors.foreground}} className={`text-xl`}>{linkText}</p>
        </div>
    );
}

export default Card;
