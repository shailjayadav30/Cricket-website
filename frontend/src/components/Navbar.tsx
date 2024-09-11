import logo from "../images/logo.png"
const Navbar = () => {
    const navitems=[
        {
            id:0,
            title:"Home",
            Path:"/",
        }
    ]
  return (
    <div className="p-2 h-[6rem] bg-blue-200">
      {/* <div className=""> */}
        <img src={logo} alt=""  className="h-[4rem] w-[4rem] rounded-[50%]"/>
      <nav>
<ul>
{
    navitems.map((item)=>(
        <li key={item.id}><a href={item.Path}>{item.title}</a></li>
        
    ))
}
</ul>
      </nav>

    </div>
  )
}

export default Navbar
