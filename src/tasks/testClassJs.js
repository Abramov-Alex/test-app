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
//         const text = <p>{this.state.show ? 'Hello' : 'Cool'} {this.state.name}!</p>;
//
//         return(
//             <>
//                 {text}
//             </>
//         )
//     }
// }

// show or hide element

// export default class TestClassJs extends Component {
//
//     state = {
//         name: 'Alex',
//         age: 32,
//         show: false
//     }
//
//     showText = () => {
//         this.setState({show: !this.state.show});
//     }
//
//     render() {
//
//         const text = <p>{this.state.show ? `${this.state.name} ${this.state.age}` : ''}</p>;
//
//         return <div>
//             {text}
//             <button onClick={this.showText}>
//                 {this.state.show ? 'Hide' : 'Show'}
//             </button>
//         </div>;
//     }
// }

// массив и цикл

export default class TestClassJs extends Component {

    state = {
        names: ['Alex','Bob','Peter']
    }

    render() {

        const li = this.state.names.map((name, id) => {
            return (
                <li key={id}>{name} - {id + 1}</li>
            )
        })

        return(
            <ul>
                {li}
            </ul>
        )
    }
}
