import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {

    const {name, price, features} =option;
    return (
        <div className="bg-blue-600 text-white rounded-md p-4 flex flex-col">
            <h2 className=" text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center my-8">
                {name}
            </h4>
           <div className="pl-8 flex-grow">
           {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </div>

           <button className="mt-12 w-full bg-green-500 py-2 rounded-lg font-bold hover:bg-green-900">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object.isRequired,
}

export default PriceOption;