import React from 'react';
import { Menu, Container, Search, Grid, Segment, Divider, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
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
                        <a className="item" >KICKSTARTER</a>
                    </Link>
                </Grid.Column>

                <Grid.Column width={3} style={{textAlign : 'right'}}>
                <Link route="/">
                        <a className="item" >Login</a>
                    </Link>
                </Grid.Column>

            </Grid>
            <Divider />

        </Container>


    );
};