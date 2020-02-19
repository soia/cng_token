/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { message } from 'antd';

import SelectLanguage from '../../language';

import { compose } from '../../../utils';
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

        return (
            <header className={style.header}>
                <div className="animationLogo">
                    <Link to="/" className={style.header__logo}>
                        CNG tokens
                    </Link>
                </div>
                <div className={style.header__leftSide}>
                    <nav className={style.header__nav}>
                        <div className="animationNav">
                            <ul className={style.header__nav_list}>
                                <li>
                                    <AnchorLink href="#advantages">
                                        {t('advantages.title')}
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#principleOfWork">
                                        {t('principleOfWork.principleOfWork')}
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#CNG">CNG</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#referralProgram">{t('referals.referralProgram')}</AnchorLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className={style.header__rightSide}>
                    <div className="animationButtons">
                        <SelectLanguage />
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
