import React from 'react';
import './styles/icon.less';
const defaultImgSrc = '../../public/sprite.png';

const Icon = ({src, variant}) => {
  if (!src) src = defaultImgSrc;

  return (
    <div className={`icon-container${variant}`}>
       <img className="icon-img" src={src}/>
    </div>
  );
}

export default Icon;
