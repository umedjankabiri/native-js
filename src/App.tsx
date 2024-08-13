import './App.css'
import {User} from "common/components/06/User.tsx";

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat'];
    const nameList = names.map((name, index) => (
        <li key={index}>{name}</li>
    ));
    const users = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Katya"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Ignat"},
    ]
    const userList = users.map(user => (
        <li key={user.id}>{user.name}</li>
    ));
    return (
        <>
            <div><h1>Native JavaScript</h1></div>
            <ul>
                {nameList}
            </ul>
            <ul>
                {userList}
            </ul>
            <div>
                <User/>
            </div>
        </>
    )
}

export default App
