import { Link } from "@remix-run/react";
import React from "react";
import "../components/style.css";
export default function Footer() {
  return (
    <>
      <footer className="footer w-[100%] bg-black h-52 flex justify-evenly items-center">
        <box className="box1">
            <ul>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
            </ul>
            
        </box>
        <box className="box2">
            <ul>
                <li className="text-lime-50">Exclusive</li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
            </ul>
        </box>
        <box className="box3">
            <ul>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
            </ul>
        </box>
        <box className="box4">
            <ul>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
            </ul>
        </box>
        <box className="box5">
            <ul>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
                <li><Link to="#"> </Link> </li>
            </ul>
        </box>
      </footer>
    </>
  );
}
