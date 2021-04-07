import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const Form = (props) => {

    const menuCategories = props.categories.map((el) => {
        return <option name={el.category} value={el.id}>{el.category}</option>;
    });

    const [formState, setFormState] = useState({
        id: 0,
        item: '',
        price: '',
        menu_category_id: '',
    });

    useEffect(() => {
        setFormState(props.menuItem);
    }, [ props.menuItem]);

    const handleChange = (e) => {
        console.log(e.target.name);
        const newState = { ...formState };
        let newValue = e.target.value;
        if (e.target.name === 'categoryId') {
            newValue = parseInt(e.target.value);
        }
        newState[e.target.name] = newValue;
        console.log(e.target.name, e.target.value);
        console.log('newState', newState);
        console.log('formState', formState);
        setFormState(newState);
        console.log('currentState', formState);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.submit(formState.item, formState.price, parseInt(formState.menu_category_id));
        };

    const handleFormEdit = (e) => {
        e.preventDefault();
        props.editsubmit(formState.id, formState.item, formState.price, parseInt(formState.menu_category_id));
        };

    const handleFormDelete = (e) => {
        e.preventDefault();
        props.deletesubmit(formState.id);
        };

    return(
            <div className="form">
                <h2>Update Menu</h2>
                <form>
               
                <div className="buttons">
                    <Button className="menuButton" onClick={handleFormSubmit}>Add</Button>
                    <Button className="menuButton" onClick={handleFormEdit}>Edit</Button>
                    <Button className="menuButton" onClick={handleFormDelete}>Delete</Button>
                </div>
                
                <div className="inputs">
                    <input name="id" type="hidden" value={formState.id}></input>
                    <label>Item: 
                        <input name="item" className="form-field" value={formState.item} onChange={handleChange}></input>
                    </label>
                    <label>Price: 
                        <input name="price" className="form-field" value={formState.price} onChange={handleChange}></input>
                    </label>
                    <label>Category: 
                        <select name="menu_category_id" className="form-field" value={formState.menu_category_id} onChange={handleChange}>
                        <option name="Please select" value="0" disabled>Please select</option>
                        {menuCategories}
                        </select>
                    </label>
                </div>
                    
                </form>
            </div>   
            );
};

export { Form };