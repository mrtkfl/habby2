import React from 'react'
import "@fontsource/outfit";
import "./CreateEvent.css"



import { useState } from 'react';

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [people, setPeople] = useState("");

  const handleCreate = async () => {
    const url = "http://localhost:3000/events"
    const token = "";
    const requestOptions = {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
    },

      body:JSON.stringify({
        Title: title,
        About: about,
        Date: when,
        Location: where,
        VisitorNumber: people
      })
    }
    try {
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        if(!response.ok) {
            throw new Error(json.message);
        }
        console.log("Event Created Successfully");
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div class='form-wrapper' className='fit' style={{ fontFamily: "outfit" }}>
      <p>TITLE</p>
      <form class="formstyle">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} class="inputline"/>
      </form>

      <p>ABOUT</p>
      <form class="formstyle">
        <input type="text" value={about} onChange={e => setAbout(e.target.value)}class="inputline"/>
      </form>

      <p>WHEN?</p>
      <form class="formstyle">
        <input type="text" value={when} onChange={e => setWhen(e.target.value)} class="inputline"/>
      </form>

      <p>WHERE?</p>
      <form class="formstyle">
        <input type="text" value={where} onChange={e => setWhere(e.target.value)} class="inputline"/>
      </form>

      <p>FOR HOW MANY PEOPLE?</p>
      <form class="formstyle">
        <input type="text" value={people} onChange={e => setPeople(e.target.value)} class="inputline"/>
      </form>

      <p>PHOTOS</p>
      <div className="gray-rectangle"></div>
      <div className="white-rectangle">
        <div className="plus-sign">+</div>
      </div>
      <div className="line"></div>
      
      <button className="create-event-button" onClick={handleCreate}>Create Event</button>

    </div>
  )
}

export default CreateEvent