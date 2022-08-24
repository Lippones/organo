import style from './Button.module.css'

const Button = (props)=>{
    return(
        <button required={props.filled} className={style.button}>{props.children}</button>
    )
}
export default Button;