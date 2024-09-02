import React, { useContext, useState } from "react";
import "./PropertyDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import PropertyItem from "../PropertyItem/PropertyItem";

const propertyDisplay = () => {
    const { property_list } = useContext(StoreContext);
    const [locationFilter, setLocationFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [bedroomsFilter, setBedroomsFilter] = useState("");

    const filteredpropertyList = property_list.filter((item) => {
        return (
            (locationFilter
                ? item.location
                      .toLowerCase()
                      .includes(locationFilter.toLowerCase())
                : true) &&
            (priceFilter ? item.price <= priceFilter : true) &&
            (bedroomsFilter ? item.no_of_bedrooms >= bedroomsFilter : true)
        );
    });

    return (
        <div className="property-display" id="property-display">
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Filter by location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by max price"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by min bedrooms"
                    value={bedroomsFilter}
                    onChange={(e) => setBedroomsFilter(e.target.value)}
                />
            </div>
            <p className="property-display-note">
                My Property are only available in Delhi, Noida, and Gurugram.
            </p>
            <div className="property-display-list">
                {filteredpropertyList.map((item, index) => {
                    return (
                        <PropertyItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            location={item.location}
                            no_of_bedrooms={item.no_of_bedrooms}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default propertyDisplay;
