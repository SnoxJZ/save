const mockConversations = [
    {
        id: 1,
        avatar: 'https://via.placeholder.com/50',
        name: 'John',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Привет, как твои дела?',
            time: '10:45',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 2,
        avatar: 'https://via.placeholder.com/50',
        name: 'Andrey',
        status: 'read',
        lastMessage: {
            text: 'Давай встретимся позже',
            time: '9:15',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 3,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'Я буду на месте через 5 минут',
            time: '8:30',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 4,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Как проходит выполнение твоих новых задач?  Времени осталось совсем немного',
            time: '7:45',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 5,
        avatar: 'https://via.placeholder.com/50',
        name: 'John',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Привет, как твои дела?',
            time: '10:45',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 6,
        avatar: 'https://via.placeholder.com/50',
        name: 'Andrey',
        status: 'read',
        lastMessage: {
            text: 'Давай встретимся позже',
            time: '9:15',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 7,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'Я буду на месте через 5 минут',
            time: '8:30',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 8,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Как проходит выполнение твоих новых задач?',
            time: '7:45',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 9,
        avatar: 'https://via.placeholder.com/50',
        name: 'John',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Привет, как твои дела?',
            time: '10:45',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 10,
        avatar: 'https://via.placeholder.com/50',
        name: 'Andrey',
        status: 'read',
        lastMessage: {
            text: 'Давай встретимся позже',
            time: '9:15',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 11,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'Я буду на месте через 5 минут',
            time: '8:30',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 12,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Как проходит выполнение твоих новых задач?',
            time: '7:45',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 13,
        avatar: 'https://via.placeholder.com/50',
        name: 'John',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Привет, как твои дела?',
            time: '10:45',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 14,
        avatar: 'https://via.placeholder.com/50',
        name: 'Andrey',
        status: 'read',
        lastMessage: {
            text: 'Давай встретимся позже',
            time: '9:15',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 15,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'Я буду на месте через 5 минут',
            time: '8:30',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 16,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Как проходит выполнение твоих новых задач?',
            time: '7:45',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
];

export default mockConversations;