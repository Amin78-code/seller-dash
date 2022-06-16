import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/layout/Layout";
import AdminPanelLayout from "../../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../../../components/dashboard/table-header/TableHeader";
import CardBody from "../../../components/dashboard/card-body/CardBody";
import HeadingBar from "../../../components/heading-bar/HeadingBar";
import styles from "../../../components/Edit.module.css";
import Length from "../../../components/dashboard/length/Length";
import Bust from "../../../components/dashboard/bust/Bust";
import Sleeves from "../../../components/dashboard/sleeves/Sleeves";
// import ProductPriceStock from "../../../components/dashboard/product-price-stock/ProductPriceStock";
import ChooseImage from "../../../components/dashboard/choose-image/ChooseImage";
import ChooseImageModal from "../../../components/dashboard/choose-image-modal/ChooseImageModal";
import TwoTabs from "../../../components/dashboard/two-tabs/TwoTabs";
import ThinTable from "../../../components/dashboard/thin-table/ThinTable";
import img1 from "../../../assets/images/uploaded/IMG 3136.jpg";
import Options from "../../../components/dashboard/options";

const ordersData = [
  { title: "Total orders", value: "0" },
  { title: "Pending orders", value: "0" },
  { title: "Cancelled orders", value: "0" },
  { title: "Successful orders", value: "0" },
];
const productCategories = ["Abaya", "Kaftan", "Dress", "Farwa", "Kimono"];
const productTypes = [
  "Choose Type",
  "Made-to-Measure,Made in Bahrain",
  "Bespoke",
  "Made-to-Measure (MTM)",
  "Ready-to-Wear (RTW)",
];

const productDescription = [
  {
    name: "type",
    placeholder: "Choose Type",
    options: [
      "Made-to-Measure,Made in Bahrain",
      "Bespoke",
      "Made-to-Measure (MTM)",
      "Ready-to-Wear (RTW)",
    ],
  },
  {
    name: "size & fit",
    placeholder: "Choose size & fit",
    options: ["oversized fit", "relaxed fit", "regular fit", "stretchy"],
  },
  {
    name: "fabric type",
    placeholder: "nothing selected",
    options: [
      "Pure Silk Organza",
      "Jerse",
      "Natural Silk",
      "Viscose",
      "Georgette",
      "Teddy",
      "Gabardine",
      "Plisse",
      "Silk Cotton",
      "Chamois",
      "Jacquard",
      "Velvet",
      "Organza",
      "Shantung",
      "Twill",
      "Denim",
      "Tulle",
      "Tweed",
      "Taffeta",
      "Polyester",
      "Satin",
      "Cotton",
      "Wool",
      "Lace",
      "Chiffon",
      "Japanese Silk",
      "Brocade",
      "Silk",
      "Washed Silk",
      "Crepe",
      "Linen  ",
    ],
  },
  {
    name: "fabric weight",
    placeholder: "Choose fabric weight",
    options: [
      "very warm",
      "warm",
      "midweight",
      "lightweight",
      "cool lightweight",
    ],
  },
  {
    name: "care instructions",
    placeholder: "Choose fabric weight",
    options: [
      "Steam Iron",
      "Specialist Clean",
      "Machine Wash",
      "Machine Wash Cold",
      "Non-iron",
      "Iron",
      "Hand Wash",
      "Steam Wash",
      "Dry Clean",
    ],
  },
  {
    name: "shipping & returns",
    placeholder: "Choose fabric weight",
    options: [
      "very warm",
      "warm",
      "midweight",
      "lightweight",
      "cool lightweight",
    ],
  },
];

const productVariations = {
  colors: [
    { name: "AliceBlue", code: "before:bg-[#f0f8ff]" },
    { name: "AntiqueWhite", code: "before:bg-[#faebd7]" },
    { name: "Aqua", code: "before:bg-[#00ffff]" },
    { name: "Beige", code: "before:bg-[#f5f5dc]" },
    { name: "Bisque", code: "before:bg-[#ffe4c4]" },
    { name: "BlanchedAlmond", code: "before:bg-[#ffebcd]" },
  ],
  sheilaColors: [
    { name: "AliceBlue", code: "before:bg-[#f0f8ff]" },
    { name: "AntiqueWhite", code: "before:bg-[#faebd7]" },
    { name: "Aqua", code: "before:bg-[#00ffff]" },
    { name: "Beige", code: "before:bg-[#f5f5dc]" },
    { name: "Bisque", code: "before:bg-[#ffe4c4]" },
    { name: "BlanchedAlmond", code: "before:bg-[#ffebcd]" },
  ],
  sheilaLength: ["180 cm", "200 cm", "170 cm", "150 cm"],
  size: [
    "50",
    "52",
    "54",
    "56",
    "58",
    "60",
    "Free size",
    "Small",
    "Medium",
    "Large",
    "10 UK size",
    "12 UK size",
    "14 UK size",
  ],
};

