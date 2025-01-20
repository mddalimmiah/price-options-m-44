import PropTypes from "prop-types";
import { LuCircleCheck } from "react-icons/lu";
const Feature = ({feature}) => {
    return (
        <div className="">
            <p className="flex gap-2 rounded-xl"><LuCircleCheck className="text-green-500"></LuCircleCheck> {feature}</p>

            
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;