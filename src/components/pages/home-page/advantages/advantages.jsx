import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';

import blueCoin from '../../../assets/images/blueCoin.svg';
import advantages1 from './images/advantages1.svg';
import advantages2 from './images/advantages2.svg';
import advantages3 from './images/advantages3.svg';

import style from './advantages.module.scss';

const Advantages = () => (
    <Fragment>
        <div className={style.advantages} id="advantages">
            <ReactWOW animation="fadeInUp" delay="0.05s">
                <p className={style.advantages__title}>Преимущества</p>
                <div className={style.advantages__wrapper}>
                    <div className={style.advantages__wrapper_item}>
                        <img
                            className={style.advantages__wrapper_icon}
                            src={advantages1}
                            alt="advantages"
                        />
                        <p className={style.advantages__wrapper_content}>
                                Гарантия выплаты вознаграждения. В случае победы игрок
                                обязательно получит выигрыш, все выплаты проводятся через
                                блокчейн и каждую транзакцию можно отследить.
                        </p>
                    </div>
                    <div className={style.advantages__wrapper_item}>
                        <img
                            className={style.advantages__wrapper_icon}
                            src={advantages2}
                            alt="advantages"
                        />
                        <p className={style.advantages__wrapper_content}>
                                Отсутствие посредников и банков. Прямое взаимодействие
                                игрока и казино при переводе криптовалюты.
                        </p>
                    </div>
                    <div className={style.advantages__wrapper_item}>
                        <img
                            className={style.advantages__wrapper_icon}
                            src={advantages3}
                            alt="advantages"
                        />
                        <p className={style.advantages__wrapper_content}>
                                Казино работают в глобальной сети, как и
                                блокчейн-платформа. Отсутствуют границы, характерные для
                                фиатных денег.
                        </p>
                    </div>
                </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.05s">
                <img className={style.advantages_coin} src={blueCoin} alt="blueCoin" />
            </ReactWOW>
        </div>
    </Fragment>
);

export default Advantages;
