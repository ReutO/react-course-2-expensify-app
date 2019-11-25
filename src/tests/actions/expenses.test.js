import { editExpense, removeExpense, addExpense } from '../../actions/expenses';

test('shoud setup remove action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup editExpense action object', () => {
    const action = editExpense('123acb', {
        description: 'january rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123acb',
        updates: {
            description: 'january rent',
            note: 'This was the final payment for the address',
            amount: 54500,
            createdAt: 0
        }
    });
});

test('should setup add action object', () => {
    const expenseData = {
        description: 'january rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    };
    const action = addExpense( expenseData );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add action object no data', () => {
    const expenseData = {
        description: 'january rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});