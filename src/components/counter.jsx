import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
          <React.Fragment>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button className="btn btn-outline-primary btn-sm">Increase</button>
          </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;