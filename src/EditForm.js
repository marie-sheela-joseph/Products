import { useState, useContext } from "react";
import { productContext } from "./App";
import axios from "axios";
import { urlProducts } from "./api";

function EditForm({ product }) {
    const [state, setState] = useState({ product: product });
    const dispatch = useContext(productContext);
    const handleSubmit = function (e, newproduct) {
        e.preventDefault();
        axios.patch(urlProducts + '/' + newproduct.id, newproduct)
            .then(res => {
                dispatch({ type: "EDIT_PRODUCT", payload: res.data })
            })
            .catch(err => dispatch({ type: "SET_ERROR_MESSAGE", payload: err.message }))
    }
    return (
        < div >
            <form onSubmit={(e) => handleSubmit(e, state.product)}>
                <h2 className="center">EDIT PRODUCT</h2>
                <div>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type={"text"}
                        name="title"
                        id="title"
                        value={state.product.title}
                        required
                        onChange={(e) => setState((prevState) => {
                            console.log(e.target)
                            return { ...prevState, product: { ...prevState.product, [e.target.name]: e.target.value } }
                        })}
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
                        onChange={(e) => setState((prevState) => { return { ...prevState, product: { ...prevState.product, rating: { ...prevState.product.rating, [e.target.name]: e.target.value } } } })}
                    />
                </div>
                <button type="submit">UPDATE</button>
            </form>
        </div >
    );
}
export default EditForm;