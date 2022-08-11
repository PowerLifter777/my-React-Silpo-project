import React from "react";
import { useState } from "react";

import classes from './SortMenu.module.scss';




const SortMenu = ({ props }) => {

    const [clas, setClas] = useState('')

    return (
            <div className={classes.sort_menu}>
                <div className={`${classes.sort_widget_wrapper} ${classes.active}`}>
                    <div className={classes.sort_widget_title} onClick = {() => setClas(classes.sort_widget_selected)} >
                        <span>Спочатку популярні</span>
                        <i className={classes.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.521" height="13.669" viewBox="0 0 22.521 13.669">
                                <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2">
                                    <path d="M1 1h20.521M4.521 6.834h17M9.521 12.669h12"></path>
                                </g>
                            </svg>
                        </i>
                    </div>
                    <ul className={classes.sort_widget_list}>
                        <li class={clas}>Спочатку популярні</li>
                        <li class="">За рейтингом</li>
                        <li class="">Спочатку акційні</li>
                        <li class="">Спочатку дешевші</li>
                        <li class="">Спочатку дорожчі</li>
                        <li class="">Від А до Я</li>
                        <li class="">Від Я до А</li>
                    </ul>
                </div>
            </div>
      )
}

export default SortMenu;