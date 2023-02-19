import TheHeader from "@/components/navigation/TheHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [sliderData, setSliderData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const resMenu = await axios.get(process.env.NEXT_PUBLIC_MENU_API);
        resMenu.data?.data && setMenuData(resMenu.data.data);

        const resSlider = await axios.get(process.env.NEXT_PUBLIC_SLIDER_API);
        resSlider.data?.data && setSliderData(resSlider.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-w-screen min-h-screen">
      {!loading && <TheHeader menuProps={menuData} sliderProps={sliderData} />}
      <Component {...pageProps} />
    </div>
  );
}
