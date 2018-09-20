import React, { Component } from 'react';
import { Image, Container } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class OverviewCampaign extends Component {
    static async getInitialProps() {
        const { address } = props.address;
        const campaign = Campaign(address);
        return { campaign };
    }


    render() {
        return (
            <Container>
                <Image
                    src='https://ethereum.org/images/wallpaper-homestead.jpg'
                    as='a'
                    size='big'
                    href='http://google.com'
                    target='_blank'
                />

                <br />

                <Link route={`/`}>
                    <a>An American Requiem</a>
                </Link>

                <br />

                <Link route={`/`}>
                    <a>BY KAREEN M.LUCAS</a>
                </Link>
                
                <br />

                <Link route={`/`}>
                    <a>37%</a>
                </Link>

            </Container>

        );

    }



}

export default OverviewCampaign;