import React, { useState } from 'react';

export default function Joke(props) {
  const [personData,setPersonData]=useState({
    mail:"amine ",
    password:"ath",
    confirmPassword:"example@gmail.com",
    checkJoin:false,
    msg:''
  })

  function handl(event){
    setPersonData({...personData,
      [event.target.name]:event.target.value
    })
  }
  function checkerFunc(){

    personData.password===personData.confirmPassword?
                          setPersonData({...personData,msg:"sucessfully"}) :
                           setPersonData({...personData,msg:"incorrect pass"})

    personData.checkJoin && setPersonData({...personData,msg:`${personData.msg} and thanks for joining`})
    alert(personData.msg)
  }
  
  return (
    <div>
      <input type='text' placeholder='enter ur email' name='mail' onChange={handl}/>
      <input type='text' placeholder='enter ur password' name='password' onChange={handl}/>
      <input type='text' placeholder='confirm password' name='confirmPassword' onChange={handl}/>
      
      <input checked={personData.checkJoin} type='checkbox' id='super' onClick={(e)=>setPersonData({...personData,checkJoin:e.target.checked})}/>
      <label>i want to join the new sletter</label>
      <button onClick={checkerFunc}>sign up</button>
    </div>
  );
}
