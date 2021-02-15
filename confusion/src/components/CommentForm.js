import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });

    }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values))
        console.log(this.props);
        this.props.addComment_(this.props.dishId, values.rating, values.author, values.comment);
        this.toggleModal();
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><strong>Submit Comment</strong></ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Col className="form-group">
                                <Label htmlfor="rating" > <strong>Rating</strong></Label>
                                <Control.select model=".rating" className="form-control" name="rating" >
                                    <option selected="selected">1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                            <Col className="form-group">
                                <Label htmlfor="author"><strong>Your Name</strong></Label>
                                <Control.text model=".author" className="form-control" id="author" name="author" placeholder="Your Name" 
                                validators ={{
                                    maxLength: maxLength(15), minLength: minLength(3)
                                }}/>
                                <Errors className="text-danger" show="touched" model=".author" messages={{
                                    maxLength: 'Name must be less than 15 chars',
                                    minLength: 'Name must be greater than 2 chars'
                                }} />

                            </Col>
                            <Col className="form-group">
                                <Label htmlfor="comment"><strong>Comment</strong></Label>
                                <Control.textarea model=".comment" className="form-control" rows="6" name="comment"></Control.textarea>
                            </Col>
                            <Col className="form-group">
                                <Button color="primary">Submit</Button>
                            </Col>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }

}

export default CommentForm;