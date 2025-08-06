

const SectionTitle = ({heading,subHeading}:{heading:string, subHeading:string}) => {
    return (
        <div className="py-2 lg:py-6">
            <h1 className="text-xl lg:text-4xl font-bold text-center pb-3 text-gray-600 dark:text-gray-200">{heading}</h1>
            <p className="text-sm font-semibold text-center italic text-gray-400 dark:text-gray-400 max-w-lg mx-auto">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;