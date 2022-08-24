import BannerImg from '../../assets/img/banner.png';
import style from './Banner.module.css'

const Banner = () => {
    return(
        <header className={style.banner}>
            <img src={BannerImg} alt='Banner da pagina' className={style.img}/>
        </header>
    )
}
export default Banner;