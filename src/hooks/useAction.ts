import { useDispatch } from "react-redux";
import { actionCreators } from '../ReduxState';
import { bindActionCreators } from "redux";

export const useAction = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};