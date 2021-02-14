import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentForm";
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish(dish, comments, postComment, dishId) {

    if (dish != null) {

        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
                <div className="col-md-5">
                    <h4> Comments </h4>
                    {RenderComments(comments)}
                    <CommentForm dishId={dishId} addComment_={postComment} />
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
            <Stagger in>
                <div key={com.id} className="ul list-unstyled">
                    <Fade in>
                    <li>{com.comment}</li>
                    <br></br>
                    <li> ---- {com.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</li>
                    <br></br>
                    </Fade>
                </div>
            </Stagger>
        )
    });
    return comments;
};


const Dishdetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    else {
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
                {RenderDish(props.dish, props.comments, props.postComment, props.dish.id)}
            </div>

        );
    }
}




export default Dishdetail;
