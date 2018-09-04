import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Quiz extends Component {
    state = {};

    getQuestions = async () => {
        // do GET request to /api/getQuestions?token={WHATEVER_TOKEN}
        /*
        response:
        [
            {
                answers: ['Wortel', 'Steen', 'Aardappel', 'Appel'],
                correctAnswer: ['Wortel'],
                // als er een image is, dan is er een 'image' key
                image: 'https://placekitten.com/640/380',
                // als het alleen een text vraag is, dan is er een 'text' key
                text: 'Je ziet een trap en de Utopolis, wat zie je nog meer?'
            }
            // ... etc
        ]
         */
        // store questions in redux store and activate button

    };

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        const quizDisabled = this.props.questions;
        const { quizcode } = this.props.match.params;
        return (
            <div>
                <Typography variant={'display1'} gutterBottom>Uitleg van het spel</Typography>
                <br/>
                <Typography variant={'subheading'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                    consequatur corporis explicabo facilis fugit hic id impedit in ipsa maiores mollitia, neque odit
                    officia provident qui quod sunt totam voluptatem!</Typography>
                <br/>
                <br/>
                <Button variant="raised" color={'secondary'} size={'large'} disabled={quizDisabled} component={Link} to={`/quiz/${quizcode}/questions`}>Begin met de quiz</Button>
            </div>
        )
    }
}

export default withRouter(Quiz);