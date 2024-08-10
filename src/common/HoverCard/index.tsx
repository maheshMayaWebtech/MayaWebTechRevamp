import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

export function EvervaultCardDemo({
  title,
  insideContent,
  description,
  tagText,
}: {
  title: string;
  insideContent: string;
  description: string;
  tagText: string;
}) {
  return (
    <div className="w-fit">
      {/* <h1 className="titleSteps text-2xl md:text-2xl lg:text-2xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          {title}
        </h1> */}
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-64 sm:max-w-80 mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text={`${insideContent}`} />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          {description}
        </h2>
        <div className="flex gap-2">

        <p className="text-sm border font-light dark:border-white/[0.2] border-rose-600/[0.5] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {tagText}
        </p>
        <p className="text-sm border font-light dark:border-white/[0.2] border-rose-600/[0.5] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {title}
        </p>
        </div>
      </div>
    </div>
  );
}
