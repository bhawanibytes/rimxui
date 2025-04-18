import {
  Play,
  Pause,
  Heart,
  HeartOff,
  Loader,
  CheckCircle,
  ShoppingCart,
  Trash,
  VolumeX,
  Volume2,
  UserPlus,
  UserCheck,
  Copy, Check
} from "lucide-react";
import MorphingButton from "../MorphedButton/Morphed"; // Ensure correct import path

export default function PlayPauseButton() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-gray-100 min-h-screen">
      {/* 1. Play/Pause Button */}
      <MorphingButton
        initialLabel="Play"
        morphedLabel="Pause"
        initialIcon={Play}
        morphedIcon={Pause}
        initialBgColor="bg-green-600 hover:bg-green-700"
        morphedBgColor="bg-red-600 hover:bg-red-700"
        width="w-32"
        height="h-12"
        iconSize={22}
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 2. Like/Dislike Button */}
      <MorphingButton
        initialLabel="Like"
        morphedLabel="Dislike"
        initialIcon={Heart}
        morphedIcon={HeartOff}
        initialBgColor="bg-pink-500 hover:bg-pink-600"
        morphedBgColor="bg-gray-500 hover:bg-gray-600"
        width="w-32"
        height="h-12"
        iconSize={20}
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 3. Follow/Unfollow Button with auto-revert */}
      <MorphingButton
        initialLabel="Follow"
        morphedLabel="Unfollow"
        initialIcon={UserPlus}
        morphedIcon={UserCheck}
        initialBgColor="bg-blue-600 hover:bg-blue-700"
        morphedBgColor="bg-red-500 hover:bg-red-600"
        width="w-36"
        height="h-12"
        iconSize={22}
        resetAfter={2000} // Auto-revert after 2 seconds
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 4. Success/Failure Button with Emojis */}
      <MorphingButton
        initialLabel="Success"
        morphedLabel="Failure"
        initialContent="🎉"
        morphedContent="❌"
        initialBgColor="bg-green-500 hover:bg-green-600"
        morphedBgColor="bg-red-500 hover:bg-red-600"
        width="w-40"
        height="h-12"
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 5. Mute/Unmute Button */}
      <MorphingButton
        initialLabel="Mute"
        morphedLabel="Unmute"
        initialIcon={VolumeX}
        morphedIcon={Volume2}
        initialBgColor="bg-gray-600 hover:bg-gray-700"
        morphedBgColor="bg-blue-600 hover:bg-blue-700"
        width="w-36"
        height="h-12"
        iconSize={24}
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 6. Thumbs Up/Thumbs Down Button with Images */}
      <MorphingButton
        initialLabel="Thumbs Up"
        morphedLabel="Thumbs Down"
        initialContent={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIGPTdB62ntrB9a8dwjN2Hcr7f44an9pNPCjKdoVrkAfRLiiYiXa_maF2ImPR3AjIIO8&usqp=CAU"
            alt="thumbs-up"
            className="w-6 h-6"
          />
        }
        morphedContent={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYC51OuW7wUMkzDLQzqUlXGsAgUJheffrCQ&s"
            alt="thumbs-down"
            className="w-6 h-6"
          />
        }
        initialBgColor="bg-yellow-500 hover:bg-yellow-600"
        morphedBgColor="bg-red-500 hover:bg-red-600"
        width="w-40"
        height="h-12"
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 7. Add to Cart/Remove from Cart Button */}
      <MorphingButton
        initialLabel="Add to Cart"
        morphedLabel="Remove from Cart"
        initialIcon={ShoppingCart}
        morphedIcon={Trash}
        initialBgColor="bg-green-500 hover:bg-green-600"
        morphedBgColor="bg-red-500 hover:bg-red-600"
        width="w-36"
        height="h-12"
        iconSize={20}
        className="transition-all duration-300 transform hover:scale-105"
      />

      {/* 8. Loading/Completed Button with Spinner */}
      <MorphingButton
        initialLabel="Loading"
        morphedLabel="Completed"
        initialContent={<Loader className="animate-spin" />}
        morphedContent={<CheckCircle />}
        forceMorph={true} // Force the morph right away
        initialBgColor="bg-blue-500 hover:bg-blue-600"
        morphedBgColor="bg-green-500 hover:bg-green-600"
        width="w-40"
        height="h-12"
        className="transition-all duration-300 transform hover:scale-105"
      />
      
    </div>
  );
}
