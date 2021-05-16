//Components
import Header from './components/header';
import Footer from './components/footer';
import SearchItem from './components/searchItem';
//React
import { useState, useEffect } from 'react';
import {RootState} from '../redux/reducer';
//Redux
import { useSelector } from 'react-redux';

export default function Search() {
    const [input, setInput] = useState('');
    const [movieInfo, setMovieInfo] = useState([]);
    const theme = useSelector((state : RootState) => state.themes);
    const [windowSize, setWindowSize] = useState(1200);

    const searchMovie = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${input}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            let dataArr = data.results;

            setMovieInfo(dataArr.filter(movie => movie.poster_path).slice(0, 6))

        } catch (err) {
            console.log(err);
        }
    };

    const makeEmptySpace = (movieInfo) => {
        if (movieInfo.length == 0) {
            return windowSize/3;
        }
        return 0;
    };

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => setWindowSize(window.innerWidth);
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const EmptySpace = makeEmptySpace(movieInfo);
    return (
        <div className='searchWrapper'>
            <style jsx>{`
                    .searchWrapper {
                        background-color: ${theme.backgroundColor};
                        color : ${theme.textColor};
                    }
                    .searchButton {
                        background-color: ${theme.buttonColor};
                    }
                    .searchTitleContainer {
                        padding-bottom: ${EmptySpace}px;
                    }

                `}</style>
            <Header></Header>
            <div className='searchTitleContainer'>
                <h1>Search for movies</h1>
                <div className='searchEngineContainer'>
                    <div className='searchInputContainer'>
                        <input
                            className="seachInput"
                            type='text'
                            name='Search'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => searchMovie()}
                        className="searchButton"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="searchItemContainer">
                {movieInfo == [] ? '' : movieInfo.map(movie => (
                    <SearchItem movie={movie} key={movie.id} />
                ))}
            </div>


            <div className='erroMsg'>

            </div>
            <Footer></Footer>
        </div>
    );
}