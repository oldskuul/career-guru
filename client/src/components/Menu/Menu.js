import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearAC, logoutAC } from "../../redux/actionCreators";
import styles from "./Menu.module.scss";

function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();

  function logout() {
    dispatch(clearAC())
    dispatch(logoutAC());
    history.push("/");
  }

  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      <hr />

      <ul>
        <li>
          <Link to="/home">Главная</Link>
        </li>
        <li>Избранное</li>
        <li>
          <Link to="/passed">Пройденные тесты</Link>
        </li>
        <li>
          <Link to="/cards">К изучению</Link>
        </li>
        <li onClick={logout}>Выйти</li>
      </ul>
    </div>
  );
}

export default Menu;
