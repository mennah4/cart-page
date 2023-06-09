import FilterIcon from "../../../assets/icons/filter"

export const Search = () => {
  return (
    <>
      <div className="flex w-full gap-3 items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="voice-search" className="h-10 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5" placeholder="Search product..." required />
        </div>
        <button className="flex items-center h-10 w-12 mx-1 justify-center rounded-lg p-1 text-sm font-medium bg-gray-50 hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <FilterIcon />
        </button>
      </div>
    </>
  )
}