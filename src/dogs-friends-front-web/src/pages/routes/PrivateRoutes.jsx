import {Routes, Route} from "react-router-dom"

import  {Passeador, Pesquisa}  from "../index.js"

import Home from "../Dashboard/Home/Home.jsx"
import Profile from "../Dashboard/Profile/Profile.jsx"
import Historico from "../Dashboard/Pedidos/Historico.jsx"
import Pedido from "../Dashboard/Pedidos/Pedido.jsx"
 

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="pesquisa" element={<Pesquisa />} />
        <Route path="passeador/:passeadorId" element={<Passeador />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="dashboard/pedidos" element={<Historico />} />
        <Route path="dashboard/pedidos/:pedidoId" element={<Pedido />} />
        <Route path="dashboard/profile" element={<Profile />} />
    </Routes>
  )
}
