import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import userFactory from '../../ethereum/user';

class Login extends Component {
    state = {
        returnUrl: '',
        email: '',
        password: '',
        errorMessage: '',
        loading: false,
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' })
        console.log('Email : ', this.state.email)
        console.log('Password : ', this.state.password)

        try {
            let result = await userFactory.methods.login(this.state.email, this.state.password).call();
            console.log('Login success ', result)

        } catch (err) {
            console.log('Error login', err.message)
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false })
    }

    render() {
        return (
            <Layout>
                <div>
                    {/*
                    Heads up! The styles below are necessary for the correct render of this example.
                    You can do same with CSS, the main idea is that all the elements up to the `Grid`
                    below must have a height of 100%.
                    */}
                    {/* <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                    `}</style> */}
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Log-in to your account
                            </Header>
                            <Form size='large' onSubmit={this.onSubmit}>
                                <Segment>
                                    <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address'
                                        value={this.state.email}
                                        onChange={event => this.setState({ email: event.target.value })} />

                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={event => this.setState({ password: event.target.value })}
                                    />

                                    <Message error header="Oops!" content={this.state.errorMessage} />

                                    <Button color='teal' fluid size='large' loading={this.state.loading}>
                                        Login
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us? <a href='/author/signup'>Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        )

    }
}

export default Login;