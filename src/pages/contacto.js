import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
//Components
import Layout from "../components/Layout/Layout"
import Sidebar from "../components/SidebarMessage/SidebarMessage"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 50px;

  width: 100%;

  @media (min-width: 992px) {
    margin-left: 20px;
  }

  .contact {
    background-color: #221e3f;
  }

  form {
    width: 100%;
    margin: 0px auto;
  }

  form label {
    font-size: 1.2rem;
  }
  e form h1 {
    text-align: center;
  }

  input,
  select,
  textarea {
    width: 97%;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border: 0.1rem solid black;
    outline-color: #fd57bf;
    font-size: 1.5rem;
  }

  fieldset {
    border: none !important;
  }

  select#service {
    width: 100%;
  }

  input[type="submit"] {
    width: initial;
    background-color: #fd57bf;
    color: #eee;
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 650ms;
  }

  input[type="submit"]:hover {
    color: #221e3f;
    background-color: #ffe838;
  }

  /*Api WhatsApp*/

  .image-icon-whatsapp {
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    transition: all 0.2s;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12rem;
    text-align: center;
    z-index: 1;
  }

  /*.image-icon-whatsapp:hover{
	transform: scale(0.9);
}
.image-icon-whatsapp:active{
	transform: scale(0.8);
	}*/

  .formulariowtsp {
    width: 90%;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
    bottom: 65px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.22);
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
  }

  .inputwts {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.19);
    color: #666;
  }

  .inputwts:focus {
    outline: none;
  }

  .textareawts {
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    height: 140px;
    max-height: 140px;
    min-height: 140px;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    font-size: 13px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.19);
    color: #666;
  }

  .textareawts:focus {
    outline: none;
  }

  .newmessagewts {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    display: block;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    line-height: 10px;
    color: black;
  }
  .btnwtsp {
    position: relative;
    display: inline-block;
    width: 100%;
    border: none;
    padding: 12px 36px;
    letter-spacing: 2px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    animation: pulse 3s infinite;
    border-radius: 40px;
    background: linear-gradient(90deg, #f26e3b, #d22e26);
  }

  #icon-wts:hover {
    color: white;
  }

  .btnwtsp:hover {
    background: linear-gradient(90deg, #d22e26, #f26e3b);
  }

  /*End contact*/

  /*Start animations*/
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(242, 110, 59, 0.99);
    }
    70% {
      box-shadow: 0 0 0 2rem rgba(242, 110, 59, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(242, 110, 59, 0);
    }
  }
  /*End animations*/
`

export default function contacto() {
  return (
    <Layout id="contact">
      <StaticImage
        src="../images/archive_headerimage.png"
        placeholder="TRACED_SVG"
        layout="constrained"
        width={1920}
        height={300}
        alt="Blog Image Post"
      />
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/contacto",
            title: "envía un mensaje por WhatsApp",
          }}
        />

        <ContentWrapper>
          <Sidebar />

          <PageContent id="contact">
            <form id="formulariowtsp" action="" className="formulariowtsp">
              <h1>Estamos a tu alcance</h1>
              <fieldset>
                <a
                  style={{ display: "none" }}
                  href="https://api.whatsapp.com/send?phone=5215581853675&text=hola%20gustavo"
                >
                  Envia un mensaje via WhatsApp
                </a>

                <div>
                  <label htmlFor="contactName">
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    name="subject"
                    id="subject"
                    cols="10"
                    rows="10"
                    placeholder="Ingresa tu mensaje aquí..."
                  ></textarea>
                </div>

                <div>
                  <button type="submit" id="sendbttn" className="btnwtsp">
                    <i className="fab fa-whatsapp" id="icon-wts"></i> ENVIAR
                  </button>
                </div>
              </fieldset>
            </form>
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}
