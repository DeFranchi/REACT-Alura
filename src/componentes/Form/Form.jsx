
import "./Form.css"

const Form = (props) => {

    
   
    const handleType = (event) => {
       props.alterado(event.target.value)

    }

    return(
        <div method="post" className="form">
            <label>
                { props.label}
            </label>
            <input type="text"
            placeholder={props.placeholder}
            required={props.obrigatorio}
            onChange={ handleType }
            value={ props.value}
            />
        </div>
    )
}

export default Form;