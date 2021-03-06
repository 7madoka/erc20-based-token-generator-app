import { connect } from "react-redux";

import { change, submit } from '../actions/tokenInputForm';
import tokenInputForm from "../components/tokenInputForm";

const mapStateToProps = (state) => {
    return {
        name: state.tokenInputForm.name,
        symbol: state.tokenInputForm.symbol,
        totalSupply: state.tokenInputForm.totalSupply,
        loading: state.tokenInputForm.loading,
        success: state.tokenInputForm.success,
        isMetaMaskInstalled: state.metaMask.isMetaMaskInstalled,
        currentNetwork: state.metaMask.network,
        error: state.tokenInputForm.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: ({type, value}) => {
            dispatch(change({
                type,
                value
            }));
        },
        handleSubmit: () => {
            dispatch(submit());
        },
        handleErrorReset: () => {
            dispatch({
                type: 'RESET_ERROR'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(tokenInputForm);