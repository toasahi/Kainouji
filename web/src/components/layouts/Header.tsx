import { memo, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import icon from '../../images/icon.png';

export const Header: VFC = memo(() => {
  const history = useHistory();

  const onClickLookField = () => history.push('/lookfield');
  const onClickRegisterField = () => history.push('/registerfield');
  const onClickWeather = () => history.push('/weather');
  const onClickUser = () => history.push('/user');
  const onClickIcon = () => history.push('/lookfield');

  const headerLinks = [
    {
      path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABY0lEQVRIie2UPVLCQBTHfwqDlTZ6AiN3iBFOYqEXQaw01o4eQPwqdLhDzkHHgKnsRKUAi32ZZNZNdgmgTf4zb5L9eL9/kveyUKnSP6kBXAFjYASEMld2n7NCYK5FuMQ+Z40NwLcl9hVqD+gBsQGWxLsWefti4A7YtZluAFEBqGxEws7V6RpMkzjJM91GdeS6jGNgx2Rs6sxVx6Vuug98/YHxN9DMGvdl4QPoAB7qAPCAM2CyANzG6CemfibB/10BAA4dzV0ZPsC9DDo5CYm6DsaujB7AQAaeJelAMwmAljbnyhhA2lS2Q31LM2kBbW3OlfEJ6b9re9om9k/tyhhuoo4zgGNLUrL+AlzIA4/k/nVBRgRpnSaozjMpIO3IwLC+CGOWZdxkEruoJmjI9RxVkzlwXfA2t2UY9Yy5KWaSUCswrlkYiWndlHwEPAJDYIqq4ZPMu6oNPEvuVFgPmEtUqdLq9QOway3c5rDJIAAAAABJRU5ErkJggg==',
      to: onClickLookField,
      children: '畑を見る',
    },
    {
      path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACV0lEQVRIie3WTYiNURgH8N8YMyaizKR8NiEsfMRiZKEoi0khERsLCzslCylJKaKxUSMbmQWllAUrmg3lo9hMLCT5KCEfg5BG42OMxXmuebvu+84dzcjCU6d7z/P/P8//nOc859zLP2w1aMOR+P7XRNvRH+PESIu/y4jljbcjIVxK/hQbMT7GetzP4MNqNRnRxgr4xMD6DWPZs2e6sYC3KTjtwyV+xEAZxxfwJmR4bX8iNKpsnj23uoK4MX8iVmTZUm8u4NVjFpoM8zmvlMo5YjbYaqdgAZozY7LU2eOko+qQHpZPETMPj9CHBmkTnZHrZZ5QM3bhYpDyHo8+nMaMTGyLdEzNMZ+NLiyO+fGiHb4qECuNLizNxMzHedwycO+XSS/bpZhPw5ci4SLBj9iJ2uA2SWXuw22p/LAGPRGzNnyHDPLS5Yl2xqpJfbEtdtSPe5gU2Dp8Df/zWGQduocq3IPtBppwIW5k8G7MDKwVvRnsWPhXZ3xVCd/E3PDX4zC+ZfBeLA98idTV2fgVgZ2qRviNVKp9GB2+RbhToRo7Ap+KZ2XYa6nMDfhQjfAs6RqIwD1SN5aLXpDKPwpXKuAdkWNNmX9Qm45rFRKW/gCUmmlvDmdL4EeHIrxK8X3eGrwWAx1cPkqPyO1qhffjR4HoZanEY/E4h/M0cjVKd7wq4e8For2YE7wDBbxzwWmtgP2y8t/jWvl2Eg+lBtxdwLsbn4sLOL9Z3i4+S9cGzhbw+rEheGcqYL+sfMc3KiymDwfxIubvy5Nk7AmuxvcHUr+U7HpOzH8bWfsJhPQLGFqbZJAAAAAASUVORK5CYII=',
      to: onClickRegisterField,
      children: '畑を登録',
    },
    {
      path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVRIie3WQUrDQBTG8Z9duIuCIIIXENeCegRLV1rBjefQE3gdF6IrT6Lopil4BkGJC1OI6dhOmgkq9oO3yZvJ/71vhplhqf+oAcYoEkWOfgw4TwidxKgOWQmAi5jqFtAXVq8jyFz9anCOU6yVcYLHLoqpb4qNwJhzzTdYI/AwkL8qCxoiwybO8JQSnNVyA9+7sIXnVOD1Wu5e2IWJZi1BI/Bx+W0H13gz7UJVPRziti34AQd4wQW2Y37g87C4aQMu8I7LSGBVe23BhfhOq8pmgbs8uXabTgh1vIjVdxJY/VrC51m+iv0AdAq8vBZ/FDzugJPHDOpL++4a4ShhE0v9EX0AwgawncTK8DwAAAAASUVORK5CYII=',
      to: onClickWeather,
      children: '天気予報',
    },
    {
      path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRIie3WMWsUQRjG8Z/2iSaohR7BTjGilloKNipoJAQbK4UgivpBFK1V/ABaGARDWv0GsQgciiAXS41yFgqunMXMcctyN7N7p2KRB15ueW+e+c87Mzs7bOsfaUeDtnO4iPM4iFbMf8QHvMQLbP6pwR3AQxToZeIXnsWBTaQFfKsBrEYXF8aF3hEqaAotV3+7KXRhQmgZXrvylvGmNzXt++uAn2Q66mARUzEuoZ3xPM5B56R3bwezQ3yzwms0ylcYvH5DdSsz8sXY7lwEbeJszC1lvDdT4LWMeSq2K1fXibnpjHc1BX6XMfdVN1+OdgrcnaDiXRlvtwzaWQH3pHUm/i4brPFy5b9RSva9kRl12+hd/Tbj3UiBVzPmnlDlkrCZpoWdnoP2hK/XSN2o0cG4cT0F3ouffwFaYF8KTDjehpm/4zmu4Dh2xzgRcyuxzTDvoxy0X/VWyfQDdzFTwzuDe9HT93/GnjpgwmexEA6UQ6X8KTzAOr7GWMd9nCy1O4z3wrI1vhBcw3x8nsdr+bV8hSPRcxRXm0Kr+lID2o+tOh1WT65RWhGmPqdCuGlm1eR628JlnMYxgw3zCW+EaX4qXHe39f/oNxZ9XSe55I4ZAAAAAElFTkSuQmCC',
      to: onClickUser,
      children: 'マイページ',
    },
  ];
  return (
    <SHeader>
      <nav>
        <div className="iconContainer" onClick={onClickIcon}>
          <img src={icon} />
        </div>
        <ul>
          {headerLinks.map((link, index) => (
            <li key={index}>
              <a onClick={link.to}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="30" height="30" fill={`url(#pattern${index})`} />
                  <defs>
                    <pattern id={`pattern${index}`} patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref={`#image${index}`} transform="scale(0.0333333)" />
                    </pattern>
                    <image id={`image${index}`} width="30" height="30" xlinkHref={link.path} />
                  </defs>
                </svg>
                {link.children}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <small>Copyright &copy; 2021 AsaFarm</small>
      </footer>
    </SHeader>
  );
});

const SHeader = styled.header`
  background-color: #fefefe;
  border-top: solid 2px #e8e6e6;
  width: 100%;
  height: 80px;
  position: sticky;
  bottom: 0;
  position: -webkit-sticky;
  /* position: fixed; */
  z-index: 999;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 35px;

    li{
      cursor:pointer;
    }
  }

  .iconContainer {
    display: none;
  }

  svg {
    display: none;
  }

  a {
    font-size: ${Font.textBase};
    font-weight: ${FontWeight.fontExtralLight};
    transition: all 0.3s ease 0s;

    &:hover {
      color: ${Color.secondary};
    }
  }

  footer {
    display: none;
  }

  @media (min-width: ${Responsive.md}) {
    width: 25%;
    min-width: 230px;
    top: 0;
    border-top: none;
    border-right: solid 2px #e8e6e6;
    display: block;
    height: 100%;
    min-height: 100vh;

    .iconContainer {
      display: block;
      margin-top: 10px;
    }

    a {
      font-size: ${Font.textXl};
      height: 30px;
    }

    nav {
      margin-top: 40px;
      padding: 30px;
    }

    ul {
      display: block;
      margin-top: 65px;
      white-space: nowrap;
    }

    li {
      margin-top: 2.5rem;
      padding-right: 15px;
    }

    svg {
      display: inline;
      width: 20px;
      height: 20px;
      margin-right: 25px;
    }

    footer {
      display: block;
      position: absolute;
      bottom: 20px;
      small {
        font-size: ${Font.textSm};
        padding: 30px;
        opacity: 30%;
      }
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 20%;

    nav {
      margin-top: 30px;
      margin-left: 13px;
      padding: 30px;
    }

    a {
      font-size: ${Font.text2xl};
    }

    svg {
      width: 26px;
      height: 26px;
      margin-right: 25px;
    }
  }
`;
