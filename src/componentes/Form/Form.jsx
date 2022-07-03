
import "./Form.css"

const Form = (props) => {
    return(
        <form action="" method="post" className="form">
            <label htmlFor="">
                { props.label}
            </label>
            <input type="text"
            placeholder={props.placeholder}/>
        </form>
    )
}

export default Form;