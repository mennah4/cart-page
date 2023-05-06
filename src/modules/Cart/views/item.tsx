import { useDispatch } from "react-redux";
import TrollyIcon from "../../../assets/icons/trolley";

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  const { image,  name, price, description } = product;
  return (
    <div className="w-full flex-col bg-white rounded-lg px-4 py-3" id="product__card">
      <div className="rounded-2xl relative flex cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full max-h-[200px] rounded-lg"
        />

        <div
          className="cart-btn p-2 absolute top-3 right-3 bg-white/80 text-orange-500 rounded-md"
          onClick={() => {
            // dispatch(add(product));
            // navigate("/cart");
          }}
        >
          <TrollyIcon />
        </div>
      </div>

      <div className="py-2 flex w-full justify-between">
        <p className="font-bold text-lg line-clamp-2">{name}</p>
      </div>
      <p className="py-2 text-[grey] w-[200px] text-xs line-clamp-3">{description}</p>

      <p className="pt-2 font-[600] text-orange-500 text-xl">${price}
      <span className="text-[grey] text-sm" > / 3 pcs</span>
      </p>
      
    </div>
  );
};

export default CartItem;
