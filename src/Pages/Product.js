import React, { useState, useRef } from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from "@coreui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import style from "./Product.module.css";
import Cropper from "../Components/Cropper"
import axios from "axios";
const server = "http://localhost:5550";


function Product() {

  const [editProduct, setEditProduct] = useState(false);
  const [imageFile,setImageFile] = useState('null')
  
  function onImageChange(img){
    // let imagess = URL.createObjectURL(img)
    // console.log(imagess);
    setImageFile(img)
  }

  
 const imageURL ={}
  function openInput() {
    setEditProduct(true);
  }
  

  const productRef = useRef();

  function submitdata(){
    console.log("sasi is on fire");
    let data = {}
    data.content = productRef.current.value
    // data.image = imageFile
//  imageURL = URL.createObjectURL(imageFile)
//  console.log(imageURL);
//  imageFile.mv("/public/images/123456789.jpg")
console.log(data,"ssssssssssssssssssssss");
axios.post(`${server}/merchant/submit_data`,{data:data}).then(()=>{

})

  }


  return (
    <div>
      <Navbar />
      {!editProduct ? (
        <div>
          <div className="container">
            <div className={`${style.row} row`}>
              <div className={style.ProductTitle}>
                <h2 className={style.Title}>All Products</h2>
                <button className={style.addProductbtn} onClick={openInput}>
                  Add Product
                </button>
              </div>
            </div>
          </div>

          <div className={`${style.container} container`}>
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <CCard style={{ width: "18rem" }}>
                  <CCardImage orientation="top" src="/images/react.jpg" />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CCardText>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CCardLink href="#">Card link</CCardLink>
                    <CCardLink href="#">Another link</CCardLink>
                  </CCardBody>
                </CCard>
              </div>
              <div className="col-md-3">
                <CCard style={{ width: "18rem" }}>
                  {imageFile?
                  <CCardImage orientation="top" src={imageFile} />
                  :null
                }
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CCardText>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CCardLink href="#">Card link</CCardLink>
                    <CCardLink href="#">Another link</CCardLink>
                  </CCardBody>
                </CCard>
              </div>
              <div className="col-md-3">
                <CCard style={{ width: "18rem" }}>
                  <CCardImage orientation="top" src="/images/react.jpg" />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CCardText>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CCardLink href="#">Card link</CCardLink>
                    <CCardLink href="#">Another link</CCardLink>
                  </CCardBody>
                </CCard>
              </div>
              <div className="col-md-3">
                <CCard style={{ width: "18rem" }}>
                  <CCardImage orientation="top" src="/images/react.jpg" />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CCardText>
                  </CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>Cras justo odio</CListGroupItem>
                    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem>Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CCardLink href="#">Card link</CCardLink>
                    <CCardLink href="#">Another link</CCardLink>
                  </CCardBody>
                </CCard>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
        <div className="container" style={{padding:"70px"}}>
          <form>
            <div className="row">
              <div className={`${style.productInput} col-md-6`}>
                <label>Product Name</label>
                <input ref={productRef} className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
              <label>blah blah blah</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
                <label>blah blah blah</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
              <label>blah blah blah</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
                <label>Product Name</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
              <label>blah blah blah</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
                <label>Product Name</label>
                <input className={style.modalInput} />
              </div>
              <div className={`${style.productInput} col-md-6`}>
              <label>blah blah blah</label>
                <input className={style.modalInput} />
              </div>
              <div className={style.Imagerow}>
              <Cropper file={setImageFile} imgfile={onImageChange} /><Cropper file={setImageFile} imgfile={onImageChange} /><Cropper file={setImageFile} imgfile={onImageChange} /><Cropper file={setImageFile} imgfile={onImageChange} />
              </div>
              <button className={style.lrbtn} onClick={submitdata} type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Product;

