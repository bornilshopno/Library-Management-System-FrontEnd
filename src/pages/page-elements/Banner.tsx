import bannerBg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerBg})`}} className='relative bg-cover bg-center w-full min-h-screen flex items-center'>
            <div className="absolute inset-0 bg-gray-80 bg-opacity-50"></div>
          <div className='relative z-10 w-full '>
              <h2 className='font-bold italic text-center text-2xl max-w-lg mx-auto my-20 lg:my-40 shadow-2xl opacity-50'>A room without books is like a body without a soul. <span className='font-semibold text-base'>_ _ Marcus Tullius Cicero</span></h2>
          </div>
        </div>
    );
};

export default Banner;