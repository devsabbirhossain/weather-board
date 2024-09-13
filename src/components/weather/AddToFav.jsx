import { useContext, useEffect, useState } from "react";
import FavouriteIconRed from "../../assets/heart-red.svg";
import FavouriteIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

function AddToFav() {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  function handleToggleFav() {
    const found = favourites.find(
      (fav) =>
        fav.latitude === latitude &&
        fav.longitude === longitude &&
        fav.location === location
    );
    if (found) {
      removeFavourite(latitude, longitude, location);
    } else {
      addFavourite(latitude, longitude, location);
    }
    setIsFavourite(!isFavourite);
  }

  useEffect(() => {
    const found = favourites.find(
      (fav) =>
        fav.latitude === latitude &&
        fav.longitude === longitude &&
        fav.location === location
    );
    setIsFavourite(found);

    return () => {
      setIsFavourite(false);
    };
  }, []);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleToggleFav}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src={isFavourite ? FavouriteIconRed : FavouriteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddToFav;
