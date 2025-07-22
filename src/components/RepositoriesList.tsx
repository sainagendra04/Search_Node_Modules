import { useState, useSyncExternalStore } from "react";
import { useAction } from "../hooks/useAction";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxState/reducers";
import { useTypedSelector } from "../hooks/useTypedSelectors";
// import { useDispatch } from "react-redux";
// import { actionCreators } from '../ReduxState';

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    //const dispatch = useDispatch();
    const { searchRepositories } = useAction();
    const { data, error, loading} = useTypedSelector((state) => state.repositories);
    const onsubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //dispatch(actionCreators.searchRepositories(term) as any);
        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onsubmit}>
            <input value={term} onChange={e=> setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        { error && <h3>{error}</h3> }
        {loading && <h3>Loading...</h3>}
        { !error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
};

export default RepositoriesList;