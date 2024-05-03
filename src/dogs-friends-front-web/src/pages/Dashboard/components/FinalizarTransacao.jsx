
export const FinalizarTransacao = ({passeioId}) => {
  return (
    <div className="flex flex-col">
      <span>
         Clicando em finalizar, você confirma que os serviços foram atendidos conforme o esperado.
      </span>
     <div className="flex justify-end w-full">
      <button className="flex justify-center items-center font-semibold bg-blue-200 px-6 py-2 w-32 rounded">
          Finalizar
      </button>
     </div>
    </div>
  )
}
