import { Container } from "@/constants/containers/wrapper/Container"
import IntroBg from "@/assets/profileBg.jpg";
import userBg from "@/assets/userProfile.png";
import HomeCss from "../styles/HomePageCss.module.css";

const IntroBlock = () => {
  return (
    <Container className="h-[100vh] overflow-hidden">
        <div className={HomeCss.imageBg}>
        <div className="grid grid-cols-2 z-10 h-full relative">
          <div className="flex flex-col justify-center items-center border-r-4 border-gray-400">
            <div className="bg-white px-2 w-32 h-32 rounded-full justify-center flex items-center">
              <img src={userBg} alt="User Image" className="object-contain " />
            </div>
            <div>
              <h3 className="text-2xl text-white font-semibold">Here I am Priyanshu Chourasia</h3>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>Heelo</p>
          </div>
        </div>
        </div>
  
    </Container>
  )
}

export default IntroBlock
