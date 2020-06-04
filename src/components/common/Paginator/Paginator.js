import React, { useState } from 'react';
import classes from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 30}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    console.log(leftPortionPageNumber, rightPortionPageNumber);
    

    return <div className={classes.pages}>
        { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={cn ({
                    [classes.active]: currentPage === p
                }, classes.page)} 
                             key={p}
                             onClick={() => {onPageChange(p)}}>{p}</span>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}


    </div>
}

export default Paginator;