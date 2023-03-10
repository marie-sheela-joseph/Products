import { useState, useContext } from "react";
import { productContext } from "./App";
import axios from "axios";
import { urlProducts } from './api';

function AddForm() {
    const [state, setState] = useState({
        product: { title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } }
    });
    const dispatch = useContext(productContext);
    const handleSubmit = function (e) {
        e.preventDefault();
        axios.post(urlProducts, state.product)
            .then(res => {
                console.log(res)
                dispatch({ type: "ADD_PRODUCT", payload: res.data })
            })
            .catch(err => dispatch({ type: "SET_ERROR_MESSAGE", payload: err.message }))
    }
    const clearForm = function () {
        setState((prevState) => { return { ...prevState, product: { title: '', price: 0, description: '', category: '', image: '', rating: { rate: 0, count: 0 } } } })
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="center">ADD PRODUCT</h2>
                <div>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type={"text"}
                        name="title"
                        id="title"
                        value={state.product.title}
                        required
                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="price">PRICE</label>
                    <input
                        type={"text"}
                        name="price"
                        id="price"
                        value={state.product.price}
                        required
                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="description">DESCRIPTION</label>
                    <input
                        type={"text"}
                        name="description"
                        id="description"
                        value={state.product.description}

                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="category">CATEGORY</label>
                    <input
                        type={"text"}
                        name="category"
                        id="category"
                        value={state.product.category}

                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="image">IMAGE</label>
                    <input
                        type={"text"}
                        name="image"
                        id="image"
                        value={state.product.image}

                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="rate">RATE</label>
                    <input
                        type={"text"}
                        name="rate"
                        id="rate"
                        value={state.product.rating.rate}
                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, rating: { ...prevState.product.rating, [e.target.name]: e.target.value } } } })}
                    />
                </div>
                <div>
                    <label htmlFor="count">COUNT</label>
                    <input
                        type={"text"}
                        name="count"
                        id="count"
                        value={state.product.rating.count}
                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, rating: { ...prevState.product.rating, [e.target.name]: e.target.value } } } })}
                    />
                </div>
                <button type="submit">ADD</button>
                <button type="reset" onClick={clearForm}>RESET</button>
            </form>
        </div>
    );
}
export default AddForm;