import React from "react";

import classes from './PromoBanner.module.scss';

// import banner from 'https://content.silpo.ua/uploads/2022/03/30/6243ffea25c2b.png'
import banner1 from "../../../images/banner_up1200px.png"
import banner2 from "../../../images/banner_1200px.png"
import banner3 from "../../../images/banner_500px.png"


const PromoBanner = () => {
    <section className={`${classes.slider_wrapper} ${classes.promo_slider} ${classes.category_slider}`}>
        <ul className={classes.slides} style={{transform: 'translateX(0%)'}}>
            <li className={classes.slide}>
                <a className={`${classes.promo} ${classes.promo_plug} ${classes.full_size} ${classes.theme_violet}`} href="/sets/pitsa">
                    <picture>
                        {/* <source media={{minWidth: '1200px'}} srcset={banner2} />
                        <source media={{minWidth: '501px'}} srcset={banner3} /> */}
                        <img src={banner1} className={`${classes.background} ${classes.background_small}`} alt="Економ_Сет_Піца" />
                    </picture>
                    <div className={classes.promo_plug_info}></div>
                </a>
            </li>
        </ul>
    </section>
}

export default PromoBanner; 