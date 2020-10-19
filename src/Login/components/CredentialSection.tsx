import { createStyles, TextField, Theme, Typography, withStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import { IFormField, IPasswordField, RegisterFormKey } from '../types';

interface CredentialSectionProps {
  password: IPasswordField;
  confirmation: IFormField<string>;
  handleChange: (field: RegisterFormKey, value: string) => void;
  classes: any;
}

const style = (theme: Theme) => {
  return createStyles({
    newColor: { color: theme.palette.primary.main }
  });
};

class CredentialSection extends React.Component<CredentialSectionProps> {
  render(){
    const { password, confirmation } = this.props;
    return (
      <Fragment>
        <Typography className={this.props.classes.newColor}>Coucou</Typography>
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
  }
}

export default withStyles(style)(CredentialSection);