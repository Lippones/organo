import style from './Card.module.css'

const Card = ({name,img, charge})=>{
    return(
        <div className={style.container}>
            <div className={style.header}>
                {img!=''? <img src={img} alt={name}/>:<img src='https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png'/>}
            </div>
            <div className={style.footer}>
                <h4>{name}</h4>
                <h5>{charge}</h5>
            </div>
        </div>
    )
}
export default Card;