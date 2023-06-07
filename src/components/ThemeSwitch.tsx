import {Switch} from "@mui/material";
import React, {FC} from "react";
import {ColorTheme} from "../App";

const ThemeSwitch: FC<{ colors: ColorTheme; setDarkTheme: React.Dispatch<any> }> = ({colors, setDarkTheme}) => (
    <div style={{color:colors.foreground}} className="flex items-center align-middle pl-4">
        <p className="pr-2 text-xs">Dark Mode</p>
        <Switch onChange={() => setDarkTheme((darkTheme: boolean) => !darkTheme)} name={'Dark Mode'}/>
        <p className="pl-2 text-xs">Light Mode</p>
    </div>
)

export default ThemeSwitch;