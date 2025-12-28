//named export
export const Navbar = () => {
  return (
 <div className="navbar" style={{
  "display":"flex",
  "justifyContent":"space-between",
  "borderBottom":"1px solid black",
  "backgroundColor":"lightblue",
}}>
    <h1>AJIO</h1>
 <ul className="nav-items">
    <li>MEN</li >
    <li>WOMEN</li>
    <li>KIDS</li>
    <li>HOME & LIVING</li>
    <li>BEAUTY</li> 
    <li>CART</li>
 </ul>
 </div>
  );
};
