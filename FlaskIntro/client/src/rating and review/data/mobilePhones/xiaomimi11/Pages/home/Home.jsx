import React from 'react';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Button from "../../components/ratings-button/Button";

export default function Home() {
  
  return (
    <>
      <Header />
      <div className="home">
      <Posts/>
      </div>
        <Button/>
    </>
  );
}
 