import { useState } from "react";
import FavouriteIconRed from "../../assets/heart-red.svg";
import FavouriteIcon from "../../assets/heart.svg";

function AddToFav() {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleToggleFav() {
    setIsFavourite(!isFavourite);
  }
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
