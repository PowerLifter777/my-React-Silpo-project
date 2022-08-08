import React from "react";

import classes from './CardsList.module.scss';

import CardItem from "../cardItem/CardItem";


const CardsList = ({ cards, ...props }) => {

    // console.log(items);

    return (
        <ul className={classes.product_list}>
            {cards.map((item) =>
              <CardItem item={item}/>
            )}
        </ul>
    )
}

export default CardsList;