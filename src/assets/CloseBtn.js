
const CloseBtn = (props) => {
    return (
        <div onClick={props.onClick} className={props.className}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span class="material-symbols-outlined">
                close
            </span>
        </div>
    );
};

export default CloseBtn;