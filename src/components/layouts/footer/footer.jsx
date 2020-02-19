import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactWOW from 'react-wow';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/images/logo.svg';
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
                    <img src={logo} alt="logo" />
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

                    <AnchorLink href="#CNG" className={style.footer__links}>
                        {t('footer.aboutUs')}
                    </AnchorLink>
                    <AnchorLink href="#advantages" className={style.footer__links}>
                        {t('footer.benefits')}
                    </AnchorLink>
                    <AnchorLink href="#header" className={style.footer__links}>
                        {t('footer.gameToken')}
                    </AnchorLink>
                    <AnchorLink href="#principleOfWork" className={style.footer__links}>
                        {t('footer.principleOfOperation')}
                    </AnchorLink>
                    <AnchorLink href="#referralProgram" className={style.footer__links}>
                        {t('footer.tokenImplementation')}
                    </AnchorLink>
                </div>
                <div className={style.footer__support}>
                    <h3 className={style.footer__title}>{t('footer.support')}</h3>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.faq')} (Coming soon)
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        {t('footer.privacyPolice')} (Coming soon)
                    </Link>
                </div>
                <div className={style.footer__services}>
                    <h3 className={style.footer__title}> {t('footer.helpCenter')}</h3>
                    <Link to="/" className={style.footer__links}>
                        Facebook (Coming soon)
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        YouTube (Coming soon)
                    </Link>
                    <Link to="/" className={style.footer__links}>
                        Instagram (Coming soon)
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
