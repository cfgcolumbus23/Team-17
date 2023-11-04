"use client"
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { authentication } from "@/firebaseConfig";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function SignUp() {
  var [email, setEmail] = useState("")
  var [username, setUsername] = useState("")
  var [firstName, setFirstName] = useState("")
  var [lastName, setLastName] = useState("")
  var [password, setPassword] = useState("")

  var onChangeEmail = (e) => {
    setEmail(e.target.value)

  }
  var onChangeUsername = (e) => {
    setUsername(e.target.value)

  }
  var onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  var onChangeLastName = (e) => {
    setLastName(e.target.value)
  }
  var onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  var signUp = async () => {
    createUserWithEmailAndPassword(authentication, email, password).then(async (userCredential) => {
      const user = userCredential.user;
      var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username
    }
    var response = await fetch("http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/profile/createProfile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({"uid":user.uid, "data":userData}),
    })
    return response.json();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
    
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
        <div className="p-3 flex-col w-1/2 justify-center">
            <p className="flex text-xl font-bold p-4">Sign Up</p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input className="flex" type="text" label="First Name" onChange={onChangeFirstName} value={firstName}></Input>
                <Input className="flex" type="text" label="Last Name" onChange={onChangeLastName} value={lastName}></Input>
            </div>
            <Input className="my-4" type="email" label="Email" value={email} onChange={onChangeEmail}></Input>
            <Input className="my-4" label="Username" value={username} onChange={onChangeUsername}></Input>
            <Input className="my-4" type="password" label="Password" value={password} onChange={onChangePassword}></Input>
            <Button color="primary" onClick={signUp}>Sign Up</Button>
            <p className="p-2">
                Already have an account? <Link href="/signIn" className="text-blue-400">Sign In</Link>
            </p>
        </div>
    </div>
  )
}
