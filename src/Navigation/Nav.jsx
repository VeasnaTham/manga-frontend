import { MdOutlineSell, MdHistory, MdLogout } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";


import "./Nav.css";
import { useEffect, useState } from "react";
import supabase from "../pages/Auth/client";
import { useNavigate } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
  const [session, setSession] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  },[])
  

  async function onLogOut() {
    const { error } = await supabase.auth.signOut()
    navigate("/", {replace: true})
    alert('log out successfully')
  }

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          name="search"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter Manga/Manhwa/Manhua Title..."
        />
      </div>
      <div className="profile-container">
        <a href="./listings">
          <MdOutlineSell className="nav-icons" />
        </a>
        <a href="./history">
          <MdHistory className="nav-icons" />
        </a>
        {
          session ? <button onClick={onLogOut}><MdLogout className='nav-icons'/></button> : <button className="" onClick={(e) => {
            supabase.auth.signInWithOAuth({
              provider: 'google',
            }) 
          }}><AiOutlineUserAdd className="nav-icons" /></button>
        }
      </div>
    </nav>
  );
};

export default Nav;