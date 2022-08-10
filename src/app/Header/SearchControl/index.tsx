import React, {FC} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg";
import css from "./styles.module.scss";

type PropTypes = {
  className: string,
  onRedirectToResult: () => void
};

export const SearchControl: FC<PropTypes> = ({className, onRedirectToResult}) => {
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = React.useState<any>([]);
  const [isShowSearchResult, setIsShowSearchResult] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const searchInputHandle = (e: any) => {
    setIsShowSearchResult(true);
    const text = e.target.value;
    if (!text) {
        setSearchResult([]);
        return;
    }

    (async () => {
        try {
            setSearchResult([
              "lol",
              "kek",
              "kek",
              "kek",
              "kek",
              "kek",
              "kek",
              "kek",
              "kek",
              "kek",
              "chebrek",
              "Bassein"
            ]);
        } catch (err) {
            console.error("search", err);
        }
    })();
  };
  

  const searchSubmitByEnter = (e: any) => {
    if (e.type === "keydown" && e.code === "Enter") {
      submitSearch();
      navigate("coupon/232"); // TODO: redirect to Search page
    }
  };

  const submitSearch = () => {
    if (inputRef.current)
      inputRef.current.value = "";
    setIsShowSearchResult(false);
    onRedirectToResult?.();
};

  return (
    <div className={cn(css.root, className)}>
      <input 
        ref={inputRef}
        type="text"
        placeholder="Поиск"
        onChange={searchInputHandle}
        onKeyDown={searchSubmitByEnter}
      />
      <div className={css.searchIcon} >
        <SearchIcon/>
      </div>
      {
        (isShowSearchResult && searchResult.length)
          ? (
            <ul className={css.searchResult}>
              {
                searchResult.map((x: any, i: number) => {
                  return (
                    <div 
                      key={i}
                      className={css.searchItem}
                      // onClick={() => searchResultItemClicked(x.id)}
                    >
                        {x}
                    </div>
                  );
                })
              }
            </ul>
          )
          : null
      }
    </div>
  );
};

// SearchControl.propTypes = propTypes;