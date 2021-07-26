import React, { Component } from "react";
import {FormControl, Button, TextField, RadioGroup, Radio, FormControlLabel} from "@material-ui/core"

export class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: "", 
            lastName: "", 
            council: "", 
            unitNumber: "", 
            unitType: "Pack",
            email: "",
            password: "",
            passwordConfirmation: "",
            passwordErrorMessage: "",
            passwordError: false
        }
    }

    handleOnClick = (event) =>{
        event.preventDefault();

        
    }
    
    render () {
        return(
            <>
                <h1>Registration</h1>
                <p>Fill out the form to sign up to keep track of your stats</p>
                <form>
                    <FormControl error={this.state.error} component="fieldset" >

                    <label>First Name: 
                    <TextField required id="FirstName" onChange={(event) => this.setState({firstName: event.target.value})}></TextField>
                    </label>
                    <br />

                    <label>Last Name: 
                    <TextField required id="LastName" onChange={(event) => this.setState({lastName: event.target.value})}></TextField>
                    </label>
                    <br />

                    <label>Council: 
                    <TextField required id="Council" onChange={(event) => this.setState({council: event.target.value})}></TextField>
                    </label>
                    <br />

                    <label>Unit Number: 
                    <TextField required id="UnitNumber" onChange={(event) => this.setState({unitNumber: event.target.value})}></TextField>
                    </label>
                    <br />

                    <RadioGroup name = "unitType" value={this.state.unitType} onChange={(event) => this.setState({unitType: event.target.value})}>
                        <FormControlLabel value={"Pack"} control={<Radio />} label={"Pack"}></FormControlLabel>
                        <FormControlLabel value={"Troop"} control={<Radio />} label={"Troop"}></FormControlLabel>
                    </RadioGroup>
                    <br />

                    <label>Email: 
                    <TextField required id="Email" onChange={(event) => this.setState({email: event.target.value})}></TextField>
                    </label>
                    <br />

                    <label>Password: 
                    <TextField error={this.state.passwordError} required id="password" onChange={(event) => this.setState({password: event.target.value})}></TextField>
                    </label>
                    <br />

                    <label>Confirm Password: 
                    <TextField required id="passwordConfirm" onChange={(event) => this.setState({passwordConfirmation: event.target.value})}></TextField>
                    </label>
                    <br />

                    <Button variant="contained" color={"secondary"} type="submit" onClick={this.handleOnClick}>Register</Button>
                    </FormControl>
                </form>
            </>
        )
    }
}