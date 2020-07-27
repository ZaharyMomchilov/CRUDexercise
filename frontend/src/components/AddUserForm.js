import React, { useState } from 'react';

const AddUserForm = props => {
    const initialFormState = { name: '', username: ''};
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({ ...user, [name]: value });
    }
    const submitForm = event => {
        event.preventDefault();
        props.addUser(user);
        setUser(initialFormState);
    };
    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <div>
                        <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} required />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="text" name="username" value={user.username} onChange={handleInputChange} required />
                        <label htmlFor="username">Username</label>
                    </div>
                </div>
                <div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
