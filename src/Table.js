import { useContext } from "react";
import { productContext } from "./App";
import axios from "axios";
import { urlProducts } from "./api";

function Table({ products, handleDelete }) {
    const dispatch = useContext(productContext);
    const handleDel = function (id) {
        axios.delete(urlProducts + "/" + id)
            .then(res => {
                console.log(res)
                dispatch({ type: "DELETE_PRODUCT", payload: id })
            })
            .catch(err => dispatch({ type: "SET_ERROR_MESSAGE", payload: err.message }))
    }
    const handleEdit = function (id) {
        dispatch({ type: "LOAD_EDIT_FORM", payload: id })
    }
    return (
        <div>
            <table>
                <caption>PRODUCTS - {`showing ${products.length} products`}</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>RATING</th>
                        <th>COUNT</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} alt={product.title} className="img-table" /></td>
                        <td>{product.rating?.rate}</td>
                        <td>{product.rating?.count}</td>
                        <td><button onClick={() => handleEdit(product.id)}>EDIT</button></td>
                        <td><button onClick={() => handleDel(product.id)}>DELETE</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}
export default Table;