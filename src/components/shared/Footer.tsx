import { GrTasks } from "react-icons/gr";


const Footer = () => {
    return (
        <div className="pt-5 lg:pt-10">
            <hr />

          <div className="py-2 flex justify-center items-center flex-col lg:flex-row gap-2">Copyright © {new Date().getFullYear()} - All right reserved by  <div className="flex items-center">
                          <GrTasks /> <span className="font-bold mx-1">Reader's </span>Heaven
                      </div></div>
            
        </div>
    );
};

export default Footer;