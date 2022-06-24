import './button.styles.scss'
/*
default

inverted

google sign in


*/

const Button_Type_Classes = {
    google: 'google-signin',
    inverted: 'inverted'
}


const Button = ({children, buttonType, ...otherProps})=>{
    return(
        <button className={`button-container ${Button_Type_Classes[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
};

export default Button;

