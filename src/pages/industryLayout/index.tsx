import { useId } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { industryData } from "@/constants/industry";
import LetsTalkFooter from "@/components/LetsTalkFooter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const IndustryLayout = () => {
  const { industry } = useParams();
  const industryContent = industryData[industry as keyof typeof industryData] || industryData["healthcare"];

  return (
    <div className="industrySec min-h-screen">
      <div className="mx-auto">
        <div className="relative mb-12 text-center h-[450px] sm:h-[500px] pt-40 industryMain">
          <h1 className="absolute show-title text-6xl sm:text-[180px] z-[-9]">{industryContent.title}</h1>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-4 ">
            {industryContent.title}
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">
            {industryContent.heading}
          </h2>
          <div className="flex justify-center gap-16 mt-8">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Book Demo</span>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Back to Home</span>
            </HoverBorderGradient>
          </div>
        </div>

        <div className="space-y-4 text-center mb-40 px-4 sm:px-28">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Trusted {industryContent.title} partner
          </h2>
          <h3 className="text-xl font-semibold">
            Your one stop solution for all
          </h3>
          <p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {industryContent.description}
          </p>
        </div>
        <div className="text-xl sm:text-5xl mb-12">Key Features</div>
        <div className="allKeyFeaturesIndustries space-y-20 sm:space-y-48 px-4 sm:px-28">
          {industryContent.offerings.map((offering: any, index: number) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-center gap-8 flex-col sm:flex-row `}
            >
              <div className="flex-1">
                <div className="mx-4 px-4 py-2 rounded-sm font-bold text-white bg-red-700 sm:w-3/12 ">Feature {index+1}</div>
                <div className="p-4">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-left">
                    {offering.title}
                  </h3>
                  <p className="text-lg text-gray-600 text-left">
                    {offering.description}
                  </p>
                  <p className="text-lg text-gray-600 text-left mt-4">
                    {offering.description}
                  </p>
                </div>
              </div>

              <div className="flex-1" style={{display: 'flex', justifyContent: `${(index+1)%2 === 0 ? 'left': 'right'}`}}>
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-96 h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="whyChooseIndustry ">
          <div className="mt-36 text-2xl sm:text-5xl font-semibold mb-4 sm:mb-8 px-4 sm:px-28 pt-20">
            Why to choose <span className="text-red-700">Maya Web Tech </span>{" "}
          </div>
          <div className="text-lg sm:text-xl px-4 sm:px-28">
            Our team of experts possesses extensive knowledge and experience in
            the this industry, ensuring that the solutions are tailored to
            address your unique needs.
          </div>
          <div className="py-20 lg:py-20 px-4 sm:px-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
              {grid.map((feature, ind) => (
                <div
                  key={ind}
                  className="relative bg-gradient-to-r dark:from-neutral-900 from-neutral-50 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                >
                  <Grid size={20} />
                  <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                    {feature.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <LetsTalkFooter />
      </div>
    </div>
  );
};

export default IndustryLayout;

const grid = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "Automated Social Media Posting",
    description:
      "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    title: "Content Calendar",
    description:
      "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
  },
  {
    title: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    title: "Social Listening",
    description:
      "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
  },
  {
    title: "Customizable Templates",
    description:
      "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
  },
  {
    title: "Collaboration Tools",
    description:
      "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
