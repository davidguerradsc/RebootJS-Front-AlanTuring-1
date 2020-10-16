import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';

interface IdentitySectionProps {
  email: string;
  firstname: string;
  lastname: string;
  handleChange: (field: string, value: string) => void;
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
    return (
      <Fragment>
        <TextField
          label="Email"
          value={this.props.email}
          onChange={(e) => this.props.handleChange("email", e.target.value)}
          />
        <TextField
          label="Firstname"
          value={this.props.firstname}
          onChange={(e) => this.props.handleChange("firstname", e.target.value)}
          />
        <TextField
          label="Lastname"
          value={this.props.lastname}
          onChange={(e) => this.props.handleChange("lastname", e.target.value)}
          />
      </Fragment>
    )
  }
}

export default IdentitySection;