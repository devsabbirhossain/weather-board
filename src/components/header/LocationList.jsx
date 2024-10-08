import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

function LocationList() {
  const { favourites } = useContext(FavouriteContext);
  const { setSearchLocation } = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav, index) => (
            <li
              key={index}
              className="hover:bg-gray-200"
              onClick={() => setSearchLocation(fav)}>
              {fav.location}
            </li>
          ))
        ) : (
          <li className="text-center">No Favourites Found!</li>
        )}
      </ul>
    </div>
  );
}

export default LocationList;
