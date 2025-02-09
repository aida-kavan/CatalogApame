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
import Social from "./pages/Social";
import FirstPage from "./pages/firstPage";
import Design from "./pages/design";


///////کل خدمات چاپ //////////
import Print from "./pages/print"
import Sublimation from "./pages/printPages/sublimation"
import Digital from "./pages/printPages/digital"
import PostPrinting from "./pages/printPages/Postprinting"

//صفحه های آفست
import Offset from "./pages/printPages/offset"
import Teraket from  "./pages/printPages/offsetPages/Teraket"
import Box from  "./pages/printPages/offsetPages/box"
import Brochure from  "./pages/printPages/offsetPages/brochure"
import Catalog from  "./pages/printPages/offsetPages/catalog"
import Fastfood from  "./pages/printPages/offsetPages/fastfood"
import Folder from  "./pages/printPages/offsetPages/folder"
import Pocket from  "./pages/printPages/offsetPages/packet"
import Paperbag from  "./pages/printPages/offsetPages/paperbag"
import Papercup from  "./pages/printPages/offsetPages/papercup"
import Sarbarg from  "./pages/printPages/offsetPages/sarbarg"
import Visit from  "./pages/printPages/offsetPages/visit"
import SetEdari from "./pages/printPages/offsetPages/setEdari";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/website",
    element: <Website />,
  },
  {
    path: "/social",
    element: <Social />,
  },
  {
    path: "/design",
    element: <Design />,
  },

  //هدایای تبلیغاتی
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


  //خدمات پرینت
  {
    path: "/print",
    element: <Print />,
  },
  {
    path: "/print/offset",
    element: <Offset />,
  },
  {
    path: "/print/offset/teraket",
    element: <Teraket />,
  },
  {
    path: "/print/offset/box",
    element: <Box />,
  },
  {
    path: "/print/offset/brochure",
    element: <Brochure />,
  },
  {
    path: "/print/offset/catalog",
    element: <Catalog />,
  },
  {
    path: "/print/offset/fastfood",
    element: <Fastfood />,
  },
  {
    path: "/print/offset/Folder",
    element: <Folder />,
  },
  {
    path: "/print/offset/Pocket",
    element: <Pocket />,
  },
  {
    path: "/print/offset/Paperbag",
    element: <Paperbag />,
  },
  {
    path: "/print/offset/Papercup",
    element: <Papercup />,
  },
  {
    path: "/print/offset/Sarbarg",
    element: <Sarbarg />,
  },
  {
    path: "/print/offset/setedari",
    element: <SetEdari />,
  },
  {
    path: "/print/offset/Visit",
    element: <Visit />,
  },


  {
    path: "/print/digital",
    element: <Digital />,
  },
  {
    path: "/print/sublimation",
    element: <Sublimation />,
  },
  {
    path: "/print/Postprinting ",
    element: <PostPrinting />,
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
