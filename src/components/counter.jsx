import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <span className={this.generateClasses()}>{this.formatBadge()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-outline-primary btn-sm">Increase
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                <br/>
            </React.Fragment>
        );
    }

    generateClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatBadge() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;