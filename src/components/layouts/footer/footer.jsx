import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactWOW from 'react-wow';

import style from './footer.module.scss';
import footerCoins from '../../assets/images/footerCoins.svg';

const Footer = () => {
    const { t } = useTranslation();

    return (
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
                    <h3 className={style.footer__title}>{t('footer.company')}</h3>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.aboutUs')}
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.benefits')}
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.gameToken')}
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.principleOfOperation')}
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.tokenImplementation')}
                    </Link>
                </div>
                <div className={style.footer__support}>
                    <h3 className={style.footer__title}>{t('footer.support')}</h3>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.faq')}
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.privacyPolice')}
                    </Link>
                </div>
                <div className={style.footer__services}>
                    <h3 className={style.footer__title}> {t('footer.helpCenter')}</h3>
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
            <p className={style.footer__copyright_contentMobile}>
            Copyright
                <span className={style.footer__copyright_symbol}>&#169;</span>
                <span>2020 CNG tokens</span>
            </p>
        </footer>
    );
};

export default Footer;
