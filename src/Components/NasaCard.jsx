import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

import styled from "styled-components";

const NasaCardContainer = styled.div`
        display: flex;
        justify-content: center;
    `;
const NasaCardStyle = styled.div`
    width: 800px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    color: white;
`;
const NasaImg = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const NasaCard = (props) => {
    return(
    <NasaCardContainer className="nasa-card">
        <NasaCardStyle>
            <h2>{props.title}</h2>
            <p className="date">{props.date}</p>
            <NasaImg src={props.image} alt={props.title}/>
            <small>{props.copyright}</small>
            <p className="description">{props.explanation}</p>
        </NasaCardStyle>
    </NasaCardContainer>
    // <Col sm="12" md="6" xl="4">
    //     <Card className="nasa-card">
    //         <CardImg src={props.image} alt={props.title}/>
    //         <CardBody>
    //             <CardTitle>{props.title}</CardTitle>
    //             <CardSubtitle className="date">{props.date}</CardSubtitle>
    //             <CardText>{props.copyright}</CardText>
    //             <CardText className="description">{props.explanation}</CardText>
    //         </CardBody>
    //     </Card>
    // </Col>
    )
}

export default NasaCard;