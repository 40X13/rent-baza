import {CiSearch} from "react-icons/ci";

import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Burger from "./Burger/Burger";
import Navigation from "./Navigation/Navigation";

import logo from '../../pic/logo.png';

const CART='Cart';

const Header =({}) => {
  return(
      <div className={styles.header}>
        <div className={styles.middleWrap}>
            <Logo  pic={logo} alt={'logo'} title={"Rent Baza"}/>
            <Burger/>
            <Search icon={<CiSearch/>} text={'начать поиск'} />
            <Navigation/>
        </div>


      </div>
  );
}

export default Header;

