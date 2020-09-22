import React, { useState, Component } from 'react'
import Login from './Login';
// import Main from './Main';
// import Users from './Users';
// import Account from './Account';
// import Ball from './Ball/Ball'
// import NameLsit from './NameList';

// FUNCTION primer 4 - useRef

function App() {
    
    return (
        <div className="container text-center">
        <Login />
        </div>
        );
}
export default App;

        
//FUNCTION primer 3 - useContext
// export const NameContext = React.createContext();
// export const LastNameContext = React.createContext();

// function App() {

//     const [name] = useState("Nikola");
//     const [lastName] = useState("Savic")

//     return (
//         <div className="container text-center">
//             <NameContext.Provider value={name}>
//                 <LastNameContext.Provider value={lastName}>
//                     <Main />
//                 </LastNameContext.Provider>
//             </NameContext.Provider>
//         </div>
//     );
// }


// CLASS primer 2 - context
// export const NameContext = React.createContext();

// class App extends Component {
//     state = {
//         name: "Nikola"
//     }
//     render() {
//         return (
//             <div className="container text-center">
//                 <NameContext.Provider value={this.state.name}>
//                     <Main name={this.state.name} />
//                 </NameContext.Provider>
//             </div>
//         );
//     }
// }



// Function primer 2
// function App(){
//     return(
//         // <Ball /> primer za useState ... PRAVILNO
//         // <Account /> // Primer za prevState ali sa objektom
//         // <NameLsit /> // primer za 2 useState i array
//         <Users />
//     )
// }




// FUNCTION primer 1
// function App(){

//     const [name, changeName] = useState("") // !!! Zahteva 1 PARAMETAR unutar zagrada (inicijalna vrednost state proportija), a vraca 2 PARAMETRA (name i changename(bilo koje ime) ) => name = ""

//     return(
//         <div className="container text-center">
//             <h1>{name}</h1> {/* Ne treba THIS */}
//             <input type="text" onChange={(event)=>{ changeName(event.target.value) }} /> {/* !!! Mora AF a ne changeName(1parametar) */}
//         </div>
//     )
// }


// CLASS primer 1
// class App extends Component {
//     state = {
//         name:""
//      }

//     changeName = (event) => {
//         this.setState({
//             name:event.target.value
//         })
//     }

//     render() {
//         return (
//             <div className="container text-center">
//                 <h1>{this.state.name}</h1>
//                 <input type="text" onChange={this.changeName}/>
//             </div>
//         );
//     }
// }