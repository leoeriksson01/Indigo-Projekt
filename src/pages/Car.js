import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CarContext } from '../components/contexts/CarContext';
import { mdiGauge } from '@mdi/js';
import Icon from '@mdi/react';

export default function Car() {
    const { findOne } = useContext(CarContext);
    const { vin } = useParams(); // The :vin query parameter from the route
    const car = findOne('vin', vin);

    console.log(car);

    const Row = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const Col = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const Wrapper = styled.div`
        margin: 100px 0 0 0;
    `;

    const Container = styled.article`
        max-width: 1200px;
        margin: auto;
    `;

    const Preview = styled.img`
        object-fit: cover;
        height: auto;
        width: 65%;
    `;

    const Sidebar = styled(Col)`
        margin-left: 50px;
        flex-grow: 1;
    `;

    const SidebarIcons = styled(Row)`
        
    `;

    const Description = styled.p`
        width: 65%;
        margin-top: 15px;
    `;

    if (!car) {
        return null;
    }

    return (
        <Wrapper>
            <Container as={Col}>
                <Row>
                    <Preview src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} loading="lazy" />
                    <Sidebar>
                        upper sdf
                        <SidebarIcons>

                        </SidebarIcons>
                    </Sidebar>
                </Row>
                <Description>{car.descLong}</Description>
            </Container>
        </Wrapper>
    );
}
