import React, {Component} from 'react';
import {compose} from 'redux';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

// [je opent de app] -> [2 knoppen] -> [maak een kamer,voer een teamcode in]

// [maak een kamer] -> []

// [voer een teamcode in] -> []

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextFieldButtonContainer = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  opacity: 0.45;
`;

class Home extends Component {
    state = {
        value: '',
        createQuizDisabled: false
    };

    createQuiz = async () => {
        if (this.state.createQuizDisabled) {
            return;
        }
        this.setState({
            createQuizDisabled: true
        });
        // do request to api
        // temp fake behavior
        /*
        response:
        {
            code: 'abcdef1234'
        }
         */
        const quizLink = 'http://localhost:3000/join/abcdef1234';
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 5000)
        });
        this.setState({
            createQuizDisabled: false,
            quizLink: quizLink
        })
    };

    render() {
        return (
            <Center>
                <Typography variant="display3" gutterBottom align="center">
                    Hackathon 2018
                </Typography>
                <ButtonContainer>
                    <TextFieldButtonContainer>
                        <Mask/>
                        <TextField
                            margin={'none'}
                            id={'teamcode'}
                            label={'Voer hier je teamcode in'}
                            onChange={(e) => this.setState({value: e.target.value})}
                            value={this.state.value}
                        />
                        <br/>
                        <Button fullWidth variant="raised" color={'secondary'} size={'large'}>Voer je code in</Button>
                        <Button
                            fullWidth
                            variant="raised"
                            color={'secondary'}
                            onClick={() => this.createQuiz()}
                            size={'large'} style={{marginTop: '10px'}}>
                            {this.state.createQuizDisabled ? <CircularProgress/> : 'Maak een team aan'}
                        </Button>
                    </TextFieldButtonContainer>
                </ButtonContainer>
            </Center>
        );
    }
}

export default compose(
)(Home);