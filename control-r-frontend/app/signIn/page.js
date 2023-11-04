"use client"
import { authentication } from "../../@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRouter } from 'next/navigation';


export default function SignUp() {
  // console.log(wauthentication)
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
const router = useRouter();


  var onChangeEmail = (e) => {
    setEmail(e.target.value)

  }
  var onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  var signIn = async () => {
    signInWithEmailAndPassword(authentication, email, password).then(async (userCredential) => {
      const userID = userCredential.user;
      var url = `http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/profile/getProfile/${userID.uid}`
      var data = await fetch(url)
      var json = await data.json()

      localStorage.setItem('loggedIn',)
      router.replace('./pretest');
      window.location.reload();  
      return json
    })
    .catch((error) => {
      console.log("invalid password")
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
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
