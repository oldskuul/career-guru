import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import AuthPage from "../AuthPage/AuthPage";
import LoginPage from "../LoginPage/LoginPage";
import StartPage from "../StartPage/StartPage";
import Deck from "../Deck/Deck";
import styles from "./App.module.scss";
import AdminPage from "../AdminForm/AdminForm";
import TestingPage from "../TestingPage/TestingPage";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ResultPage from "../ResultPage/ResultPage";
import PassedTests from "../PassedTests/PassedTests";
import UserQuestion from "../UserQuestion/UserQuestion";
import {checkTokenAC} from '../../redux/thunk/checkTokenAC'

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);

  useEffect(() => {
    dispatch(checkTokenAC());
  }, [dispatch]);
     
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.container}>

        <Switch location={background || location}>
          {/* !isLogin */}
          <Route exact path="/"><StartPage /></Route>
          <Route path="/login">
            {isAuth && isAdmin ? (
              <Redirect to="/admin" />
            ) : isAuth ? (
              <Redirect to="/home" />
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route path="/signup">
            {isAuth ? <Redirect to="/home" /> : <AuthPage />}
          </Route>

          <Route path="/usercard">
            <div>
              <UserQuestion />
            </div>
          </Route>
          <Route path="/passed">
            <div>
              <PassedTests />
            </div>
          </Route>

          <Route path="/cards">
            <div className={styles.cardsWrapper}>
              <Deck />
            </div>
          </Route>

          {/* isLogin */}
          <PrivateRoute path="/admin" children={<AdminPage />} />

          <PrivateRoute path="/home" children={<Home />} />

          <PrivateRoute path="/test" children={<TestingPage />} />

          <PrivateRoute path="/results" children={<ResultPage />} />
          
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
