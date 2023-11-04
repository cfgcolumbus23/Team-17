"use client"
import React, { useState, useEffect } from "react";
//import {Checkbox} from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { Card, CardBody } from "@nextui-org/react";

export default function App() {
    const [certifications, setCertifications] = useState([])
    const [array, setArray] = useState([])
    var getCertifications = async () => {
        var data = await fetch(`http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/certifications/getCertifications`)
        // var data = await fetch(`http://localhost:2020/api/v1/certifications/getCertifications`)
        var jsonData = await data.json()
        setCertifications(jsonData)
    }
    var getUsers = async () => {
        var data = await fetch(`http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/adminReport/adminReports`)
        // var data = await fetch(`http://localhost:2020/api/v1/adminReport/adminReports`)
        var jsonData = await data.json()
        setArray(jsonData)
    }

    useEffect(() => {
        getCertifications();
        getUsers()
      }, []);

    return (


        <div className="bg-gray h-screen">
            <div className="bg-gray text-black p-15">
                <p className="text-xl font-bold">Admin View</p>
                <p className="text-base">Verify the Students</p>

                <div className="p-4">
                    {array.map((item, index) => (
                        <div key={index} className=" bg-gray-500 rounded-lg p-4 m-5 w-full shadow-md ">
                            <p className="text-xl font-bold">Name: {item.user.firstName} {item.user.lastName}</p>

                            <p className="font-bold">Username: {item.user.username}</p>
                            <p className="font-bold">Email: {item.user.email}</p>
                            {index < 4 && <div className="text-red-500">
                                Needs verification!
                                </div>}
                        

                            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md mr-20 ">         
                                    
                                <label for={"checkboxGroup"} className="font-bold text-xl mb-4">Verify Completed Courses</label>

                                <CheckboxGroup
                                    id="checkboxGroup"
                                    defaultValue={["buenos-aires", "london"]}

                                >
                                    {certifications.map((cert, ind) => (
                                        <div>
                                            <Checkbox id={"cert" + ind} key={ind} value={cert.name} className=""></Checkbox>
                                            <label for={"cert" + ind}>{cert.category} - {cert.name}</label>
                                        </div>
                                    ))}


                                </CheckboxGroup>

                            </div>
                        </div>
                    )

                    )}
                    
            </div>
        </div>
        </div>
       




    );
}






