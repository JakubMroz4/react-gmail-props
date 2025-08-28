import Email from './Email';

function Emails({filteredEmails, toggleStar, toggleRead, activeEmailId, setActiveEmailId}) {

  return <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={email.id} email={email} index={index} toggleStar={toggleStar} toggleRead={toggleRead} activeEmailId={activeEmailId} setActiveEmailId={setActiveEmailId}/>
          ))}
        </ul>
      </main>;
}

export default Emails;