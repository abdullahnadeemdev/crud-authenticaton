import { connect } from "react-redux";
import RouteComp from "../routes";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RouteComp);
