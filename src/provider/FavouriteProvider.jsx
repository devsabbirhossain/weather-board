import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addFavourite = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };

  const removeFavourite = (latitude, longitude, location) => {
    setFavourites(
      favourites.filter(
        (item) =>
          item.latitude !== latitude &&
          item.longitude !== longitude &&
          item.location !== location
      )
    );
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
