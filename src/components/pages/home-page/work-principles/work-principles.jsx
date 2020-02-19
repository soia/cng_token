import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

import Button from '../../../small-components/button';
import orangeButton from '../../../assets/images/orangeButton.svg';
import workPrinciplesBg from './images/workPrinciplesBg.svg';
import workPrinciplesIcon1 from './images/workPrinciplesIcon1.svg';
import workPrinciplesIcon2 from './images/workPrinciplesIcon2.svg';
import principleWorkIcon from './images/principleWorkIcon.svg';

import style from './work-principles.module.scss';

const WorkPrinciples = () => {
    const { t } = useTranslation();

    const workPrinciplesBgStyle = {
        backgroundImage: `url(${workPrinciplesBg})`,
    };

    const orangeButtonStyle = {
        backgroundImage: `url(${orangeButton})`,
        backgroundSize: 'cover',
    };

    const getStartde = () => {
        message.success('Coming soon.', 2);
    };

    return (
        <Fragment>
            <div
                className={style.workPrinciples}
                style={window.innerWidth > 767 ? workPrinciplesBgStyle : null}
                id="principleOfWork"
            >
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img
                        className={style.workPrinciples__icon}
                        src={principleWorkIcon}
                        alt="principleWorkIcon"
                    />
                </ReactWOW>
                <div className={style.workPrinciples__wrapper}>
                    <ReactWOW animation="fadeInUp" delay="0.05s">
                        <h3 className={style.workPrinciples__title}>
                            {t('principleOfWork.title')}
                        </h3>
                    </ReactWOW>
                    <div className={style.workPrinciples__stepsWrapper}>
                        <ReactWOW animation="fadeInUp" delay="0.05s">
                            <div className={style.workPrinciples__stepsWrapper_item}>
                                <svg
                                    width="100"
                                    height="48"
                                    viewBox="0 0 100 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M8.56124 3.2994C8.89412 1.67011 10.3275 0.5 11.9904 0.5H96.1818C98.3964 0.5 100.054 2.53085 99.611 4.7006L91.4388 44.7006C91.1059 46.3299 89.6725 47.5 88.0096 47.5H3.81817C1.6036 47.5 -0.0542856 45.4692 0.389007 43.2994L8.56124 3.2994Z"
                                            stroke="#95FCFD"
                                        />
                                        <path
                                            d="M47.9822 18.928C49.3582 18.928 50.4742 19.184 51.3302 19.696C52.0422 20.136 52.5582 20.72 52.8782 21.448C53.1262 22.032 53.2502 22.66 53.2502 23.332V23.692C53.2502 24.356 53.1222 24.98 52.8662 25.564C52.5382 26.324 52.0222 26.92 51.3182 27.352C50.4622 27.88 49.3502 28.144 47.9822 28.144H47.4542C46.0862 28.144 44.9742 27.88 44.1182 27.352C43.4142 26.92 42.8982 26.324 42.5702 25.564C42.3142 24.98 42.1862 24.356 42.1862 23.692V23.332C42.1862 22.644 42.3142 22.012 42.5702 21.436C42.8982 20.7 43.4142 20.12 44.1182 19.696C44.9742 19.184 46.0862 18.928 47.4542 18.928H47.9822ZM50.2622 23.416C50.2622 22.856 50.1142 22.384 49.8182 22C49.3862 21.44 48.6862 21.16 47.7182 21.16C46.7262 21.16 46.0222 21.44 45.6062 22C45.3182 22.384 45.1742 22.856 45.1742 23.416V23.572C45.1742 23.812 45.2062 24.06 45.2702 24.316C45.3422 24.572 45.4622 24.808 45.6302 25.024C46.0782 25.6 46.7782 25.888 47.7302 25.888C48.6982 25.888 49.3982 25.6 49.8302 25.024C50.1182 24.64 50.2622 24.156 50.2622 23.572V23.416ZM55.4181 22.456V20.5C56.3141 20.5 56.9701 20.396 57.3861 20.188C57.6021 20.084 57.7781 19.944 57.9141 19.768C58.0501 19.592 58.1661 19.36 58.2621 19.072H60.4221V28H57.5781V22.456H55.4181Z"
                                            fill="#95FCFD"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="100" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>{t('principleOfWork.content1')}</p>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation="fadeInUp" delay="0.05s">
                            <div className={style.workPrinciples__stepsWrapper_item}>
                                <svg
                                    width="100"
                                    height="48"
                                    viewBox="0 0 100 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M8.56124 3.2994C8.89412 1.67011 10.3275 0.5 11.9904 0.5H96.1818C98.3964 0.5 100.054 2.53085 99.611 4.7006L91.4388 44.7006C91.1059 46.3299 89.6725 47.5 88.0096 47.5H3.81817C1.6036 47.5 -0.0542856 45.4692 0.389007 43.2994L8.56124 3.2994Z"
                                            stroke="#95FCFD"
                                        />
                                        <path
                                            d="M45.7088 18.928C47.0848 18.928 48.2008 19.184 49.0568 19.696C49.7688 20.136 50.2848 20.72 50.6048 21.448C50.8528 22.032 50.9768 22.66 50.9768 23.332V23.692C50.9768 24.356 50.8488 24.98 50.5928 25.564C50.2648 26.324 49.7488 26.92 49.0448 27.352C48.1888 27.88 47.0768 28.144 45.7088 28.144H45.1808C43.8128 28.144 42.7008 27.88 41.8448 27.352C41.1408 26.92 40.6248 26.324 40.2968 25.564C40.0408 24.98 39.9128 24.356 39.9128 23.692V23.332C39.9128 22.644 40.0408 22.012 40.2968 21.436C40.6248 20.7 41.1408 20.12 41.8448 19.696C42.7008 19.184 43.8128 18.928 45.1808 18.928H45.7088ZM47.9888 23.416C47.9888 22.856 47.8408 22.384 47.5448 22C47.1128 21.44 46.4128 21.16 45.4448 21.16C44.4528 21.16 43.7488 21.44 43.3328 22C43.0448 22.384 42.9008 22.856 42.9008 23.416V23.572C42.9008 23.812 42.9328 24.06 42.9968 24.316C43.0688 24.572 43.1888 24.808 43.3568 25.024C43.8048 25.6 44.5048 25.888 45.4568 25.888C46.4248 25.888 47.1248 25.6 47.5568 25.024C47.8448 24.64 47.9888 24.156 47.9888 23.572V23.416ZM53.3232 28V26.572C53.3232 26.188 53.3632 25.848 53.4432 25.552C53.5232 25.248 53.6792 24.96 53.9112 24.688C54.4712 24.048 55.5232 23.512 57.0672 23.08L57.7752 22.888L58.4232 22.708C59.0152 22.564 59.4312 22.416 59.6712 22.264C59.7832 22.192 59.8592 22.12 59.8992 22.048C59.9392 21.968 59.9592 21.876 59.9592 21.772V21.76C59.9592 21.52 59.8552 21.336 59.6472 21.208C59.3832 21.056 58.9232 20.98 58.2672 20.98C57.5312 20.98 57.0192 21.14 56.7312 21.46C56.5472 21.652 56.4472 21.916 56.4312 22.252H53.4792V22.168C53.4792 21.664 53.5752 21.208 53.7672 20.8C54.0232 20.256 54.4512 19.828 55.0512 19.516C55.7872 19.14 56.7472 18.952 57.9312 18.952H58.5312C60.1632 18.952 61.3352 19.22 62.0472 19.756C62.6632 20.22 62.9712 20.888 62.9712 21.76V21.856C62.9712 22.264 62.8992 22.612 62.7552 22.9C62.6192 23.188 62.4032 23.436 62.1072 23.644C61.8192 23.852 61.4392 24.032 60.9672 24.184C60.4952 24.336 59.9112 24.476 59.2152 24.604L58.4952 24.748C57.7352 24.9 57.1592 25.032 56.7672 25.144C56.4792 25.232 56.2712 25.308 56.1432 25.372C55.9912 25.444 55.8952 25.508 55.8552 25.564C55.8072 25.62 55.7832 25.676 55.7832 25.732H63.1632V28H53.3232Z"
                                            fill="#95FCFD"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="100" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>{t('principleOfWork.content2')}</p>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation="fadeInUp" delay="0.05s">
                            <div className={style.workPrinciples__stepsWrapper_item}>
                                <svg
                                    width="100"
                                    height="48"
                                    viewBox="0 0 100 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M8.56124 3.2994C8.89412 1.67011 10.3275 0.5 11.9904 0.5H96.1818C98.3964 0.5 100.054 2.53085 99.611 4.7006L91.4388 44.7006C91.1059 46.3299 89.6725 47.5 88.0096 47.5H3.81817C1.6036 47.5 -0.0542856 45.4692 0.389007 43.2994L8.56124 3.2994Z"
                                            stroke="#95FCFD"
                                        />
                                        <path
                                            d="M45.615 18.928C46.991 18.928 48.107 19.184 48.963 19.696C49.675 20.136 50.191 20.72 50.511 21.448C50.759 22.032 50.883 22.66 50.883 23.332V23.692C50.883 24.356 50.755 24.98 50.499 25.564C50.171 26.324 49.655 26.92 48.951 27.352C48.095 27.88 46.983 28.144 45.615 28.144H45.087C43.719 28.144 42.607 27.88 41.751 27.352C41.047 26.92 40.531 26.324 40.203 25.564C39.947 24.98 39.819 24.356 39.819 23.692V23.332C39.819 22.644 39.947 22.012 40.203 21.436C40.531 20.7 41.047 20.12 41.751 19.696C42.607 19.184 43.719 18.928 45.087 18.928H45.615ZM47.895 23.416C47.895 22.856 47.747 22.384 47.451 22C47.019 21.44 46.319 21.16 45.351 21.16C44.359 21.16 43.655 21.44 43.239 22C42.951 22.384 42.807 22.856 42.807 23.416V23.572C42.807 23.812 42.839 24.06 42.903 24.316C42.975 24.572 43.095 24.808 43.263 25.024C43.711 25.6 44.411 25.888 45.363 25.888C46.331 25.888 47.031 25.6 47.463 25.024C47.751 24.64 47.895 24.156 47.895 23.572V23.416ZM57.8001 28.132C56.5441 28.132 55.5321 27.936 54.7641 27.544C54.1641 27.24 53.7201 26.812 53.4321 26.26C53.2321 25.876 53.1321 25.468 53.1321 25.036V24.904H56.1081C56.1321 25.144 56.2441 25.352 56.4441 25.528C56.7721 25.824 57.3361 25.972 58.1361 25.972C58.9841 25.972 59.5681 25.864 59.8881 25.648C60.1201 25.504 60.2361 25.3 60.2361 25.036V25.024C60.2361 24.808 60.1521 24.64 59.9841 24.52C59.8241 24.4 59.5401 24.34 59.1321 24.34H56.3841V22.42H59.1201C59.4881 22.42 59.7561 22.356 59.9241 22.228C60.0521 22.132 60.1161 21.988 60.1161 21.796C60.1161 21.684 60.0961 21.584 60.0561 21.496C60.0161 21.408 59.9321 21.328 59.8041 21.256C59.6761 21.184 59.4761 21.124 59.2041 21.076C58.9321 21.028 58.5641 21.004 58.1001 21.004C57.6361 21.004 57.2761 21.04 57.0201 21.112C56.5561 21.24 56.2881 21.42 56.2161 21.652C56.2001 21.684 56.1801 21.756 56.1561 21.868H53.2521V21.724C53.2521 21.34 53.3361 20.98 53.5041 20.644C53.7361 20.172 54.1521 19.788 54.7521 19.492C55.4721 19.132 56.4401 18.952 57.6561 18.952H58.3521C60.1201 18.952 61.3841 19.208 62.1441 19.72C62.6881 20.088 62.9601 20.592 62.9601 21.232V21.316C62.9601 21.74 62.8161 22.104 62.5281 22.408C62.2961 22.656 61.9721 22.836 61.5561 22.948C62.0281 23.052 62.4121 23.26 62.7081 23.572C63.0681 23.948 63.2481 24.424 63.2481 25V25.072C63.2481 25.936 62.9481 26.616 62.3481 27.112C61.5321 27.792 60.2041 28.132 58.3641 28.132H57.8001Z"
                                            fill="#95FCFD"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="100" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>{t('principleOfWork.content3')}</p>
                            </div>
                        </ReactWOW>
                    </div>
                    <ReactWOW animation="fadeInUp" delay="0.05s">
                        <div className={style.workPrinciples__buttonWrapper}>
                            <Button
                                style={orangeButtonStyle}
                                onClick={() => getStartde()}
                                type="button"
                                className={style.workPrinciples__getStartde}
                            >
                                {t('principleOfWork.begin')}
                            </Button>
                            <div
                                className={
                                    style.workPrinciples__buttonWrapper_iconsWrapper
                                }
                            >
                                <div>
                                    <img
                                        className={
                                            style.workPrinciples__buttonWrapper_icons
                                        }
                                        src={workPrinciplesIcon1}
                                        alt="workPrinciplesIcon1"
                                    />
                                    <p
                                        className={
                                            style.workPrinciples__buttonWrapper_text
                                        }
                                    >
                                        {t('principleOfWork.quick')} <br />{' '}
                                        {t('principleOfWork.payouts')}
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className={
                                            style.workPrinciples__buttonWrapper_icons
                                        }
                                        src={workPrinciplesIcon2}
                                        alt="workPrinciplesIcon2"
                                    />
                                    <p
                                        className={
                                            style.workPrinciples__buttonWrapper_text
                                        }
                                    >
                                        {t('principleOfWork.completely')} <br />{' '}
                                        {t('principleOfWork.safe')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </Fragment>
    );
};

export default WorkPrinciples;
