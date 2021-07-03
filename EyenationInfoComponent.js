import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    
function RenderEyenation({eyenation}) {
    return(
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top scr={eyenation.image} alt={eyenation.name} />
                <CardBody>
                    <CardTitle>{eyenation.name}</CardTitle>
                    <CardText>{eyenation.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function EyenationInfo(props) {
    if (props.eyenation) {
        return (
            <div className="container">
                <div className="row">
                    <RenderEyenation eyenation={props.eyenation} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default EyenationInfo;