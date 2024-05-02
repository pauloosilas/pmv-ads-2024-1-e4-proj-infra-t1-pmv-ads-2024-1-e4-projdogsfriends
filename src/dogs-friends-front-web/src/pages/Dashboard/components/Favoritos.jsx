import { Card } from "./Card"

export const Favoritos = ({favoritos}) => {
  console.log(favoritos)
  if(favoritos.length == 0) return ( <></>)
  
  return (
    <div>
        <div>
            <span>Meus Favoritos</span>
        </div>
        <div className="flex flex-row gap-2">
            <div className=" grid grid-cols-3">
                {
                   
                favoritos.map(favorito => (
                    <div className="col-span-1">
                        <Card favorito={favorito}/>
                     </div>
                 ))
                  
                }
            </div>
        </div>
    </div>
  )
}
