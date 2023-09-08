const Button = ({clickHandler, isDisabled, btnName, btnClass}) => {
    return (
        <>
        <button onClick={clickHandler} disabled = {isDisabled} className = {btnClass}>{btnName}</button>
        </>
    )
}
export default Button;