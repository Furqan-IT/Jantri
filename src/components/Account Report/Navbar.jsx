import React from "react";

const Navbar = () => {
  return (
    <div className="navbar3">
      {/* Green Button */}
      <button className="btn-1-green">5130</button>
      {/* Red Button */}
      <button className="btn-2-red">18500</button>

      <input type="text" className="input-1-green" placeholder="" />
      {/* Green Button */}
      <button className="btn-3-green">Received</button>
      <input type="text" className="input-2-red" placeholder="" />
      {/* Red Button */}
      <button className="btn-4-red">Pay</button>
    </div>
  );
};

export default Navbar;
