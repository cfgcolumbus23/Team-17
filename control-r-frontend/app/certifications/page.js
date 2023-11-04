import React from "react";
import { Card, CardHeader, CardBody, Image, divider } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <h1 className="text-center text-5xl m-3 font-bold"> Essential Computer Skills</h1>
      <div className=" flex flex-wrap justify-center w-[80%] m-auto mt-10">
        <div className="m-2 w-[fit-content] h-[fit-content]">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <Progress
                size="md"
                value={60}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />{" "}
              <h4 className="font-bold text-large">Basic Computer Skills</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://www.filepicker.io/api/file/jIAmEexFS9aJTHbjkQKv"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
        <div className="m-2 w-[fit-content] h-[fit-content] ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <Progress
                size="md"
                value={0}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />{" "}
              <h4 className="font-bold text-large">Internet Basics</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://media.gcflearnfree.org/content/559ae882607fbe195c5d135d_07_06_2015/connectingtotheinternet_image.png"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
        <br />
        <div className="m-2 w-[fit-content] h-[fit-content] ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <Progress
                size="md"
                value={0}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />{" "}
              <h4 className="font-bold text-large">Using Email</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://visme.co/blog/wp-content/uploads/2021/05/email-design-header-1200.png"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
        <div className="m-2 w-[fit-content] h-[fit-content] ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <Progress
                size="md"
                value={0}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />{" "}
              <h4 className="font-bold text-large">Windows</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://pentagram-production.imgix.net/ea053844-c063-4130-9425-4a193f82e1e3/ps_windows_01.jpg?rect=67%2C364%2C1665%2C1040&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
        <br />
        <br />
        <div className="m-2 w-[fit-content] h-[fit-content] ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <Progress
                size="md"
                value={0}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />{" "}
              <h4 className="font-bold text-large">Mac OS</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-contain rounded-xl"
                src="https://appleosophy.com/wp-content/uploads/2021/06/macos-graphic-0-scaled.jpg"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
