import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import login from './pages/login'
import daftar from './pages/daftar'
import SyaratKetentuan from './pages/syarat-dan-ketentuan'


function App() {
  return (
  	<>
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={login} />
      <Route path="/daftar" exact component={daftar} />
      <Route path="/syarat-dan-ketentuan" exact component={SyaratKetentuan} />
    </Switch>
  </BrowserRouter>
    </>
  )
}

export default App;
