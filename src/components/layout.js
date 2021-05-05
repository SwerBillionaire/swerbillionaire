import React from "react";
import Container from "./container";
import { Link } from "gatsby";

export default function Layout(props) {
  return (
    <main>
      <header className="bg-blue-50">
        <Container>
          <div className="grid grid-cols-2">
            <div className="col-span-2 md:col-span-1 grid grid-flow-row gap-4">
              {props.location?.pathname === "/" ? (
                <h1 className="text-xl font-bold  text-blue-600">
                  <Link to="/">Swerbillionaire</Link>
                </h1>
              ) : (
                <p className="text-xl font-bold  text-blue-600">
                  <Link to="/">Swerbillionaire</Link>
                </p>
              )}
              <p className="text-blue-300">
                Personal blog built with magical tools - GatsbyJS and
                TailwindCSS
              </p>
            </div>
            <ul className="col-span-2 md:col-span-1 grid grid-flow-col gap-4 justify-end content-center">
              <ol>
                <Link to="/">Home</Link>
              </ol>
              <ol>
                <Link to="/about">About</Link>
              </ol>
            </ul>
          </div>
        </Container>
      </header>
      {props.children}
      <footer className="bg-blue-50">
        <Container>footer</Container>
      </footer>
    </main>
  );
}
