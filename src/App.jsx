import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Home from "./pages/home";
import Photo from "./pages/Photo";
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
import Design from "./pages/design";
import Stamp from "./pages/stamp";
import Flag from "./pages/Flag"
import Print from "./pages/print"
import Sublimation from "./pages/printPages/sublimation"
import Digital from "./pages/printPages/digital"
import PostPrinting from "./pages/printPages/Postprinting"
import Silk from "./pages/printPages/Silk"
import Offset from "./pages/printPages/offset"
import Teraket from "./pages/printPages/offsetPages/Teraket"
import Brochure from "./pages/printPages/offsetPages/brochure"
import Fastfood from "./pages/printPages/offsetPages/fastfood"
import Folder from "./pages/printPages/offsetPages/folder"
import Pocket from "./pages/printPages/offsetPages/packet"
import Paperbag from "./pages/printPages/offsetPages/paperbag"
import Papercup from "./pages/printPages/offsetPages/papercup"
import Sarbarg from "./pages/printPages/offsetPages/sarbarg"
import Visit from "./pages/printPages/offsetPages/visit"
import SetEdari from "./pages/printPages/offsetPages/setEdari";
import Poster from "./pages/printPages/offsetPages/Poster";
import Invoice from "./pages/printPages/offsetPages/Invoice";
import OffsetLabel from "./pages/printPages/offsetPages/label";
import Packaging from "./pages/Packaging";
import FabricBag from "./pages/Fabric";
import Gallery from "./pages/gallery";
import Laser from "./pages/Laser";
import Engraving from "./pages/laserPages/engraving";
import Tablo from "./pages/laserPages/Tablo";
import PlasticBag from "./pages/PlasticBag";
import Curtain from "./pages/printPages/Curtain";
import HardBox from "./pages/hardbox";
import Boresh from "./pages/laserPages/Boresh"
import Stand from "./pages/Stand";
import Flask from "./pages/giftPages/Flask"
import Branding from "./pages/Branding"
import JewerlyBox from "./pages/JewerlyBox";
import Poyesh from "./pages/poyesh";
import Videomotion from "./pages/Videomotion";
import Saze from "./pages/saze"
import UniqueLabel from "./pages/printPages/uniqueLabel";
import Flasko from "./pages/printPages/Flasko"
import Roll from "./pages/roll";
import Sheet from "./pages/Sheet";
import FoodPocket from "./pages/printPages/foodPocket";
import Foam from "./pages/printPages/foam";
import OOH from "./pages/OOH";
import Billboard from "./pages/Billboard";
import Tandis from "./pages/giftPages/Tandis";
import ShrinkLabel from "./pages/printPages/ShrinkLabel"
import FastPrint from "./pages/printPages/FastPrint";
import Box from "./pages/Box";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ooh",
    element: <OOH />,
  },
  {
    path: "/ooh/billboard",
    element: <Billboard />,
  },
  {
    path: "/poyesh",
    element: <Poyesh />,
  },
  {
    path: "/saze",
    element: <Saze />,
  },
  {
    path: "/Branding",
    element: <Branding />,
  },
  {
    path: "/website",
    element: <Website />,
  },
  {
    path: "/laserandsign",
    element: <Laser />,
  },
  {
    path: "/laserandsign/engraving",
    element: <Engraving />,
  },
  {
    path: "/laserandsign/tablo",
    element: <Tablo />,
  },
  {
    path: "/laserandsign/boresh",
    element: <Boresh />,
  },
  {
    path: "/laserandsign/stand",
    element: <Stand />,
  },
  {
    path: "/social",
    element: <Social />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/stamp",
    element: <Stamp />,
  },
  {
    path: "/flag",
    element: <Flag />,
  },
  {
    path: "/packaging",
    element: <Packaging />,
  },
  {
    path: "/photo",
    element: <Photo />,
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
    path: "/gift/tandis",
    element: <Tandis />,
  },
  {
    path: "/gift/flask",
    element: <Flask />,
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
    path: "/packaging/bag",
    element: <FabricBag />
  },
  {
    path: "/packaging/plasticbag",
    element: <PlasticBag />
  },
  {
    path: "/packaging/hardbox",
    element: <HardBox />
  },{
    path: "/packaging/box",
    element: <Box />
  },
  {
    path: "/packaging/jewerlybox",
    element: <JewerlyBox />
  },



  {
    path: "/gift/powerbank",
    element: <Powerbank />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/videomotion",
    element: <Videomotion />,
  },


  //خدمات پرینت
  {
    path: "/print",
    element: <Print />,
  },
  {
    path: "/print/uniquelabel",
    element: <UniqueLabel />,
  },
  {
    path: "/print/shrinklabel",
    element: <ShrinkLabel />,
  },
  {
    path: "/print/foam&mdf",
    element: <Foam />,
  },
  {
    path: "/print/curtain",
    element: <Curtain />,
  },
  {
    path: "/print/offset",
    element: <Offset />,
  },
  {
    path: "/print/flakso",
    element: <Flasko />,
    children: [
      { path: "roll", element: <Roll /> },
      { path: "sheet", element: <Sheet /> },
    ],
  },


  {
    path: "/print/foodpocket",
    element: <FoodPocket />,
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
    path: "/print/offset/poster",
    element: <Poster />,
  },
  {
    path: "/print/offset/invoice",
    element: <Invoice />,
  },
  {
    path: "/print/offset/offsetlabel",
    element: <OffsetLabel />,
  },


  {
    path: "/print/fastprint",
    element: <FastPrint />,
  },
  {
    path: "/print/digital",
    element: <Digital />,
  },
  {
    path: "/print/silk",
    element: <Silk />,
  },

  {
    path: "/print/sublimation",
    element: <Sublimation />,
  },
  {
    path: "/print/postprint",
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
