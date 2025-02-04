import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Notebook from "./pages/giftPages/notebook&Calender";
import Flash from "./pages/giftPages/Flash";
import Gift from "./pages/gift";
import Keychain from "./pages/giftPages/Keychain";
import Pens from "./pages/giftPages/Pens";
import Mug from "./pages/giftPages/Mug";
import Puzzle from "./pages/giftPages/Puzzle";
import GiftSet from "./pages/giftPages/GiftSet";
import Plate from "./pages/giftPages/Plate";
import Pillow from "./pages/giftPages/Pillow";
import MousePad from "./pages/giftPages/MousePad";
import Hat from "./pages/giftPages/Hat";
import Bag from "./pages/giftPages/Bag";
import Website from "./pages/Website";
import styles from "./components.style/page.module.scss"
import Powerbank from "./pages/giftPages/Powerbank";
import FirstPage from "./pages/firstPage";
import Design from "./pages/design";


const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/website",
    element: <Website />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/gift",
    element: <Gift />,
  },
  {
    path: "/gift/notebook",
    element: <Notebook />,
  },
  {
    path: "/gift/flash",
    element: <Flash />,
  },
  {
    path: "/gift/keychain",
    element: <Keychain />,
  },
  {
    path: "/gift/pen",
    element: <Pens />,
  },
  {
    path: "/gift/mug",
    element: <Mug />,
  },
  {
    path: "/gift/puzzle",
    element: <Puzzle />,
  },
  {
    path: "/gift/giftset",
    element: <GiftSet />,
  },
  {
    path: "/gift/plate",
    element: <Plate />,
  },
  {
    path: "/gift/pillow",
    element: <Pillow />,
  },
  {
    path: "/gift/hat",
    element: <Hat />,
  },
  {
    path: "/gift/mousepad",
    element: <MousePad />,
  },
  {
    path: "/gift/bag",
    element: <Bag />,
  },
  {
    path: "/gift/powerbank",
    element: <Powerbank />,
  },
]);

const App = () => {
  return (
    <main className={styles.mainPageCont2}>
    <RouterProvider router={router}></RouterProvider>
    
    </main>
  );
};

export default App;
