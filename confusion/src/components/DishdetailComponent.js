import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comentarray) {
        const comments = comentarray.map((com) => {
            return (
                <div key={com.id} className="ul list-unstyled">
                    <li>{com.comment}</li>
                    <br></br>
                    <li>{com.author} , {com.date}</li>
                    <br></br>
                </div>
            )
        });
        return comments;
    }

    renderDish(dish) {
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
                        {this.renderComments(dish.comments)}
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

    render() {
        return (
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div>

        );
    }
}

export default Dishdetail;
