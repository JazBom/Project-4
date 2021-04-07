import React from "react";

const MenuList = (props) => {
  const menuListArray = props.categories.map((catEl) => {
    return (<div>
              <h3 className={catEl.category}>{catEl.category}</h3>
              <ul className={catEl.category}>
                { props.menu.filter((menuEl) => menuEl.menu_category_id === catEl.id).map((menuEl) => {
                    return (
                      <li
                        key={menuEl.id}
                        className={menuEl.menu_category.category}
                        onClick={() => props.clickEvent(menuEl.id)}
                      >
                        {menuEl.item} - {menuEl.price}
                      </li>
                    );
                })}
              </ul>
            </div>
    );
  });

  // const specialsArray = props.menu.map((el) => {
  //     return (
  //       <li
  //         key={el.id}
  //         className={el.menu_category.category}
  //         onClick={() => props.clickEvent(el.id)}
  //       >
  //         {el.item} - {el.price}
  //       </li>
  //     );
  //   });
  // const coffeeArray = props.menu
  //   .filter((el) => el.category === "coffee")
  //   .map((el) => {
  //     return (
  //       <li
  //         key={el.id}
  //         className={el.category}
  //         onClick={() => props.clickEvent(el.id)}
  //       >
  //         {el.item} - {el.price}
  //       </li>
  //     );
  //   });
  // const breakfastArray = props.menu
  //   .filter((el) => el.category === "breakfast")
  //   .map((el) => {
  //     return (
  //       <li
  //         key={el.id}
  //         className={el.category}
  //         onClick={() => props.clickEvent(el.id)}
  //       >
  //         {el.item} - {el.price}
  //       </li>
  //     );
  //   });
  // const lunchArray = props.menu
  //   .filter((el) => el.category === "lunch")
  //   .map((el) => {
  //     return (
  //       <li
  //         key={el.id}
  //         className={el.category}
  //         onClick={() => props.clickEvent(el.id)}
  //       >
  //         {el.item} - {el.price}
  //       </li>
  //     );
  //   });
  // const snacksArray = props.menu
  //   .filter((el) => el.category === "snacks")
  //   .map((el) => {
  //     return (
  //       <li
  //         key={el.id}
  //         className={el.category}
  //         onClick={() => props.clickEvent(el.id)}
  //       >
  //         {el.item} - {el.price}
  //       </li>
  //     );
  //   });

  return (
    <div className="menu-list">
      <h2>Menu</h2>
      {menuListArray}
      {/* <div>
        <h3 className="specials">Specials</h3>
        <ul className="specials">{specialsArray}</ul>
      </div>

      <div className="regular">
        <div>
          <h3 className="coffee">Coffee</h3>
          <ul className="coffee">{coffeeArray}</ul>
        </div>

        <div>
          <h3 className="breakfast">Breakfast</h3>
          <ul className="breakfast">{breakfastArray}</ul>
        </div>
        <div>
          <h3 className="lunch">Lunch</h3>
          <ul className="lunch">{lunchArray}</ul>
        </div>
        <div>
          <h3 className="snacks">Snacks</h3>
          <ul className="snacks">{snacksArray}</ul>
        </div>
      </div> */}
    </div>
  );
};

export default MenuList;
