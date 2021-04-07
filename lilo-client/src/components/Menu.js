import React, { useState, useEffect } from "react";
import MenuList from './MenuList';

export function Menu () {

  const [menuCategories, setMenuCategories] = useState([]);
  const[menuArray, setMenuArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/menuitems', {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then((response) => {
        console.log("GET menu response", response);
        return response.json();
    }).then((menuData) => {
        console.log("GET menu data", menuData);
        setMenuArray(menuData);
    });
    fetch('http://localhost:9000/api/menu_categories', {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then((response) => {
        console.log("GET menu categories response", response);
        return response.json();
    })
    .then((menu_categories) => {
        console.log("GET menu category data", menu_categories);
        setMenuCategories(menu_categories);
    });    
  }, []);

return (
        <div className="menu">
          
          <div className="text">
            <div>
            
            <MenuList categories={menuCategories} menu={menuArray} canClick="false" />
          
            </div>
          </div>

          <div className="img-div">
          
          <img src="https://i.imgur.com/Z9LzZUN.jpg?1" alt="food"/>
          </div>
        
        </div>
    )
}