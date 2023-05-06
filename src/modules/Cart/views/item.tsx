import { useDispatch } from "react-redux";
import TrollyIcon from "../../../assets/icons/trolley";

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  const { image,  name, price, description } = product;
  return (
    <div className="flex flex-col bg-gray-50 rounded-lg py-2" id="product__card">
      <div className=" rounded-2xl p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
        <img
          src={image}
          alt={name}
          className="h-[200px] w-[200px] object-contain rounded-lg"
        />

        <div
          className="cart-btn absolute top-3 right-8 p-1 text-[28px] bg-white/50 text-orange-500 rounded-[0.3rem] hover:bg-primaryColor hover:text-white"
          onClick={() => {
            // dispatch(add(product));
            // navigate("/cart");
          }}
        >
          <TrollyIcon />
        </div>
      </div>

      <div className="mx-4 pt-2 flex w-full justify-between">
        <p className="font-bold text-lg">{name}</p>
      </div>
      <p className="mx-4 text-[grey] w-[200px] text-sm">{description}</p>

      <p className="mx-4 font-[600] text-orange-500">${price}</p>
    </div>
  );
};

export default CartItem;
