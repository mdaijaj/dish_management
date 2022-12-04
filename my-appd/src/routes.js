import Company from "./components/company";
import {Routes, Route} from 'react-router-dom'
import Page from "./components/pagination";


const Routing=()=>{
    return(
      <>
        <Routes>
          <Route path="/" element={<Company/>} />
          <Route path="/page" element={<Page/>} />

        </Routes>
      </>
    )
  }

  export default Routing;