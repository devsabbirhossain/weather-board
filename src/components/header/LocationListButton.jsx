import FavouriteIcon from "../../assets/heart.svg";

function LocationListButton() {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={FavouriteIcon} alt="fav-icon" />
      <span>Favourite Locations</span>
    </div>
  );
}

export default LocationListButton;
