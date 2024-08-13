import { Tabs } from "../ui/tabs";

export function WorkShow() {
    const tabs = [
      {
        title: "Mobile App",
        value: "mobile",
        content: (
          <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
            <p>Mobile App</p>
            <DummyContent url="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723529220/HP_Mwt_2_gekoan.png" />
          </div>
        ),
      },
      {
        title: "Websites",
        value: "web",
        content: (
          <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
            <p>Websites</p>
            <DummyContent url="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1723532184/HP_Mwt_2_1_az0j9t.png" />
          </div>
        ),
      },
      {
        title: "iOS",
        value: "ios",
        content: (
          <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
            <p>iOS</p>
            <DummyContent />
          </div>
        ),
      },
      {
        title: "Android",
        value: "android",
        content: (
          <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
            <p>Android</p>
            <DummyContent />
          </div>
        ),
      }
    ];
  
    return (
        <>
        <div className="text-3xl md:text-5xl font-medium mt-24 dark:text-white text-center">
        See Our Results in <span className="font-bold text-red-700">Action</span> 
        </div>
      <div className="h-[20rem] md:h-[40rem] flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 mt-12 relative px-4">
        <Tabs tabs={tabs} />
      </div>
        </>
    );
  }
  
  const DummyContent = ({url}: {url?: string}) => {
    return (
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <img
          src={url}
          alt="dummy image"
        //   className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
    );
  };
  
