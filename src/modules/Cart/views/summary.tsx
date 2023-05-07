export const CartSummary = () => {
  return (
    <>
      <div className="flex items-center px-2 py-5 rounded-lg">
        <div className="flex w-full rounded-lg">
          <div className="w-36">
            <img className="h-24 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5w5GHVgYsOeLS0uzEU__2WPD9igNhKghLlg&usqp=CAU" alt="" />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="py-2 flex w-full justify-between">
              <p className="font-bold text-lg line-clamp-2">Plain Croissant</p>
            </div>
            <div className="-pt-3 flex justify-between items-center">
              <p className="font-[600] text-orange-500 text-xl">$3.2</p>
              <div className="flex items-center gap-2">
                <button className="text-white flex items-center justify-center h-4 w-4 rounded-md p-3 text-sm font-medium bg-orange-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">+</button>
                1
                <button className="text-white flex items-center justify-center h-4 w-4 rounded-md p-3 text-sm font-medium bg-orange-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-2 py-5 rounded-lg">
        <div className="flex w-full rounded-lg">
          <div className="w-36">
            <img className="h-24 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5w5GHVgYsOeLS0uzEU__2WPD9igNhKghLlg&usqp=CAU" alt="" />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="py-2 flex justify-between">
              <p className="font-bold text-lg line-clamp-2">Plain Croissant</p>
            </div>
            <div className="-pt-3 flex justify-between items-center">
              <p className="font-[600] text-orange-500 text-xl">$3.2</p>
              <div className="flex items-center gap-2">
                <button className="text-white flex items-center justify-center h-4 w-4 rounded-md p-3 text-sm font-medium bg-orange-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">+</button>
                1
                <button className="text-white flex items-center justify-center h-4 w-4 rounded-md p-3 text-sm font-medium bg-orange-200  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}