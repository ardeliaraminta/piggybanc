import React from 'react'

const Content = () => {
  return (
    <>
    <div className="h-screen flex-1 p-7 bg-[#08143D]">
    <h1 className="text-[25px] sm:text-[35px] font-normal text-[#FFFF]"> Good Morning, user</h1>
    <h2 className="text-[20px] sm:text-[25px] font-light text-white"> Overview</h2>


  <div class="inline-flex flex-col">
  <div class="bg-[#08143D] w-[260px] h-[100px] rounded-xl border-2 border-[#273250] p-4 m-2">
  <h1 className="text-[14px] sm:text-[14px] font-light text-white"> Wallet Balance</h1>
  <h2 className="text-[20px] sm:text-[25px] font-semibold text-white"> $647,605.74</h2>

  </div>
<div class="bg-[#08143D] w-[260px] h-[100px] rounded-xl border-2 border-[#273250] p-4 m-2">
<h1 className="text-[14px] sm:text-[14px] font-light text-white"> Expenses </h1>
  <h2 className="text-[20px] sm:text-[25px] font-semibold text-white"> $227,067 </h2>


</div>
<div class="bg-[#08143D] w-[260px] h-[100px] rounded-xl border-2 border-[#273250] p-4 m-2">


</div>
</div>
</div>



</>
  )
}

export default Content
