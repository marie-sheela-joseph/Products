import { useContext, useEffect, useState } from "react";
import { productContext } from "./App";

function FilterForm({ filterFormData: { filters } }) {
    const [state, setState] = useState({ filters: filters })
    const dispatch = useContext(productContext);
    const handleChange = function (e) {
        setState((prevState) => {
            return {
                filters: prevState.filters.map((filter) => filter.name === e.target.name ? { ...filter, selected: !filter.selected } : filter)
            }
        })
    }
    const handleReset = function (e) {
        dispatch({ type: "RESET_ALL_FILTERS" })
    }
    useEffect(() => {
        dispatch({ type: "UPDATE_FILTER_FORM_DATA", payload: state.filters })
    }, [state.filters, dispatch])
    return (
        <div>
            <form>
                {state.filters.map((filter) => <div>
                    <label htmlFor={filter.name}>{filter.name}</label>
                    <input type="checkbox" value={filter.name} key={filter.name} name={filter.name} id={filter.name} checked={filter.selected} onChange={(e) => handleChange(e)} />
                </div>)}
                <div>
                    <button type="reset" onClick={(e) => handleReset(e)}>RESET</button>
                </div>
            </form>
        </div>
    );
}
export default FilterForm;