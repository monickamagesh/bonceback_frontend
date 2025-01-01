import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";

export default function ProfileChip() {
  return (
    <NavLink to="/patient/patient-profile">
      <div className="profile_chip">
        <img className="avatar" src={avatar} alt="avatar" />
        <p className="username">@guest</p>
      </div>
    </NavLink>
  );
}
