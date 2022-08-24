import style from './InputText.module.css'

const InputText = (props)=>{
    const onChange=(event)=>{
        props.state(event.target.value)
    }
    return(
        <div className={style.divForm}>
            <label id={props.label}>{props.label}</label>
            <input value={props.value} onChange={onChange} required={props.filled} id={props.label} name={props.label} type='text' placeholder={props.placeholder}/>
        </div>
    )
}
export default InputText;