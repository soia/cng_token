/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { message } from 'antd';

import orangeButton from '../../assets/images/orangeButton.svg';
import transparentButton from '../../assets/images/transparentButton.svg';

import { compose } from '../../../utils';
import Button from '../../small-components/button';
import style from './header.module.scss';
import 'antd/dist/antd.css';
import './header.scss';

export class Header extends Component {
    mounted = true;

    componentDidMount() {
        setTimeout(() => {
            document.body.classList.add('domLoaded');
        }, 100);
    }

    openLogin = () => {
        message.success('Coming Soon!', 2);
    };

    openSignUp = () => {
        message.success('Coming Soon!', 2);
    };

    render() {
        const { t } = this.props;

        const orangeButtonStyle = {
            backgroundImage: `url(${orangeButton})`,
            backgroundSize: 'cover',
        };

        const transparentButtonStyle = {
            backgroundImage: `url(${transparentButton})`,
            backgroundSize: 'cover',
        };

        return (
            <header className={style.header}>
                <div className={style.header__leftSide}>
                    <nav className={style.header__nav}>
                        <div className="animationNav">
                            <ul className={style.header__nav_list}>
                                <li>
                                    <Link to="/">
                                        {t('header.about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">CNG</Link>
                                </li>
                                <li>
                                    <Link to="/">{t('header.contact')}</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="animationLogo">
                    <Link to="/" className={style.header__logo}>
                        CNG tokens
                    </Link>
                </div>
                <div className={style.header__rightSide}>
                    <div className="animationButtons">
                        <Button
                            style={transparentButtonStyle}
                            onClick={this.openLogin}
                            type="button"
                            className={style.header__login}
                        >
                            {t('header.signIn')}
                        </Button>
                        <Button
                            style={orangeButtonStyle}
                            onClick={this.openSignUp}
                            type="button"
                            className={style.header__signUp}
                        >
                            {t('header.registration')}
                        </Button>
                    </div>
                </div>
            </header>
        );
    }
}

Header.defaultProps = {
    t: () => {},
};

Header.propTypes = {
    t: PropTypes.func,
};

export default compose(withTranslation())(Header);
