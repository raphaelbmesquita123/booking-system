import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

//styles
import { SettingsContainer } from "../../../styles/dashboard-settings";
import { NavBarContainer } from "../../../styles/dashboard-painel";


//hooks
import { useBooking } from "../../../hooks";

export default function Settings() {
  const { user, handleUserLoginOut } = useBooking();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      Router.push("/DashBoard");
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <SettingsContainer>
      {!loading && (
        <>
          <NavBarContainer>
            <div>
              <h3>Hi, {user?.user?.firstName}</h3>
              <main>
                <Link href='/DashBoard/Painel'>Bookings</Link>
                <Link href='/DashBoard/Settings'>Settings</Link>
                <button onClick={handleUserLoginOut}>Log out</button>
              </main>
            </div>
          </NavBarContainer>
          <div className="settings">
            <div className="settingsTimesToBooking">
              <h4>What time can your customer book a table?</h4>
              <form action="">
                <label htmlFor="">
                  <input type="text" placeholder="6pm to 7:30pm"/> <button>+</button>
                </label>
              </form>
            </div>
          </div>
        </>
      )}
    </SettingsContainer>
  );
}
