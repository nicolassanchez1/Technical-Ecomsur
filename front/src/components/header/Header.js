import React, { useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import { ITEMS_NAV } from "./index";
import "./Header.scss";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputSearch from "../input-search/InputSearch";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const [search, setSearch] = useState(false);
  const [modalCart, setModalCart] = useState(false);

  const handleClick = () => {
    setSearch(!search);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="../../../assets/img/logo.svg" alt="logo" />
          </Link>
        </div>
        {search ? (
          <div className="header__search">
            <InputSearch />
          </div>
        ) : (
          <nav className="header__navigation">
            {ITEMS_NAV.map((item, index) => (
              <div className="header__navigation-item pointer" key={index}>
                <span className="header__navigation-item__text" key={index}>
                  {item.name}
                </span>
                <img
                  src="../../../assets/img/select-bg.svg"
                  className="header__navigation-item__select"
                  alt="select-bg.svg"
                />
              </div>
            ))}
          </nav>
        )}

        <div className="header__information">
          {!search && (
            <div className="header__information-store">
              <img src="../../../assets/img/tiendas.svg" alt="store" />
              <span className="header__information-store__text">Tiendas</span>
            </div>
          )}

          <div className="header__information-user">
            {search ? (
              <div
                className="header__information-user-hide pointer"
                onClick={handleClick}
              >
                <span className="bold">X</span>
              </div>
            ) : (
              <i
                className="bx bx-search header__information-user__icon pointer"
                onClick={handleClick}
              />
            )}

            <div className="relative">
              <i
                className="bx bx-cart header__information-user__icon pointer"
                onClick={() => setModalCart(!modalCart)}
              />
              <div className="ball">
                <span className="ball__numb">{cart.length}</span>{" "}
              </div>
            </div>
            <i className="bx bx-user header__information-user__icon pointer" />
          </div>
        </div>
      </header>
      {modalCart && (
        <div className="cart__content">
          <Cart />
        </div>
      )}
      <BreadCrumbs />
    </>
  );
};

export default Header;
