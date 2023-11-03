"use client"
import { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function SignUp() {
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")

  var onChangeEmail = (e) => {
    setEmail(e.target.value)

  }
  var onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  var signIn = async () => {
    var data = await fetch("/signIn")
    var json = await data.json() 
    return json
    
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
        <div className="p-3 flex-col w-1/2 justify-center">
            <p className="flex text-xl font-bold p-4">Sign In</p>
            <Input className="my-4" type="email" label="Email" value={email} onChange={onChangeEmail}></Input>
            <Input className="my-4" type="password" label="Password" value={password} onChange={onChangePassword}></Input>
            <Button color="primary" onClick={signIn}>Sign In</Button>
            <p className="p-2">
                Don't have an account? <Link href="/signUp" className="text-blue-400">Sign Up</Link>
            </p>
        </div>
    </div>
  )
}
