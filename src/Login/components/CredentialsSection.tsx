import { TextField } from '@material-ui/core';
import React, { Fragment } from 'react';

interface IdentitySectionProps {
  password: string;
  confirmation: string;
  handleChange: (field: string, value: string) => void;
}

class IdentitySection extends React.Component<IdentitySectionProps> {
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
  }
}

export default IdentitySection;