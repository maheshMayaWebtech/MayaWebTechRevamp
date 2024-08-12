import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "1. Select a Project",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Selection
      </div>
    ),
  },
  {
    title: "2. Project Analysis",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Project Analysis
        </div>
      ),
  },
  {
    title: "3. Execution",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Project Execution
      </div>
    ),
  },
  {
    title: "4. Delivery",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Delivery
      </div>
    ),
  },
];
export function WorkSteps() {
  return (
    <div className="mt-12">
        <div className="text-3xl md:text-5xl font-medium dark:text-white text-center mb-16">
        Our Workflow: From <span className="font-bold text-red-700"> Vision to Reality </span>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
