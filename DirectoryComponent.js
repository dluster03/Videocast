import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({eyenation, onClick}) {
    return (
        <Card onClick={() => this.props.onClick(eyenation.id)}>
            <CardImg width="100%" src={eyenation.image} alt={eyenation.name} />
            <CardImgOverlay>
                <CardTitle>{eyenation.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const Directory = props.eyenations.map(eyenation => {
        return (
            <div key={eyenation.id} className="col-md-5 m-1">
                <RenderDirectoryItem eyenation={eyenation} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;