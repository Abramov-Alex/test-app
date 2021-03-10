import React, { Component } from "react";
// Цикл

// export default class TestClassJs extends Component {
//     render() {
//
//         const arr = ['a', 'b', 'c', 'd', 'e'];
//         const el = arr.map((text, id) => {
//             return (
//                 <li key={id}>{text}</li>
//             )
//         })
//         return (
//             <div>
//                 <ul>
//                     {el}
//                 </ul>
//             </div>
//         )
//     }
// }

// state и setState

// export default class TestClassJs extends Component {
//
//     state = {
//         name: 'Alex',
//         age: 32
//     }
//
//     changeState = () => {
//         this.setState({
//             name: 'Alex1',
//             age: 18
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>Name {this.state.name} age {this.state.age}</p>
//                 <button onClick={this.changeState}>Click</button>
//             </div>
//         );
//     };
// };

// If () {} Else {}

// export default class TestClassJs extends Component {
//
//     state = {
//         name: 'Alex',
//         show: true
//     }
//
//     render(){
//
//         return(
//             <>
//                 <p>{this.state.show ? 'Hello' : 'Cool'} {this.state.name}!</p>
//             </>
//         )
//     }
// }

export default class TestClassJs extends Component {

    state = {
        name: 'Alex',
        age: 32,
        show: false
    }

    showText = () => {
        this.setState({show: true});
    }

    render() {

        const text = <p>{this.state.show ? `${this.state.name} ${this.state.age}` : ''}</p>;

        return <div>
            {text}
            <button onClick={this.showText}>
                click
            </button>
        </div>;
    }
}

// export default class TestClassJs extends Component {
//
//     state = {
//         name: 'Alex',
//         age: 32,
//         show: false
//     }
//
//     change = () => {
//         this.setState({show: true});
//     }
//
//     render() {
//
//         if (this.state.show) {
//             const text = <p>{this.state.name}{this.state.age}</p>
//         }
//
//         return(
//             <>
//                 {this.text}
//                 <button onClick={this.change}>Click</button>
//             </>
//         )
//     }
// }