import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import {Switch, Route , Redirect} from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
        
    }

    onDishSelect(dishid) {
        this.setState({
            selectedDish: dishid
        });

    }

    render() {
        
        return (
            <div className="App">
                
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishid) => this.onDishSelect(dishid)} />
                <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
                
            </div>
        );
    }
}

export default Main;
