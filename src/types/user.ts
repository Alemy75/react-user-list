
// Интерфейс состояния
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// Перечисление типов action
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// Интерфейс Action
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

// Интерфейс Action
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

// Интерфейс Action
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}


export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction
