import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import AuthPage from "../AuthPage/AuthPage";
import LoginPage from "../LoginPage/LoginPage";
import StartPage from "../StartPage/StartPage";
import Deck from "../Deck/Deck";
import styles from "./App.module.scss";
import AdminPage from "../AdminForm/AdminForm";
import { initCardsFetchAC } from "../../redux/thunk/adminFetchAC";
import { useDispatch, useSelector } from "react-redux";
import TestingPage from "../TestingPage/TestingPage";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { checkTokenAC } from "../../redux/thunk/checkToken";
import ResultPage from "../ResultPage/ResultPage";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    dispatch(initCardsFetchAC());
  }, [dispatch]);
  useEffect(() => {
    dispatch(checkTokenAC());
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.container}>
        <Switch location={background || location}>
          {/* !isLogin */}
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/login">
            {isAuth ? <Redirect to="/home" /> : <LoginPage />}
          </Route>
          <Route path="/signup">
            {isAuth ? <Redirect to="/home" /> : <AuthPage />}
          </Route>
          <Route path="/cards">
            <div className={styles.cardsWrapper}>
              <Deck />
            </div>
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/results">
            <ResultPage />
          </Route>
          {/* isLogin */}
          <PrivateRoute path="/home" children={<Home />} />

          <PrivateRoute path="/test" children={<TestingPage />} />
        </Switch>
      </div>
      {background && (
        <Route path="/menu">
          <Modal />
        </Route>
      )}
    </React.Fragment>
  );
}

export default App;
