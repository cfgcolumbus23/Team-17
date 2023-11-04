import React from "react";
//import {Checkbox} from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { Card, CardBody } from "@nextui-org/react";




export default function App() {
   
    return (


        <div class="bg-gray h-screen">
            <div class="bg-gray text-black p-15">



                <p class="text-xl font-bold">Admin View</p>
                <p class ="text-base">Verify the Students</p>

                <div class="p-4">
                    <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md mr-20 ">
                    <p class="text-xl font-bold">Name:</p>

                   
                   
                    <p class="font-bold">Username: </p>
                    <p class="font-bold">Email:</p>
                 

                        <div class="bg-white border border-gray-300 rounded-lg p-4 shadow-md mr-20 ">         
                            

                        <CheckboxGroup
                            label="Which Certification has been Completed"
                            defaultValue={["buenos-aires", "london"]}

                        >

                            <Checkbox  value="IC3 Digital Literacy" >  IC3 Digital Literacy</Checkbox>

                            <Checkbox value="Digital Literacy Assessment"  > Digital Literacy Assessment</Checkbox>

                        </CheckboxGroup>

                    </div>
                </div>
            </div>
        </div>
        </div>
       




    );
}






