
import { useEffect, useState } from "react";






function Home() {
    return (
        <>
<div className="Main_div">
   <div className="About-div">
    <div className="Home-div">
        <h2 className="intro-h2">Hi There, I'm</h2>
        <h1 className="Name-h1"> Arham Shahid </h1>
        <div className="line_div"></div>
        <p className="about-p"> A Frontend Developer</p>
    </div>

    <img className="creator_img" src='Arham copy.png' alt="creator" />
</div>
        <div className="contact_div">
            <div>
            <h1 className="contact_head">Contact me At</h1>
                    <div className="line_div"></div>
             </div>
        <div className="icons">
            <div className="icon_instagram">
                <a href="https://www.instagram.com/rm._.malik?igsh=NDM4cnFka2x2c2pk"
                 target="_blank"><img className="icon_instagram-img"
                    src="Instagram.svg" alt="insta" /></a>
            </div>
            <div className="icon_facebook">
                        <a href="https://www.facebook.com/share/16z8jDXwzk/"
                        target="_blank"><img className="icon_facebook-img" 
                    src="facebook.svg" alt="linkedin" /></a>
            </div>
            <div className="icon_github">
                <a href="https://github.com/Arham-dev-Shahid"
                 target="_blank"><img className="icon_github-img"
                    src="Github.svg" alt="github" /></a>
            </div>
        </div>

    </div>

</div>
        </>
    );
}
export default Home;