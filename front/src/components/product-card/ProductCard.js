import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { URL_IMAGES } from "../../constants/Api";
import { setCart } from "../../redux/actions/cart";
import "./ProductCard.scss";
import { addUnits } from "../../utils/cart";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const { name, price, image, countInStock } = item;

  const addCart = (item) => {
    const searchItem = cart.find((i) => i._id === item._id);
    if (searchItem === undefined) {
      dispatch(setCart([...cart, { ...item, quantity: 1 }]));

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        inputLabel: "Message",
        title: `Producto: <br>${item.name}<br>Agregado Correctamente`,
      });
    } else {
      dispatch(setCart(addUnits(cart, item)));

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "info",
        title: "Ya agregaste este producto",
      });
    }
  };

  return (
    <div className="product-cart">
      <img src={`${URL_IMAGES}${image}`} alt={image} width={200} />
      <h3 className="product-cart__text">{name}</h3>
      <p className="product-cart__price">{`$${price}`}</p>
      {countInStock ? (
        <button className="product-cart__addCart" onClick={() => addCart(item)}>
          <i className="bx bxs-cart-add" />
        </button>
      ) : (
        <span>Sin existencia</span>
      )}
    </div>
  );
};

export default ProductCard;
