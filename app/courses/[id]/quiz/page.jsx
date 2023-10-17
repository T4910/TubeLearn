import SingleQuiz from "../../../Components/SingleQuiz"
import Header from "../../../Components/Header"
import { redirect } from 'next/navigation'

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
  },
  
]

const Quiz = () => {
  redirect('/')

  return (
    <div className='flex flex-col gap-7 flex-grow'>
      <div className="h-full flex flex-col">
        <div>
          <Header>Questions and Answers</Header>
          {quizes.map((quiz, index)=><SingleQuiz {...quiz} key={index} index={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default Quiz