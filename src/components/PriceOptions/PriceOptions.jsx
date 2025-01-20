import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Off-peak hours access",
            "Basic fitness assessment",
            "Water refilling station"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 50,
          "features": [
            "All Basic Plan features",
            "Group fitness classes",
            "Nutritional guidance",
            "Personalized workout plan",
            "Yoga and Zumba sessions",
            "Extended hours access",
            "Towel service",
            "Body composition analysis"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 80,
          "features": [
            "All Standard Plan features",
            "Personal trainer (2 sessions/month)",
            "Sauna & spa access",
            "Exclusive member discounts",
            "Priority class bookings",
            "Advanced workout tracking app",
            "Guest pass (1 per month)",
            "Free smoothie once a week"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 120,
          "features": [
            "All Premium Plan features",
            "Access for up to 4 family members",
            "Kids fitness programs",
            "Monthly health check-ups",
            "Swimming pool access",
            "Childcare services",
            "Weekend family events"
          ]
        },
        {
          "id": 5,
          "name": "Student Plan",
          "price": 25,
          "features": [
            "Gym access during off-peak hours",
            "Discounted meal plans",
            "Access to fitness workshops",
            "Guided stress-relief meditation",
            "Study-friendly environment",
            "Special student discounts",
            "Free coffee & tea station"
          ]
        },
        {
          "id": 6,
          "name": "Platinum Plan",
          "price": 150,
          "features": [
            "All Premium Plan features",
            "Unlimited personal training sessions",
            "24/7 gym access",
            "Dedicated nutritionist",
            "VIP lounge access",
            "Customized diet plans",
            "Sports massage therapy",
            "Exclusive workout gear",
            "Private locker with security",
            "Unlimited guest passes"
          ]
        }
      ]
      
    
    
    return (
        <div className="m-12">
            <ht className="text-3xl">Best Price in the Town</ht>
           <div className="grid   md:grid-cols-3 gap-6 mt-6 ">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;