import { useContext } from "react";
import { productContext } from "./App";


function Error({ message }) {
    const dispatch = useContext(productContext);
    return (
        <div>
            {alert(message)}
            {dispatch({ type: "RESET_ERROR_MESSAGE" })}
        </div>
    );
}
export default Error;