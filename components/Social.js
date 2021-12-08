import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import Link from "next/link";




 const Social = () => {
  return (
    <div className="icon-bar">
      <a className="facebook">
        Click here
      <Link href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Ft%3DRam%2BNiwas%2BGoel%26u%3Dhttps%253A%252F%252Fwww.electwise.in%252Fpolitician%252Fram-niwas-goel%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><i>
          <ImFacebook />
        </i></Link>
      </a>
      <a className="twitter">
        Click here
      <Link href="https://twitter.com/intent/tweet?text=Ram Niwas Goel&url=https%3A%2F%2Fwww.electwise.in%2Fpolitician%2Fram-niwas-goel%2F"><i>
          <AiOutlineTwitter />
        </i></Link>
      </a>
      <a className="insta">
        Click here
        <i>
          {" "}
          <BsInstagram />
        </i>
      </a>
      <a className="linked">
        Click here
       <Link href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Ftitle%3DRam%2520Niwas%2520Goel%26url%3Dhttps%253A%252F%252Fwww.electwise.in%252Fpolitician%252Fram-niwas-goel%252F"><i>
          <SiLinkedin />
        </i></Link>
      </a>
      <a className="youtube">
        Click here{" "}
        <i>
          <BsYoutube />
        </i>
      </a>
      <a className="mail">
        Click here{" "}
        <i>
          <MdOutlineMail />
        </i>
      </a>
      <a className="share">
        Click here{" "}
       <Link href="https://www.electwise.in/politician/ram-niwas-goel/"><i>
          <FaShareAlt />
        </i></Link>
      </a>
    </div>
  );
};
export default Social;
