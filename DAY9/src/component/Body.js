import React, {useState,useEffect} from "react"


function Body()
{
    const [Profile,setProfile]=useState([]);
    const [ProfileNum,setProfileNum]=useState("");
   async function getProfile(Num)
    {
        let ran=Math.floor(Math.random()*20000);
        const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${Num}`);

        const data=await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        getProfile(10);
    },[])

    return(
        <div className="bodyy">
            <input type="number" placeholder="Search for number of Profile" className="inp" value={ProfileNum} onChange={(e)=>{setProfileNum(e.target.value)}}/>
            <button className="butt" onClick={()=>getProfile(Number(ProfileNum))}>Search</button>
        <div className="profile">
            {
                Profile.map((value)=>{
                    return(
                        <div className="card" key={value.id}>
                            <img src={value.avatar_url} alt="profile pic"/>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank" rel="noreferrer">View Profile</a>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Body;