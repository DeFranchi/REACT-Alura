import './list.css'

const listaIndex = (props) => {
    const handleType = (event) => {
        props.listAlterado(event.target.value)
      

    }
    return (
        <div className='lista-index'>
            <label>
                {props.label}
            </label>
            <select 
            required={props.obrigatorio} 
            onChange={ handleType }
            value={ props.value }
            >
               {props.itens
                    .map(item => 
                    <option key={item}>{item}
                    </option>
                )}
            </select>
        </div>
    )
}

export default listaIndex;