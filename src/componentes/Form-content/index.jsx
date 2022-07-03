import Form from '../Form/Form';
import './Form-content.css'

const FormContent = () => {
    return (
        <section className='form-content'>
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Form label="Nome" placeholder="Digite seu nome"/>
                <Form label="Cargo" placeholder="Digite seu cargo"/>
                <Form label="Imagem" placeholder="Digite o endereco da imagem"/>
            </form>
        </section>
    )
}

export default FormContent; 