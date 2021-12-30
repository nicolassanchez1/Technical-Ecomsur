import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { URL_IMAGES } from "../../constants/Api";
import { setCart } from "../../redux/actions/cart";
import "./Cart.scss";
import { addUnits } from "../../utils/cart";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotal = (products) => {
    const total = products
      .reduce(
        (total, product) => (total += product.price * product.quantity),
        0
      )
      .toFixed(3);
    return total;
  };

  const deleteItem = (product) => {
    Swal.fire({
      text: "¿Seguro que desea eliminar este artículo del carrito de la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = cart.filter((item) => item._id !== product._id);
        dispatch(setCart(newData));
      }
    });
  };

  const removeUnits = (product) => {
    let newData = [];
    if (product.quantity > 1) {
      newData = cart.map((item) => ({
        ...item,
        quantity: item.quantity - (item._id === product._id ? 1 : 0),
      }));
    } else {
      newData = cart.filter((item) => item._id !== product._id);
    }
    dispatch(setCart(newData));
  };

  return (
    <>
      <div className="cart">
        {cart.length ? (
          <>
            {cart.map((item, i) => (
              <div key={i} className="cart-content">
                <div className="cart__item">
                  <img src={`${URL_IMAGES}${item.image}`} alt="" width={50} />
                  <div className="cart__item-info">
                    <span>{item.name}</span>
                    <span className="cart__item-info__price">
                      ${item.price}
                    </span>
                    <div className="cart__item-info-quantity">
                      <div className="cart__item-info-quantity btn">
                        <div
                          className="cart__item-info-quantity__more"
                          onClick={() => removeUnits(item)}
                        >
                          <span className="text-btn">-</span>
                        </div>
                        <span className="text-btn">{item.quantity}</span>
                        <div
                          className="cart__item-info-quantity__more"
                          onClick={() =>
                            dispatch(setCart(addUnits(cart, item)))
                          }
                        >
                          <span className="text-btn">+</span>
                        </div>
                      </div>
                      <div
                        className="cart__item-info-deleted"
                        onClick={() => deleteItem(item)}
                      >
                        <i className="bx bx-trash pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className="cart__subtotal">
              Subtotal:
              <span className="cart__subtotal-numb"> ${getTotal(cart)}</span>
            </p>
            <button className="cart__pedidoBtn">Realizar Pedido</button>
          </>
        ) : (
          <p className="cart__texts">
            No tienes ningún artículo en tu carrito.
          </p>
        )}
        <p className="cart__textShopping">Continar comprando</p>
        <h3 className="cart__textSend">El envío es GRATIS</h3>
      </div>
    </>
  );
};

export default Cart;
