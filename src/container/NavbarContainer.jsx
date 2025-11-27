import { connect } from "react-redux";
import Navbar from "../components/shared/navbar/Navbar";
import { loginFalse } from "../components/services/actions/ActionLogin";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({
  userLogOut: (data) => {
    console.log("data container Navbar", data);
    return dispatch(loginFalse(data));
  },
});

export default connect(mapState, mapDispatch)(Navbar);
