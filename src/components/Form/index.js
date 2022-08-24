import Dropdown from '../Dropdown';
import style from './Form.module.css'
import InputText from './InputText';
import Button from '../Button';
import { useState } from 'react';

const Form = (props)=>{
   const onClickSubmit= (event)=>{
        event.preventDefault();
        props.onPlayer({
            name,
            charge,
            img,
            list
        })
        setName("")
        setImg("")
        setList("")
        setCharge("")
   }
    const[name, setName] = useState('');
    const[charge, setCharge] = useState('');
    const[img, setImg] = useState('');
    const[list, setList] = useState('Duelista');
    return(
        <div className={style.container}>
            <form onSubmit={onClickSubmit}>
            <h1 className={style.titulo}>Preencha os dados para criar o card do jogador</h1>
                <InputText 
                    filled={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    state={value =>setName(value)}
                    />
                <InputText 
                    filled={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={charge}
                    state={value =>setCharge(value)}
                    />
                <InputText 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={img}
                    state={value =>setImg(value)}
                    />
                <Dropdown 
                    filled={true} 
                    label ="Time" 
                    items={props.times}
                    value={list}
                    state={value =>setList(value)}
                    />
                <Button filled={true}>Criar card</Button>
            </form>
        </div>
    )
}
export default Form;