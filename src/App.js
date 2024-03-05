import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./footballApi/Header";
import Table from "./footballApi/pages/Table";
import Teams from "./footballApi/pages/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
