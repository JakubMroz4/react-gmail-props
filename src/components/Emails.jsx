import { useState } from "react";
import Email from './Email';

function Emails({filteredEmails, toggleStar, toggleRead}) {

  return <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleStar={toggleStar} toggleRead={toggleRead} />
          ))}
        </ul>
      </main>;
}

export default Emails;