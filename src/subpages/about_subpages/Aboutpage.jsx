import React from "react";
import Img from "./Aboutpage.jsx";
import Accordian from "../../components/Accordian/Accordian.jsx";

const Aboutpage = () => {
  const accordionItems = [
    { title: 'Our History', content: 'Content for section 1' },
    { title: 'Our mission', content: 'Content for section 2' },
    { title: 'Our vision', content: 'Content for section 3' }
  ];
  return (
    <>
      <div className="bg-zinc-950 w-full">
        <div className="navbar text h-[80px] bg-zinc-900 flex items-center justify-center text-white">
          Navbar
        </div>
        <div className="img w-full  ">
          <img src={Img} alt="" className="rounded-xl h-[350px] w-[100%]" />
        </div>

        <div className="text">
          <h3 className="text-center my-1.5 mx-auto text-[#652fc2] bg-zinc-800 w-[150px]  rounded-2xl text-xl">Who we are</h3>
          <h2 className="text-center text-white text-4xl">About our community</h2>
          <p className="text-gray-600 p-5">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates doloribus velit ut qui consectetur aperiam facilis nam quaerat ratione facere laborum veritatis delectus, culpa necessitatibus molestias. Dolorem, optio pariatur temporibus qui debitis suscipit ipsum necessitatibus aut! Cupiditate quasi, iusto perspiciatis nostrum odio assumenda culpa iure reiciendis nemo. Non ratione enim, eius totam praesentium sit et vero est architecto. Reiciendis possimus magni atque error soluta quo? Aut sed quasi quod? Sapiente, et suscipit, aut repellat quos at sunt quas quo reprehenderit, ratione culpa ad qui quaerat soluta itaque ut exercitationem sit! Repellat neque harum rem ratione hic magnam consequuntur? Aspernatur.</p>
        </div>

        <Accordian items={accordionItems}/>

      </div>
    </>
  );
};

export default Aboutpage;
