import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_IMAGES } from "../../constants/Api";
import { setCart } from "../../redux/actions/cart";
import { addCart } from "../../utils/cart";
import { Link } from "react-router-dom";
import { setProduct } from "../../redux/actions/products";
import { Rating } from "../rating/Rating";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const { name, price, image, countInStock, rating } = item;

  return (
    <div className="product-cart">
      <Link
        to={`/product/${item._id}`}
        onClick={() => dispatch(setProduct(item))}
      >
        <img className="product-cart-img" src={`${URL_IMAGES}${image}`} alt={image} width={200} />
      </Link>
      <h3 className="product-cart__text">{name}</h3>
      <Rating rating={rating} />
      <p className="product-cart__price">{`$${price}`}</p>
      {countInStock ? (
        <button
          className="product-cart__addCart"
          onClick={() => addCart(item, cart, dispatch, setCart)}
        >
          <i className="bx bxs-cart-add" />
        </button>
      ) : (
        <span className="product__description-stock min">Agotado</span>
      )}
    </div>
  );
};

export default ProductCard;

