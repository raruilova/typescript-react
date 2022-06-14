import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

interface Sub {
  nick: string;
  avatar: string;
  suMonths: number;
  description?: string;
}

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}
const INITIAL_STATE = [
  {
    nick: "depelu",
    suMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=depelu",
    description: "Dapelu hace de moderador",
  },
  {
    nick: "sergio_serrano",
    suMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);//or <Sub[]>
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Subs</h1>
     <List subs={subs} />
    </div>
  );
}

export default App;
