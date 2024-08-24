import { createContext, useEffect, useReducer,useState } from "react";

export const ContextGlobal = createContext(undefined);

const getFavsFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];

    
}
const saveFavsInStorage = (favs) => {
        localStorage.setItem("favs", JSON.stringify(favs));
}

const initialState = { isDark: false, gfavs: getFavsFromStorage()};

const reducer = (state, action) => {
    switch (action.type) {
        case "add_fav":
            const newState = { ...state, favs: [...state.gfavs, action.payload]};
            saveFavsInStorage(newState.favs);
            alert("Favorite Added");
            return newState;

            case "remove_fav":
                const filteredFavs = state.filter(
                    (item) => item.id !== action.payload.id
                );
                saveFavsInStorage(filteredFavs);
                return filteredFavs;
            case "toggle_theme":
                console.log(state);
                const newThemeState = { ...state, isDark: !state.isDark };
                return newThemeState;
            default:
                return state;
    }
}

const ContextProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [libros, setLibros] = useState([]);

    const getLibros = async () =>{
        const res = await fetch("http://localhost:3000/api/libros");
        const data = await res.json();
        setLibros(data);
    };
    
    useEffect(()=> {
        getLibros();
    }, []);

    return (
        <ContextGlobal.Provider vale={{ libros, dispatch, state}}>
            {children}
        </ContextGlobal.Provider>
    )
}
export default ContextProvider;