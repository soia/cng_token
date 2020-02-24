import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';

import Button from '../../../small-components/button';
import blueCoin from '../../../assets/images/blueCoin.svg';
import smallTransparentButton from '../../../assets/images/smallTransparentButton.svg';
import smartContractBg from './images/smart-contractBg.svg';
import referalWrapper from './images/smartContractWrapper.svg';

import style from './smart-contract.module.scss';

const SmartContract = () => {
    const { t } = useTranslation();

    const transparentButtonStyle = {
        backgroundImage: `url(${smallTransparentButton})`,
    };

    const referalWrapperStyle = {
        backgroundImage: `url(${referalWrapper})`,
    };

    const copied = () => {
        message.success('Successfully copied.', 2);
    };

    return (
        <Fragment>
            <div className={style.smartContract}>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img className={style.smartContract__coin} src={blueCoin} alt="blueCoin" />
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img
                        className={style.smartContract__icons}
                        src={smartContractBg}
                        alt="smartContractBg"
                    />
                    <div>
                        <h3 className={style.smartContract__title}>
                            {t('smartContractAddress.title')}
                        </h3>
                        <div className={style.smartContract__referalWrapper}>
                            <p className={style.smartContract__referalWrapper_title}>
                                {t('smartContractAddress.address')}
                            </p>
                            <div
                                className={style.smartContract__referalField}
                                style={referalWrapperStyle}
                            >
                                <p className={style.smartContract__referalField_link}>
                                    https://etherscan.io/token/0x883a158c9b28f8d626acfcfbe1028f49e70c9d75
                                </p>
                                <CopyToClipboard
                                    text="https://etherscan.io/token/0x883a158c9b28f8d626acfcfbe1028f49e70c9d75"
                                    onCopy={() => copied()}
                                >
                                    <Button
                                        style={transparentButtonStyle}
                                        type="button"
                                        className={style.smartContract__referalField_copy}
                                    >
                                        copy
                                    </Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default SmartContract;
