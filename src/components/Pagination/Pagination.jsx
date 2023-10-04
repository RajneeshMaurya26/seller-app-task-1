import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import CarCard from '../../conatiners/UI/Card/CarCard';
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "../../action/carData.action";

function Paginations() {
    const paginationStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        background: '#edf1f6',
        marginBottom: '20px',
        alignItems: 'center'
    };
    const [pageCount, setPageCount] = useState();
    const [currPage, setCurrPage] = useState(1);

    const dispatch = useDispatch();
    const carData = useSelector(state => state.carData);

    let limit = 6;

    useEffect(() => {
        dispatch(getCarData()); 
    }, []);

    useEffect(() => {
        const calculatedPageCount = Math.ceil(carData.totalCount / limit);
        setPageCount(calculatedPageCount);
    }, [carData.totalCount]);

    const items = carData.data; 

    // const fetchCarData = async (currentPage) => {
    //     const res = await fetch(`http://localhost:3004/carData?_page=${currentPage}&_limit=${limit}`);
    //     const data = await res.json();
    //     return data;
    // }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        // const newDatafromServer = await fetchCarData(currentPage);
        dispatch(getCarData(currentPage,limit));
        setCurrPage(currentPage);
    }

    const paginationsStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px 0',
        borderRadius: '20px',
        border: '1px solid #ccc',
        background: '#edf1f6',
    };

    return (
        <>
            <CarCard item={items} /> {/* Pass items instead of item */}
            <Container>
                <Row style={paginationStyle}>
                    <Col sm={6}>{currPage} from {pageCount}</Col>
                    <Col sm={6}>
                        <ReactPaginate
                            previousLabel={'<-'}
                            nextLabel={'->'}
                            breakLabel={'...'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination justify-content-end my-2'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Paginations;
