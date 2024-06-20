const mockConversations = [
    {
        id: 1,
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Hey, how are you?',
            time: '10:45 AM',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 2,
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Smith',
        status: 'read',
        lastMessage: {
            text: 'Let’s catch up later.',
            time: '9:15 AM',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 3,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice Johnson',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'I will be there at 5 PM.',
            time: '8:30 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 4,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob Brown',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Did you receive the documents?',
            time: '7:45 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 5,
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Hey, how are you?',
            time: '10:45 AM',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 6,
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Smith',
        status: 'read',
        lastMessage: {
            text: 'Let’s catch up later.',
            time: '9:15 AM',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 7,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice Johnson',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'I will be there at 5 PM.',
            time: '8:30 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 8,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob Brown',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Did you receive the documents?',
            time: '7:45 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 9,
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Hey, how are you?',
            time: '10:45 AM',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 10,
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Smith',
        status: 'read',
        lastMessage: {
            text: 'Let’s catch up later.',
            time: '9:15 AM',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 11,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice Johnson',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'I will be there at 5 PM.',
            time: '8:30 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 12,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob Brown',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Did you receive the documents?',
            time: '7:45 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 13,
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        status: 'unread', // 'unread' | 'read'
        lastMessage: {
            text: 'Hey, how are you?',
            time: '10:45 AM',
            unreadCount: 3, // количество непрочитанных сообщений
            sender: 'them'
        },
    },
    {
        id: 14,
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Smith',
        status: 'read',
        lastMessage: {
            text: 'Let’s catch up later.',
            time: '9:15 AM',
            unreadCount: 0,
            sender: 'them'
        },
    },
    {
        id: 15,
        avatar: 'https://via.placeholder.com/50',
        name: 'Alice Johnson',
        status: 'read', // прочитанное сообщение
        lastMessage: {
            text: 'I will be there at 5 PM.',
            time: '8:30 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
    {
        id: 16,
        avatar: 'https://via.placeholder.com/50',
        name: 'Bob Brown',
        status: 'unread', // непрочитанное сообщение
        lastMessage: {
            text: 'Did you receive the documents?',
            time: '7:45 AM',
            unreadCount: 0,
            sender: 'me' // отправитель я
        },
    },
];

export default mockConversations;