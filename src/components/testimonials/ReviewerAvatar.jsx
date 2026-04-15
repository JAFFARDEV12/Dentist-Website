import patientProfile from '../../assets/Patient-Profile.svg'
export default function ReviewerAvatar() {
  return (
    <div className="  items-center justify-center  rounded-[12px]  ">
      <div className=" flex h-full w-full items-end justify-center pb-1">
        <img src={patientProfile} alt="Patient profile" className="h-full w-full " />
       
      </div>
    </div>
  )
}
