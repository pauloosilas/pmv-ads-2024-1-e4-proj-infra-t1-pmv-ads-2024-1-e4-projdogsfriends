import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { AuthRouters, Login } from "../pages/Auth"
import { PrivateRoutes } from "../pages/routes/PrivateRoutes"
import { useDispatch, useSelector } from "react-redux"
import { tryLoginWithToken } from "../store/slices/auth"
import { useEffect } from "react"
import { Teste } from "../pages/teste/teste"
 

export const Router = () => {

  const {user, token, isLogged} = useSelector(state => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    if(token === null)
    dispatch(tryLoginWithToken(token))
  },[token])

  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="auth/*" element={<AuthRouters />} />

        <Route path="teste/" element={<Teste />} />

        {/*Rotas privadas*/}
        
        <Route path="user/*" element={isLogged ? <PrivateRoutes /> : <Login />} />
    </Routes>
  )
}
