import { Container } from "@/constants/containers/wrapper/Container"
import IntroBg from "@/assets/profileBg.jpg";
import userBg from "@/assets/userProfile.png";

const IntroBlock = () => {
  return (
    <Container className="h-[100vh] overflow-hidden relative">
        <img src={IntroBg} alt="background image" className="absolute object-contain  opacity-75 bg-cover bg-clip-border bg-center bg-no-repeat" />
        <div className="grid grid-cols-2 z-10 h-full relative">
          <div className="flex items-center justify-center border-r-2 border-gray-400">
            <div className="bg-white px-2 w-32 h-32 rounded-full justify-center flex items-center">
              <img src={userBg} alt="User Image" className="object-contain " />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>Heelo</p>
          </div>
        </div>
    </Container>
  )
}

export default IntroBlock
