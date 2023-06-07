import "./App.css";
import Card from "./components/Card";
import {useCallback, useEffect, useState} from "react";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [colors, setColors] = useState<ColorTheme>({
    foreground: "black",
    background: "white",
    accent: "fuchsia-100",
  })
  const switchTheme = useCallback(() => {
    setColors({
      foreground: darkTheme ? "white" : "black",
      background: darkTheme ? "black" : "white",
      accent: darkTheme ? "fuchsia" : "cyan",
    });
  }, [darkTheme]);
  useEffect(() => {
    switchTheme()
  }, [darkTheme])

  return (
    <div className="App">
      <head>
        <title>Kwan Liu</title>
      </head>
      <body className={`bg-${colors.background}`}>
        <ThemeSwitch colors={colors} setDarkTheme={setDarkTheme} />
        <div className="h-screen">
          <div className="flex flex-col pt-[35vh] justify-center h-1/2">
            <h1 style={{color: colors.foreground}} className={`text-4xl text-center`}>Kwan Liu</h1>
            <h1 style={{color: colors.foreground}} className={`text-2xl text-center`}>Product Designer</h1>
          </div>
          <div className={`pt-24 py-24 flex justify-center h-1/2 bg-${colors.background}`}>
            <table className="border-collapse border-spacing-16">
              <tbody>
                <tr>
                  <td className="pr-12">
                    <Card colors={colors} linkText="First Link" />
                  </td>
                  <td className="pr-12">
                    <Card colors={colors} linkText="Second Link" />
                  </td>
                  <td>
                    <Card colors={colors} linkText="Third Link" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}

export interface ColorTheme {
  foreground: string;
  background: string;
  accent: string;
}
export default App;
