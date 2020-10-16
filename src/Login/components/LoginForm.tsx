//import { Button } from '@material-ui/core';
import classes from '*.module.css';
import { Button, TextField } from '@material-ui/core';
import { SpeedRounded } from '@material-ui/icons';
import React, { Fragment } from 'react';
import { login } from '../../api/users';


interface LoginFormState {
    email: string;
    password: string;
}

class LoginForm extends React.Component<{}, LoginFormState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (field: string, newValue: string) => {
        this.setState({
            ...this.state,
            [field]: newValue
        })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(this.state.email, this.state.password).then((user) => alert(user.firstname));
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={(e) => this.handleChange("email", e.target.value)}
                />
                <TextField
                    required
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(e) => this.handleChange("password", e.target.value)}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained">
                    Submit
                </Button>
            </form>
        )
    }
}

export default LoginForm;