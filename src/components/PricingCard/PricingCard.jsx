import React from 'react' 
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => { 
    
    //console.log(pricing);
 const {name,price,description,features}=pricing;

return (
  <div className='flex flex-col bg-amber-600 rounded-2xl p-4'>
    {/* card header */}
    <div>
      <h1 className="text-7xl">{pricing.name}</h1>
      <h4 className="text-3xl">{pricing.price}</h4>
    </div>

    {/* card body */}
    <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
      {/* Add features or other content here */}
      <p>{description}</p>
      {
        features.map((feature,index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
      }
    </div>
    <button className="btn btn-wide mt-4">Subscribe</button>
  </div>
)
}
export default PricingCard