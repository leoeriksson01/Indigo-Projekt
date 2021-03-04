import { useContext, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CarContext } from '../components/contexts/CarContext';
import { mdiMapMarker, mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled(Row)`
    margin: 100px 0;
    @media (max-width: 1200px) {
        margin: 50px 0;
    }
`;

const Container = styled.article`
    max-width: 1000px;
    margin: auto;
    color: rgb(50, 50, 50);
    @media (max-width: 1200px) {
        flex-direction: column;
        max-width: unset;
    }
`;

const Preview = styled.img`
    object-fit: cover;
    height: auto;
    width: 60%;
    @media (max-width: 1200px) {
        width: 100%;
        margin-bottom: 15px;
    }
`;

const Sidebar = styled(Col)`
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: 25px;
    flex-grow: 1;
    @media (max-width: 1200px) {
        margin: 0;
        padding: 0 25px;
    }
`;

const Header = styled.h2`
    font-weight: bold;
    color: rgb(25, 25, 25);
`;

const Mileage = styled.h5`
    margin: 0;
`;

const CityIcon = styled.svg`
    width: 1.25rem;
    height: 1.25rem;
`;

const CityWrapper = styled(Row)`
    align-items: center;
    margin-top: 5px;
`;

const City = styled.h5`
    margin: 0 0 0 2px;
`;

const Description = styled.p`
    margin: 0;
    margin-top: 15px;
    color: black;
`;

const Price = styled.h4`
    font-weight: bold;
    color: rgb(25, 25, 25);
    margin-top: 20px;
    @media (max-width: 1200px) {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
    }
`;

const PriceNumber = styled.span`
    @media (max-width: 1200px) {
        font-size: 1.5rem;
        margin-top: 5px;
    }
`;

const Buy = styled.button`
    background-color: rgb(46, 133, 110);
    border: 0;
    color: white;
    border-radius: 25px;
    padding: 10px;
    font-size: 1.25rem;
    font-weight: bold;
    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }
`;

const AccordionLabel = styled(Row)`
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(50, 50, 50);
    padding-bottom: 5px;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
`;

const AccordionContentWrapper = styled.div`
    overflow: hidden;
    transition: all 0.15s linear;
`;

const AccordionContent = styled.div`
    padding: 15px 0;
`;

const AccordionIcon = styled.svg`
    ${({ open }) => open ? 'transform: rotate(180deg);' : ''}
    transition: all 0.15s linear;
    width: 1.5rem;
    height: 1.5rem;
`;

const SidebarAccordion = styled(Accordion)`
    margin-top: 15px;
`;

function Accordion({ label = '', children, ...props }) {
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false);
    const list = useRef();

    useEffect(() => {
        if (open) {
            setHeight(list.current.getBoundingClientRect().height || 0);
        } else {
            setHeight(0);
        }
    }, [open]);

    return (
        <Col {...props}>
            <AccordionLabel onClick={() => setOpen(p => !p)}>
                <span>{label}</span>
                <AccordionIcon as={Icon} open={open} path={mdiChevronDown} />
            </AccordionLabel>
            <AccordionContentWrapper style={{ height: height }}>
                <AccordionContent ref={list}>{children}</AccordionContent>
            </AccordionContentWrapper>
        </Col>
    );
}

export default function Car() {
    const { findOne } = useContext(CarContext);
    const { vin } = useParams(); // The :vin query parameter from the route
    const car = findOne('vin', vin);

    // TODO: check if item is already in cart

    if (!car) {
        return null;
    }

    return (
        <Wrapper>
            <Container as={Col}>
                <Row>
                    <Preview src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} loading="lazy" />
                    <Sidebar>
                        <Header>{car.make} {car.model} {car.year}</Header>
                            <Mileage>{Number(car.miles).toLocaleString()} miles</Mileage>
                            <CityWrapper>
                                <CityIcon as={Icon} path={mdiMapMarker} />
                                <City>{car.city}</City>   
                            </CityWrapper>
                        <Price>
                            <span>Price:</span> <PriceNumber>${Number(car.price).toLocaleString()}</PriceNumber>
                        </Price>
                        <Buy>Add to cart</Buy>
                    </Sidebar>
                </Row>
                <Description>{car.descLong}</Description>
            </Container>
        </Wrapper>
    );
}
