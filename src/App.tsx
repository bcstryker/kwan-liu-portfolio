import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <head>
        <title>Kwan Liu</title>
      </head>
      <body className="bg-black">
        <div className="h-screen">
          <div className="flex flex-col pt-[35vh] justify-center h-1/2">
            <h1 className="text-4xl text-center text-white">Kwan Liu</h1>
            <h1 className="text-2xl text-center text-white">Product Designer</h1>
          </div>
          <div className="pt-24 py-24 flex justify-center h-1/2 bg-black">
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
            {/* <div className="card">
                <a href="/page1">Page 1</a>
              </div>
              <div className="card">
                <a href="/page2">Page 2</a>
              </div>
              <div className="card">
                <a href="/page3">Page 3</a>
              </div> */}
          </div>
        </div>
        {/* <div className="w-full h-full items-center justify-center">
          <div className="flex h-full justify-center items-center">
            <p>Kwan Liu</p>
          </div>
        </div>
        <div>
          <div className="flex w-full">
            <Card linkText="Link Number 1" />
            <Card linkText="Link Number 2" />
            <Card linkText="Link Number 3" />
          </div>
        </div> */}
      </body>
    </div>
  );
}

export default App;
