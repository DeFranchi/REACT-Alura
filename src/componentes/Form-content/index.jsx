import Form from '../Form/Form';
import './Form-content.css'
import ListaIndex from '../ListaSuspensa/ListaIndex';
import Button from '../Button';
import { useState } from 'react';

const FormContent = (props) => {


    const times = [
        'Programacao',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e design',
        'Mobile',
        'Inovacao e Gestao'

    ]

    const toSave = (evento) => {
        evento.preventDefault();
        props.newEmployee({
            nome,
            cargo,
            imagem, 
            list,
        })
    
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [list, setList] = useState('')

    return (
        <section className='form-content'>
            <form onSubmit={ toSave }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Form 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                alterado={valor => setNome(valor)}
                />
                <Form 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                alterado={valor => setCargo(valor)}
                />
                <Form 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite o endereco da imagem"
                valor={imagem}
                alterado={valor => setImagem(valor)}
                />
                <ListaIndex 
                obrigatorio={true} 
                label="Time" 
                itens={times} 
                valor={list}
                listAlterado={valor => setList(valor)}
                />
                <Button>
                    <span>Criar Card</span>
                </Button>
            </form>
        </section>
    )
}

export default FormContent; 