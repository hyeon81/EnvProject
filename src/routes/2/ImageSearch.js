import React from "react";
import {Col, Row} from "antd";

function ImageSearch(){
 return(
     <>
         <div className="img-slide">
             <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                 <Col span={2}>
                 </Col>
                 <Col span={20} style={{width: '100%', backgroundColor: 'lightgray'}}>
                     <img
                         src="/img/img1.png"
                         alt="userImage"
                         width="310px"
                         height="310px"
                     />
                 </Col>
                 <Col span={2}>
                 </Col>
             </Row>
         </div>

     </>
 )
}

export default ImageSearch;