export const LoadMoreData = ({onClick, loading}: {onClick: any, loading: boolean}) => {
  return (
    <div className="grid justify-items-center mt-8 ">
        <button
            type="button"
            className="w-1/6 h-10 bg-blue-400 text-white rounded-lg text-base hover:bg-blue-700 justify-center w-80 inline-flex rounded-md border shadow-sm px-4 py-2 sm:w-auto  "
            onClick={onClick}
        >
            {loading? "Cargando" :"Cargar Más Pokémones" }
        </button>
    </div>
  )
}
