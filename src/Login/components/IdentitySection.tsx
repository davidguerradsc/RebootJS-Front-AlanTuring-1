import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';
import { IFormField, RegisterFormKey } from '../types';

interface IdentitySectionProps {
  email: IFormField<string>;
  firstname: IFormField<string>;
  lastname: IFormField<string>;
  handleChange: (field: RegisterFormKey, value: string) => void;
}

class IdentitySection extends React.Component<IdentitySectionProps> {
  render(){
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
    const { email, firstname, lastname } = this.props;
    return (
      <Fragment>
        <TextField
          required
          label="Email"
          variant="outlined"
          fullWidth={true}
          value={email.value}
          onChange={(e) => this.props.handleChange("email", e.target.value)}
          {...(!email.isValid ? {error: true, helperText: email.error} : {})}
          />
        <TextField
          required
          label="Firstname"
          variant="outlined"
          fullWidth={true}
          value={firstname.value}
          onChange={(e) => this.props.handleChange("firstname", e.target.value)}
          {...(!firstname.isValid ? {error: true, helperText: firstname.error} : {})}
          />
        <TextField
          required
          label="Lastname"
          variant="outlined"
          fullWidth={true}
          value={lastname.value}
          onChange={(e) => this.props.handleChange("lastname", e.target.value)}
          {...(!lastname.isValid ? {error: true, helperText: lastname.error} : {})}
          />
      </Fragment>
    )
  }
}

export default IdentitySection;