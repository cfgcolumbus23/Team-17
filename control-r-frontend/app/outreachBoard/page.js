"use client"
import { authentication } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import Link from "next/link";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";

export default function OutreachBoard() {

    const dummyArr = [["The Linden Foundation", "The Linden Foundation helps Americans through family support resources, economic programs, and housing opportunities", "https://www.lindenfoundation.org/"],
                    ["United Methodist Church & Community Development For All People", "The Community Development For All People is a faith based partner in Healthy Neighborhoods Healthy Family which assists in developing healthy food options.", "https://www.4allpeople.org/"], 
                    ["Community Shelter Board", "Community Shelter Board provides rapid rehousing efforts for Linden residents threatened by homelessness.", "https://www.csb.org/"]
            ]

    return (
        <div className="w-full h-full justify-center items-center p-8">
            <p className="flex justify-center text-4xl font-bold p-5">Partner Organizations</p>
            <Table isStriped aria-label="Example static collection table justify-center w-1/2">
          <TableHeader>
            <TableColumn className="text-center">Name of Organization</TableColumn>
            <TableColumn className="text-center">Description</TableColumn>
            <TableColumn className="text-center">More Information</TableColumn>
          </TableHeader>
          <TableBody>
            {dummyArr.map(([name, description, info], ind) => (
              <TableRow key={ind}>
                <TableCell className="text-center">{name}</TableCell>
                <TableCell className="text-center">{description}</TableCell>
                <TableCell className="text-center">{info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
    );

}