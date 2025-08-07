import SectionTitle from "@/components/shared/SectionTitle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


const Speech = () => {

    const quotes = [
        {
            quote: "A room without books is like a body without a soul",
            person: "Marcus Tullius Cicero"
        },
        {
            quote: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
            person: "Harper Lee"
        },
        {
            quote: "The only thing you absolutely have to know is the location of the library.",
            person: "Albert Einstein"
        },
        {
            quote: "Books are a uniquely portable magic.",
            person: "Stephen King"
        },
        {
            quote: "Once you learn to read, you will be forever free.",
            person: "Frederick Douglass"
        },
        {
            quote: "Reading is essential for those who seek to rise above the ordinary.",
            person: "Jim Rohn"
        }
    ]


    return (<>
        <SectionTitle heading="Quotes from Intellectuals" subHeading="Discover timeless wisdom through powerful words from great thinkers, writers, and leaders. These quotes celebrate the value of books, the joy of reading, and the deep impact literature has on our minds and lives." />

        <div className="p-5 lg:p-10 border rounded-3xl max-w-md md:max-w-lg lg:max-w-3xl mx-auto my-5 relative">
            <Carousel
                orientation="horizontal"
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent className="">

                    {quotes.map((quote, idx) =>
                        <CarouselItem key={idx} className="basis-9/12 ">
                            <div className="p-5 lg:p-10 border rounded-3xl max-w-sm md:max-w-lg lg:max-w-3xl m-auto h-80 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-400 dark:to-gray-600 flex flex-col justify-center ">
                                <h1 className="text-xl font-bold text-center md:max-w-md lg:max-w-2xl mx-auto justify-center italic flex flex-wrap items-center text-amber-500"> <span className="text-5xl">"</span> {quote.quote}<span className="text-5xl">"</span></h1>
                                <h6 className="font-bold text-center md:max-w-md lg:max-w-2xl mx-auto text-amber-600">____{quote.person}</h6>
                            </div>

                        </CarouselItem>

                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >
    </>);
};

export default Speech;