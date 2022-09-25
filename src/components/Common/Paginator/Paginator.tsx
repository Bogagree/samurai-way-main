import React from 'react';
import style from "../../Users/Users.module.css";

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalCount, currentPage, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= (pagesCount < 10 ? pagesCount : 10); i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    className={currentPage === p ? style.pageNumber + ' ' + style.selectedPage : style.pageNumber}
                    onClick={() => {
                        onPageChanged(p)
                    }}
                >
                            {p}</span>
            })}
            <strong>total users pages</strong>: {pagesCount}
        </div>
    );
};
