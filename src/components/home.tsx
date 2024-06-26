import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import "../css/globals.css";
import { Button } from "@mui/material";

//Override: Firebase onAuthStateChanged()
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("logged in", uid);
    } else {
        console.log("signed out");
    }
});

interface HomePageProps {}

const Home: React.FC<HomePageProps> = () => {

    //Scroll to specified element
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Layout footer={2} headerBtn={true}>
            <div style={{ scrollBehavior: "smooth" }}>
                <PageTitle
                    pageTitle="CareerBase - Where careers are found"
                    description="CareerBase is a database created to help high schoolers find careers and job opportunities"
                />
                {/* General page layout */}
                <section id="hero-3" className="bg-scroll division">
                    <div
                        className="container"
                        style={{
                            backgroundImage: `url("/images/background.jpg")`,
                            backgroundSize: "cover", // Adjust background size as needed
                            backgroundPosition: "center", // Adjust background position as needed
                            height: "800px",
                        }}
                    >
                        <div className="row d-flex align-items-center">
                            <div
                                className="col-sm-12"
                                style={{ marginTop: "100px" }}
                            >
                                <div className="hero-txt mb-40 text-center">
                                    <h1
                                        style={{
                                            color: "white",
                                            marginTop: "125px",
                                        }}
                                    >
                                        Career Database for High Schoolers
                                    </h1>
                                    <h2 style={{ color: "white" }}>
                                        Career opportunities for high schoolers,
                                        powered by CareerBase
                                    </h2>
                                    <p
                                        style={{
                                            marginBottom: "30px",
                                            color: "white",
                                        }}
                                    >
                                        Empower your search for opportunities
                                        with CareerBase, a comprehensive
                                        database for high school job
                                        opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <div className="mb-40 text-center">
                                    <Button
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            margin: 3,
                                            textAlign: "center",
                                            fontSize: "1.0rem",
                                            fontWeight: 600,
                                            width: 250,
                                            height: 60,
                                            backgroundColor: "primary.main",
                                            textTransform: "none",
                                        }}
                                        onClick={() => scrollTo("about")}
                                    >
                                        About CareerBase
                                    </Button>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            margin: 3,
                                            textAlign: "center",
                                            fontSize: "1.0rem",
                                            fontWeight: 600,
                                            width: 250,
                                            height: 60,
                                            backgroundColor: "primary.main",
                                            textTransform: "none",
                                        }}
                                        onClick={() => scrollTo("instructions")}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section className="section bg-light" id="about">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container">
                        <h2
                            className="section-title"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginLeft: "700px",
                            }}
                        >
                            About
                        </h2>
                    </div>
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            padding: "40px",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <div>
                            <img
                                src="images/thumbnail1.png"
                                width="750"

                                alt="example dashboard"
                            />
                        </div>
                        <div>
                            <p
                            style={{
                                width: "100%",
                                fontSize: "50"
                            }}
                         >
                            
                            CareerBase is an open-source webapp designed to
                            empower the Career and Technical Education
                            Departments across high schools by providing a
                            dynamic database to store crucial information
                            regarding local/community business partners for the
                            school. </p> 
                            </div>
                        
                    </div>
                </section>
                {/* Getting Started Section */}
                <section className="section bg-light" id="instructions">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container">
                        <h2
                            className="section-title"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginLeft: "700px",
                            }}
                        >
                            Instructions
                        </h2>
                    </div>
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            padding: "40px",
                            justifyContent: "vertical",
                            alignItems: "center",
                            gap: "20px"
                        }}
                    >
                        <div>
                            <img
                                    src="images/thumbnail2.png"
                                    width="750"
                                    alt="example signup"
                            />
                        </div>
                        <div>
                            <p>
                                Are you a registered user? Sign in by clicking the
                                sign in button on the top right. If not, then please
                                sign up. All we need is your email and a password! You can
                                also choose to sign up with Google.
                            </p>
                            <p>
                                <h5>Signing up</h5>
                                <li>
                                    Administrators: sign-up with school district provided email. You will be able to add, edit, and delete business partners.
                                </li>
                                <li>
                                    Students: sign-up with any email. 
                                </li>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
