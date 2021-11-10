import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="">
          {pageNumbers.map((number, id) => (
            <button key={id} onClick={() => paginate(number)} className="">
              {number}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}

{
  /* <button className='buttons' disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}><IoIosArrowBack/></button>
                    <label>{number}</label>
                <button className='buttons' disabled={recipes?.count <= (page * 5)} onClick={()=>{changePage(page +1)}}><IoIosArrowForward/></button> */
}
