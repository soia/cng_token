import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';

import Button from '../../../small-components/button';
import smallTransparentButton from '../../../assets/images/smallTransparentButton.svg';
import airDropBg from './images/airDropBg.svg';
import airDrop1 from './images/airDrop1.svg';
import airDrop2 from './images/airDrop2.svg';
import referalWrapper from './images/referalWrapper.svg';

import style from './airDrop.module.scss';

const AirDrop = () => {
    const { t } = useTranslation();

    const airDropBgStyle = {
        backgroundImage: `url(${airDropBg})`,
    };

    const referalWrapperStyle = {
        backgroundImage: `url(${referalWrapper})`,
    };

    const transparentButtonStyle = {
        backgroundImage: `url(${smallTransparentButton})`,
    };

    const copied = () => {
        message.success('Successfully copied.', 2);
    };

    return (
        <Fragment>
            <div
                className={style.airDrop}
                style={window.innerWidth > 767 ? airDropBgStyle : null}
            >
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <h3 className={style.airDrop__title}>{t('referals.title')}</h3>
                    <img className={style.airDrop__icons} src={airDrop1} alt="airDrop1" />
                    <img className={style.airDrop__icons} src={airDrop2} alt="airDrop2" />
                    <div className={style.airDrop__referalWrapper}>
                        <p className={style.airDrop__referalWrapper_title}>
                            {t('referals.link')}
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
                                onCopy={() => copied()}
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
