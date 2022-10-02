import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData_fp03_063 } from "../../Redux/AppReducer/action";
import About from "../Components/About";
import CurrOpp from "../Components/Curr_opportunity";
import Provides from "../Components/Provides";
import QandA from "../Components/QandA";
import FooterBlack from "../Components/BlackFooter";
import Navbar from "../../Homepage_tripVillas/Components/Navbar/Navbar";

export default function Managed() {
  const data = useSelector((state) => state.AppReducer.hotels_fw19_0144);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData_fp03_063());
  }, []);
  return (
    <>
    <Navbar />
      <About />
      <Provides />
      <QandA />
      {data.length > 0 &&
        data.map((item) => {

          return <CurrOpp key={item.id} data={item} />;
        })}

      <FooterBlack />
    </>
  );
}
