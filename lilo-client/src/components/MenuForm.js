import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import { Form } from "./Form";

//1. Function for items in list to show up in form when clicked
//2. Function to fetch all menu items from DB and render in MenuList
//3. Function to add, updated and delete menu items
//4. Functions to set state and add menu items to state variable

const MenuForm = (props) => {
  //initialise state variables
  const emptyMenuItem = {
    id: 0,
    item: "",
    price: "",
    menu_category_id: 0,
  };

  const [menuCategories, setMenuCategories] = useState([]);
  const [menuArray, setMenuArray] = useState([]);
  const [menuEditItem, setMenuEditItem] = useState(emptyMenuItem);
  const [menuDeleteItem, setMenuDeleteItem] = useState(emptyMenuItem);
  const [selectedMenuItem, setSelectedMenuItem] = useState(emptyMenuItem);
  const [errorMessage, setErrorMessage] = useState("");

  const onMenuItemClick = (menuElId) => {
    const menuElIndex = menuArray.findIndex((el) => el.id === menuElId);
    const menuEl = menuArray[menuElIndex];
    console.log(menuEl)
    setSelectedMenuItem(menuEl);
    setErrorMessage('');
  };

  // Add item button logic in menu form
  const handleFormSubmit = (item, price, menu_category_id) => {
    const menuCategory = menuCategories.find(el => el.id === menu_category_id);
    const newMenuItem = {
      id: 0,
      item: item,
      price: price,
      menu_category_id: menu_category_id,
      menu_category: menuCategory
    };
    const newMenuArray = [...menuArray];

    fetch("http://localhost:9000/api/menuitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuItem),
    })
      .then((response) => {
        console.log(response.status);
        console.log("POST menu response", response);
        return response.json();
      })
      .then((createdMenuItem) => {
        console.log(newMenuArray);
        console.log(newMenuItem);
        console.log(createdMenuItem);
        newMenuItem.id = createdMenuItem.id;
        newMenuArray.push(newMenuItem);
        setMenuArray(newMenuArray);
        setSelectedMenuItem(emptyMenuItem);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Could not save - is the ID unique?");
      });
  };

  // Edit item button logic in menu form
  const handleFormEdit = (id, item, price, menu_category_id) => {
    const menuCategory = menuCategories.find(el => el.id === menu_category_id);
    const menuEditItem = {
      id: id,
      item: item,
      price: price,
      menu_category_id: menu_category_id,
      menu_category: menuCategory
    };
    setMenuEditItem(menuEditItem);
    const newMenuArray = [...menuArray];

    fetch(`http://localhost:9000/api/menuitems/${menuEditItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuEditItem),
      })
    .then((response) => {
      console.log(response.status);
      if (response.status === 201 || response.status === 200) {
        console.log("PUT menu response", response);
        const menuItemIndex = newMenuArray.findIndex((el) => el.id === menuEditItem.id);
        newMenuArray[menuItemIndex].item = menuEditItem.item;
        newMenuArray[menuItemIndex].price = menuEditItem.price;
        newMenuArray[menuItemIndex].menu_category_id = menuEditItem.menu_category_id;
        newMenuArray[menuItemIndex].menu_category = menuEditItem.menu_category;
        setMenuArray(newMenuArray)
        setSelectedMenuItem(emptyMenuItem);
      } else if (response.status === 500) {
        response.json()
        .then((body) => {
          console.log(body);
          setMenuArray(menuArray);
          setErrorMessage("Could not update - is the ID correct?");
        });
      }
    }).catch((err) => {
      console.log(err);
      setErrorMessage("Could not save - is the ID unique?");
    });

  };

  const handleFormDelete = (id) => {

    const newMenuArray = [...menuArray];

    fetch(`http://localhost:9000/api/menuitems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        console.log("DELETE menu response", response);
        const menuToDeleteIndex = newMenuArray.findIndex(el => el.id === id);
        newMenuArray.splice(menuToDeleteIndex, 1);
        setMenuArray(newMenuArray);
        setSelectedMenuItem(emptyMenuItem);
      } else if (response.status === 500) {
        response.json()
        .then((body) => {
          console.log(body);
          setErrorMessage("Could not delete - is the ID correct?");
        });
      }
    });
  };

  useEffect(() => {

    fetch("http://localhost:9000/api/menuitems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("GET menu response", response);
        return response.json();
      })
      .then((menuData) => {
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
    <div className="menu-form">
      <div className="div-one-list">
        <MenuList
          categories={menuCategories}        
          menu={menuArray}
          canClick="true"
          clickEvent={onMenuItemClick}
        />
      </div>

      <div className="div-two-form">
        <Form
          categories={menuCategories}
          menuItem={selectedMenuItem}
          submit={handleFormSubmit}
          editsubmit={handleFormEdit}
          deletesubmit={handleFormDelete}
        />
        <div className="error-message"
          style={
            errorMessage.length <= 0
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export { MenuForm };
