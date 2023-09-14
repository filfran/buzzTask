import { createContext, useState } from "react";
import { places as pl } from "../data/data";
import { capitalizeFirstLetter } from "../utils/helpers";

export const PlacesContext = createContext();

function PlacesContextProvider({ children }) {
  const [places, setPlaces] = useState(pl);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const categoriesSet = new Set(
    pl.map((place) => capitalizeFirstLetter(place.category))
  );
  const categories = Array.from(categoriesSet);
  categories.unshift("Category");

  const filterByCategory = (category) => {
    const filteredPlaces =
      category === "Category"
        ? pl
        : pl.filter((place) => place.category === category.toLowerCase());

    setPlaces(filteredPlaces);
    setSelectedPlace(null);
  };

  const selectPlace = (id) => {
    const activePlace = pl.find((place) => place.id === id);
    setSelectedPlace(activePlace);
  };

  return (
    <PlacesContext.Provider
      value={{
        places,
        categories,
        selectedPlace,
        filterByCategory,
        selectPlace,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
}

export default PlacesContextProvider;
