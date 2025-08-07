import bannerBg from '../../assets/banner.jpg'

const Banner = () => {

    //   <div style={{backgroundImage: `url(${bannerBg})`}} className='relative bg-cover bg-center w-full min-h-screen flex items-center'></div>
    return (
   <div
  style={{ backgroundImage: `url(${bannerBg})` }}
  className="relative bg-cover bg-center w-full min-h-[calc(50vh)]  lg:min-h-[calc(100vh-150px)] flex items-center justify-center"
>
  {/* Overlay with z-index LOWER than content */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Foreground content with HIGHER z-index */}
  <div className="relative z-10 w-full px-4">
    <h2 className="text-white font-extrabold italic text-center text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto my-20 lg:my-40 drop-shadow-lg leading-snug">
      A room without books is like a body without a soul.
      <br />
      <span className="font-semibold text-base text-gray-200 mt-2 block">
        — Marcus Tullius Cicero
      </span>
    </h2>
  </div>
</div>


    );
};

export default Banner;