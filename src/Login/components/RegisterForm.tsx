import { Container, Box } from '@material-ui/core';
import React from 'react';
import CredentialSection from './CredentialSection';
import IdentitySection from './IdentitySection';

interface RegisterFormState{
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmation: string;
}
class RegisterForm extends React.Component<{}, RegisterFormState> {
  constructor(props: {}){
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmation: ""

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

    //register(...this.state).then((user) => alert(user.firstname));
  }


  render(){
    const { email, firstname, lastname, password, confirmation } = this.state;
    return (
      <Container maxWidth="sm">
        <form >
          <Box style={{margin: "2rem 0"}}>
            <IdentitySection
              email={email}
              firstname={firstname}
              lastname={lastname}
              handleChange={this.handleChange}
            />
          </Box>
          <Box style={{margin: "2rem 0"}}>
            <CredentialSection
              password={password}
              confirmation={confirmation}
              handleChange={this.handleChange}
            />
          </Box>
        </form>
      </Container>
    )
  }
}

export default RegisterForm;