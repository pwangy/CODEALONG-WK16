import { quotes } from './quotes';

export const generateNewQuote = () => {    
    return (dispatch, getState) => {
        fetch('https://freequote.herokuapp.com/')
                .then(res => res.json())
                .then(data => dispatch(quotes.actions.generateQuote(data)));
    }
}