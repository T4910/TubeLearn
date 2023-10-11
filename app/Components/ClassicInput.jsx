import Image from "next/image"

const ClassicInput = ({icon, type, title, iconText}) => {
  return (
    <div className="flex items-start flex-col space-y-2">
            <label>{title}</label>
            <div className="relative flex items-center">
              <Image className="absolute left-[10px]" src={icon} alt={iconText} width={18} height={18}/>
              <input className="rounded-lg p-4 py-2 pl-8 border border-strokeGrey" type={type} name={title.toLowerCase()}/>
            </div>
    </div>
  )
}

export default ClassicInput