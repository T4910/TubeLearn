export const Error = ({state='danger',msg,show=true}) => {
    const color = state !== "success" ? "text-red-300":"text-green-300"
    const bg = state !== "success" ? "bg-red-100":"bg-green-100"
  return (
    <div className={`${show ? "" :"hidden"} ${color} ${bg} absolute w-full p-2 py-4 z-10`}>
        <p>{msg}</p>
    </div>
  )
}
