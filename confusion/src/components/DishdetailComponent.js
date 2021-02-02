import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish(dish) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5">
                    <h4> Comments </h4>
                    {RenderComments(dish.comments)}
                </div>
            </div>

        );
    }
    else {

        return (
            <div></div>
        );
    }
}

function RenderComments({comentarray}) {
    const comments = comentarray.map((com) => {
        return (
            <div key={com.id} className="ul list-unstyled">
                <li>{com.comment}</li>
                <br></br>
                <li>{com.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</li>
                <br></br>
            </div>
        )
    });
    return comments;
};


const Dishdetail = (props) => {
    
    return (
        <div className="container">
            {RenderDish(props.dish)}
        </div>
    
    );
}




export default Dishdetail;
