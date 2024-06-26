"use client"
import { useRouter } from 'next/navigation';
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { authentication } from "../../firebaseConfig"
export default function Pretest() {
    const router = useRouter();

    var requestVerification = async () => {
        router.replace('./certifications');
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
            <div className="p-3 items-center flex-col w-2/3 justify-center mx-5">
                <p className="flex justify-center text-3xl pb-4">Time to take the pretest!</p>
                <Link className="bg-blue-500 p-4 flex justify-center rounded-3xl md:text-7xl sm:text-2xl" href={"https://www.digitalliteracyassessment.org/go/?module=13"} target="_blank" rel="noopener noreferrer">Take the assessment!</Link>
                <div className='m-auto flex w-full justify-center p-4'>
                    <Button className="justify-center align-middle flex text-xl my-10" onClick={requestVerification}>I took the pretest!</Button>
                </div>
            </div>
        </div>
    )
}
