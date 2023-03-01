import { useEffect, useState } from "react";

const MenuToggle = ({ funcion, variable }) => {
  const [classCruz, setClassCruz] = useState("");
  const [classBurger, setClassBurger] = useState("");
  useEffect(() => {
    console.log(variable);
    if (variable) {
      setClassCruz("navbar__menu__cross--active");
      setClassBurger("");
    } else {
      setClassBurger("navbar__menu__burger--active");
      setClassCruz("");
    }
  }, [variable]);
  return (
    <div className="navbar__menu">
      <div className={"navbar__menu__burger " + classBurger} onClick={funcion}>
        <i class="fa-solid fa-bars fa-2x" style={{ color: "white" }}></i>
      </div>
      <div className={"navbar__menu__cross " + classCruz} onClick={funcion}>
        <i class="fa-solid fa-xmark fa-2x" style={{ color: "white" }}></i>
      </div>
    </div>
  );
};

export default MenuToggle;
