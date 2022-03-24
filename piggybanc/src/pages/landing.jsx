import logo from '../logo.svg';
import Navbar from '../components/landing/navbar';
const Landing = () => {
  return (
    
    <div className="bg-[#08143D] h-[100%] w-[100%]">
      
      <div className='flex justify-end z-10 '>
        <span className="bg-[#273250] absolute h-[75%] w-[70%] rounded-bl-[95%]"/>
      </div>

      <div className='relative z-20 font-Inter text-white'>
          <Navbar/>
      </div>

      <div className='h-[4000px] border-1'>

      </div>

      
      
       
    
    </div>
  );
}

export default Landing;