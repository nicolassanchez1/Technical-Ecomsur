/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckboxItem from "../checkbox-item/CheckboxItem";
import { getProducts } from "../../redux/actions/products";
import ProductCard from "../product-card/ProductCard";

import "./ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  

  const { products } = useSelector((state) => state.products);

  // const data = products.filter((item) => {
  //   let brand = item.brand;

  //   console.log(brand)
  //   // let Newbrand = [];

  //   // if (!Newbrand.includes(brand)) {
  //   //   Newbrand.push(brand);
  //   // }
  //   // console.log("la data", Newbrand);

  // });

  return (
    <>
      <div className="product-list">
        <div className="product-list__filter">
          <h4 className="product-list__filter-text">Tipo de Producto</h4>
          <div className="product-list__filter-checkbox">
            {products.map((item) => (
              <CheckboxItem key={item._id} name={item.name} />
            ))}
          </div>

          {/* <h4 className="product-list__filter-text">Marca</h4> */}
          <div className="product-list__filter-checkbox">
            {/* {
            products.filter( item => {
                console.log(item.brand)
              if(item.brand){
                // console.log( 'este' ,item.brand)
              }else{
                console.log('no cayo')
              }

              const newData = item.brand
              // console.log('Desde la new',newData)
            })
          } */}
            {/* {products.filter((item) =>)} */}
          </div>
        </div>

        <div className="product-list__cart">
          <div className="product-list__cart-filter">
            <span className="product-list__cart-filter__text">{products.length} Articulos</span>
            <select className="product-list__cart-filter__select" name="category" id="category">
              <option defaultValue>All</option>
              <option value="relevancia">Relevancia </option>
              <option value="raiting">Raiting</option>
            </select>
          </div>
          <div className="product-list__cart-content">
            {products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
