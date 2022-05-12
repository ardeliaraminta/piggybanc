import React from "react";
import styled from "styled-components";
import image from "../../assets/profiles.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Ardelia Shaula</h2>
        <h5>
          <HiOutlineLocationMarker /> Jakarta Indonesia
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Date of Birth</h5>
          <h3>11 September 2002</h3>
        </div>
        <div className="container">
          <h5>Gender</h5>
          <h3>Female</h3>
        </div>
        <div className="container">
          <h5>Occupation</h5>
          <h3>Student</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: white;
      font-family: 'Inter';
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
