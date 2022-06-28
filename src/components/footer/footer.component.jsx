import React from "react";
import Footer from "react-footer-comp";

const FooterTest = ()=>{
    return(
        <Footer
      copyrightIcon
      years={[2022]}
      height={150}
      bgColor={"#8568B4"}
      copyrightText
      copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
      text={"Adi Motivated Me, ZTM taught me. No rights reserved.😂😂"}
    />
    )


};

export default FooterTest;