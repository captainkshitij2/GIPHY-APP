import React from 'react';
// import '../css/Pagination.css';

const Pagination = (props) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav style= {{width: '700px', padding: '10px', marginTop: '70px'}}>
                <ul className="pagination pagination-sm justify-content-end border-0">
                    {pageNumbers.map((item, index) => {
                        return (
                            <li key= {index} className="page-item">
                                <a onClick= {() => props.pageSelected(item)} href="!#" className="page-link">{item}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination
