import { connect } from "react-redux";

import Header from '../components/header';

const mapStateToProps = (state) => {
    return {
        isMetaMaskLocked: state.metaMask.isMetaMaskLocked
    }
};

export default connect(mapStateToProps, null)(Header);