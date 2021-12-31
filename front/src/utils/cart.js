import Swal from "sweetalert2";

export const addUnits = (data, product) => {
  if (product.quantity < product.countInStock) {
    return data.map((item) => ({
      ...item,
      quantity: item.quantity + (item._id === product._id ? 1 : 0),
    }));
  }else{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "info",
      title: "Llegaste al stock maximo de este producto",
    });
  }
  return data;
};

export const getTotal = (products) => {
  const total = products
    .reduce(
      (total, product) => (total += product.price * (product.quantity || 1)),
      0
    )
    .toFixed(3);
  return total;
};

export const addCart = (item, cart, dispatch, setCart) => {
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
    const currentItem = cart?.find((ele) => ele._id === item._id);
    dispatch(setCart(addUnits(cart, currentItem)));
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
