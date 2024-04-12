import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader as itemListLoader } from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ItemPage, { loader as itemLoader } from "./pages/ItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: itemListLoader },
      { path: "store", element: <StorePage />, loader: itemListLoader },
      { path: ":itemId", element: <ItemPage />, loader: itemLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
