import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home,Public , Persional} from "./containers/public";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from './store/actions'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])
  const { test} = useSelector(state => state.app)
  
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
            <Route path={path.HOME} element={<Home/>} />
            <Route path={path.MY_MUSIC} element={<Persional/>} />



            <Route path={path.STAR} element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
