import Todos from "./components/todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/todos",
      errorElement: (
        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            margin: "100px 0px",
          }}
        >
          Something went wrong
        </div>
      ),
      element: <Todos />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
