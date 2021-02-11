import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,Button,  Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom';
import  CommentForm  from "./CommentForm";

function RenderDish(dish , comments) {
    
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
                    {RenderComments(comments)}
                    <CommentForm />
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

function RenderComments(comentarray) {

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
    console.log(props);
    return (
        <div className="container">
             <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            {RenderDish(props.dish , props.comments)}
        </div>
    
    );
}




export default Dishdetail;
