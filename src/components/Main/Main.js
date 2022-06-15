import React from "react";
import Card from "../Card/Card";
import { ReactComponent as Loader } from '../../assets/images/loader.svg';
import styles from './Main.module.css';

const Main = (props) => {
    const { isLoading, hotels } = props;
    return (
        <div className="container">
            <h1 className={`title ${styles["title"]}`}>Bienvenido a Maimo</h1>
            <h2 className={`subtitle ${styles["title"]}`}>Los mejores hoteles</h2>
            {!isLoading ? (
                hotels.length > 0 ? (
                    <div className="columns is-multiline is-mobile">
                        {hotels.map((hotel) =>
                            <Card key={hotel.name} hotel={hotel} />
                        )}
                    </div>
                )
                    :
                    (<p> NO HAY RESULTADOS </p>)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Main;
