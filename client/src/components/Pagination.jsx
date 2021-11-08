import React from 'react';


export function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (<div>
        <nav>
        <ul className="">
            {pageNumbers.map(number => (
                   <button onClick={() => paginate(number)} className="">
                       {number}
                   </button>
            ))}
        </ul>
        </nav>
    </div>)
}