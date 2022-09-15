import React from "react";

import classes from './PromoBanner.module.scss';


const PromoBanner = () => {
    <section className={`${classes.slider_wrapper} ${classes.promo_slider} ${classes.category_slider}`}>
        <ul className={classes.slides} style={{transform: 'translateX(0%)'}}>
            <li className={classes.slide}>
                <a className={`${classes.promo} ${classes.promo_plug} ${classes.full_size} ${classes.theme_violet}`} href="/sets/pitsa">
                    <picture>
                        <source media="(min-width: 1200px)" srcset="https://content.silpo.ua/uploads/2022/03/30/6243ffea25c2b.png" />
                        <source media="(min-width: 501px)" srcset="https://content.silpo.ua/uploads/2022/03/30/6243ffea5ae49.png" />
                        <img src="https://content.silpo.ua/uploads/2022/03/30/6243ffe9e2982.png" className={`${classes.background} ${classes.background_small}`} alt="Економ_Сет_Піца" />
                    </picture>
                    <div className={classes.promo_plug_info}></div>
                </a>
            </li>
        </ul>
    </section>
}

export default PromoBanner;