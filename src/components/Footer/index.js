import Twitter from "../../assets/img/tw.png"
import Facebook from '../../assets/img/fb.png'
import Logo from '../../assets/img/logo.png'
import Insta from '../../assets/img/ig.png'
import style from './Footer.module.css'

const Footer=()=>{
    return (<footer className={style.footer}>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={Twitter} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={Insta} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={Logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Filipe.
            </p>
        </section>
    </footer>)
}
export default Footer;