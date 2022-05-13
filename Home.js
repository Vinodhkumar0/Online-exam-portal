import "./home.css";
import Images from "../img/images.png";

function Home() {
    return <div className="home">
      <h1 className="home-b">Show your Skills Here...</h1>
      <p className="para">Sharp your minds and style your thinking by solving this logical and important questions</p>
      <img src={Images}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsR-WLdQpGHi9F9dAmWH4R3rsojJ1r5Su0kjsQimsEqcH492VOsbzodyYNsfZUz4zyG0Y&usqp=CAU" alt="img"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXVojDiY7GTa4EfCAYuQw_bEWW69fKtSidmPB3tFaW9MdFbka0GJ72AjrjDn4Q6vv1cM&usqp=CAU" alt="img"/>
      
      <span>===></span>
      <img className="im" src="https://flyclipart.com/thumb2/student-grades-clipart-208724.png" alt="img"/>
    </div>;
  }
  export default Home;