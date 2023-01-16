import { CiFacebook, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div className="flex items-center gap-5 justify-center">
      <CiFacebook
        size={25}
        className="hover:scale-125 cursor-pointer transition"
      />
      <CiTwitter
        size={25}
        className="hover:scale-125 cursor-pointer transition"
      />
      <CiLinkedin
        size={25}
        className="hover:scale-125 cursor-pointer transition"
      />
      <CiYoutube
        size={25}
        className="hover:scale-125 cursor-pointer transition"
      />
    </div>
  );
}

export default Footer;
