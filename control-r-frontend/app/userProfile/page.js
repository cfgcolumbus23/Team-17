"use client"
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [username, setUsername] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  
  {/* Submit function that is going to take all of the state variables
    and pass them into an API request e.g fetch("/path")   */}
  return (
    <div>
      <label>User Profile</label>
      <div className="my-4">
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={onChangeName}
        />
      </div>

      <div className="my-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <div className="my-4">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={onChangeDate}
        />
      </div>

      <div className="my-4">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={onChangeUsername}
        />
      </div>
      <Input type="date" placeholder="Date of Birth" />
      {
      /* Button here that saves our changes to the user profile */
      
      }
    </div>
  );
}
