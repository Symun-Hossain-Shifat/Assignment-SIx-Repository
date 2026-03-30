import React from 'react';

const Pricing = () => {
    return (
        <div className='text-center '>
            <h2 className='font-bold text-3xl '>Simple, Transparent Pricing</h2>
            <p className='text-gray-600 font-semibold'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        
        <div className='grid w-10/12 p-5 mx-auto justify-between grid-cols-1 md:grid-cols-3 gap-5'>
           <div className="card  card-body text-left flex flex-col bg-base-100 shadow-sm">
  <div className="card-body text-left flex flex-col">
    
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Started</h2>
     
    </div>
    <div>
        <p className='text-gray-600 font-semibold'>Perfect for getting started</p>
    </div>
    <div>
        <h2 className='font-bold text-2xl'>$0 <span className='text-gray-600 text-[15px]'>/Month</span></h2>
    </div>
    <ul className="mt-6 flex font-bold flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      
    </ul>
    <div className="mt-auto">
      <button className="btn text-white rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 btn-block">Get Started Free</button>
    </div>
  </div>
</div>
           <div className="card card-body text-left flex flex-col bg-gradient-to-r relative from-blue-800 to-blue-500 text-white  bg-base-100 shadow-sm">
  <div className="card-body text-left flex flex-col">
    
    <div className="flex justify-between">
        <span className="badge  badge-warning p-3 rounded-2xl -top-2 right-28 absolute">Most Popular</span>
      <h2 className="text-3xl font-bold">Pro</h2>
     
    </div>
    <div>
        <p className=' font-semibold'>Best for professionals</p>
    </div>
    <div>
        <h2 className='font-bold text-2xl'>$29<span className=' text-[15px]'>/Month</span></h2>
    </div>
    <ul className="mt-6 flex flex-col font-bold gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
      
    </ul>
    <div className="mt-auto">
      <button className="btn text-blue-700  rounded-2xl  btn-block">Start Pro Trial</button>
    </div>
  </div>
</div>
           <div className="card  card-body text-left flex flex-col bg-base-100 shadow-sm">
  <div className="card-body text-left">
    
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Enterprise</h2>
     
    </div>
    <div>
        <p className='text-gray-600 font-semibold'>For teams and businesses</p>
    </div>
    <div>
        <h2 className='font-bold text-2xl'>$99<span className='text-gray-600 text-[15px]'>/Month</span></h2>
    </div>
    <ul className="mt-6 font-bold flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
      
    </ul>
    <div className="mt-auto">
      <button className="btn text-white rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 btn-block">Contact Sales</button>
    </div>
  </div>
</div>
        </div>
        
        
        
        
        </div>
    );
};

export default Pricing;