"use client"
export default function Home() {
//   var data = await fetch("apigateway.com/users")
  var myFunc = () => {

  }
  return (
    <div className="flex w-full justify-center">
        <div className="p-3 flex-col w-1/2">
            <p className="flex text-xl font-bold p-4">Sign In</p>
            <div className="flex-row">
                <input className="flex p-5 rounded m-4" placeholder="First Name"></input>
                <input className="flex p-5 rounded m-4" placeholder="Last Name"></input>
            </div>
            <input className="flex p-5 rounded m-4" placeholder="Username"></input>
            <input className="flex p-5 rounded m-4" placeholder="Email"></input>
            <input className="flex p-5 rounded m-4" placeholder="Password"></input>
        </div>
    </div>
  )
}
