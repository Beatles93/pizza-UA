import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { setSearchValue } from "../../redux/filter/slice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M16.3198574,14.9056439 L21.7071068,20.2928932 L20.2928932,21.7071068 L14.9056439,16.3198574 C13.5509601,17.3729184 11.8487115,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,11.8487115 17.3729184,13.5509601 16.3198574,14.9056439 Z M10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 Z"
          fillRule="evenodd"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="14px"
          version="1.1"
          viewBox="0 0 14 14"
          width="14px"
        >
          <title />
          <desc />
          <defs />
          <g
            fill="none"
            fillRule="evenodd"
            id="Page-1"
            stroke="none"
            strokeWidth="1"
          >
            <g
              fill="#000000"
              id="Core"
              transform="translate(-341.000000, -89.000000)"
            >
              <g id="close" transform="translate(341.000000, 89.000000)">
                <path
                  d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
