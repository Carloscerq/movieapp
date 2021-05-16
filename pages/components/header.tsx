//FontAwesome
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, THEME_D, THEME_L } from '../../redux/actions';
import {RootState} from '../../redux/reducer';
//Utils
import { theme } from '../../utils/interfaces';

//React/Next
import Link from 'next/link'

export default function Header() {
    const theme = useSelector((state : RootState) => state.themes);
    const dispatch = useDispatch();

    //Function to update the theme
    const updateTheme = () => {
        dispatch(setTheme(theme))
        console.log(theme)
    }

    // Get the correct icon
    const getThemeValue = (theme: theme) => {
        if (theme.type == THEME_D) {
            return faMoon;
        } else {
            return faLightbulb;
        }
    }

    // Icon to be displayed
    let themeValue = getThemeValue(theme);

    return (
        <div className="headerContainer">
            <style jsx>{`
                .headerContainer{
                    background-color: ${theme.backgroundColor};
                    color : ${theme.textColor};
                    border-bottom: 2px solid ${theme.buttonColor};
                }
                .headerItensButton {
                    background-color: ${theme.buttonColor};
                }
            `}</style>

            <div className="headerTitle">
                <Link href='/'>
                    Review
                    </Link>
            </div>
            <div className="headerItensWrapper">
                <div className='headerIten'>
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className='headerIten'>
                    <Link href='/author'>
                        Autor
                    </Link>
                </div>
                <div className='headerIten'>
                    <a href='https://github.com/Carloscerq/movie-albuns-site' className='headerIten'>Github</a>
                </div>
                <button onClick={() => updateTheme()} className="headerIten headerItensButton">
                    <FontAwesomeIcon className='fa-fw' icon={themeValue} />
                </button>
            </div>
        </div>
    );
}