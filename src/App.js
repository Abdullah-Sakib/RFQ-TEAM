import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Sea from "./Components/Cargo/Sea";
import Sky from "./Components/Cargo/Sky";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "sea",
          element: <Sea></Sea>
        },
        {
          path: "sky",
          element: <Sky></Sky>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
