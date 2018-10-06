import React, {Component} from 'react';
import { Menu, Container, Search, Grid, Segment, Divider, Button, Header } from 'semantic-ui-react';
import { Link } from '../routes';

class HeaderComponent extends Component {

    state = {
        currentUrl : ''
    }

    componentDidMount() {
        this.setState({currentUrl : window.location.pathname})

    } 

    render(){
        console.log('Current Url : ' , this.state.currentUrl)
        return (
            <Container>
                <Grid relaxed style={{ marginTop: '10px' }}>
                    <Grid.Column width={3}>
                        <Link route="/">
                            <a className="item" >Explore</a>
                        </Link>
                        
                        <Link route="/campaigns/new">
                            <a className="item" style={{marginLeft : '20px'}} >Start a project</a>
                        </Link>
    
                    </Grid.Column>
    
                    <Grid.Column width={10} style={{ textAlign: 'center' }}>
                        <Link route="/">
                            <Header as='h2' color='teal' textAlign='center'>
                                KICKSTARER
                            </Header>
                        </Link>
                    </Grid.Column>
    
                    <Grid.Column width={3} style={{textAlign : 'right'}}>
                    <Link route={`/author/login`}>
                            <a className="item" >Login</a>
                        </Link>
                    </Grid.Column>
    
                </Grid>
                <Divider />
    
            </Container>
        );
    }
}

export default HeaderComponent;
