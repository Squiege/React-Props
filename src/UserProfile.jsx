import { Component } from "react";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };

        this.changeName = this.changeName.bind(this)
    }

    changeName() {
        this.setState({name: "Charlie"});
    }

    render() {

        const name = this.state.name;

        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {name}</p>
                <button onClick={this.changeName}
                    style={{
                    marginBottom: '10px',
                    }}
                >
                    Change Name
                </button>
            </div>
        );
    }
}

export default UserProfile;