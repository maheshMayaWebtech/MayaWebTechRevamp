import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

export function MovingCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-3xl md:text-5xl font-bold dark:text-white text-center mb-12">
        Hear from Our <span className="text-red-700">Clients</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/Fincafe_dnp2zl.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447253/image_ld5cqs.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447385/1000059971-removebg-preview_tgsgve.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/logo-removebg-preview_jn0b09.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    url: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723447254/WEBWISH__LOGO_2_PNG-removebg-preview_l6hizl.png",
  },
];
