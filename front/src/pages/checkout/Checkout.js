import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import { URL_IMAGES } from "../../constants/Api";
import { getTotal } from "../../utils/cart";
import "./Checkout.scss";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="checkout">
      <div className="checkout__form">
        <div className="checkout__form-logo">
          <img src="../../../assets/img/logo.svg" alt="logo" width={250} />
        </div>
        <div className="checkout__form-progress">
          <Link to="/">
            <span className="breadcrumbs__text bold grey">Carrito</span>
          </Link>
          <i className="bx bx-chevron-right breadcrumbs__icon" />
          <span className="breadcrumbs__text bold grey-2">1.Entrega</span>
          <i className="bx bx-chevron-right breadcrumbs__icon" />
          <span className="breadcrumbs__text">2.Pago</span>
        </div>
        <h3 className="grey-2 bold">Dirección Principal</h3>
        <div className="checkout__form-data">
          <Form />
        </div>
      </div>
      <div className="checkout__products">
        {cart.map((product, i) => (
          <div key={i} className="checkout__products-information">
            <div className="checkout__products-information-img">
              <img src={`${URL_IMAGES}${product.image}`} alt="" width={40} />
            </div>
            <div className="checkout__products-information-descrip">
              <span className="checkout__products-information-descrip__name">
                {product.name}
              </span>
              <span className="checkout__products-information-descrip__code">
                Codigo de producto: <span className="ligth">{product._id}</span>
              </span>
              <span className="checkout__products-information-descrip__code">
                Cantidad: <span className="ligth">{product.quantity}</span>
              </span>
              <span className="checkout__products-information-descrip__price">{`$${
                product.price * product.quantity
              }`}</span>
            </div>
          </div>
        ))}
        <div className="checkout__products-subtotal">
          <span className="checkout__products-information-descrip__code">
            Subtotal:
          </span>
          <span className="checkout__products-information-descrip__code">
            {`$${getTotal(cart)}`}
          </span>
        </div>
        <div className="checkout__products-subtotal">
          <span className="checkout__products-information-descrip__code">
            Impuestos:
          </span>
          <span className="checkout__products-information-descrip__code">
            $0
          </span>
        </div>
        <div className="checkout__products-subtotal">
          <span className="checkout__products-information-descrip__code">
            Costo - Entrega a Domicilio GRATIS:
          </span>
          <span className="checkout__products-information-descrip__code">
            $0
          </span>
        </div>
        <div className="checkout__products-total">
          <span className="checkout__products-information-descrip__code total">
            Total del Pedido
          </span>
          <span className="checkout__products-information-descrip__code total-num">
            {`$${getTotal(cart)}`}
          </span>
        </div>
        <div className="checkout__products-btn">
          <button className="cart__pedidoBtn">Finalizar Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
