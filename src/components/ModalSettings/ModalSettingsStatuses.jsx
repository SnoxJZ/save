import React, {useEffect, useState} from 'react';
import ButtonRemove from "../ui/Button/ButtonRemove";
import ButtonEdit from "../ui/Button/ButtonEdit";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { ColorPicker } from 'antd';
import {useFetching} from "../../hooks/useFetching";
import Loader from "../ui/Loader";
import {useStatusService} from "../../API/useStatusService";

const ModalSettingsStatuses = () => {

    const { getStatuses, addStatus, deleteStatus, editStatus } = useStatusService();
    const [statuses, setStatuses] = useState([]);
    const [currentStatusId, setCurrentStatusId] = useState(null);
    const [newStatus, setNewStatus] = useState({status: '', color: ''})
    const [fetchStatuses, isLoading, error] = useFetching(async () => {
        const data = await getStatuses();
        setStatuses(data);
    });

    useEffect(() => {
        fetchStatuses();
    }, []);

    const handleAddOrEditStatus = async (e) => {
        e.preventDefault();
        try {
            if (currentStatusId) {
                const updatedStatus = await editStatus(currentStatusId, newStatus);
                setStatuses(statuses.map(status => status.id === currentStatusId ? updatedStatus : status));
            } else {
                const addedStatus = await addStatus(newStatus);
                setStatuses([...statuses, addedStatus]);
            }
            setNewStatus({ status: '', color: '' });
            setCurrentStatusId(null);
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditStatus = (status) => {
        setCurrentStatusId(status.id);
        setNewStatus({ status: status.status, color: status.color });
    };

    const handleColorChange = (color, hex) => {
        setNewStatus({ ...newStatus, color: hex });
    };

    const handleDeleteStatus = async (statusId) => {
        try {
            await deleteStatus(statusId);
            setStatuses(statuses.filter(status => status.id !== statusId));
        } catch (err) {
            console.error(err);
        }
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="modal__content">
            <div className="statuses__list">
                <div className="status__head">
                    <h1 >Название</h1>
                    <h1 >Цвет и количество</h1>
                    <h1 style={{marginLeft: 25}}>Изменить</h1>
                </div>
                {isLoading
                    ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                    : <div>
                        {statuses.map(item => (
                                <div className="status__item list__item" key={item.id}>
                                    <div className="status__info">
                                        <div className="status__text">
                                            <span>{item.status}</span>
                                        </div>
                                        <div className="status_col">
                                        <span style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            backgroundColor: item.color,
                                        }}><p className="status__cou">{item.count}</p></span>
                                        </div>
                                        <div className="status__edit">
                                            <ButtonRemove onClick={() => handleDeleteStatus(item.id)}/>
                                            <ButtonEdit onClick={() => handleEditStatus(item)}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                }

            </div>
            <form className="statuses__add" onSubmit={handleAddOrEditStatus}>
                <Input
                    type="text"
                    placeholder='Введите название статуса'
                    value={newStatus.status}
                    onChange={(e) => setNewStatus({ ...newStatus, status: e.target.value })}
                />
                <div className="statuses__color">
                    <ColorPicker defaultValue="#1677ff"
                                 size="large"
                                 onChange={handleColorChange}
                                 showText={(color) => <span>Цвет статуса ({color.toHexString()})</span>}
                    />
                    <Button >Добавить статус</Button>
                </div>

            </form>

        </div>
    );
};

export default ModalSettingsStatuses;