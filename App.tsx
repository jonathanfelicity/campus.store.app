import { Root } from "./src/navigators";
import { UserContextProvider } from "./src/context/UserContext";

const App = () =>{
  return (
    <UserContextProvider>
      <Root/>
    </UserContextProvider>
  )
}

export default App