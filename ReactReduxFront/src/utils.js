// Utilidades y otras funciones muy recurrentes

// Conversores de action type a los action type de redux-promise-action-middleware
export const successType = (type) => `${type}_SUCCESS`
export const requestType = (type) => `${type}_LOADING`
