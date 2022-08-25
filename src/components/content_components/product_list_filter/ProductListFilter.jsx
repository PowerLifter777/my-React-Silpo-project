import React from "react"

const ProductListFilter = () => {
    return (

        <div className={`${classes.side_shield_panel} ${category_filter_shield}`}>
            <article className={classes.filter_wrapper}>
                <div className={filter_wrapper_title}>
                    Кулінарія
                    <i class="icon icon-chevron-down">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" width="14" height="8">
                            <path d="M14 1.4 7 8 0 1.4 1.4 0 7 5.3 12.6 0z">
                            </path>
                        </svg>
                    </i>
                </div>
                <div class="filter-wrapper__cover filter-wrapper__cover-active">
                    <ul class="checkbox-list-vertical">
                        <li class="block-checkbox-item">
                            <div class="block-checkbox-item_title">
                                <div class="block-checkbox">
                                </div>Піца</div>
                            <div class="block-checkbox-item_count">29</div>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="filter-wrapper">
                <div class="filter-wrapper__title">«Сільпо» Resto<i class="icon icon-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" width="14" height="8">
                        <path d="M14 1.4 7 8 0 1.4 1.4 0 7 5.3 12.6 0z">
                        </path>
                    </svg>
                </i>
                </div>
                <div class="filter-wrapper__cover filter-wrapper__cover-active">
                    <ul class="checkbox-list-vertical">
                        <li class="block-checkbox-item">
                            <div class="block-checkbox-item_title">
                                <div class="block-checkbox">
                                </div>Піца</div>
                            <div class="block-checkbox-item_count">12</div>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="filter-wrapper">
                <div class="filter-wrapper__title">Ціна</div>
                <div class="filter-wrapper__cover filter-wrapper__cover-active">
                    <div class="range-filter-wrapper false">
                        <div class="range-filter_input-holder">
                            <span>Від</span>
                            <input type="text" value="70" />
                            <span>До</span>
                            <input type="text" value="229" />
                            <div class="range-filter_btn">ОК</div>
                        </div>
                        <div class="rc-slider rc-slider-horizontal">
                            <div class="rc-slider-rail">
                            </div>
                            <div class="rc-slider-track rc-slider-track-1" style="left: 0%; width: 100%;">
                            </div>
                            <div class="rc-slider-step">
                            </div>
                            <div class="rc-slider-handle rc-slider-handle-1" tabindex="0" role="slider" aria-valuemin="70" aria-valuemax="229" aria-valuenow="70" aria-disabled="false" style="left: 0%; transform: translateX(-50%);">
                            </div>
                            <div class="rc-slider-handle rc-slider-handle-2" tabindex="0" role="slider" aria-valuemin="70" aria-valuemax="229" aria-valuenow="229" aria-disabled="false" style="left: 100%; transform: translateX(-50%);">
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProductListFilter;
