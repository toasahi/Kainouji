import { ChangeEvent, memo, useState, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import workerImage from '../../images/worker.png';
import { useUploadImage } from '../../hooks/useUploadImage'; 

export const Weather: VFC = memo(() => {
  const sunny = [...Array(8)].map((_, i) => i);
  const {uploadImage} = useUploadImage();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [flag,setFlag] = useState(false);
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) =>
  event.currentTarget.files !== null
    ? (setSelectedFile(event.currentTarget.files[0]),setFlag(true))
    : console.log('失敗');

  const onClickUpload = ()=>uploadImage(selectedFile!);
  // const onClickUpload = ()=>console.log('1');
  return (
    <>
      <SContainer>
        <Header />
        <main style={{ width: '80%' }}>
          <div className="" style={{ width: '100%' }}>
            <h1>耕し中です</h1>
            {/* <Sunny>
              {sunny.map((index)=>(
                <div className={`circle-frame${index+1}`}>
                <div className= "triangle"></div>
              </div>
              ))}
            </Sunny> */}
            <img
              src={workerImage}
              className="animation keyframe2"
              style={{ width: '400px', height: '300px', display: 'block', margin: '0 auto', marginTop: '100px' }}
            />
          </div>
          <input type='file' onChange={onChangeImage}/>
          {flag ? (<button onClick={onClickUpload}> Upload to S3</button>) : ('') }
          
        </main>
      </SContainer>
    </>
  );
});

const SContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    h1 {
      font-size: ${Font.text3xl};
      color:${Color.tertiary};
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
    }

    .keyframe2 {
      margin-top: 300px;
      animation-name: anim_h;
    }

    @keyframes anim_h {
      0% {
        transform: translate(0px, 0);
      }
      100% {
        transform: translate(80px, 0);
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
      h1{
        text-align:center;
        
        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 78px;
      }
    }
  }
`;


const Sunny = styled.div`
  position: relative;
  margin-left: 50px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: orange;
  margin-top:30px;

.circle-frame1 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(0deg);
  animation: rotate1 12s linear infinite;
}
@keyframes rotate1 {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
.circle-frame2 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(45deg);
  animation: rotate2 12s linear infinite;
}
@keyframes rotate2 {
  0% {
      transform: rotate(45deg);
  }
  100% {
      transform: rotate(405deg);
  }
}
.circle-frame3 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(90deg);
  animation: rotate3 12s linear infinite;
}
@keyframes rotate3 {
  0% {
      transform: rotate(90deg);
  }
  100% {
      transform: rotate(450deg);
  }
}
.circle-frame4 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(135deg);
  animation: rotate4 12s linear infinite;
}
@keyframes rotate4 {
  0% {
      transform: rotate(135deg);
  }
  100% {
      transform: rotate(495deg);
  }
}
.circle-frame5 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(180deg);
  animation: rotate5 12s linear infinite;
}
@keyframes rotate5 {
  0% {
      transform: rotate(180deg);
  }
  100% {
      transform: rotate(540deg);
  }
}
.circle-frame6 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(225deg);
  animation: rotate6 12s linear infinite;
}
@keyframes rotate6 {
  0% {
      transform: rotate(225deg);
  }
  100% {
      transform: rotate(585deg);
  }
}
.circle-frame7 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(270deg);
  animation: rotate7 12s linear infinite;
}
@keyframes rotate7 {
  0% {
      transform: rotate(270deg);
  }
  100% {
      transform: rotate(630deg);
  }
}
.circle-frame8 {
  position: absolute;
  top: -5px;
  left: calc(50% - 10px);
  width: 20px;
  height: calc(50% + 5px);
  transform-origin: center bottom;
  transform: rotate(315deg);
  animation: rotate8 12s linear infinite;
}
@keyframes rotate8 {
  0% {
      transform: rotate(315deg);
  }
  100% {
      transform: rotate(675deg);
  }
}
@keyframes stretch {
  0% {
      clip-path: polygon(0 90%, 50% 50%, 100% 90%);
  }
  50% {
      clip-path: polygon(0 100%, 50% 0, 100% 100%);
  }
  100% {
      clip-path: polygon(0 90%, 50% 50%, 100% 90%);
  }
}
.triangle {
  margin-top: -20px;
  width: 20px;
  height: 20px;
  background-color: #FF6600;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  animation: stretch 2s linear infinite;
}
`