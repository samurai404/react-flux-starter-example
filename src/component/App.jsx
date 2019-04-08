/*test1*/
import React, {Component} from 'react';

class App extends Component {
    render() {
        return(
            <div>
                This is my first component
            </div>
        )
    }
}

export default App;
/* test2 
import React, {Component} from 'react';
import AppStore from '../store/AppStore';
import AppAction from '../action/AppAction';

class App extends Component {

    constructor(){
        super();
        this.state = {
            item:[],
            number:0
        }
    }

    componentDidMount()
    {
        AppStore.addChangeListener(this._onStoreChange.bind(this));

    }
    componentWillUnmount()
    {
        AppStore.removeChangeListener(this._onStoreChange).bind(this);
    }
    handleClick () {
        this.setState({ number:this.state.number+1})
        AppAction.setItem('item'+this.state.number);
    }

    _onStoreChange () {
        this.setState({item : AppStore.getItem()})
    }
    render() {
        return(
            <div>
                <button  onClick={this.handleClick.bind(this)}> Add Item </button>
                <div >{this.state.item}</div>
            </div>
        )
    }
}

export default App;*/