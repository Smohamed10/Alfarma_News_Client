import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'; 
import { getAuthUser } from '../../Helper/Storage';
import "./spinner.css";

const Auth = getAuthUser();
let public_id="";

const Postad = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null); // Initially set to null
    const navigate = useNavigate();

    const [Post, setPost] = useState({
        image: null,
        name: "",
        description: "",
        salary: "",
        loading: false,
        err: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCategory) {
            alert('اختر مكان الاعلان ');
            return;
        }
        setPost({ ...Post, loading: true, err: [] });
        try {
            const imageUrl = await uploadImage(); // Wait for image upload to complete

            if (imageUrl) {
                const response = await axios.post("http://localhost:4004/createads", {
                    ads_img: imageUrl,
                    name: Post.name,
                    description: Post.description,
                    ad_category: selectedCategory,// Include selected category in Axios request
                }, {
                    headers: {
                        token: Auth[0].token,
                    },
                });
                console.log(response);
                navigate("/");
            } else {
                console.error("Image upload failed.");
            }
        } catch (error) {
            console.log(error);
            setPost({ ...Post, loading: false, err: [error.response.data.msg || "An error occurred."] });
        }
        setPost({ ...Post, loading: false });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreview(reader.result);
        };
    };

    const handleResetClick = () => {
        setPreview(null);
        setImage(null);
    };

    const uploadImage = async () => {
        if (!image) {
            console.error("No image to upload.");
            return null;
        }
        setLoading(true);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "alfarama");
        data.append("cloud_name", "dyeqmtxsd");
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dyeqmtxsd/image/upload`, {
                method: "POST",
                body: data,
            });
            const res = await response.json();
            setLoading(false);
            public_id = res.public_id;
            return res.secure_url;
        } catch (error) {
            setLoading(false);
            console.error(error);
            return null;
        }
    };

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">
                            <form onSubmit={handleSubmit} action="#" className="p-5 bg-white">
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">اسم الشركة </label>
                                        <input required type="text" id="fname" className="form-control" value={Post.name} onChange={(e) => setPost({ ...Post, name: e.target.value })} />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="category">مكان نشر الاعلان</label>
                                        <Dropdown >
                                            <Dropdown.Toggle className="col-md-12 mb-3 mb-md-0" variant="primary" id="dropdown-basic">
                                                {selectedCategory || "اختر الفئة"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setSelectedCategory("الرئيسية")}>الرئيسية</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("صحة")}>صحة</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("تعليم")}>تعليم </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("رياضة")}> رياضة</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("فن")}>فن </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("بترول")}>بترول</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("اقتصاد")}>اقتصاد </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("محافظات")}>محافظات</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("حوادث")}>حوادث</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("عالم")}>عالم</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSelectedCategory("تكنولوجيا")}>تكنولوجيا</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="Description">لينك الاعلان</label>
                                        <input required type="url" id="linkField" className="form-control" value={Post.description} onChange={(e) => setPost({ ...Post, description: e.target.value })} pattern="https?://.+" placeholder="اكتب لينك الاعلان هنا"/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="subject">اختر صورة الاعلان</label>
                                        <input required id="subject" type="file" className="form-control" onChange={handleImageChange} accept="image/*" />
                                        {preview && <img src={preview} alt="preview" className="img-fluid rounded" />}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input disabled={!image} type="submit" value="نشر الاعلان" className="btn btn-primary py-2 px-4 text-white" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <button onClick={handleResetClick} className="btn btn-primary py-2 px-4 text-white">اختر صورة اخرى</button>
                                    </div>
                                </div>
                                <div className="h-screen flex items-center justify-center">
                                    {loading && (
                                        <div className="loading-spinner-overlay">
                                            <div className="loading-spinner-container">
                                                <div className="loading-spinner"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Postad;
