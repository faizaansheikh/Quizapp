import style from "../components/my.module.css"
import "./normal.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
function Quiz() {
  
  const data = [
    {
      text: "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
      options: [
        { id: 0, text: "Arthur", isCorrect: false },
        { id: 1, text: "Sir%20Toby%20Belch", isCorrect: false },
        { id: 2, text: "Guy%20of%20Gisbourne", isCorrect: false },
        { id: 3, text: "Dirk%20the%20Daring", isCorrect: true },
      ],
    },

    {
      text: "What%20is%20the%20scientific%20name%20for%20modern%20day%20humans%3F",
      options: [
        { id: 0, text: "Homo%20Ergaster", isCorrect: false },
        { id: 1, text: "Homo%20Erectus", isCorrect: false },
        { id: 2, text: "Homo%20Sapiens", isCorrect: true },
        { id: 3, text: "Homo%20Neanderthalensis", isCorrect: false },
      ],
    },
    {
      text: "What%20is%20Ron%20Weasley%27s%20middle%20name%3F",
      options: [
        { id: 0, text: "Arthur", isCorrect: false },
        { id: 1, text: "Bilius", isCorrect: true },
        { id: 2, text: "Dominic", isCorrect: false },
        { id: 3, text: "John", isCorrect: false },
      ],
    },
    {
      text: "Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F",
      options: [
        { id: 0, text: "Stan%20Lee", isCorrect: false },
        { id: 1, text: "Malcolm%20Wheeler-Nicholson", isCorrect: false },
        { id: 2, text: "Robert%20Crumb", isCorrect: false },
        { id: 3, text: "Robert%20Kirkman", isCorrect: true },
      ],
    },

    {
      text: "At%20the%20start%20of%20a%20standard%20game%20of%20the%20Monopoly%2C%20if%20you%20throw%20a%20double%20six%2C%20which%20square%20would%20you%20land%20on%3F",
      options: [
        { id: 0, text: "Community%20Chest", isCorrect: false },
        { id: 1, text: "Electric%20Company", isCorrect: true },
        { id: 2, text: "Water%20Works", isCorrect: false },
        { id: 3, text: "Chance", isCorrect: false },
      ],
    },

    {
      text: "What%20is%20the%20capital%20of%20Jamaica%3F",
      options: [
        { id: 0, text: "Rio%20de%20Janeiro", isCorrect: false },
        { id: 1, text: "Kingston", isCorrect: true },
        { id: 2, text: "Dar%20es%20Salaam", isCorrect: false },
        { id: 3, text: "Kano", isCorrect: false },
      ],
    },

    {
      text: "When%20did%20Jamaica%20recieve%20its%20independence%20from%20England%3F%20",
      options: [
        { id: 0, text: "1492", isCorrect: false },
        { id: 1, text: "1962", isCorrect: true },
        { id: 2, text: "1963", isCorrect: false },
        { id: 3, text: "1987", isCorrect: false },
      ],
    },


    {
      text: "Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.",
      options: [
        { id: 0, text: "True", isCorrect: false },
        { id: 1, text: "False", isCorrect: true },
      ],
    },


    {
      text: "In%202013%20how%20much%20money%20was%20lost%20by%20Nigerian%20scams%3F",
      options: [
        { id: 0, text: "%2495%20Million", isCorrect: false },
        { id: 1, text: "%2412.7%20Billion", isCorrect: true },
        { id: 2, text: "%24956%20Million", isCorrect: false },
        { id: 3, text: "%242.7%20Billion", isCorrect: false },
      ],
    },

    {
      text: "In%20World%20of%20Warcraft%20lore%2C%20who%20organized%20the%20creation%20of%20the%20Paladins%3F",
      options: [
        { id: 0, text: "Uther%20the%20Lightbringer", isCorrect: false },
        { id: 1, text: "Alonsus%20Faol", isCorrect: true },
        { id: 2, text: "Alexandros%20Mograine", isCorrect: false },
        { id: 3, text: "Sargeras%2C%20The%20Daemon%20Lord", isCorrect: false },
      ],
    },
  ]
 const [wrong,setwrong] = useState(null)
 const [right,setright] = useState(null)
 const [finalresult,setfinalresult] = useState(false)
 const [score,setscore] = useState(0)
 const [currentquestion,setcurrentquestion] = useState(0)

 //  ------end-------

 const clicked = (isCorrect)=>{
  if(isCorrect){
    setscore(score+1)
    setright(true)
  }else{
    setwrong(true)
  }
  
 }
//  ------end-------

 const next = ()=>{
  if(currentquestion+1 < data.length){
    setcurrentquestion(currentquestion+1)
  }else{
    setfinalresult(true)
  }
  setright(false)
  setwrong(false)
 }

 //  ------end-------


 const restart = ()=>{
  setfinalresult(false)
  setcurrentquestion(0)
  setscore(0)
}
//  ------end-------
 

  return (
    <>
    {
     finalresult ? 
     ( /* final results div */
      <div className={style.fdiv}>
        <div className={style.final}>
          <h1 className={style.fhead}>Final results</h1>
          <h3>{score} out of {data.length} - {(score/data.length*100)}%</h3>
          <button onClick={restart} className={style.btn}>Restart</button>
        </div>
      </div>)
     
     : 
     (<div className="container">
     <div className="row">
       <div className="col-12 col-sm-12 col-md-2"> </div>
       <div className="col-12 col-sm-12 col-md-8 main">
         <h1 className={style.head}>Quiz App</h1>
         {/* <h3>Score : {score}</h3> */}
         <h4>Question {currentquestion+1} out of {data.length}</h4>
         <div className={style.ques}>
           <h3>{data[currentquestion].text.replace(/%20|%27|%3F|%2C|%22/g," ")}?</h3>
           <ul>
            {
              data[currentquestion].options.map((option)=>{
                return(
            <li disabled={wrong||right?true:false} onClick={()=>clicked(option.isCorrect)} key={option.id}>{option.text.replace(/%20/g," ")}</li>
                )
              })
            }

             {/* <li>Option A</li>
             <li>Option A</li>
             <li>Option A</li>
             <li>Option A</li> */}

           </ul>
    {
     wrong ?(
       <h3 className={style.wrong}>Wrong</h3>
      ):null
      }   
       {
     right ?(
      <h3 className={style.pos}>Correct</h3>
      ):null
      }
     
  
  <span className={style.ndiv}><button onClick={next} className={style.btn}>Next question</button></span> 
 
         </div>



       </div>
       <div className="col-12 col-sm-12 col-md-2"> </div>
     </div>
   </div>)
    }
     

     
    </>
  );
}

export default Quiz;
