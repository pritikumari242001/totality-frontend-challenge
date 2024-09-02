import React, { useContext } from "react";
import "./PropertyItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const PropertyItem = ({
    id,
    name,
    price,
    description,
    image,
    location,
    no_of_bedrooms,
}) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="property-item">
            <div className="property-item-img-container">
                <img className="property-item-image" src={image} alt="" />
                {!cartItems[id] ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="property-item-counter">
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt=""
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="property-item-info">
                <div className="property-item-name-rating">
                    <p>{name}</p>
                </div>
                <p className="property-item-desc">{description}</p>
                <p className="property-item-loc">
                    <i class="fa-solid fa-location-dot"></i>
                    {location}
                </p>
                <p className="property-item-desc">
                    {" "}
                    <i class="fa-solid fa-house"></i>
                    {no_of_bedrooms} Bedrooms
                </p>
                <p className="property-item-price">${price}</p>
            </div>
        </div>
    );
};

export default PropertyItem;
