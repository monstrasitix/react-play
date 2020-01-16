// Core
import * as History from 'history';


export const base = '/dashboard';


export const getUserConfirmation = (message, callback) => (
    callback(window.confirm(message))
);


export const browser = History.createBrowserHistory({
    basename: base,
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation,
});


export const hash = History.createHashHistory({
    basename: base,
    hashType: 'slash',
    getUserConfirmation,
});


export const memory = History.createMemoryHistory({
    initialEntries: [base],
    initialIndex: 0,
    keyLength: 6,
    getUserConfirmation,
});


export default memory;