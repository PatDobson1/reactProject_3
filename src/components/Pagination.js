// -- Setup --------------------------------------------------------------------
    import React from 'react';
// -----------------------------------------------------------------------------

// -- Components ---------------------------------------------------------------
// -----------------------------------------------------------------------------

class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.paginationChange = this.paginationChange.bind(this);
    }
    paginationChange(e){
        this.props.paginationChange(e.target.target, e.target.type);
    }
    render(){
        const pagination = this.props.pagination;
        const start = pagination.start === 1 ? pagination.start : pagination.start + 1;
        const end = pagination.itemsDisplayed + ( start - 1 );
        const totalItems = this.props.totalItems;
        const pages = Math.round(totalItems / pagination.itemsDisplayed);
        const currentPage = pagination.currentPage;
        return(
            <div className={"pagination " + this.props.position}>
                <div className="top">
                    <p>Items {start} - {end} of {totalItems}</p>
                </div>
                <div className="bottom">
                    <p className="pages">
                        <span>Page</span>
                        { currentPage !== 1 &&
                            <>
                                <a onClick={this.paginationChange} type="page" target={currentPage-1} className="arrow">&lt;</a>
                                <a onClick={this.paginationChange} type="page" target="1">1</a>
                            </>
                        }
                        { currentPage > 2 &&
                            <a onClick={this.paginationChange} type="page" target={currentPage-1}>{currentPage - 1}</a>
                        }
                        <a className="currentPage">{currentPage}</a>
                        { currentPage !== pages &&
                            <a onClick={this.paginationChange} type="page" target={currentPage+1}>{currentPage+1}</a>
                        }
                        { currentPage < 3 &&
                            <a onClick={this.paginationChange} type="page" target={currentPage+2}>{currentPage+2}</a>
                        }
                        { currentPage < 2 &&
                            <a onClick={this.paginationChange} type="page" target={currentPage+3}>{currentPage+3}</a>
                        }
                        { currentPage !== pages && currentPage !== pages - 1 &&
                            <>
                                <a onClick={this.paginationChange} type="page" target={pages}>{pages}</a>
                                <a onClick={this.paginationChange} type="page" target={currentPage+1} className="arrow">&gt;</a>
                            </>
                        }
                        { currentPage === pages - 1 &&
                            <a onClick={this.paginationChange} type="page" target={currentPage+1} className="arrow">&gt;</a>
                        }
                    </p>
                    <p className="itemsPerPage">
                        Items per page
                        <a onClick={this.paginationChange} target="20" type="itemsPerPage">20</a>
                        <a onClick={this.paginationChange} target="40" type="itemsPerPage">40</a>
                        <a onClick={this.paginationChange} target="80" type="itemsPerPage">80</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Pagination;
