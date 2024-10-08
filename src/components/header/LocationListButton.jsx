import FavouriteIconRed from "../../assets/heart-red.svg";
import FavouriteIcon from "../../assets/heart.svg";

function LocationListButton({ onShow, showFavList }) {
  return (
    <button
      onClick={onShow}
      className="p-2 hover:bg-black/30 bg-black/60 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white hover:text-gray-300">
      <img
        src={showFavList ? FavouriteIconRed : FavouriteIcon}
        alt="fav-icon"
      />
      <span>Favourite Locations</span>
    </button>
  );
}

export default LocationListButton;
