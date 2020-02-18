import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';

import Button from '../../../small-components/button';
import smallTransparentButton from '../../../assets/images/smallTransparentButton.svg';
import airDropBg from './images/airDropBg.svg';
import referalWrapper from './images/referalWrapper.svg';

import style from './airDrop.module.scss';

const AirDrop = () => {
    const airDropBgStyle = {
        backgroundImage: `url(${airDropBg})`,
    };

    const referalWrapperStyle = {
        backgroundImage: `url(${referalWrapper})`,
    };

    const transparentButtonStyle = {
        backgroundImage: `url(${smallTransparentButton})`,
    };

    const openSignUp = () => {
        message.success('Successfully copied.', 2);
    };

    return (
        <Fragment>
            <div className={style.airDrop} style={airDropBgStyle}>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <h3 className={style.airDrop__title}>
                        Принять участие в AirDrop и реферальной программы
                    </h3>
                    <div className={style.airDrop__referalWrapper}>
                        <p className={style.airDrop__referalWrapper_title}>
                            Refferal link
                        </p>
                        <div
                            className={style.airDrop__referalField}
                            style={referalWrapperStyle}
                        >
                            <p className={style.airDrop__referalField_link}>
                                https://coinsbit.io
                            </p>
                            <CopyToClipboard
                                text="https://coinsbit.io"
                                onCopy={() => openSignUp()}
                            >
                                <Button
                                    style={transparentButtonStyle}
                                    type="button"
                                    className={style.airDrop__referalField_copy}
                                >
                                    copy
                                </Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default AirDrop;
