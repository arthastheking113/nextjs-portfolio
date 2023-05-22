import skillsData from "../../data/skillsData";
import Image from "next/image";
import { useTheme } from "next-themes";

const Skills = () => {
    const { theme, setTheme } = useTheme();
    return (
    <>
      {skillsData.map((item) => (
        <div key={item.id}>
            <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">{item.icon}</div>
                <h4 className="text-5xl dark:text-white font-medium">
                {item.title}
                </h4>
            </div>
            <div
                className="flex flex-row flex-wrap py-4 pl-5 pr-3 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                style={{
                    background: `${
                        theme === "dark" || theme === undefined ? "transparent" : item?.bg
                    }`,
                }}
            >
                {item.items.map((singleItem, key) => (
                    <Image 
                    alt={singleItem.alt} 
                    className="h-full w-full w-20 p-1 object-fill rounded-lg" 
                    key={singleItem.id} 
                    src={singleItem.img}
                    width={72}
                    height={72}
                    />
                ))}
                
            </div>
          
        </div>
      ))}
    </>
  );
};

export default Skills;
