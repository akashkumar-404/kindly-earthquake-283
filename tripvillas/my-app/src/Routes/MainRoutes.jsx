import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Singlehotelpage from "../fw19_0144/pages/singlehotelpage";
import HomePage from "../Homepage_tripVillas/HomePage";
import CheckoutsKasara from "../Tripvillas_Managed/Pages/CheckOutsKasara";
import CheckoutsKeisha from "../Tripvillas_Managed/Pages/CheckoutsKenisha";
import CheckoutsSahapur from "../Tripvillas_Managed/Pages/CheckoutsSahapur";
import CheckoutsTataRio from "../Tripvillas_Managed/Pages/CheckoutsTataRio";
import Managed from "../Tripvillas_Managed/Pages/Managed";
import SingleKenishaHolidayHomes from "../Tripvillas_Managed/Pages/SinglePage-3";
import SingleTataRioDeGoa from "../Tripvillas_Managed/Pages/SinglePage-4";
import SingleWhiteVillasSahapur from "../Tripvillas_Managed/Pages/SinglePage-2"
import SingleWhiteVillasKasara from "../Tripvillas_Managed/Pages/SinglePage"
import Hotel_list_fw19_0144 from "../fw19_0144/pages/hotels";

const MainRoutes = () => {
  let location = useLocation()
  console.log(location);
  let idA = location.pathname.split("/");
  let id = idA[idA.length-1];
  console.log(id);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<Hotel_list_fw19_0144 />} />
      <Route path="/hotel/:id" element={<Singlehotelpage />} />
      <Route path="/tripvillas-managed" element={<Managed />} />
      {id == 1 ? (
        <Route path={`/tripvillas-managed/:id`} element={<SingleTataRioDeGoa />} />
      ) : id == 2 ? (
        <Route
          path="/tripvillas-managed/:id"
          element={<SingleKenishaHolidayHomes />}
        />
      ) : id == 3 ? (
        <Route
          path="/tripvillas-managed/:id"
          element={<SingleWhiteVillasSahapur />}
        />
      ) : id == 4 ? (
        <Route
          path="/tripvillas-managed/:id"
          element={<SingleWhiteVillasKasara />}
        />
      ) : (
        <Route path="/tripvillas-managed/:id" element={<h1>Page Not found</h1>} />
      )}

      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/checkout-kasara" element={<CheckoutsKasara />} />
      <Route path="/checkout-sahapur" element={<CheckoutsSahapur />} />
      <Route path="/checkout-kenisha" element={<CheckoutsKeisha />} />
      <Route path="/checkout-tatario" element={<CheckoutsTataRio />} />
    </Routes>
  );
};

export default MainRoutes;
