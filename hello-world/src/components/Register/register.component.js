import React , { Component } from 'react';
import {Form,Input,FormGroup,FormFeedback,Button} from 'reactstrap';
import { isEmail } from 'validator';
class Register extends Component
{
    constructor (props)
    {
        super(props);
        this.state=this.getInitialState();
    }
    getInitialState= () => ({
        data:{
            firstName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        errors:{}
    });

    handleChange = (e) =>{
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors:
            {
                ...this.state.errors,
                [e.target.name]:''
            }
        });    
    }
    validate = () => {
        const { data }= this.state;
        let errors ={};
        if (data.firstName === '') errors.firstName = 'First Name can not be blank';
        if (data.email === '') errors.email = 'Email can not be blank';
        if (!isEmail(data.email)) errors.email = 'Email must be valid';
        if (data.password ==='') errors.password = 'Password must be valid';
        if (data.confirmPassword !==data.password) errors.confirmPassword = 'Password must match';

        return errors;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;
        const errors = this.validate();
        if(Object.keys(errors).length===0){
            console.log(data);
            //call an api here
            this.setState(this.getInitialState());
        }else{
            this.setState({ errors });
        }
    }
  render()
  { const {data, errors}=this.state;
       return(
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input id="firstName" placeholder="Name*" value={data.firstName}invalid={errors.firstName ? true:false} name="firstName" onChange={this.handleChange} />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input id="email" placeholder="Email Address*" value={data.email} invalid={errors.email ? true:false} name="email" onChange={this.handleChange} />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input id="password"  placeholder="Password*" value={data.password} type ="password" invalid={errors.password ? true:false} name="password" onChange={this.handleChange} />
          <FormFeedback>{errors.password}.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input id="confirmPassword" placeholder="Confirm Password*" value={data.confirmPassword} invalid={errors.confirmPassword ? true:false} name="confirmPassword" onChange={this.handleChange} />
          <FormFeedback>{errors.password} </FormFeedback>
        </FormGroup>
        <Button  color="primary" size="lg" block>SIGN UP</Button>
      </Form>
  );
  }
}
export default Register;