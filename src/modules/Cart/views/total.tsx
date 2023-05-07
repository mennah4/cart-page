export const PaymentTotal = () => {
  return (
    <>
      <div className=" h-full w-full mx-2 bg-gray-100 text-black px-2 py-3 rounded-lg text-sm my-6 pr-5">
        <div className="mx-2 w-full flex flex-col gap-2">
          <div className="flex w-full items-center justify-between"><p className="w-full text-gray-400">Subtotal</p><span className="font-bold ml-2"> $37.61</span></div>
          <div className="flex items-center justify-between"><p className="w-full text-gray-400">Discount sales</p><span className="font-bold ml-2"> -$5.5</span></div>
          <div className="flex items-center justify-between"><p className="w-full text-gray-400">Total sales tax</p><span className="font-bold ml-2"> $2.25</span></div>
        </div>
        <div className="my-3 border-dashed border-spacing-6 border-b-2 border-gray-300 ">

        </div>
        <div>
          <div className="mt-3 flex items-center justify-between"><p className="w-full text-black text-xl font-semibold">Total</p><span className="text-black text-xl font-semibold"> $45.25</span></div>
        </div>
      </div>
    </>
  )
}