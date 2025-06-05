import React, {Component} from 'react';

interface Props{
    color: string;
};
interface State {
    color: string;
}
class ClassComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state= {color:'red'}
        console.log("Constructor called");
    }
    static getDrivedStateFromProps(props:Props, state:State) {
        console.log("getDerivedStateFromProps called");
        return {color:props.color};
    }

    componentDidMount(): void {
        this.setState({color: 'blue'});
        console.log("componentDidMount called");
    }

    render(){
        console.log("Render   " + this.state.color);
        return(
            <p>Test {this.state.color}</p>
        );
    }
}
export default ClassComponent;