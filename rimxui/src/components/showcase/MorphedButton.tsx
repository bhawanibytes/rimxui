import {
    Heart,
    HeartOff,
    Bell,
    BellOff,
    UserPlus,
    UserCheck,
   
  } from "lucide-react";
  import MorphingButton from "../MorphedButton/Morphed"; // adjust the path as per your structure
  
  export default function ExampleButtons() {
    return (
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 p-8 items-center justify-center bg-gray-100 min-h-screen">
  
        {/* 1. Lucide Icon Button (Follow/Following) */}
        <MorphingButton
          initialLabel="Follow"
          morphedLabel="Following"
          initialIcon={UserPlus}
          morphedIcon={UserCheck}
          initialBgColor="bg-blue-600 hover:bg-blue-700"
          morphedBgColor="bg-green-500 hover:bg-green-600"
          width="w-32 sm:w-40"
          height="h-10 sm:h-12"
          iconSize={20}
        />
  
        {/* 2. Auto-Revert Subscribe/Unsubscribe Button */}
        <MorphingButton
          initialLabel="Subscribe"
          morphedLabel="Unsubscribe"
          initialIcon={Bell}
          morphedIcon={BellOff}
          initialBgColor="bg-purple-600 hover:bg-purple-700"
          morphedBgColor="bg-red-500 hover:bg-red-600"
          width="w-36 sm:w-44"
          height="h-10 sm:h-12"
          iconSize={18}
          duration={3000} // Auto revert after 3 seconds
        />
  
        {/* 3. Like Button with no tap effect */}
        <MorphingButton
          initialLabel="Like"
          morphedLabel="Liked"
          initialIcon={Heart}
          morphedIcon={HeartOff}
          initialBgColor="bg-pink-500 hover:bg-pink-600"
          morphedBgColor="bg-gray-500 hover:bg-gray-600"
          width="w-28 sm:w-36"
          height="h-10"
          disableTapEffect={true}
        />
  
        {/* 4. Emoji instead of icons */}
        <MorphingButton
          initialLabel="Like"
          morphedLabel="Unlike"
          initialContent="❤️"
          morphedContent="💔"
          initialBgColor="bg-red-500 hover:bg-red-600"
          morphedBgColor="bg-gray-600 hover:bg-gray-700"
          width="w-32"
          height="h-10"
        />
  
        {/* 5. Custom JSX (like image or SVG) */}
        <MorphingButton
          initialLabel=" Thumbs Up"
          morphedLabel="Thumbs Down"
          initialContent={
            <img
              src="https://media.istockphoto.com/id/1456527662/vector/thumbs-down-icon-with-reflection-on-white-background.jpg?s=612x612&w=0&k=20&c=Vg4OYR3zV5xkTG0fnPCt0H7smGKzBIq8fdgh4yLWI4Y="
              alt="thumbs-up"
              className="w-5 h-5"
            />
          }
          morphedContent={
            <img
              src="https://media.istockphoto.com/id/930887456/vector/thumbs-up-vector-line-icon.jpg?s=1024x1024&w=is&k=20&c=k-7qYEbTY0FTVMjqwzzIqaQ6j4MduRkEAQELy9yZDQk="
              alt="thumbs-down"
              className="w-5 h-5"
            />
          }
          initialBgColor="bg-yellow-400 hover:bg-yellow-500"
          morphedBgColor="bg-blue-500 hover:bg-blue-600"
          width="w-40"
          height="h-12"
        />
  
        {/* 6. Force morph without click */}
        <MorphingButton
          initialLabel="Pending"
          morphedLabel="Confirmed"
          initialContent="⏳"
          morphedContent="✅"
          forceMorph={true}
          width="w-36"
          height="h-10"
          initialBgColor="bg-orange-400"
          morphedBgColor="bg-green-600"
        />
  
      </div>
    );
  }
  