import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';

const UIDemo: React.FC = () => {
  return (
    <div className="ui-demo">
      <div className="card">
        <div className="img-container">
          <img src="https://picsum.photos//id/1084/536/354" />
        </div>
        <div className="info-content">
          <div className="title-content">
            <CheckCircleOutlineOutlinedIcon sx={{color:'#781889'}} />
            <h2 className="title">
              Moto G Style 5G (2022) - Family Comparison
            </h2>
          </div>
          <div className="bottom-content">
            <div className="actions">
              <span className="icon">
                <LaptopMacOutlinedIcon sx={{fontSize:'1.2rem'}}/> 10m
              </span>
              <span className="icon">
                <StarsOutlinedIcon sx={{fontSize:'1.2rem'}}/> 250
              </span>
              
            </div>
            <div className="info-icon" >
            <InfoOutlinedIcon sx={{fontSize:'1.2rem'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UIDemo;
