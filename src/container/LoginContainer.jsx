import { connect } from "react-redux";
import Login from "../Pages/login/Login";
import { loginTrue } from "../components/services/actions/ActionLogin";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({
  userLogin: (data) => {
    console.log("data container", data);
    return dispatch(loginTrue(data));
  },
});

export default connect(mapState, mapDispatch)(Login);
