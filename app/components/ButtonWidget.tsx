const ButtonWidget = ({title,color}: {title: string,color:string}) => {
return <>
<button className={`bg-${color}-500 text-${color}-200 my-2 rounded-xl px-2 py-2`}>{title}</button>
</>
}

export default ButtonWidget