import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FormFill from './Components/Pages/FormFill'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          <Route path='/donate' element={<FormFill/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

// App.js


// const App = () => {
//     return (
//         <Router>
//             <Router>
//                 <Route path="/" exact component={Navbar} />
//                 <Route path="/donate" component={FormFill} />
//             </Router>
//         </Router>
//     );
// };

// export default App;
