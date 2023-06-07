import "./App.css";
import Card from "./components/Card";
import ThemeSwitch from "./components/ThemeSwitch";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <head>
        <title>Kwan Liu</title>
      </head>
      <body>
        <ThemeSwitch switchTheme={switchTheme} />
        <div className="h-screen">
          <div className="flex flex-col pt-[35vh] justify-center h-1/2">
            <h1 className={`text-4xl text-center`}>Kwan Liu</h1>
            <h1 className={`text-2xl text-center`}>Product Designer</h1>
          </div>
          <div className={`pt-24 py-24 flex justify-center h-1/2`}>
            <table className="border-collapse border-spacing-16">
              <tbody>
                <tr>
                  <td className="pr-12">
                    <Card linkText="First Link" />
                  </td>
                  <td className="pr-12">
                    <Card linkText="Second Link" />
                  </td>
                  <td>
                    <Card linkText="Third Link" />
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
