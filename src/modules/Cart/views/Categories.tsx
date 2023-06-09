import IcecreamIcon from "../../../assets/icons/coffee"
import CroissantIcon from "../../../assets/icons/croissant"
import CoffeeIcon from "../../../assets/icons/icecream"
import SignatureIcon from "../../../assets/icons/signature"
import WaffleIcon from "../../../assets/icons/waffle"

export const Categories = () => {
  return (
    <>

      <div className="flex gap-2 rounded-md my-3 py-3 justify-start">
        <button type="button" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border shadow-sm rounded-lg ">
          <SignatureIcon />
          Signature
        </button>
        <button type="button" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border shadow-sm rounded-lg ">
          <CoffeeIcon />
          Coffee
        </button>
        <button type="button" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border shadow-sm rounded-lg ">
          <WaffleIcon />
          Waffle
        </button>
        <button type="button" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 border  rounded-lg ">
          <CroissantIcon />
          Croissent
        </button>
        <button type="button" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border shadow-sm rounded-lg ">
          <IcecreamIcon />
          Ice cream
        </button>
      </div>

    </>
  )
}