import SingleQuiz from "../../../Components/SingleQuiz"
import Header from "../../../Components/Header"

const quizes = [
  {
      "title":"What are you doing",
      "choices":[
         {
          "title":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima placeat necessitatibus labore illum alias. Vero laudantium perspiciatis ipsam, recusandae dolorum deleniti magni eaque minima ex maxime explicabo ut iure incidunt."
         },
         {
          "title":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima placeat necessitatibus labore illum alias. Vero laudantium perspiciatis ipsam, recusandae dolorum deleniti magni eaque minima ex maxime explicabo ut iure incidunt."
         },
         {
          "title":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima placeat necessitatibus labore illum alias. Vero laudantium perspiciatis ipsam, recusandae dolorum deleniti magni eaque minima ex maxime explicabo ut iure incidunt."
         },
         {
          "title":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima placeat necessitatibus labore illum alias. Vero laudantium perspiciatis ipsam, recusandae dolorum deleniti magni eaque minima ex maxime explicabo ut iure incidunt."
         },
      ]
  }
]

const Quiz = () => {
  return (
    <>
      <Header text="Questions and Answers"/>
      {quizes.map((quiz, index)=><SingleQuiz {...quiz} key={index} index={index}/>)}
    </>
  )
}

export default Quiz