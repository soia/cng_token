import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SliderWithRightSideText from '../../../layouts/slider-with-right-side-text';
import { compose } from '../../../../utils';
import { FilterActions } from '../../../../actions';

import EDC from './images/EDC.png';
import BTC from './images/BTC.svg';
import DASH from './images/DASH.svg';
import ETH from './images/ETH.svg';
import LTC from './images/LTC.svg';
import ZEC from './images/ZCASH.svg';

export class WorkWith extends Component {
    setCoinToFilter = coin => {
        const { filterParams, dispatchCoinToFilter } = this.props;

        const data = {
            ...filterParams,
            coin,
        };

        dispatchCoinToFilter(data);
    }

    render() {
        const {
            t,
        } = this.props;

        const slickImg = [
            {
                img: EDC,
                alt: 'EDC',
            },
            {
                img: BTC,
                alt: 'BTC',
            },
            {
                img: DASH,
                alt: 'DASH',
            },
            {
                img: ETH,
                alt: 'ETH',
            },
            {
                img: LTC,
                alt: 'LTC',
            },
            {
                img: ZEC,
                alt: 'ZEC',
            },
        ];

        return (
            <Fragment>
                <SliderWithRightSideText
                    id="workWith"
                    slickImg={slickImg}
                    title={t('workWith.title')}
                    subtitle={t('workWith.subtitle')}
                    setCoinToFilter={this.setCoinToFilter}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {
        modalTrade: { modalTrade },
        currentFilter: { filterParams },
        getAllOrders: { orders, error, loading },
        authentication: { loggedIn },
    } = state;

    return {
        modalTrade,
        filterParams,
        orders,
        error,
        loading,
        loggedIn,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        dispatchCoinToFilter: data => FilterActions.selectFilter(data),
    },
    dispatch,
);

WorkWith.defaultProps = {
    t: () => {},
    dispatchCoinToFilter: () => {},
    filterParams: {},
};

WorkWith.propTypes = {
    t: PropTypes.func,
    dispatchCoinToFilter: PropTypes.func,
    filterParams: PropTypes.object,
};

export default compose(
    withTranslation(),
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(WorkWith);
