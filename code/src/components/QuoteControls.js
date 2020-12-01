import React from 'react';
import { useDispatch } from 'react-redux';

import { quotes } from '../reducers/quotes';
import { generateNewQuote } from '../reducers/reusable';

const QuoteControls = () => {
    const dispatch = useDispatch();

    const onQuoteGenerate = () => {
        dispatch(generateNewQuote());
    }

    const onHistoryBack = () => {
        dispatch(quotes.actions.historyGoBack());
    }

    return (
        <div>
            <button onClick={onQuoteGenerate}>
                Generate quote
            </button>
            <button onClick={onHistoryBack}>
                Go back
            </button>
        </div>
    );
};

export default QuoteControls;