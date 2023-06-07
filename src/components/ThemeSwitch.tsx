import {Switch} from "@mui/material";
import React, {FC} from "react";
import {ColorTheme} from "../App";

const ThemeSwitch: FC<{ switchTheme: Function }> = ({switchTheme}) => (
    <div className="flex items-center align-middle pl-4">
        <p className="pr-2 text-xs">Dark Mode</p>
        <Switch onChange={() => switchTheme()} />
        <p className="pl-2 text-xs">Light Mode</p>
    </div>
)

export default ThemeSwitch;