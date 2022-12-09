import { useState } from "react";
import { InputEmailMulti } from "./components/input-email";

import "./components/input-email/style.css"

function App() {
  const [emails, setEmail] = useState<string[]>([]);

  return (
    <div className="App">
      <p>aaaaa</p>
      <InputEmailMulti
        placeholder="Input your email"
        emails={emails}
        onChange={(_emails: string[]) => {
          setEmail(_emails);
        }}
        autoFocus={true}
        getLabel={(email, index, removeEmail) => {
          return (
            <div data-tag key={index}>
              <div data-tag-item>{email}</div>
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
