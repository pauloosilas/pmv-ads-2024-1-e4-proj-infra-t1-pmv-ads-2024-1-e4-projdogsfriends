import { Link } from "react-router-dom";
import { Card } from "../../../components/client/Card";

const Container = ({user, children}) => {
     console.log(user)
    return (
      <>
      {/* <header className=" bg-white w-full fixed z-10">
              <div className="flex py-6 border-b-gray-200 border-b-[1px] shadow-sm justify-center">
                <span>logo</span>
              </div>
                
        </header>  */}
  
      <div className=" flex md:flex-row flex-col sm:px-12 lg:px-24 2xl:px-72 w-full text-zinc-700">
       
        <section id="aside-menu" className="lg:w-80 flex flex-col items-center gap-2 bg-zinc-50 rounded-lg h-[100vh]">      
         <div className="p-5">
            
         </div>
          <div className="flex flex-col gap-10">
             <Card client={user} perfil={true}/>
             <div className="flex flex-col">
                <Link to={"http://localhost:3001/user/dashboard"}>Dashboard</Link>  
                <Link to={"http://localhost:3001/user/dashboard/pedidos"}>Meus Pedidos</Link>  
             </div>
          </div>
      
        </section>
  
        <main className="w-full h-full">
          <div className="p-6">
            <div className="w-full mb-6">
              <span>Perfil</span>
            </div>
  
  
            <div className="flex flex-col w-full gap-8">
                {
                  children
                }   
            </div>
          </div>
        </main>
      </div>
  
 
      </>
    );
  };
  
  export default Container;
  