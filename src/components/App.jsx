import { authByGoogle } from "redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from "../firebase/firebase"
import { Gallery } from "./Gallery/Gallery";


export const App = () => {

  const dispatcher = useDispatch()

  const user = useSelector((state)=>{return state.auth.user})
  

  const onClickHandler = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log("Res:", res);
    dispatcher(authByGoogle(res.user));

  }

  return (
    <div>
      {user ? <><h3>{user.displayName}</h3><Gallery /> </> 
      :
      <button type="button" onClick={onClickHandler}>Authentication</button>}
    </div>
  );
};
