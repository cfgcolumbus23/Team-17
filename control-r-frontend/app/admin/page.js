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
        // var data = await fetch(`http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/certifications/getCertifications`)
        var data = await fetch(`http://localhost:2020/api/v1/certifications/getCertifications`)
        var jsonData = await data.json()
        setCertifications(jsonData)
    }
    var getUsers = async () => {
        // var data = await fetch(`http://ec2-3-82-130-200.compute-1.amazonaws.com:2020/api/v1/adminEndpoint`)
        var jsonData = await data.json()
        setArray(jsonData)
        console.log(array)
    }

    useEffect(() => {
        getCertifications();
        getUsers()
      }, []);

    return (


        <div class="bg-gray h-screen">
            <div class="bg-gray text-black p-15">



                <p class="text-xl font-bold">Admin View</p>
                <p class ="text-base">Verify the Students</p>

                <div class="p-4">
                    {array.map((item) => {
                        <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md mr-20 ">
                            <p class="text-xl font-bold">Name: {item.user.firstName} {item.user.lastName}</p>

                            <p class="font-bold">Username: {item.user.username}</p>
                            <p class="font-bold">Email: {item.user.email}</p>
                        

                            <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md mr-20 ">         
                                    

                                <CheckboxGroup
                                    label="Which Certification has been Completed"
                                    defaultValue={["buenos-aires", "london"]}

                                >
                                    {certifications.map((cert) => (
                                        <Checkbox value={cert.name} >{cert.category} - {cert.name}</Checkbox>
                                    ))}


                                </CheckboxGroup>

                            </div>
                        </div>
                    }

                    )}
                    
            </div>
        </div>
        </div>
       




    );
}






