import { useState, useEffect } from "react"
import { api } from "../../../api/axios"

export const useGetPedido = (pedidoId) => {

    const[pedido, setPedido] = useState([])

    useEffect(() => {
      (
        async() => {
          const res = await api.get(`pedido/${pedidoId}`)
          const {data} = res
    
          setPedido(data)
        }
      )()  
    },[pedidoId])


  return {
    pedido
  }
}
