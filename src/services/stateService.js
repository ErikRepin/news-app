// redux eto biblioteka, kotoraja pomogaet nam rabotat s sostojanijami
// redux eto globalnoe sostojanie prilozenija
// redux zaimodeistvuet tolko tolko s temi komponentami s kotorqmi neobhodimq ne zatragivajut ostalnqh v cepo4ke
// eto pomogaet lu4she kontrolirovat otrisovku/render prilozenija.
// redux rabotaet v ne zavisemosti ot strukturq 
// @reduxjs/toolkit eto glavnaja biblioteka redux


import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import moment from 'moment';

const pageSize = 12;
// peremennaja tip object : iznachalnoe sostojanie 
const initialState = {
    errorMessage: null,
    totalResults: pageSize,
    searchParams: {
        q: 'авто',
        from: moment().format("YYYY-MM-DDT00:00:00.000"),
        to: moment().format("YYYY-MM-DDT23:59:59.999"),
        language: 'ru',
        searchIn: 'title,description,content',
        pageSize,
        page: 1,
    }
};
// createAction deklariruet deistvie v redux
// eto deistvie mq zapuskaem kogda hotim izmenit sostojanie
export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");

// createReducer eto obrabotchik deistvija 
// Zdes mq govorim reduxu, 4to mq hotim sdelat etim deistviem
// v nashem slu4ii i vosnovnom mq menjaem sostojanie
// action.payload - tut nahoditsja peredannaja informacija
const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]: (state, action) => {
        state.searchParams.page = action.payload;
    },
    [setTotalResults]: (state, action) => {
        state.totalResults = action.payload;
    },
    [setSearchParams]: (state, action) => {
        state.searchParams = action.payload;
    }
});
// zdes mq vsjo sobiraem v odno i sozdajom tak nazqvaemoe hranilishe
export const store = configureStore({ reducer });

// hranilishe mq peredajom v komponent Provider ot react-redux biblioteki i oborachivaem ves nash proekt im