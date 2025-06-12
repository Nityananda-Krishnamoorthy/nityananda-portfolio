
import PropTypes from "prop-types";


const ButtonPrimary = ({
    herf, 
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(herf){
        return (
            <a 
            herf={herf}
            target={target}
            className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
            }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                <span className="material-symbols-rounded"
                aria-hidden="true">
                    {icon}
                </span>
                : undefined
            }

            </button>
        )
    }

}

ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node,
    classes: PropTypes.string



}
export {
    ButtonPrimary
}