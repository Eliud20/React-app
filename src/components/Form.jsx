const Form = () => {
    return(
        <form className="formulario">
            <input type="text" name="task_name" id="task" />
            <br />
            <textarea name="description" id="descrip" cols="45" rows="5"></textarea>
        </form>
    );
}

export default Form;