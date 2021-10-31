function AppButton(props) {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}

AppButton.defaultProps = {
    name : "이름 없음"
}

export default AppButton;