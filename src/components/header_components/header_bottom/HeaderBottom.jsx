import React from "react";

import classes from './HeaderBottom.module.scss';

import flag from '../../../images/flag.png'
import { ReactComponent as PhoneSVG } from '../../../images/phone_icon.svg'

const HeaderBottom = () => {
    return (
        <nav className={classes.header__bottom}>
            <ul className={classes.nav_list}>
                <li className={classes.item_flag} >
                    <img src={flag} alt="Ukraine flag" />
                </li>
                <li><a href="">Акції</a></li>
                <li><a href="">Суші</a></li>
                <li><a href="">Піца</a></li>
                <li><a href="">Готові страви</a></li>
                <li><a href="">Свіжий врожай</a></li>
                <li><a href="">Барбекю</a></li>
                <li><a href="">Акція вино та ігристе</a></li>
                <li><a href="">Акція ковбасні вироби</a></li> 
                <li><a href="">Акція сири</a></li>
                <li><a href="">Акція товари для дітей</a></li>
            </ul>
            <ul className={classes.additional_pages}>
                <li><a href="">
                    <span>
                        Поширені питання
                    </span>
                </a></li>
                <li>
                    <a href="tel:0800 301 707" className={classes.hot_line_phone} aria-label='Телефон гарячої лінії: 0800 301 707'>
                        <PhoneSVG />
                        <div className={classes.phone_holder}>
                            <div className={classes.phone_holder_text}>Гаряча лінія</div>
                            <div className={classes.phone_holder_tel}>0 800 301 707</div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderBottom;