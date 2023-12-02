function Button({text,update}){
    return(
        <div>
        <button onClick={update}>{text}</button>
        </div>
    )
}

export default Button;