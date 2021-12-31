import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { URL_IMAGES } from "../../constants/Api";
import { setCart } from "../../redux/actions/cart";
import { addCart } from "../../utils/cart";
import { Rating } from "../../components/rating/Rating";
import "./ProductDescription.scss";

const ProductDescription = () => {
  const { product } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { name, image, price, description, countInStock, rating } = product;

  return (
    <div className="product">
      <div className="product__img">
        <img src={`${URL_IMAGES}${image}`} alt={image} width={900} />
      </div>
      <div className="product__description">
        <span className="product__description-name">{name}</span>
        <span className="product__description-price">{`$${price}`}</span>
        <Rating rating={rating} />

        {!countInStock && (
          <span className="product__description-stock">Agotado</span>
        )}
        <span className="product__description-description">{description}</span>
        {countInStock ? (
          <>
            <button
              className="cart__pedidoBtn"
              onClick={() => addCart(product, cart, dispatch, setCart)}
            >
              Agregar al Carrito
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDescription;
