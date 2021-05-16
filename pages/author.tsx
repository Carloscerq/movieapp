//Components
import Header from './components/header';
import Footer from './components/footer';
//Redux
import { useSelector } from 'react-redux'
//React Next
import Image from 'next/image'

export default function Author() {

    const theme = useSelector(state => state.themes);
    const imgSize = 700;

    return (
        <div>
            <Header></Header>
            <div className="AboutAuthorWrapper">
                <style jsx>{`
                    .AboutAuthorWrapper{
                        background-color: ${theme.backgroundColor};
                        color : ${theme.textColor};
                    }
                `}</style>
                <div className="AboutAuthorTextContainer">
                    <div className="AboutAuthorImgContainer">
                        <Image
                            className="AboutAuthorImg"
                            src='/Author.png'
                            width={imgSize}
                            height={imgSize}
                        />
                        <div className="AboutAuthorText">
                            <h1 className="AboutAuthorTitle">Quem Sou?</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus vestibulum facilisis. Suspendisse imperdiet et lectus eu scelerisque. Quisque interdum, nibh vel viverra aliquet, orci purus placerat felis, a vestibulum justo felis quis lectus. Ut egestas et turpis sed tincidunt. Proin sed ante non magna aliquam fringilla nec in metus. Nam condimentum finibus ligula, in facilisis ante tempor at. Aenean in tellus libero. </span>
                            <span>Donec sed cursus turpis. Suspendisse maximus justo vel mauris pretium finibus. </span>
                        </div>
                    </div>
                    <div className="AboutAuthorText">
                        <span>Mauris lobortis, nunc et fringilla dictum, neque justo malesuada nibh, eu egestas urna eros in urna. Pellentesque convallis bibendum vehicula. Proin convallis commodo blandit. Suspendisse eget lacus vitae mi semper egestas. Proin molestie lectus in nibh vulputate posuere at id sapien. Sed id erat id mi vehicula pharetra. Morbi eget porttitor nibh. In congue molestie imperdiet. Aenean tempor gravida faucibus. </span>
                        <span>Vivamus lacus risus, pharetra convallis feugiat ut, accumsan et lectus. Vestibulum convallis lobortis pretium. Nulla id urna lorem. Sed eu rutrum risus. Nunc tincidunt erat sit amet eros eleifend, pharetra aliquam arcu consectetur. Donec varius metus sed lectus interdum dapibus. Pellentesque at metus in nisl pellentesque rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In non eros vitae sapien congue eleifend. Phasellus accumsan lacus vitae leo mollis venenatis. </span>
                        <br></br>
                        <br></br>
                        <span>Mauris mollis cursus massa, in laoreet metus. Nam eget tortor iaculis, commodo nulla eu, pellentesque purus. Etiam faucibus diam quis ex ultrices, commodo accumsan felis tincidunt. Suspendisse purus arcu, vehicula at pretium ut, dictum posuere enim. Sed porttitor ligula nec odio dapibus, ac rutrum ligula commodo. Nulla ornare sit amet velit eget lobortis. Quisque vitae odio elementum ante bibendum pretium. Mauris condimentum iaculis dui, ac pretium risus luctus sed. Quisque tellus augue, sagittis et libero eget, gravida feugiat augue. Duis venenatis a metus quis tincidunt. Donec nec ex non mauris aliquam venenatis. Sed elementum venenatis ligula, sit amet lobortis mauris laoreet quis. Cras faucibus tempor tristique. Ut neque lorem, volutpat ac suscipit et, dignissim et mi. Donec volutpat, massa nec tincidunt fringilla, enim tortor consequat sapien, facilisis ultrices orci neque eu massa. Integer ut metus erat. </span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}