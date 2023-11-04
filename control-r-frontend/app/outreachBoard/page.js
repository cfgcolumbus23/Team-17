"use client"
import { authentication } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function OutreachBoard() {


    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="p-3 flex-col w-1/2 justify-center">
                <p className="flex text-xl font-bold p-4">Related Groups:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Name of Orgranization:
                                </th>
                                <th>
                                    Description:
                                </th>
                                <th>
                                    More Information Here:
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    The Linden Foundation
                                </td>
                                <td>
                                    The Linden Foundation helps Americans through family support resources, economic programs, and housing opportunities.
                                </td>
                                <td>
                                    <a href="https://www.lindenfoundation.org/">https://www.lindenfoundation.org/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    United Methodist Church & Community Development For All People
                                </td>
                                <td>
                                    The Community Development For All People is a faith based partner in Healthy Neighborhoods Healthy Family which assists in developing healthy food options. 
                                </td>
                                <td>
                                    <a href="https://www.4allpeople.org/">https://www.4allpeople.org/</a>
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    Community Shelter Board
                                </td>
                                <td>
                                    Community Shelter Board provides rapid rehousing efforts for Linden residents threatened by homelessness.
                                </td>
                                <td>
                                    <a href="https://www.csb.org/">https://www.csb.org/</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );

}