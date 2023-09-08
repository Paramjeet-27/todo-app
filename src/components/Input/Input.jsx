const Input = ({changeHandler, enterKeyHandler, value}) => {
    return (
    <>
    <input type="text" onChange={changeHandler} value={value} onKeyUp={enterKeyHandler}/>
    </>
    )
}
export default Input;