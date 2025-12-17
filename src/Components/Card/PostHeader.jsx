import userImage from '../../assets/download.jpg'

export default function PostHeader({photo , name , date}) {



  


  return (
    <div className=" ml-2 mt-0.5 flex items-center ">
      <img 
        onError={(e) => e.target.src = userImage} 
        className="w-10 h-10 rounded-full object-cover"
        src={photo} 
        alt={name} 
      />
      <div>
           <span className="font-medium text-base ...">{name}</span>
           <span className="block text-sm text-gray-500 ...">{date}</span>
      </div>
    </div>
  )
}