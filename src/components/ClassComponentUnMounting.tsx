
import React, {Component} from "react";

import EmployeeDetails from "./EmployeeDetails";
interface Props{
    color:string
    deleteUser:boolean
}

interface State{
    color: string
    deleteUser: boolean
}
class ClassComponentUnMounting extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {color: 'red', deleteUser:true};
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

    componentWillUnmount(): void {
        console.log("componentWillUnmount called");
        this.setState({deleteUser: false});
      
    }

    render() {
        console.log("Render " + this.state.color);
        return (
            <div>Test {this.state.color}
            {this.state.deleteUser && <EmployeeDetails></EmployeeDetails>}

            <button onClick={() => {this.setState({deleteUser: false})}}>Delete User</button>
            </div>
        )
    }   



}
export default ClassComponentUnMounting;