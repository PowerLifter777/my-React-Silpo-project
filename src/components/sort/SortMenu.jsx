import React from "react";


import classes from './SortMenu.module.scss';



const SortMenu = ({ sortMenuClassActive, changeCls, ...props }) => {



    const func = () => {
        sortMenuClassActive ? changeCls(false) : changeCls(true)
    }

    return (
        <div className={classes.sort_menu} >

            <div className={`${classes.sort_widget_wrapper} ${sortMenuClassActive ? classes.active : ''}`}>
                
                <div className={classes.sort_widget_title} onClick={func} >
                    <span>Спочатку популярні</span>
                    <i className={classes.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.521" height="13.669" viewBox="0 0 22.521 13.669">
                            <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2">
                                <path d="M1 1h20.521M4.521 6.834h17M9.521 12.669h12"></path>
                            </g>
                        </svg>
                    </i>
                </div>
                <ul className={classes.sort_widget_list}>
                    <li className={classes.active}>Спочатку популярні</li>
                    <li className="">За рейтингом</li>
                    <li className="">Спочатку акційні</li>
                    <li className="">Спочатку дешевші</li>
                    <li className="">Спочатку дорожчі</li>
                    <li className="">Від А до Я</li>
                    <li className="">Від Я до А</li>
                </ul>
            </div>
        </div>
    )
}

export default SortMenu;


