
import {
  ChakraProvider,


  theme,
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import LoginPage from "./LoginPage"
import Home from "./Home"
import ErrorPage from "./ErrorPage"

export const App = () => (
  
  <ChakraProvider theme={theme}>
   
   <Router>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/browse" element={<Home/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
   </Router>
 
  </ChakraProvider>
)
