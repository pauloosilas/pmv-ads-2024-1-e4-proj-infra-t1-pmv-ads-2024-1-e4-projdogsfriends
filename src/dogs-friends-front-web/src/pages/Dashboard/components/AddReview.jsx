import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useGetPasseio } from "../hooks";

export const AddReview = ({passeioId}) => {
  const [nota, setNota] = useState(5)
  const {passeio} = useGetPasseio(passeioId)
  const [comentario, setComentario] = useState('')

  const ViewNota = () => {
    return (
    <div className="flex">
      {
        Array.apply(0, Array(5)).map(function (x, i) {
          return (
            <div key={i} className="cursor-pointer"
              onMouseOver={ () => setNota(nota => i+1)}>
            { 
              (nota < i+1)
                  ? 
                <div><FaRegStar /></div> 
                  : 
                <div className="text-yellow-500"><FaStar /></div> }
           </div>
          )
        })
      }
    </div>
    )
  }


  return (
   <>
    {
      passeio ?
        (
          <div>
          <form className="flex flex-col">
  
              <div className="flex">
                <ViewNota /> <span>{ nota }</span>
              </div>
              <textarea 
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                rows={5} />
  
              <button>Add Review</button>
          </form>
          { comentario }
      </div>
    )
      
      :
      (<div></div>)
    }
   
   </>
  )
}
