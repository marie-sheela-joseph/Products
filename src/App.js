import { useReducer, createContext, useEffect, useRef } from "react";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import Table from "./Table";
import "./App.css";
import axios from "axios";
import { urlProducts } from "./api";
import Error from "./Error";
import FilterForm from "./FilterForm";

export const productContext = createContext(null);

const initialState = {
  products: [],
  formData: { title: '', price: 0, description: '', category: '', image: '', rating: 0, count: 0 },
  showEditForm: false,
  editId: 0,
  errorMessage: "",
  isFilterOn: false,
  filteredProducts: [],
  filterFormData: {
    filters: [
      { id: 1, name: "FILTER PRODUCTS LESS THAN 20", selected: false, price: 20 },
      { id: 2, name: "FILTER PRODUCTS LESS THAN 50", selected: false, price: 50 },
      { id: 3, name: "FILTER PRODUCTS LESS THAN 100", selected: false, price: 100 }]
  }
}

const reducer = function (state, action) {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload }
    }
    case "ADD_PRODUCT": return { ...state, products: [...state.products, action.payload] }

    case "DELETE_PRODUCT": return { ...state, products: state.products.filter((product) => product.id !== action.payload) }

    case "LOAD_EDIT_FORM": return { ...state, editId: action.payload, showEditForm: true }

    case "EDIT_PRODUCT": return { ...state, showEditForm: false, products: state.products.map((product) => product.id === state.editId ? action.payload : product) }

    case "SET_ERROR_MESSAGE": return { ...state, errorMessage: action.payload }

    case "RESET_ERROR_MESSAGE": return { ...state, errorMessage: "" }

    case "UPDATE_FILTER_FORM_DATA": return { ...state, filterFormData: { filters: action.payload } }

    case "FILTER_PRODUCTS":
      let selectedFilters = state.filterFormData.filters.filter((x) => x.selected === true)
      let res = [...new Set(selectedFilters.map((filter) => state.products.filter((product) => product.price < filter.price)).flat())]
      return { ...state, filteredProducts: res, isFilterOn: true }

    case "RESET_ALL_FILTERS": return { ...state, isFilterOn: false }

    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const firstRender = useRef(true);
  useEffect(() => {
    axios.get(urlProducts)
      .then(res => {
        dispatch({ type: "SET_PRODUCTS", payload: res.data })
      })
      .catch(err => dispatch({ type: "SET_ERROR_MESSAGE", payload: err.message }))
  }, []);
  useEffect(() => {
    if (firstRender.current === false) {
      dispatch({ type: "FILTER_PRODUCTS" })
    }
    else {
      firstRender.current = false
    }
  }
    , [state.filterFormData.filters])
  return (
    <section>
      <div>
        <h1 className="center">useReducer + useContext + json-server - Create, Read, Update, Delete, Filter Products</h1>
        <productContext.Provider value={dispatch}>
          {state.errorMessage && <Error message={state.errorMessage} />}
          <AddForm />
          {state.showEditForm && <EditForm product={state.products.find((product) => product.id === state.editId)} />}
          <FilterForm filterFormData={state.filterFormData} />
          {state.isFilterOn ? <Table products={state.filteredProducts} /> : <Table products={state.products} />}
        </productContext.Provider>

      </div>
    </section>
  );
}
export default App;
