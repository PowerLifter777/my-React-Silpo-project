import React from "react";

import classes from './CardsList.module.scss';

import Card from "../card/Card";


const CardsList = ({ cards, ...props }) => {

    // console.log(cards);

    return (
        <ul className={classes.product_list}>
            {cards.map((card) =>
              <Card card={card} key={card.id}/>
            )}
        </ul>
    )
}

export default CardsList;