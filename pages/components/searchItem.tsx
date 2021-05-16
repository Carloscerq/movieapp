//FontAwesome
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
//React
import { useState } from 'react';


export default function SearchItem(movieInfo) {
    const movie = { ...movieInfo.movie }
    const theme = useSelector((state: RootState) => state.themes);
    const [fontSize, setFontSize] = useState(titleSize(movie.title))

    const thumbFromRating = (rating: number) => {
        if (rating >= 7.0) {
            return faThumbsUp;
        }
        return faThumbsDown;
    }

    function titleSize(title: string) {
        if (typeof (title) == 'string') {
            if (title.length > 20) {
                return 14;
            }
            return 16;
        }
    }

    const thumbIcon = thumbFromRating(movie.vote_average);
    return (
        <div className="itemContainer">
            <style jsx>{`
                .itemTitle {
                    border-bottom:1px solid ${theme.textColor};
                }
                .itemTitle {
                    font-size : ${fontSize}px;
                }

            `}</style>
            <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className='itemTitle'>
                {movie.title} <FontAwesomeIcon icon={thumbIcon} />
            </div>
        </div>
    );
}