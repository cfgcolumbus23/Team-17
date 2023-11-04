"use client"
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import {Card, CardFooter, Image} from "@nextui-org/react";
import {CardHeader, CardBody, Avatar} from "@nextui-org/react";

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
  const [isFollowed, setIsFollowed] = React.useState(false);


  
  {/* Submit function that is going to take all of the state variables
    and pass them into an API request e.g fetch("/path")   */}
  return (
    <div>
      <h1 className='text-5xl font-bold text-center m-5'>Profile</h1>
    <div className='w-fit m-auto'>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none m-8"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">PelumiTayo</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Edit
        </Button>
      </CardFooter>
    </Card>
    </div>
    <Card className="m-auto max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Pelumi Tayo-Orisadare</h4>
            <h5 className="text-small tracking-tight text-default-400">pelumi.tayoorisadare@gmail.com</h5>
            <h5 className="text-small tracking-tight text-default-400">@PelumiTayo</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Gender: Female
        </p>
        <span className="pt-2">
          DOB: 05/13/03
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">1</p>
          <p className=" text-default-400 text-small">In Progress Certificate</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">Certified</p>
          <p className="text-default-400 text-small">Techy</p>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
}

    // <div>
    //   <label>User Profile</label>
    //   <div className="my-4">
    //     <label htmlFor="name">Name:</label>
    //     <Input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={onChangeName}
    //     />
    //   </div>

    //   <div className="my-4">
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={onChangeEmail}
    //     />
    //   </div>

    //   <div className="my-4">
    //     <label htmlFor="date">Date</label>
    //     <input
    //       type="date"
    //       id="date"
    //       value={date}
    //       onChange={onChangeDate}
    //     />
    //   </div>

    //   <div className="my-4">
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={onChangeUsername}
    //     />
    //   </div>
    //   <Input type="date" placeholder="Date of Birth" />
    // </div>
  // );
// }
