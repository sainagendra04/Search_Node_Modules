import { Component } from "react";

interface User {
    name: string;
    age: number;
}
interface UserSearchProps{
    users: User[]
}

interface UserSearchState{
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",  
    user: undefined,
    };
    onclick = () => {
        const user = this.props.users.find(user => user.name === this.state.name)
        if(user){
            this.setState(user)
        }
    }
  render() {
    const {name,user} = this.state;

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => this.setState(e.target.value)}/>
            <button onClick={this.onclick}>Search User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
  }

};
export default UserSearch;