const alteration = {
  length: ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"],
  bust: ["20", "22", "23", "25", "26", "28"],
  sleeves: ["25", "26", "27", "28", "29", "30"],
};

const productPriceStock = [
  {
    name: "Unit price",
    value: "500.00",
  },
];

const galleryImageData = {
  name: "Gallery Images",
  imageResolution: "(900x1200)",
};

function AddNewProduct() {
  const [selectedCategory, setSelectedCategory] = useState("Abaya");
  const [productCategoriesForShow, setProductCategoriesForShow] = useState(["Abaya", "Kaftan", "Dress", "Farwa", "Kimono"]);

  const [selectedType, setSelectedType] = useState("Bespoke");
  const [selectedSizeAndFit, setSelectedSizeAndFit] = useState("oversized fit");
  const [selectedFabricType, setSelectedFabricType] =
    useState("nothing selected");
  const [selectedFabricWeight, setSelectedFabricWeight] = useState("warm");
  const [selectedCareInstructions, setSelectedCareInstructions] =
    useState("nothing selected");
  const [selectedShippingAndReturns, setSelectedShippingAndReturns] =
    useState("very warm");
  const [productInfromation, setProductInfromation] = useState([
    { name: "productName", value: "text 2" },
    { name: "category", value: "abaya" },
    { name: "sku_Code", value: "SKU Code" },
  ]);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSheilaColor, setSelectedSheilaColor] = useState([]);
  const [selectedSheilaLength, setSelectedSheilaLength] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  const [prodPricePlusStock, setProdPricePlusStock] = useState([
    { name: "Unit Price", value: "500.00" },
    {
      name: "variantAndQuantity",
      values: [
        { variantName: "Aqua-52", value: 10 },
        { variantName: "Aqua-52", value: 10 },
      ],
    },
  ]);

  const [colorTitle, setColorTitle] = useState("nothing selected");
  const [sheilacolorTitle, setSheilaColorTitle] = useState("nothing selected");
  const [sheilaLengthTitle, setSheilaLengthTitle] =
    useState("nothing selected");
  const [sizeTitle, setSizeTitle] = useState([]);

  const [isDisableSheila, setIsDisableSheila] = useState(false);
  const [isDisableAllAlterations, setIsDisableAllAlterations] = useState(false);

  const [currentImages, setCurrentImages] = useState([
    {
      img: img1,
      name: "",
      sizeInKB: "199",
    },
  ]);

  const categorySelect = useRef("");
  const typeSelect = useRef("");
  const colorSelect = useRef("");
  const sheilaColorSelect = useRef("");
  const sheilaLengthSelect = useRef("");
  const sizeSelect = useRef("");

  const openCategorySelect = () => {
    categorySelect.current.classList.toggle("dblock");
    document
      .getElementById("categorySelect")
      .classList.toggle(styles.red_border);
  };

  const setCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
    openCategorySelect();
  };

  const openSelect = (dropdownName, index) => {
    let allOptions = [];
    for (let i = 0; i < productDescription.length; i++) {
      allOptions.push("options" + i);
    }

    for (let i = 0; i < productDescription.length; i++) {
      if (dropdownName !== allOptions[i]) {
        document.getElementById(allOptions[i]).classList.remove("dblock");
      }
    }
    let dropdown = document.getElementById(dropdownName);
    dropdown.classList.toggle("dblock");

    if ("optionMainDiv" + index == "optionMainDiv0") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv2")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv3")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv4")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv5")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv0")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv1") {
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv2")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv3")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv4")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv5")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv1")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv2") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv3")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv4")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv5")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv2")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv3") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv2")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv4")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv5")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv3")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv4") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv2")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv3")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv5")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv4")
        .classList.add("border-[#c53a24]");
    } else if ("optionMainDiv" + index == "optionMainDiv5") {
      document
        .getElementById("optionMainDiv1")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv2")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv3")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv4")
        .classList.remove("border-[#c53a24]");
      document
        .getElementById("optionMainDiv0")
        .classList.remove("border-[#c53a24]");

      document
        .getElementById("optionMainDiv5")
        .classList.add("border-[#c53a24]");
    }
  };

  const setOption = (selectedOption, optionsIndex) => {
    // console.log("selectedOption", selectedOption);
    // console.log("optionsIndex", optionsIndex);
    if (optionsIndex == 0) {
      setSelectedType(selectedOption);
    } else if (optionsIndex == 1) {
      setSelectedSizeAndFit(selectedOption);
    } else if (optionsIndex == 2) {
      setSelectedFabricType(selectedOption);
    } else if (optionsIndex == 3) {
      setSelectedFabricWeight(selectedOption);
    } else if (optionsIndex == 4) {
      setSelectedCareInstructions(selectedOption);
    } else if (optionsIndex == 5) {
      setSelectedShippingAndReturns(selectedOption);
    }

    openSelect("options" + optionsIndex, optionsIndex);
  };

  const openProductVariationSelect = (productionVaraitionName) => {
    if (productionVaraitionName == "colorSelect") {
      sheilaColorSelect.current.classList.remove("dblock");
      sheilaLengthSelect.current.classList.remove("dblock");
      sizeSelect.current.classList.remove("dblock");

      colorSelect.current.classList.toggle("dblock");
    } else if (productionVaraitionName == "sheilaColorSelect") {
      colorSelect.current.classList.remove("dblock");
      sheilaLengthSelect.current.classList.remove("dblock");
      sizeSelect.current.classList.remove("dblock");

      sheilaColorSelect.current.classList.toggle("dblock");
    } else if (productionVaraitionName == "sheilaLengthSelect") {
      colorSelect.current.classList.remove("dblock");
      sheilaColorSelect.current.classList.remove("dblock");
      sizeSelect.current.classList.remove("dblock");

      sheilaLengthSelect.current.classList.toggle("dblock");
    } else if (productionVaraitionName == "sizeSelect") {
      colorSelect.current.classList.remove("dblock");
      sheilaColorSelect.current.classList.remove("dblock");
      sheilaLengthSelect.current.classList.remove("dblock");

      sizeSelect.current.classList.toggle("dblock");
    }
  };

  const settingSelectedColor = (selected, index) => {
    let allSelectedColors = selectedColors;
    let notInArray = true;

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (allSelectedColors[i] == selected) {
        allSelectedColors.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedColors.push(selected);
    }

    setSelectedColors(allSelectedColors);

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (productVariations.colors[i] == selected) {
        document.getElementById("colorOptions" + i).classList.toggle("dblock");
      }
    }

    if (selectedColors.length == 1) {
      setColorTitle(
        <li
          className={`
                  block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[25px] before:w-[17px] before:h-[17px] ${selectedColors[0].code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[0px] before:top-[5px]`}
        >
          {selectedColors[0].name}
        </li>
      );
    } else if (selectedColors == "") {
      setColorTitle("nothing selected");
    } else {
      setColorTitle(selectedColors.length + " " + "items selected");
    }
  };

  const settingSelectedSheilaColor = (selected, index) => {
    let allSelectedSheilaColors = selectedSheilaColor;
    let notInArray = true;

    for (let i = 0; i < productVariations.sheilaColors.length; i++) {
      if (allSelectedSheilaColors[i] == selected) {
        allSelectedSheilaColors.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedSheilaColors.push(selected);
    }

    setSelectedSheilaColor(allSelectedSheilaColors);

    for (let i = 0; i < productVariations.sheilaColors.length; i++) {
      if (productVariations.sheilaColors[i].name == selected.name) {
        document
          .getElementById("sheilaColorOptions" + i)
          .classList.toggle("dblock");
      }
    }

    if (selectedSheilaColor.length == 1) {
      setSheilaColorTitle(
        <li
          className={`
            block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[25px] before:w-[17px] before:h-[17px] ${selectedSheilaColor[0].code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[0px] before:top-[5px]`}
        >
          {selectedSheilaColor[0].name}
        </li>
      );
    } else if (selectedSheilaColor == "") {
      setSheilaColorTitle("nothing selected");
    } else {
      setSheilaColorTitle(selectedSheilaColor.length + " " + "items selected");
    }
  };

  const settingSelectedSheilaLength = (selected) => {
    let allSelectedSheilaLength = selectedSheilaLength;
    let notInArray = true;

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (allSelectedSheilaLength[i] == selected) {
        allSelectedSheilaLength.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedSheilaLength.push(selected);
    }

    setSelectedSheilaLength(allSelectedSheilaLength);

    for (let i = 0; i < productVariations.sheilaLength.length; i++) {
      if (productVariations.sheilaLength[i] == selected) {
        document
          .getElementById("sheilaLengthOptions" + i)
          .classList.toggle("dblock");
      }
    }
    if (selectedSheilaLength.length == 1) {
      setSheilaLengthTitle(
        <li
          className={`
                  block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] py-[0.15rem] px-[1rem] pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
        >
          {selectedSheilaLength[0]}
        </li>
      );
    } else if (selectedSheilaLength == "") {
      setSheilaLengthTitle("nothing selected");
    } else {
      setSheilaLengthTitle(
        selectedSheilaLength.length + " " + "items selected"
      );
    }
  };

  const settingSelectedSize = (selected) => {
    let allSelectedSize = selectedSize;
    let notInArray = true;

    for (let i = 0; i < productVariations.colors.length; i++) {
      if (allSelectedSize[i] == selected) {
        allSelectedSize.splice(i, 1);
        notInArray = false;
      }
    }

    if (notInArray == true) {
      allSelectedSize.push(selected);
    }

    setSelectedSize(allSelectedSize);

    for (let i = 0; i < productVariations.size.length; i++) {
      if (productVariations.size[i] == selected) {
        document.getElementById("sizeOptions" + i).classList.toggle("dblock");
      }
    }

    let selectedSizesForPrint = [];

    for (let k = 0; k < selectedSize.length; k++) {
      selectedSizesForPrint.push(selectedSize[k]);
    }
    setSizeTitle(selectedSizesForPrint);
  };

  const disableSheila = (id) => {
    // console.log("e", document.getElementById(id).checked);
    if (document.getElementById(id).checked == true) {
      setIsDisableSheila(true);
    } else {
      setIsDisableSheila(false);
    }
  };

  const disableAllAlterations = (id) => {
    // console.log("e", document.getElementById(id).checked);
    if (document.getElementById(id).checked == true) {
      setIsDisableAllAlterations(true);
    } else {
      setIsDisableAllAlterations(false);
    }
  };

  const openAltration = (alterationName) => {
    allAlerations = document.querySelectorAll("alteration-tabs");
  };

  const changeHandler = (e, values) => {
    let _productCategories = values;
    let __productCategories = [];
    for (let i = 0; i < _productCategories.length; i++) {
      __productCategories.push(values[i].toLowerCase())
    }
    const startsWithN = __productCategories.filter((country) => country.startsWith(e.target.value.toLowerCase()));
    setProductCategoriesForShow(startsWithN);
  };

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Products"}>
            <HeadingBar heading={"update your product"} />
            <div className="w-[100%] flex gap-x-[.9%] flex-col      lg:flex-row">
              <div className="w-[100%]     lg:w-[62.6%] h-[100%]">
                {/* Product Information */}
                <TitleAndTableCard
                  width={"w-[100% mb-[20px]"}
                  zindex={" z-[2] relative "}
                >
                  <TwoTabs />
                  <CardBody>
                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>product name
                      </p>
                      <div className="w-[100%]     lg:w-[68.75%] px-0     lg:px-[15px]">
                        <input
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          placeholder="Product Name"
                          value={productInfromation[0].value}
                        />
                      </div>
                    </div>
                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>category
                      </p>
                      <div className="w-[100%]     lg:w-[68.75%] px-0     lg:px-[15px]">
                        <div
                          className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#b7b7b7] text-[1rem] bg-[#fff] border-[1px]  rounded-[.25rem] py-[0.375rem] px-[0.75rem] border-[#ced4da] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]"
                          id="categorySelect"
                        >
                          <div onClick={() => openCategorySelect()}>
                            {selectedCategory ? selectedCategory : ""}
                          </div>
                          <div
                            ref={categorySelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[1] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input
                                  onChange={(e) => changeHandler(e, productCategories)}
                                  className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul>
                                {productCategoriesForShow.map((value) => {
                                  return (
                                    <li
                                      key={value + 1}
                                      onClick={() => setCategory(value)}
                                      className={`${value == selectedCategory
                                        ? styles.active_option
                                        : ""
                                        } block text-[#212529] text-[1rem] py-[0.25rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] taPoint3`}
                                    >
                                      {value}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[100%]     lg:w-[24.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize">
                        SKU Code
                      </p>
                      <div className="w-[100%]     lg:w-[68.75%] px-0     lg:px-[15px]">
                        <input
                          className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          placeholder="SKU Code"
                          value={productInfromation[2].value}
                        />
                      </div>
                    </div>
                  </CardBody>
                </TitleAndTableCard>
                {/* Product Images */}
                <TitleAndTableCard width={"w-[100%] mb-[20px]"}>
                  <TableHeader>Product Images</TableHeader>
                  <CardBody>
                    <ChooseImage
                      data={galleryImageData}
                      editpage={true}
                      currentImages={currentImages}
                      setCurrentImages={setCurrentImages}
                    />
                  </CardBody>
                </TitleAndTableCard>
                {/* Product Variation */}
                <TitleAndTableCard
                  width={"w-[100% mb-[20px]"}
                  zindex={" z-[2] relative "}
                >
                  <TableHeader>Product Variation</TableHeader>
                  <CardBody>
                    {/* colors */}
                    <div className="fwl flex mb-[1rem] flex-col      lg:flex-row">
                      <input
                        className="w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="color"
                      />
                      <div className="fwl w-[100%]     lg:w-[62.5%] pl-0        lg:pl-[15px] pr-0        lg:pr-[5px]">
                        <div className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]">
                          <span
                            onClick={() =>
                              openProductVariationSelect("colorSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            {colorTitle}
                          </span>
                          <div
                            ref={colorSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.colors.map(
                                  (value, index) => {
                                    return (
                                      <li
                                        key={value.name}
                                        onClick={() =>
                                          settingSelectedColor(value, index)
                                        }
                                        className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[40px] before:w-[17px] before:h-[17px] ${value.code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[15px] before:top-[5px]`}
                                      >
                                        <div className="flex justify-between">
                                          {value.name}
                                          <div
                                            className="dnone"
                                            id={"colorOptions" + index}
                                          >
                                            <i className="las la-check"></i>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-0      lg:pl-[20px]">
                        Multiple Select
                      </p>
                    </div>

                    {/* sheila colors */}
                    <div className="fwl flex mb-[1rem] flex-col      lg:flex-row">
                      <input
                        className="w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="Sheila Colors"
                      />
                      <div className="fwl w-[100%]     lg:w-[62.5%] pl-0        lg:pl-[15px] pr-0        lg:pr-[5px]">
                        <div
                          className={`${isDisableSheila ? styles.disable_div : ""
                            } admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]`}
                        >
                          <span
                            onClick={() =>
                              openProductVariationSelect("sheilaColorSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            {sheilacolorTitle}
                          </span>
                          <div
                            ref={sheilaColorSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.colors.map((value, inde) => {
                                  return (
                                    <li
                                      onClick={() =>
                                        settingSelectedSheilaColor(value, inde)
                                      }
                                      key={value.name + 1}
                                      className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3 pl-[40px] before:w-[17px] before:h-[17px] ${value.code} before:border-[1px] before:border-[#dee2e6] before:rounded-[.25rem] before:absolute before:left-[15px] before:top-[5px]`}
                                    >
                                      <div className="flex justify-between">
                                        {value.name}
                                        <div
                                          className="dnone"
                                          id={"sheilaColorOptions" + inde}
                                        >
                                          <i className="las la-check"></i>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-0      lg:pl-[20px] mt-[10px]      lg:mt-[0]">
                        <label
                          htmlFor="toggleB"
                          className="flex items-center cursor-pointer"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="toggleB"
                              className="sr-only"
                              onChange={() => disableSheila("toggleB")}
                            />
                            <div className="block bg-[#e8ebf1] w-[40px] h-[23px] rounded-full"></div>
                            <div className="dot absolute left-[2px] top-[2.5px] bg-white w-[17px] h-[17px] rounded-full transition"></div>
                          </div>
                        </label>
                      </p>
                    </div>

                    {/* sheila length */}
                    <div className="fwl flex mb-[1rem] flex-col      lg:flex-row">
                      <input
                        className="w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="Sheila Length"
                      />
                      <div className="fwl w-[100%]     lg:w-[62.5%] pl-0        lg:pl-[15px] pr-0        lg:pr-[5px]">
                        <div
                          className={`${isDisableSheila ? styles.disable_div : ""
                            } admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]`}
                        >
                          <span
                            onClick={() =>
                              openProductVariationSelect("sheilaLengthSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            {sheilaLengthTitle}
                          </span>
                          <div
                            ref={sheilaLengthSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.sheilaLength.map(
                                  (value, index) => {
                                    return (
                                      <li
                                        onClick={() =>
                                          settingSelectedSheilaLength(
                                            value,
                                            index
                                          )
                                        }
                                        key={value + 1}
                                        className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                      >
                                        <div className="flex justify-between">
                                          {value}
                                          <div
                                            className="dnone"
                                            id={"sheilaLengthOptions" + index}
                                          >
                                            <i className="las la-check"></i>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-0      lg:pl-[20px]">
                        Multiple Select
                      </p>
                    </div>

                    {/* size */}
                    <div className="fwl flex mb-[1rem] flex-col      lg:flex-row">
                      <input
                        className="w-[100%]     lg:w-[25%] h-[44px] leading-[34px] capitalize bg-[#e9ecef] fwl text-[#495057] text-[1rem] rounded-[.25rem] py-[.375rem] px-[.75rem] not-allowed"
                        value="Size"
                      />
                      <div className="fwl w-[100%]     lg:w-[62.5%] pl-0        lg:pl-[15px] pr-0        lg:pr-[5px]">
                        <div className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]">
                          <span
                            onClick={() =>
                              openProductVariationSelect("sizeSelect")
                            }
                            className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                          >
                            <li
                              className={`
                                        block relative text-[#b7b7b7] fwl text-[1rem] tracking-0 mt-[-2px] uppercase py-[0.15rem] px-[1rem] pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                            >
                              {sizeTitle.length == 0 ? (
                                <span className="w-[100%] text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block">
                                  nothing selected
                                </span>
                              ) : (
                                <>
                                  {sizeTitle.map((value) => {
                                    return (
                                      <span key={value + 1}>{value}, </span>
                                    );
                                  })}
                                </>
                              )}
                            </li>
                          </span>
                          <div
                            ref={sizeSelect}
                            className="absolute w-[100%] left-0 top-[43px] z-[2] dnone"
                          >
                            <div className="w-[100%] mt-[0px] py-[10px] bg-[#fff] z-[2] border-[1px] border-[#00000026] drop-shadow-[0_0px_50px_rgba(82,63,105,15%)]">
                              <div className="py-[4px] px-[8px]">
                                <input className="admin-input w-[100%] h-[44px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]" />
                              </div>
                              <ul className="max-h-[160px] overflow-auto">
                                {productVariations.size.map((value, index) => {
                                  return (
                                    <li
                                      key={value.name + 1}
                                      onClick={() =>
                                        settingSelectedSize(value, index)
                                      }
                                      className={`
                                              block relative text-[#212529] fwr text-[1rem] py-[0.15rem] px-[1rem] hover:bg-[#c53a24] hover:text-[#fff] overflow-hidden overflow-ellipsis whitespace-nowrap taPoint3`}
                                    >
                                      <div className="flex justify-between">
                                        {value}
                                        <div
                                          className="dnone"
                                          id={"sizeOptions" + index}
                                        >
                                          <i className="las la-check"></i>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fwr w-[100%]     lg:w-[12.5%] text-[10px] text-[#6C767D] leading-[2] tracking-[0.5px] pr-[10px] pl-0      lg:pl-[20px]">
                        Multiple Select
                      </p>
                    </div>
                  </CardBody>
                </TitleAndTableCard>
                {/* Product price + stock */}
                <TitleAndTableCard width={"w-[100% mb-[20px]"}>
                  <TableHeader>Product price + stock</TableHeader>
                  <CardBody>
                    <div className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                      <p className="w-[24.4%] text-[#1b1b28] text-[13px] px-0     lg:px-[5px] capitalize">
                        <span className="text-[#ff0032]">*</span>
                        Unit price
                      </p>
                      <div className="w-[100%]     lg:w-[37.5%] px-0     lg:px-[15px]">
                        <input
                          type="number"
                          className="admin-input w-[100%] h-[44px] fwl text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#ced4da] rounded-[.25rem] py-[0.375rem] px-[0.75rem]"
                          // placeholder="Unit price"
                          value={prodPricePlusStock[0].value}
                          step="0.01"
                        />
                      </div>
                    </div>
                    <ThinTable data={prodPricePlusStock[1].values} />
                  </CardBody>
                </TitleAndTableCard>
                {/* Any Alteration? */}
                <TitleAndTableCard width={"w-[100% mb-[20px]"}>
                  <TableHeader>Any Alteration?</TableHeader>
                  <CardBody>
                    <div className="flex w-[100%] pb-[20px]">
                      <p className="fwr text-[#1b1b28] text-[13px] pl-0          lg:pl-[5px] capitalize pr-0          lg:pr-[5%]">
                        <span className="text-[#ff0032]">*</span>
                        Do You Provide Alteration
                      </p>
                      <label
                        htmlFor="toggleAllAlterations"
                        className="flex items-center cursor-pointer ml-[55px]"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggleAllAlterations"
                            className="sr-only"
                            onChange={() =>
                              disableAllAlterations("toggleAllAlterations")
                            }
                          />
                          <div className="block bg-[#e8ebf1] w-[40px] h-[23px] rounded-full"></div>
                          <div className="dot absolute left-[2px] top-[2.5px] bg-white w-[17px] h-[17px] rounded-full transition"></div>
                        </div>
                      </label>
                    </div>
                    <Length
                      data={alteration}
                      isDisableAllAlterations={isDisableAllAlterations}
                      openAltration={openAltration}
                    />
                    <Bust
                      data={alteration}
                      isDisableAllAlterations={isDisableAllAlterations}
                      openAltration={openAltration}
                    />
                    <Sleeves
                      data={alteration}
                      isDisableAllAlterations={isDisableAllAlterations}
                      openAltration={openAltration}
                    />
                  </CardBody>
                </TitleAndTableCard>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
              </div>
              {/* Product Description */}
              <TitleAndTableCard width={"w-[100%]     lg:w-[37.5%] h-[100%]"}>
                <TableHeader>Product Description</TableHeader>
                <CardBody>
                  {productDescription.map((value, index) => {
                    return (
                      <div key={value + 1} className="fwr flex mb-[1rem] flex-col      lg:flex-row">
                        <p className="w-[100%]     lg:w-[37.5%] text-[#1b1b28] text-[13px] pl-0          lg:pl-[5px] capitalize pr-0          lg:pr-[5%]">
                          <span className="text-[#ff0032]">*</span>
                          {value.name}
                        </p>

                        <div className="fwl w-[100%]     lg:w-[62.5%] pl-0        lg:pl-[15px] pr-0        lg:pr-[5px]">
                          <div
                            className="admin-input relative w-[100%] h-[44px] leading-[30px] text-[#495057] text-[1rem] bg-[#fff] border-[1px] border-[#e2e5ec] rounded-[.25rem] py-[0.375rem] px-[0.75rem] cursor-pointer    before:absolute before:w-[0] before:h-[0] before:border-[4px] before:border-t-[#b7b7b7] before:border-l-[transparent] before:border-r-[transparent] before:border-b-[transparent] before:top-[18px] before:right-[10px]"
                            id={"optionMainDiv" + index}
                          >
                            <div
                              className="text-[#b7b7b7] text-[15px] tracking-0 uppercase h-[40px] overflow-hidden block"
                              onClick={() =>
                                openSelect("options" + index, index)
                              }
                            >
                              {index == 0
                                ? selectedType
                                  ? selectedType
                                  : ""
                                : ""}
                              {index == 1
                                ? selectedSizeAndFit
                                  ? selectedSizeAndFit
                                  : ""
                                : ""}
                              {index == 2
                                ? selectedFabricType
                                  ? selectedFabricType
                                  : ""
                                : ""}
                              {index == 3
                                ? selectedFabricWeight
                                  ? selectedFabricWeight
                                  : ""
                                : ""}
                              {index == 4
                                ? selectedCareInstructions
                                  ? selectedCareInstructions
                                  : ""
                                : ""}
                              {index == 5
                                ? selectedShippingAndReturns
                                  ? selectedShippingAndReturns
                                  : ""
                                : ""}
                            </div>
                            <Options setOption={setOption} value={value} index={index} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </TitleAndTableCard>
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay" className="dnone">
        <ChooseImageModal />
      </div>
    </>
  );
}

export default AddNewProduct;
