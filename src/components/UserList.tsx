import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;