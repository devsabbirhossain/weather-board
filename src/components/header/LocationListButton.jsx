import FavouriteIcon from "../../assets/heart.svg";

function LocationListButton({ onShow }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={FavouriteIcon} alt="fav-icon" />
      <button onClick={onShow}>Favourite Locations</button>
    </div>
  );
}

export default LocationListButton;
