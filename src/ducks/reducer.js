const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PTOPERTY_TYPE';

function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return {...state, loanType: action.payload};
        case UPDATE_PROPERTY_TYPE:
            return {...state, propertyType: action.payload};
        default:
            return state;
    }
}

export function updateLoanType (loanType){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType (property){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export default reducer;