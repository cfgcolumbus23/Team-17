import React from "react";
import { Divider } from "@nextui-org/react";
export default function Leaderboard() {
  const dummyArr = [
    {
      username: "John",
      points: 600,
    },
    {
      username: "Deere",
      points: 800,
    },
    {
      username: "Heather",
      points: 400,
    }
  ];
  return (
    <div className="flex flex-col justify-center items-center border border-white p-4 w-[60vw] mx-auto">
      <h1 className="text-5xl">Leaderboard</h1>
      <Divider className="my-4" />
      {dummyArr.map((ele, index) => (
        <div key={index} className="max-w-xl">
          <Divider className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-small">
            <div className="text-3xl">{ele.username}</div>
            <Divider orientation="vertical" />
            <div className="text-3xl">{ele.points}</div>
            <Divider orientation="vertical" />
          </div>
        </div>
      ))}
    </div>
  );
}
