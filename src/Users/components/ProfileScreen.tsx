import { Container, Box, Button, Grid } from '@material-ui/core';
import React from 'react';
import { getConnectedUser } from '../../api/users';
import CredentialSection from '../../Login/components/CredentialSection';
import IdentitySection from '../../Login/components/IdentitySection';
import { IFormField, IPasswordField, RegisterFormKey } from '../../Login/types';
import { defaultStringFormField, defaultPasswordFormField } from '../../Login/utils/defaultFormField';
import { validateConfirmationField } from '../../Login/utils/validateConfirmationField';
import { validateEmailField } from '../../Login/utils/validateEmailField';
import { validateNameField } from '../../Login/utils/validateNameField';
import { validatePasswordField } from '../../Login/utils/validatePasswordField';
import Alert from '@material-ui/lab/Alert';
import { Loading } from '../../Layout/Loading';

interface RegisterFormState{
  status: 'error' | 'success' | 'unavailable'
  email: IFormField<string>;
  firstname: IFormField<string>;
  lastname: IFormField<string>;
  password: IPasswordField;
  confirmation: IFormField<string>;
}

class ProfileScreen extends React.Component<{}, RegisterFormState> {
  constructor(props: {}){
    super(props);
    this.state = {
      status: 'unavailable',
      email: defaultStringFormField(),
      firstname: defaultStringFormField(),
      lastname: defaultStringFormField(),
      password: defaultPasswordFormField(),
      confirmation: defaultStringFormField()
    }
  }

  componentDidMount(){
    getConnectedUser()
      .then(user => {
        this.setState({
          status: 'success',
          email:{
            ...this.state.email,
            value: user.email
          },
          firstname: {
            ...this.state.firstname,
            value: user.firstname
          },
          lastname: {
            ...this.state.lastname,
            value: user.lastname
          }
        })
      })
      .catch(err => {
        this.setState({
          status: 'error'
        })
      })
  }

  // TODO Est-ce que le password est required ?
  handleChange = (field: RegisterFormKey, newValue: string) => {
    const newState = {
      ...this.state,
      [field]: {
        ...this.state[field],
        value: newValue,
      }
    };
    if (field === 'email') {
      const { email } = newState;
      validateEmailField(email);
    } else if (['firstname', 'lastname'].includes(field)) {
      const formField = newState[field];
      validateNameField(formField);
    } else if (field === 'password') {
      const { password } = newState;
      validatePasswordField(password);
    }
    if (['password', 'confirmation'].includes(field)) {
      const { password, confirmation } = newState;
      validateConfirmationField(confirmation, password);
    }
    this.setState(newState);
  }

  // TODO Mettre à jour avec le patch
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, firstname, lastname, password, confirmation } = this.state
    if(email.isValid && firstname.isValid && lastname.isValid && password.isValid && confirmation.isValid){
      //register(...this.state).then((user) => alert(user.firstname));
    }
  }


  render(){
    const { email, firstname, lastname, password, confirmation, status } = this.state;
    if(status === "error") {
      return <Alert severity="error">This is an error alert — check it out!</Alert>
    } else if (status === "unavailable"){
      return <Loading />
    } else {
      return <Container maxWidth="sm">
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
          <Box style={{margin: "2rem 0"}}>
            <Grid container justify="flex-end">
              <Grid item xs={4}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    }
  }
}

export default ProfileScreen;