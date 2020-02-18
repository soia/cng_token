import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { message as antMessage } from 'antd';

import PostService from '../../../../services/post-service';
import Button from '../../../small-components/button';
import Field from '../../../small-components/field';
import { compose } from '../../../../utils';

import style from './questions.module.scss';

export class Questions extends Component {
    postService = new PostService();

    state = {
        user: {
            email: '',
            subject: '',
            message: '',
        },

        errors: {
            emailError: '',
            subjectError: '',
            messageError: '',
        },
    };

    InputOnchange = event => {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value,
            },
        });
    };

    sendQuestion = event => {
        event.preventDefault();
        const { t, loggedIn } = this.props;
        const {
            user: { email, subject, message },
        } = this.state;
        const { user } = this.state;
        const errors = {};

        if (
            !!email === false
            || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
        ) {
            errors.emailError = t('error.email');
        }

        if (subject.length < 4) {
            errors.subjectError = t('error.input', { count: 4 });
        }

        if (message.length < 4) {
            errors.messageError = t('error.input', { count: 4 });
        }

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors,
            });
        } else {
            this.setState({
                errors: {},
            });
            if (loggedIn) {
                this.postService
                    .questionForm(user)
                    .catch(err => {
                        message.error(err, 2);
                    });
            } else {
                this.postService
                    .questionFormAnonymous(user)
                    .catch(err => {
                        message.error(err, 2);
                    });
            }

            this.setState({
                user: {
                    email: '',
                    subject: '',
                    message: '',
                },
            });
            antMessage.success(t('general.messageSent'), 2);
        }
    };

    render() {
        const { t } = this.props;
        const {
            errors: { emailError, subjectError, messageError },
            user: { email, subject, message },
        } = this.state;

        return (
            <Fragment>
                <div className={style.questions}>
                    <div className={style.questions__leftSide}>
                        {t('questions.title')}
                    </div>
                    <div className={style.questions__rightSide}>
                        <form
                            onSubmit={this.sendQuestion}
                            className={style.sendQuestion__form}
                        >
                            <div className={style.sendQuestion__inputWrapper}>
                                <div className={style.sendQuestion__inputWrapper_item}>
                                    <Field
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={this.InputOnchange}
                                        error={emailError}
                                        inputStyle={style.sendQuestion__input}
                                        labelText="Email"
                                        labelStyle={style.sendQuestion__label}
                                        maxLength="100"
                                    />
                                </div>
                                <div className={style.sendQuestion__inputWrapper_item}>
                                    <Field
                                        id="subject"
                                        type="text"
                                        placeholder={t('form.topic')}
                                        name="subject"
                                        value={subject}
                                        onChange={this.InputOnchange}
                                        error={subjectError}
                                        inputStyle={style.sendQuestion__input}
                                        labelText={t('form.topic')}
                                        labelStyle={style.sendQuestion__label}
                                        maxLength="100"
                                    />
                                </div>
                            </div>

                            <label
                                className={style.sendQuestion__label}
                                htmlFor="message"
                            >
                                {t('form.message')}
                                <textarea
                                    id="message"
                                    placeholder={t('form.typyMessage')}
                                    name="message"
                                    value={message}
                                    onChange={this.InputOnchange}
                                    className={style.sendQuestion__textarea}
                                    maxLength="500"
                                />
                            </label>
                            {messageError ? (
                                <div className={style.sendQuestion__inputError}>
                                    {messageError}
                                </div>
                            ) : null}
                            <Button
                                type="submit"
                                className={style.questions__rightSide_button}
                            >
                                {t('general.send')}
                            </Button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Questions.defaultProps = {
    t: () => {},
    loggedIn: false,
};

Questions.propTypes = {
    t: PropTypes.func,
    loggedIn: PropTypes.bool,
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(connect(mapStateToProps), withTranslation())(Questions);
