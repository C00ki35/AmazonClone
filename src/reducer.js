export const basketTotal = (basket) =>
  basket?.reduce(
    (amount, item, quantity) => item.price * item.quantity + amount,
    0
  );

export const initialState = {
  basket: [],
  carousel: [
    {
      title: "Turn the music up!",
      description: "",
    },
    {
      title: "Choose your music",
      description:
        "The world is full of music; why should you have to listen to music someone else chose?",
    },
    {
      title: "Unlimited, streaming, ad-free",
      description: "No arbitrary limits. No distractions.",
    },
    {
      title: "Mobile enabled",
      description:
        "Listen to your music on the go. This streaming service is available on all mobile platforms.",
    },
  ],
  activeIndex: 0,
  user: null,
  basicProducts: [],
  loaded: false,
  products: [],
  viewedProduct: [],
  productLoading: true,
};

const reducer = (state, action) => {
  let newBasket = [...state.basket];
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      if (newBasket.length === 0) {
        return { ...state, basket: [...state.basket, action.payload] };
      }
      if (newBasket.length !== 0) {
        for (let i = 0; i < newBasket.length; i++) {
          if (newBasket[i].id === action.payload.id) {
            console.log(action.payload.id);
            newBasket[i].quantity += 1;
            return { ...state, basket: newBasket };
          }
        }
        return { ...state, basket: [...state.basket, action.payload] };
      }
    case "REMOVE_FROM_BASKET":
      for (let i = 0; i < newBasket.length; i++) {
        if (newBasket[i].id === action.payload.id) {
          newBasket[i].quantity -= 1;
          if (newBasket[i].quantity === 0) {
            newBasket.splice(i, 1);
          } else {
            return { ...state, basket: newBasket };
          }
        }
      }
      return {
        ...state,
        basket: newBasket.filter((item) => item.id !== action.payload.id),
      };
    case "isLoaded": {
      return { ...state, loaded: true, products: action.payload.products };
    }
    case "productLoaded": {
      return {
        ...state,
        productLoading: action.payload.productLoading,
        viewedProduct: action.payload.viewedProduct,
      };
    }
    default:
      return state;
  }
};

export default reducer;
