import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <div className="container">
                <button
                    onClick={this.props.onReset}
                    className="btn btn-sm btn-primary m-2">Reset</button>
                <br/>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                    />
                )}
            </div>
        )
    }
}

export default Counters;