import React, { Component } from 'react';
import { Button, Form, Input, Message, Checkbox, FormGroup, Dropdown } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { Common } from '../../utils/common';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';

class CampaignNew extends Component {
    state = {
        errorMessage: '',
        loading: false,
        name: '',
        category: '',
        description: '',
        minimumContribution: '',
        goal: '',
        deadline: '',
        investmentDescription: ''
    };

    categories = [
        {
            text: 'Art',
            value: 'art',
            image: { avatar: true, src: 'https://ethereum.org/images/wallpaper-homestead.jpg' },
        },
        {
            text: 'Artr',
            value: 'artr',
            image: { avatar: true, src: 'https://ethereum.org/images/wallpaper-homestead.jpg' },
        },
    ]

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            console.log('account : ' + accounts);
            await factory.methods
                .createCampaign(
                    this.state.name,
                    this.state.category,
                    web3.utils.toWei(this.state.minimumContribution, 'ether'),
                    this.state.description,
                    web3.utils.toWei(this.state.goal, 'ether'),
                    this.state.deadline,
                    this.state.investmentDescription)
                .send({
                    from: accounts[0]
                });

            Router.pushRoute('/');
        } catch (err) {
            console.log(err.message);
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });

        console.log('name ' + this.state.name + ' \ncategory : ' + this.state.category
            + '\nMinimum : ' + this.state.minimumContribution
            + '\nDes : ' + this.state.description
            + '\nGoal : ' + this.state.goal
            + '\nDeadline : ' + this.state.deadline
            + '\nInvestDes : ' + this.state.investmentDescription);

    };

    render() {
        return (

            // <Layout>
            //     <h3>Create a Campaign</h3>
            //     <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            //         <Form.Field>
            //             <label>Minimum Contribution</label>
            //             <Input 
            //                 label="wei"
            //                 labelPosition="right"
            //                 value = {this.state.minimumContribution}
            //                 onChange= {event => 
            //                     this.setState({minimumContribution : event.target.value})}
            //                 />
            //         </Form.Field>

            //         <Message error header="Oops!" content={this.state.errorMessage}/>
            //         <Button loading={this.state.loading} primary>Create!</Button>
            //     </Form>

            // </Layout>
            <Layout>
                <h5>Create new campaign</h5>

                <Form className="segment" onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    
                    <Form.Field>
                        <label>Category</label>
                        <Dropdown placeholder='Select Friend'
                            fluid selection
                            options={this.categories}
                            onChange={(event, { value }) =>
                                this.setState({ category: value })} />
                    </Form.Field>

                    <Form.Field>
                        <label>Campaign name</label>
                        <Input
                            value={this.state.name}
                            onChange={event =>
                                this.setState({ name: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Campaign Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event =>
                                this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Goal</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.goal}
                            onChange={event =>
                                this.setState({ goal: event.target.value })}
                        />
                    </Form.Field>
                    
                    <DateInput
                        name="deadline"
                        placeholder="Date"
                        value={this.state.deadline}
                        iconPosition="left"
                        onChange={(event, { value }) =>
                        this.setState({ deadline: value })} />
                    
                    <Form.Field>
                        <label>Investment Description</label>
                        <Input
                            value={this.state.investmentDescription}
                            onChange={event =>
                                this.setState({ investmentDescription: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button >Submit</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;