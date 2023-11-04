"use client";
import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Leaderboard() {
  const [dummyArr, setDummyArr] = React.useState([]);

  React.useEffect(() => {
    async function fetchLeaderboard() {
      try {
        var response = await fetch(
          "http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/leaderboard/getLeaderboard",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchLeaderboard()
      .then((data) => {
        console.log(data);
        setDummyArr(data);
      })
      .catch((error) => {
        console.error("Error processing data:", error);
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl text-center m-8 font-bold">CTRL-R Leaderboard</h1>
      <div className="w-[60%] m-auto">
        <img
          className="w-32 h-32 m-auto"
          src="https://cdn-icons-png.flaticon.com/512/3150/3150116.png"
        />
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            <TableColumn className="text-center">Username</TableColumn>
            <TableColumn className="text-center">Level</TableColumn>
            <TableColumn className="text-center">XP</TableColumn>
            <TableColumn className="text-center">Total Points</TableColumn>
          </TableHeader>
          <TableBody>
            {dummyArr.map((ele, ind) => (
              <TableRow key={ind}>
                <TableCell className="text-center">{ele.username}</TableCell>
                <TableCell className="text-center">{ele.level}</TableCell>
                <TableCell className="text-center">{ele.xp}</TableCell>
                <TableCell className="text-center">{ele.totalPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
