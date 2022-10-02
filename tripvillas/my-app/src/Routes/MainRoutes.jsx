import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hotel_list_fw19_0144 from '../fw19_0144/pages/hotels'
import Singlehotelpage from '../fw19_0144/pages/singlehotelpage'
import HomePage from '../Homepage_tripVillas/HomePage'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Hotel_list_fw19_0144 />} />
        <Route path="/hotels/:id" element={<Singlehotelpage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default MainRoutes