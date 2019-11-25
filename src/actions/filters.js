//////////action generators://///

// SET_TEXT_FILTER

export const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOOUNT

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOOUNT'
});

// SET_START_DATE

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE

export const setEndtDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});