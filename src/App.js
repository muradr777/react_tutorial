import React, {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
    state = {
        counters: [
            {id: 0, value: 3},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = this.state.counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (
            <React.Fragment>
                <NavBar totalCount={this.state.counters.filter( c => c.value > 0).length} />
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                />
            </React.Fragment>
        )
    }
}

export default App;