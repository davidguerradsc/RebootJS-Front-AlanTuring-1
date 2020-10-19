import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';
<<<<<<< HEAD

interface CredentialSectionProps {
  password: string;
  confirmation: string;
  handleChange: (field: string, value: string) => void;
}

class IdentitySection extends React.Component<CredentialSectionProps> {
  render() {
    // const isValid = true
    // const errorDisplay = {
    //   error: true,
    //   helperText: "error"
    // }
    // const toto = {
    //   label: "Email",
    //   value: this.props.email,
    //   onChange: (e: any) => this.props.handleChange("email", e.target.value)
    // }

    // Puis, a mettre dans le composant : {...(!isValid ? errorDisplay : {})}
    return (
      <Fragment>
        <TextField
          label="password"
          value={this.props.password}
          onChange={(e) => this.props.handleChange("password", e.target.value)}
        />
        <TextField
          label="confirmation"
          value={this.props.password}
          onChange={(e) => this.props.handleChange("confirmation", e.target.value)}
        />
      </Fragment>
    )
=======
import { IFormField, IPasswordField, RegisterFormKey } from '../types';

interface CredentialSectionProps {
  password: IPasswordField;
  confirmation: IFormField<string>;
  handleChange: (field: RegisterFormKey, value: string) => void;
}

class CredentialSection extends React.Component<CredentialSectionProps> {
  render(){
    const { password, confirmation } = this.props;
    return (
      <Fragment>
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          fullWidth={true}
          value={password.value}
          onChange={(e) => this.props.handleChange("password", e.target.value)}
          {...(!password.isValid ? {error: true, helperText: password.error} : {})}

          />
        <TextField
          required
          label="Confirmation"
          variant="outlined"
          type="password"
          fullWidth={true}
          value={confirmation.value}
          onChange={(e) => this.props.handleChange("confirmation", e.target.value)}
          {...(!confirmation.isValid ? {error: true, helperText: confirmation.error} : {})}

          />
      </Fragment>)
>>>>>>> upstream/master
  }
}

export default IdentitySection;