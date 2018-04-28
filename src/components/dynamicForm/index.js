import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';

class LoginForm extends React.Component {

 handleCahnage(){
     const value = this.props.user;
     this.setState({user: value}, function () {
            // this._handleSubmit();
            console.log("----->",this.state.user);
        });
    }

    addToList = () =>{
       let dupState = [this.state];
       //dupState.push({user:{username1:"username11",password1:"password1"}});
     console.log("dupState-->",dupState);
    }

    render() {
        let { user } = this.props;

        return (
            <form onSubmit={this.submitForm}>
                <Field model="user.username">
                    <label>Username</label>
                    <input type="text" onChange={(input)=>{this.handleCahnage(input)}} />
                </Field>

                <Field model="user.password">
                    <label>Password</label>
                    <input type="textarea" onChange={(input)=>{this.handleCahnage(input)}} />
                </Field>

                <button onClick={this.addToList}>
                    Add
                </button>

            <br/>
                { user.username }
                { user.password }

            </form>
        )
    }
}

const selector = (state) => ({ user: state.user });

export default connect(selector)(LoginForm);
