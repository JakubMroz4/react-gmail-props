

function Email({email, index, toggleStar, toggleRead, activeEmailId, setActiveEmailId}) {
    const handleEmailClick = (id) => {
        setActiveEmailId(prevId => (prevId === id ? null : id));
    };

    return <li
                key={index}
                className={`email ${email.read ? 'read' : 'unread'}`}
                >
                <div className="select" style={{ gridArea: 'select' }}>
                    <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                    />
                </div>
                <div className="star" style={{ gridArea: 'star' }}>
                    <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                    />
                </div>
                <div className="sender" style={{ gridArea: 'sender' }}>{email.sender}</div>
                <div className="title" onClick={() => handleEmailClick(email.id)} >{email.title}</div>
                {activeEmailId === email.id && (
                    <div className="email-body" style={{ gridArea: 'body' }}>
                        {email.body}
                    </div>
                    )}
        </li>;
}
export default Email;