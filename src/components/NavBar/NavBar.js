import React from 'react'
import Login from '../login/Login'

const NavBar = () => {
    return (
        <div style = {styles.NavBar}>
            <p>NavBar</p>
            <div  style ={styles.Login}>
                <Login/>
            </div>
        </div>
    )
}
const styles = {
    NavBar:{
        display:'block',
        width:'100%',
        height:'50px',
        borderBottom:'1px solid black'

    },
    Login:{
        position:'absolute',
        top:'15px',
        right:'1%',
        marginTop:'-8px'
    }
}
export default NavBar
