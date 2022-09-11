import React from "react";
import { useState, useRef } from "react";

import classes from './HeaderSearch.module.css';

import clearBtn_Icon from '../../../images/clear_input_button.svg'
import { ReactComponent as SearchSVG } from '../../../images/search_icon.svg'
import LoaderSearch from "../header_top_search_loader/LoaderSearch";


const HeaderSearch = () => {
 
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const str = "Саня, смотри прикол!! Как я быстро печатаю, и даже не смотрю на клаву))) Как в фильмах показывают. Могу что угодно написать, бла бла бла вамвллидладп и даже не смотрю)) прикол да?))"

    const inputEl = useRef(null);
    const backLayerEl = useRef(null);
    const dropdownEl = useRef(null);
    const inputDellBtn = useRef(null);

    const inputFocused = () => {
        setIsInputFocused(true);
        inputEl.current.focus();
        backLayerEl.current.className = `${classes.backLayer} ${classes.visible}`
        inputDellBtn.current.className = `${classes.inputClearBtn} ${inputValue ? classes.visible : ''}`
    }

    const inputUnFocused = () => {
        backLayerEl.current.className = classes.backLayer;
        setIsInputFocused(false);
        dropdownEl.current.className = classes.dropdownMenu;
        inputDellBtn.current.className = classes.inputClearBtn;
        inputEl.current.blur();
    }

    const handlerInputValue = (e) => {
        setInputValue(e.target.value);
        dropdownEl.current.className = e.target.value ? `${classes.dropdownMenu} ${classes.visible}` : classes.dropdownMenu;
    }

    return (
        <div className={`header_top ${classes.search_field}`}>
            <div
                ref={backLayerEl}
                onMouseDown={inputUnFocused}
                className={classes.backLayer}
            >
            </div>
            <div
                className={`header_top ${classes.search} ${isInputFocused ? classes.focused : ''}`}
                onClick={inputFocused}
            >
                <SearchSVG className={classes.searchIcon} />
                <input
                    type="text"
                    placeholder='Пошук на сайті'
                    value={str.slice(0, inputValue.length)}
                    ref={inputEl}
                    onMouseDown={inputFocused}
                    onChange={handlerInputValue}
                />
                <div
                    className={`${classes.inputClearBtn} ${inputValue ? classes.visible : ''} `}
                    ref={inputDellBtn}
                    onClick={() => {
                        setInputValue('');
                        dropdownEl.current.className = classes.dropdownMenu;
                    }}
                >
                    <img alt='button' src={clearBtn_Icon} />
                </div>
                <div
                    className={classes.dropdownMenu}
                    ref={dropdownEl}>
                    <LoaderSearch />
                    {str.slice(0, inputValue.length)}
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;











