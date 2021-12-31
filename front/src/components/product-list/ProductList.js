/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckboxItem from "../checkbox-item/CheckboxItem";
import { getProducts, setCheckedItems } from "../../redux/actions/products";
import ProductCard from "../product-card/ProductCard";
import { getCheckboxItems, sortArray } from "../../utils/products";
import "./ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, checkedItems } = useSelector((state) => state.products);
  const [data, setData] = useState(products);
  const [option, setOption] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setData(getDataFiltered().length ? getDataFiltered() : products);
  }, [checkedItems]);

  const getDataFiltered = () => {
    const filterKeys = ["name", "brand"];
    return products.filter((product) =>
      filterKeys.some((key) => checkedItems?.includes(product[key]))
    );
  };

  const handleCheckedItems = ({ target }) => {
    const { name } = target;
    const items = target.checked
      ? [...checkedItems, name]
      : checkedItems?.filter((item) => item !== name);
    dispatch(setCheckedItems(items));
  };

  const handleChangeSelect = ({ target }) => {
    const option = target.value;
    setOption(option);
    setData(option === "all" ? products : sortArray([...products], option));
  };

  return (
    <div className="product-list">
      <div className="product-list__filter">
        <h4 className="product-list__filter-text">Tipo de Producto</h4>
        <div className="product-list__filter-checkbox">
          {getCheckboxItems(products, "name").map((item) => (
            <CheckboxItem
              key={item}
              name={item}
              checked={checkedItems?.includes(item)}
              onChange={handleCheckedItems}
            />
          ))}
        </div>

        <h4 className="product-list__filter-text">Marca</h4>
        <div className="product-list__filter-checkbox">
          {getCheckboxItems(products, "brand").map((item) => (
            <CheckboxItem
              key={item}
              name={item}
              checked={checkedItems?.includes(item)}
              onChange={handleCheckedItems}
            />
          ))}
        </div>

        <h4 className="product-list__filter-text">Categoría</h4>
        <div className="product-list__filter-checkbox">
          {getCheckboxItems(products, "category").map((item) => (
            <CheckboxItem
              key={item}
              name={item}
              checked={checkedItems?.includes(item)}
              onChange={handleCheckedItems}
            />
          ))}
        </div>
      </div>

      <div className="product-list__cart">
        <div className="product-list__cart-filter">
          <span className="product-list__cart-filter__text">
            {data.length} Artículo{`${data.length > 1 ? "s" : ""}`}
          </span>
          <select
            className="product-list__cart-filter__select pointer"
            onChange={handleChangeSelect}
            value={option}
          >
            <option value="all">All</option>
            <option value="numReviews">Relevancia </option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="product-list__cart-content">
          {data.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
