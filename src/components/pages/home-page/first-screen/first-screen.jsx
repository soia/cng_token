import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import TextTruncate from 'react-text-truncate';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactWOW from 'react-wow';
import { message } from 'antd';

import Button from '../../../small-components/button';
import orangeButton from '../../../assets/images/orangeButton.svg';
import { compose } from '../../../../utils';

import arrowDown from './images/arrowDown.svg';
import firstScreenBg from './images/firstScreenBg1.svg';
import play from './images/play.svg';
import accounts from './images/accounts.svg';
import firstScreenIcon from './images/firstScreenIcon.svg';

import style from './first-screen.module.scss';

export class FirstScreen extends PureComponent {
    render() {
        const { t } = this.props;

        const bgImage = {
            backgroundImage: `url(${firstScreenBg})`,
        };

        const orangeButtonStyle = {
            backgroundImage: `url(${orangeButton})`,
            backgroundSize: 'cover',
        };

        const playGroup = () => [message.success('Coming Soon!', 2)];

        return (
            <div
                className={style.firstScreen}
                style={window.innerWidth > 767 ? bgImage : null}
            >
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img
                        className={style.firstScreen__icon}
                        src={firstScreenIcon}
                        alt="firstScreenIcon"
                    />
                </ReactWOW>
                <div className={style.firstScreen__leftSide}>
                    <div>
                        <ReactWOW animation="fadeInUp" delay="0.30s">
                            <div className={style.firstScreen__leftSide_titleWrapper}>
                                <div className={style.firstScreen__leftSide_title}>
                                    <TextTruncate
                                        line={2}
                                        element="h1"
                                        truncateText="…"
                                        text="CNG-"
                                    />
                                </div>
                                <div className={style.firstScreen__leftSide_title}>
                                    <TextTruncate
                                        line={2}
                                        element="div"
                                        truncateText="…"
                                        text={t('firstScreen.title')}
                                    />
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation="fadeInUp" delay="0.45s">
                            <div>
                                <div className={style.firstScreen__leftSide_subtitle}>
                                    <TextTruncate
                                        line={10}
                                        element="div"
                                        truncateText="…"
                                        text={t('firstScreen.subtitle')}
                                    />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                    <div
                        className={style.firstScreen__leftSide_accountsWrapper}
                        onClick={() => playGroup()}
                    >
                        <ReactWOW animation="fadeInUp" delay="0.6s">
                            <Button
                                style={orangeButtonStyle}
                                type="button"
                                className={style.firstScreen__leftSide_btn}
                            >
                                {t('firstScreen.beginToPlay')}
                            </Button>
                            <img
                                className={style.firstScreen__leftSide_play}
                                src={play}
                                alt="play"
                            />
                            <img
                                className={style.firstScreen__leftSide_accounts}
                                src={accounts}
                                alt="accounts"
                            />
                        </ReactWOW>
                    </div>
                    <AnchorLink href="#advantages">
                        <div className={style.firstScreen__scrollDown}>
                            <img
                                className={style.firstScreen__scrollDown_arrowDown}
                                src={arrowDown}
                                alt="arrowDown"
                            />
                            {t('firstScreen.scrollDown')}
                        </div>
                    </AnchorLink>
                </div>
            </div>
        );
    }
}

FirstScreen.defaultProps = {
    t: () => {},
};

FirstScreen.propTypes = {
    t: PropTypes.func,
};

export default compose(withTranslation())(FirstScreen);
