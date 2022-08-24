import Card from '../Card';
import style from './ListPlayers.module.css'

const ListPlayers=(props)=>{
    return(
        props.time.length > 0 &&
        <section className={style.list} style={{backgroundColor:props.corSecundaria}}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.title}</h3>
            <div className={style.card}>
                {props.time.map(player => <Card 
                key={player.name} 
                name={player.name}
                img={player.img}
                charge={player.charge}
                />)}
            </div>
        </section> 
    )
}
export default ListPlayers;