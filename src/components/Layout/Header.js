import styles from "./Header.module.css";
import foodOnTableImage from "../../assets/food-on-table.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food Order</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['image-div']}>
        <img src={foodOnTableImage} alt="Food on table"/>
      </div>
    </>
  );
};

export default Header;
