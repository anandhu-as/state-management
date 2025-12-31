import React from 'react'
import UserDetails from './UserDetails'
import { UserContextProvider } from './Contex/Context Api/User-Context-Provider'

const App = () => {
  return (
   <>
   <UserContextProvider>
      <UserDetails/>  
   </UserContextProvider>
   </>
  )
}

export default App