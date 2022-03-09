import logo from './logo.svg';
import { Navbar } from './components/landing/navbar';
function Landing() {
  return (
    <div className="bg-[#08143D] h-[100vh]">
      <div className='flex justify-end'>
        <div className="bg-[#273250] absolute h-[80%] w-[70%] rounded-bl-[95%]"/>
      </div>
      
    <Navbar/>
    </div>
  );
}

export default Landing;