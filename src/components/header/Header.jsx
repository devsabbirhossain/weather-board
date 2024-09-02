import { useState } from "react";

import LocationList from "./LocationList";
import LocationListButton from "./LocationListButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

function Header() {
  const [showFavList, setShowFavList] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchForm />
          <LocationListButton
            onShow={() => setShowFavList(!showFavList)}
            showFavList={showFavList}
          />
          {showFavList && <LocationList />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
