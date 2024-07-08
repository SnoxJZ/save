import React, {useEffect, useState} from 'react';
import ButtonRemove from "../ui/Button/ButtonRemove";
import {useUsersService} from "../../API/useUsersService";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../ui/Loader";
import Input from "../ui/Input/Input";
import {Textarea} from "../ui/textarea";
import Button from "../ui/Button/Button";

const ModalSettingsAdmin = () => {
    const { getUser, addUser, deleteUser } = useUsersService()
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({username: ''})
    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const data = await getUser();
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

    return (
        <div>
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <div className="users__list">
                    {users.map(item => (
                            <div className="users__item list__item" key={item._id}>
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

            <form className="users__add" onSubmit={handleAddOrEditTemplate}>
                <Input
                    type="text"
                    placeholder='Введите username нового пользователя'
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                />
                <Textarea
                    id="template__body-input"
                    placeholder='Введите текст шаблона'
                    value={newTemplate.template}
                    onChange={(e) => setNewTemplate({...newTemplate, template: e.target.value})}
                />
                <Button>{currentTemplateId ? 'Изменить шаблон' : 'Добавить шаблон'}</Button>
            </form>

        </div>
    );
};

export default ModalSettingsAdmin;