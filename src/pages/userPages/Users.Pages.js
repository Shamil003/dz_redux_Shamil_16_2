import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../redux/slice";
import Card from "../../cards/card";


const UsersPages = () => {
    const state = useSelector((state) => state.coreReducer)
    const dispatch = useDispatch()

    const check = () => {
        dispatch(getData())
    }
    return (
        <div>
            <button onClick={check}>add</button>
            {
                state?.data.map((item, i) =>
                    <li key={i}>
                        <Card item={item}/>
                    </li>
                )
            }
        </div>
    );
};

export default UsersPages;