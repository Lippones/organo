import style from './Dropdown.module.css'
const Dropdown = (props)=>{
    return(
        <div className={style.drop}>
            <label>{props.label}</label>
            <select onChange={event =>props.state(event.target.value)} required={props.filled} value={props.value}>
                {props.items.map(item=>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;
