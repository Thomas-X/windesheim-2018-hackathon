import React, {Component} from 'react';
import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

class Join_Team extends Component {
    state = {
        value: ''
    };

    addUser () {
        // do POST request to /login
        // with this body:
        /*
            name: 'Thomas'
         */
        // get token for api calls and store in redux
        console.log(this.state.value)

        this.props.history.push('/quiz/' + this.props.match.params.teamcode)
    }

    render() {
        const code = this.props.match.params.teamcode;
        return (
            <Flex>
                <TextField
                    margin={'none'}
                    id={'teamcode'}
                    label={'Voer je naam in'}
                    onChange={(e) => this.setState({value: e.target.value})}
                    value={this.state.value}
                />
                <br/>
                <Button variant="raised" color={'secondary'} size={'large'} onClick={() => this.addUser()}>Voeg je naam toe</Button>
            </Flex>
        )
    }
}

export default withRouter(Join_Team);