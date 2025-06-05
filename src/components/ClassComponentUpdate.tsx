import React, {Component} from 'react';

interface Props{
    color:string
}

interface State{
    color: string
}

class ClassComponentUpdate extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {color: 'red'};
        console.log("Constructor called");
    }

    static getDerivedStateFromProps(props: Props, state: State) {
        console.log("getDerivedStateFromProps called");
        return { };
    }
    
    shouldComponentUpdate( ): boolean {
        console.log("shouldComponentUpdate called");
        return true;
    }

    componentDidMount(): void {
        this.setState({color: 'blue'});
        console.log("componentDidMount called");
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
        console.log("getSnapshotBeforeUpdate called", prevState.color);
        return null;
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log("componentDidUpdate called", prevState.color);
    }

    render() {
        console.log("Render " + this.state.color);
        return (
            <p>Test {this.state.color}</p>
        );
    }   



}

export default ClassComponentUpdate;