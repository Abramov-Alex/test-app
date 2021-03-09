import React, { Component } from "react";

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

export default class TestClassJs extends Component {
    getText() {
        return <p>текст</p>;
    }

    render() {
        const text = this.getText();
        return <div>
            {text}
        </div>
    }
}