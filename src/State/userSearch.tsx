import React, {useState} from 'react';

const UserSearch : React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()
    const users = [{ name:'Sai', age: 20 }, 
           { name: 'Valli', age : 20},
           { name: 'Sana', age : 10} ];
    const onclick = () => {
        const user = users.find(user => user.name === name)
        if(user){
            setUser(user)
        }
    }
    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onclick}>Search User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;