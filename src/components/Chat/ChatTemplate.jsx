import React, {useEffect, useState} from 'react';
import Button from "../ui/Button/Button";
import Loader from "../ui/Loader";
import {Dropdown} from "antd";
import {useTemplateService} from "../../API/useTemplateService";
import {useFetching} from "../../hooks/useFetching";

const ChatTemplate = ({setNewMessage}) => {

    const { getTemplates} = useTemplateService();
    const [templates, setTemplates] = useState([]);
    const [fetchTemplates, isLoading, error] = useFetching(async () => {
        const data = await getTemplates();
        setTemplates(data);
    });

    useEffect(() => {
        fetchTemplates();
    }, []);

    const items = templates.map(item => ({
        key: item.id,
        label: (
            <h1
                className="template__title"
                style={{fontSize: "14px"}}
                onClick={() => handleTemplateClick(item.template)}
            >
                {item.name}
            </h1>
        ),
    }));

    const handleTemplateClick = (templateText) => {
        setNewMessage(prev => prev + templateText);
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="chat__templates">
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <div>
                    <Dropdown
                        menu={{items}}
                        placement="topLeft"
                        arrow
                    >
                        <Button>Шаблоны</Button>
                    </Dropdown>
                </div>
            }
        </div>
    );
};

export default ChatTemplate;