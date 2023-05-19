import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#b18aff] text-white rounded">
  <div>
            
                <img width="50" height="50"  src="https://i.ibb.co/xhLH8Gy/download.png" alt="" />
    <p><span className="text-3xl">myToys.</span><br/>Providing reliable toys since 1992</p>
  </div> 
  <div>
    <span className="footer-title">FInd Us On</span>  
    <Link to='https://www.facebook.com/groups/1232069727348110/?hoisted_section_header_type=recently_seen&multi_permalinks=1337338590154556' className="link link-hover">FaceBook</Link> 
    <Link to='https://www.youtube.com/@ProgrammingHero' className="link link-hover">Youtube</Link> 
    <Link className="link link-hover">Tweeter</Link> 
    <Link className="link link-hover">Github</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;