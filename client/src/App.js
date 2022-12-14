import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react";
import {Context} from "./index";
import {check} from "./components/http/userAPI";
import {Spinner} from "react-bootstrap";

const Index = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
            check().then(data=>{
                user.setAdmin(data.role)
                user.setId(data.id)
                user.setName(data.email)

                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=> setLoading(false))
    }, [])
    if (loading){
        return <Spinner animation={'grow'}/>
    }
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    </div>
  );
});

export default App;
