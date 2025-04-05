import { Check, Copy, LogIn } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../Cards/Card";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Cards = () => {
  const [choice, setChoice] = useState("preview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cardCode = `  
        import { Card, CardContent, CardDescription, CardTitle } from "../ui/Card";
        
        const Card = () => {  
            return (
                <Card>
                <CardTitle>Register</CardTitle>
                    <CardDescription>Create a new account</CardDescription>
                    <CardContent className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold ">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="p-2 border rounded-md"
                        />
                        <label htmlFor="email" className="font-semibold mt-5">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="p-2 border rounded-md"
                        />
                        <label htmlFor="email" className="font-semibold mt-5">
                            Password
                        </label>
                        <input
                        type="password"
                        placeholder="*******"
                        className="p-2 border rounded-md"
                        />
                        <button className="flex items-center gap-2 w-full bg-sky-500 p-2 rounded-md text-white mt-5 
                        justify-center font-semibold">
                            <LogIn className="w-4 h-4" /> Register
                        </button>
                    </CardContent>
                    <CardFooter>
                        Already have an account?{" "}
                        <span className="text-sky-500 font-semibold">Login</span>
                    </CardFooter>
                </Card>
            )
       }           
    `;

  return (
    <div className="flex flex-wrap flex-col gap-3 p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold ">Cards</h1>
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setChoice("preview")}
          className={`${
            choice === "preview" && "border-b-2 border-sky-500 text-sky-500"
          } px-8 py-2 `}
        >
          Preview
        </button>
        <button
          onClick={() => setChoice("code")}
          className={`${
            choice === "code" && "border-b-2 border-sky-500 text-sky-500"
          } px-8 py-2`}
        >
          Code
        </button>
      </div>

      {choice === "preview" && (
        <Card>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
          <CardContent className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold ">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="p-2 border rounded-md"
            />
            <label htmlFor="email" className="font-semibold mt-5">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="p-2 border rounded-md"
            />

            <label htmlFor="email" className="font-semibold mt-5">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              className="p-2 border rounded-md"
            />

            <button className="flex items-center gap-2 w-full bg-sky-500 p-2 rounded-md text-white mt-5 justify-center font-semibold hover:bg-sky-600">
              <LogIn className="w-4 h-4" /> Register
            </button>
          </CardContent>
          <CardFooter>
            Already have an account?{" "}
            <span className="text-sky-500 font-semibold">Login</span>
          </CardFooter>
        </Card>
      )}
      {choice === "code" && (
        <div className="">
          <button
            onClick={copyToClipboard}
            className=" p-2 bg-sky-500/20 rounded-md w-fit border border-sky-500 hover:bg-sky-500/10 transition-all ease-in  cursor-pointer text-sm"
          >
            {copied ? (
              <p className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Copied
              </p>
            ) : (
              <Copy className="w-4 h-4 " />
            )}
          </button>
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            className="bg-gray-900 text-white p-4 rounded-md overflow-auto h-[500px]"
          >
            {cardCode}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default Cards;
