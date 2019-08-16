import React, { useState, useEffect, useContext } from 'react';
import API_Service from '../Services/ApiService'
import UserContext from '../Contexts/UserContext'

export default function Users(props) {

  const context = useContext(UserContext);
  const [data, setData] = useState({users: {}, isFetching: false, page: 1})

  useEffect(() => {
    API_Service.getUsers(data.page).then(dat => {
      context.setUsers(dat.results)
    })
  }, []);

  // useEffect(() =>{
  //   handleFetch()
  // }, [data.page])

  // function fetchLimit(){
  //   const limit = 20;
  //   let curr = data.page;
  //   if(limit > curr){
  //   setTimeout(setData({page: data.page + 1}))
  //   console.log(data.page)
  //   }
  // }

  // function handleFetch(){
  //   setTimeout(fetchLimit(), 5000000)
  // }



  return(
    <div>

    </div>
  )
}