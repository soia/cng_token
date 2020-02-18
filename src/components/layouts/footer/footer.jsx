import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

import style from './footer.module.scss';
import footerCoins from '../../assets/images/footerCoins.svg';

const Footer = () => (
    <footer className={style.footer}>
        <ReactWOW animation="fadeInUp" delay="0.05s">
            <img className={style.footer_coins} src={footerCoins} alt="footerCoins" />
        </ReactWOW>
        <div className={style.footer__copyright}>
            <Link to="/" className={style.footer__logo}>
                CNG tokens
            </Link>
            <p className={style.footer__copyright_content}>
                Copyright
                <span className={style.footer__copyright_symbol}>&#169;</span>
                <span>2020 CNG tokens</span>
            </p>
        </div>
        <div className={style.footer__linksWrapper}>
            <div className={style.footer__about}>
                <h3 className={style.footer__title}>Компания</h3>
                <Link to="/" className={style.footer__links}>
                    О нас
                </Link>
                <Link to="/" className={style.footer__links}>
                    Преимущества
                </Link>
                <Link to="/" className={style.footer__links}>
                    CNG.Game token
                </Link>
                <Link to="/" className={style.footer__links}>
                    Принцип работы
                </Link>
                <Link to="/" className={style.footer__links}>
                    Реализация токена CNG
                </Link>
            </div>
            <div className={style.footer__support}>
                <h3 className={style.footer__title}>Поддержка</h3>
                <Link to="/" className={style.footer__links}>
                    FAQ
                </Link>
                <Link to="/" className={style.footer__links}>
                    Privacy Police
                </Link>
            </div>
            <div className={style.footer__services}>
                <h3 className={style.footer__title}>Соцсети</h3>
                <Link to="/" className={style.footer__links}>
                    Facebook
                </Link>
                <Link to="/" className={style.footer__links}>
                    YouTube
                </Link>
                <Link to="/" className={style.footer__links}>
                    Instagram
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
