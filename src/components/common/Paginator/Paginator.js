import React, { useState } from 'react'
import classes from './Paginator.module.css'


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div className={classes.pages}>
        {portionNumber > 1 &&
            <i onClick={() => { setPortionNumber(portionNumber - 1) }} className="fas fa-chevron-circle-left" />}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={props.currentPage === p && classes.active}
                    key={p}
                    onClick={(e) => {
                        props.onPageChange(p);
                    }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <i onClick={() => { setPortionNumber(portionNumber + 1) }} className="fas fa-chevron-circle-right" />}
    </div>
}

export default Paginator
