import React from "react"
import { useState } from "react";

import classes from './UserInfo.module.css';

import { ReactComponent as LocationIcon } from '../../images/location.svg'
import { ReactComponent as UserIcon } from '../../images/user_icon.svg'


const UserInfo = () => {

    const [locationColor, setLocationColor] = useState('#494c4e');
    // const [userColor, setUserColor] = useState('#494c4e');

    return (
        <ul className={classes.userInfo}>
            <li title='Вхід/Реєстрація'>
                <div
                    className={classes.userReg}
                    // onMouseOver={() => setUserColor('#ff8522')}
                    // onMouseOut={() => setUserColor('#494c4e')}
                >
                    <UserIcon className={classes.userIcon}/>
                    <span >
                        Вхід/
                        <br />
                        Реєстрація
                    </span>
                </div>
            </li>
            <li>
                <div
                    className={classes.userLocation}
                    onMouseOver={() => setLocationColor('#ff8522')}
                    onMouseOut={() => setLocationColor('#494c4e')}
                >
                    <LocationIcon fill={locationColor} />
                    <span>
                        <b>Доставка</b>
                        <br />
                        <mark style={{ color: '#ff8522', background: 'transparent' }}>
                            <b>Вкажіть адресу достав...</b>
                        </mark>
                    </span>
                </div>
            </li>
        </ul>
    )
}

export default UserInfo;





