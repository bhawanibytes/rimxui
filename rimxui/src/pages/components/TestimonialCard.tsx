import { motion } from "framer-motion";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  testimonial: {
    id: number;
    name: string;
    profilePic: string;
    content: string;
    role: string;
  };
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      key={testimonial?.id}
      className=" dark:bg-white/10 shadow-xl rounded-2xl p-6 w-full space-y-4 border border-zinc-200 dark:border-zinc-700 z-99 bg-transparent"
    >
      <div className="flex items-center gap-4">
        <img
          src={
            testimonial?.profilePic ||
            "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          }
          alt={`avatar`}
          className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {testimonial?.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {testimonial?.role}
          </p>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400" />
        ))}
      </div>
      <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
        “{testimonial?.content}”
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
