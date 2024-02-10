import styles from './Navigation.module.css';
import Controller from "../../common/Controller/Controller";

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

import { BsCart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";

import { HiOutlineUser } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";


const Navigation = ({isActiveModal, setIsActiveModal,setContentForModal }) => {

  return(
      <nav className={styles.navigation}>
        <Controller text={'избранное'} href='/' icon={<GoHeart />} />
        <Controller text={'профиль'} href='/' icon={<HiOutlineUser />} />
        <Controller text={'карзина'} href='/' icon={<BsCart />} counter={true}/>
      </nav>
  );
}

export default Navigation;