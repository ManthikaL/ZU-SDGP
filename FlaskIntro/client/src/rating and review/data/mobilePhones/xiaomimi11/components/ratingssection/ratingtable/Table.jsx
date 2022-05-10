import React, { useState, } from "react";
import data from "./mock-data.json";
import './Table.css'


const App = () => {
    const [contacts, setContacts] = useState(data);
    return <div className="app-container">
        <table>
            {/* Table Headings */}
              <tr>
                  <th>Postive Review</th>
                  <th>Negative Review</th>
             </tr>
            
            {/* Table Content */}
            {contacts.map((contacts) => (
            
                <tr>
                    <td>{contacts.postive}</td>
                    <td>{contacts.negative}</td>
                </tr>

                
                ))}
                
            
        </table>
    </div>;
};

export default App;