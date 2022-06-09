import React, { useState } from "react";
import Image from "next/image";
import styles from "./ChooseImage.module.css";
import img1 from "../../../assets/images/uploaded/IMG 3136.jpg";
import CurrentImgCard from "../current-img-card/CurrentImgCard";

function ChooseImage({ data, editpage }) {
  const [currentImages, setCurrentImages] = useState([
    {
      img: img1,
      name: "",
      sizeInKB: "199",
    },
  ]);

  const showModal = () => {
    document.getElementById("upload_overlay").classList.add("dblock");
  };
  const deletethisImg = (data, img) => {
    console.log("currentImages before",currentImages)
    // console.log("deletethisImg called");
    let _currentImages = currentImages;
    for (let i = 0; i < currentImages.length; i++) {


    console.log("currentImages[i]",currentImages[i].img.src)
    console.log("data",data.img.src)

      if (currentImages[i].img.src == data.img.src) {
        _currentImages.splice(i, 1);
      }
    }
    setCurrentImages([]);
    setCurrentImages(_currentImages);
    console.log("_currentImages after",_currentImages)
    console.log("currentImages after",currentImages)
  };

  return (
    <>
      <div className="fwr flex mb-[1rem]">
        <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-[5px] capitalize">
          <span className="text-[#ff0032]">*</span>
          {data.name} <small>{data.imageResolution}</small>
        </p>
        <div className="w-[68.75%] px-[15px]">
          <div className="flex admin-input relative w-[100%] h-[44px] leading-[30px] bg-[#fff] border-[1px]  rounded-[.25rem]  border-[#ced4da]">
            <p
              className="bg-[#8f97ab26] rounded-[0.25rem] capitalize text-[1rem] text-[#495057] py-[0.375rem] px-[0.75rem]"
              onClick={() => showModal()}
            >
              browse
            </p>
            <div className="text-[#b7b7b7] text-[1rem] py-[0.375rem] px-[0.75rem]">
              file selected
            </div>
          </div>
          <div className="pt-[8px]">
            {editpage ? (
              <>
                {editpage == true ? (
                  <>
                    {currentImages.map((value, index) => {
                      return (
                        <CurrentImgCard
                          key={value.sizeInKB + 1}
                          data={value}
                          index={index}
                          deletethisImg={deletethisImg}
                          // selectedImgs={selectedImgs}
                          // selecImg={selecImg}
                        />
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* <ChooseImageModal /> */}
    </>
  );
}

export default ChooseImage;
