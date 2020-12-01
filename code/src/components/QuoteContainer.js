import React from 'react';
import { useSelector } from 'react-redux';

const QuoteContainer = () => {
    const quote = useSelector(store => store.quotes.quote);

    return (
        <div>My quote: {quote.quote}</div>
    );
};

export default QuoteContainer;