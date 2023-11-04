"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { authentication } from "@/firebaseConfig"
export default function Pretest() {

    var requestVerification = async () => {
        // when this is triggered, send a request to the admin for verifications
        var data = {
            uid: authentication.currentUser.uid,
            certification: 1
        }
        var response = await fetch(`http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/verify/requestVerification`, {
        // var response = await fetch(`http://localhost:2020/api/v1/verify/requestVerification`, {
    
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        console.log(response)
    }
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="p-3 flex-col w-2/3 justify-center mx-5">
                <p className="text-3xl">Time to take the pretest!</p>
                <Link className="bg-blue-500 p-4 rounded md:text-7xl sm:text-2xl flex" href={"https://www.digitalliteracyassessment.org/go/?module=13"} target="_blank" rel="noopener noreferrer">TAKE THE ASSESSMENT</Link>
                <Button className="text-xl  my-10" onClick={requestVerification}>I took the pretest!</Button>
            </div>
        </div>
    )
}
