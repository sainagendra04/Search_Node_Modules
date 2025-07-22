import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../ReduxState/reducers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
