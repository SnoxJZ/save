import React, {useEffect, useState} from 'react';
import ButtonRemove from "../ui/Button/ButtonRemove";
import {useUsersService} from "../../API/useUsersService";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../ui/Loader";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

const ModalSettingsAdmin = () => {
    const { getUsers, addUser, deleteUser } = useUsersService();
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', password: '' });
    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const data = await getUsers();
        setUsers(data);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDeleteUser = async (username) => {
        try {
            await deleteUser(username);
            setUsers(users.filter(user => user.username !== username));
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const addedUser = await addUser(newUser);
            setUsers([...users, addedUser]);
            setNewUser({ username: '', password: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {isLoading
                ? <div style={{ display: "flex", justifyContent: "center" }}><Loader/></div>
                : <div className="users__list">
                    {users.map(item => (
                            <div className="users__item list__item" key={item.username}>
                                <div className="user__info">
                                    <h1 className="user__title">{item.username}</h1>
                                </div>
                                <div className="user__edit">
                                    <ButtonRemove onClick={() => handleDeleteUser(item.username)}/>
                                </div>
                            </div>
                        )
                    )}
                </div>
            }

            <form className="users__add" onSubmit={handleAddUser}>
                <Input
                    type="text"
                    placeholder='Введите username нового пользователя'
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder='Введите пароль нового пользователя'
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <Button>Добавить пользователя</Button>
            </form>

        </div>
    );
};

export default ModalSettingsAdmin;
