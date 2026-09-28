
import styles from "./Categories.module.css";
import Pizza from "../../assets/pizza.jpg";
import Burger from "../../assets/burger.jpg";
import Pasta from "../../assets/pasta.jpg";
import Salad from "../../assets/salad.jpg";
import Drinks from "../../assets/drinks.png";

function Categories() {
  return (
    <section className={styles.categories} id="Menu">
        <div className={styles.heading}>
            <h1>Explore Our Categories</h1>
            <p>Discover a variety of cuisines with the freshest ingredients and flavors.</p>
        </div>
        <div className={styles.categoriesContainer}>
            <div className={styles.categoryItem}>
                <img src={Pizza} alt="Pizza" />
                <h2>Pizza</h2>
            </div>
            <div className={styles.categoryItem}>
                <img src={Burger} alt="Burger" />
                <h2>Burger</h2>
            </div>
            <div className={styles.categoryItem}>
                <img src={Pasta} alt="Pasta" />
                <h2>Pasta</h2>
            </div>
            <div className={styles.categoryItem}>
                <img src={Salad} alt="Salad" />
                <h2>Salad</h2>
            </div>
             <div className={styles.categoryItem}>
                <img src={Drinks} alt="Drinks" />
                <h2>Drinks</h2>
            </div>
        </div>
    </section>
  );
}

export default Categories;