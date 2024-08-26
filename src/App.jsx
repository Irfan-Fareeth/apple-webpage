import Navbar from "./navbar/navbar"
import Subbar from "./subbar/subbar"
import Mainpic from "./mainpic/mainpic"
import Secondmain from "./secondmain/secondmain"
import Footer from "./footer/footer"
import Thirdmain from "./thirdmain/thirdmain"
import  "./App.css"
function App() {


  return (
    <>
     <Navbar/>
     <div className="section-wrap">
     <Subbar/>
     <Mainpic/>
     <Secondmain/>
     <Thirdmain/>
     </div>
     <Footer/>
    </>
  )
}

export default App
