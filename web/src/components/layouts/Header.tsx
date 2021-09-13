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
        {/* <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.24 24.716C4.176 22.088 4.824 17.984 5.04 15.068L2.988 14.816C2.736 17.696 2.088 21.62 1.152 23.96L3.24 24.716ZM6.228 40.736H8.856V7.868H6.228V40.736ZM13.608 20.18C13.176 18.524 11.952 15.752 10.836 13.628L8.964 14.492C10.008 16.616 11.196 19.424 11.592 21.152L13.608 20.18ZM23.544 16.112H28.908V24.32H23.364C23.508 22.772 23.544 21.26 23.544 19.82V16.112ZM34.632 26.876V24.32H31.536V13.592H23.544V7.868H20.88V13.592H13.86V16.112H20.88V19.82C20.88 21.26 20.844 22.772 20.7 24.32H11.916V26.876H20.34C19.44 31.268 17.064 35.696 10.764 38.828C11.376 39.332 12.24 40.34 12.636 40.916C18.648 37.604 21.42 33.14 22.608 28.64C24.66 34.256 28.008 38.684 33.012 40.88C33.444 40.088 34.272 38.972 34.92 38.396C29.916 36.56 26.46 32.204 24.552 26.876H34.632Z"
            fill="#0E0E0E"
          />
          <path
            d="M64.584 14.528H59.328V12.188H64.584V14.528ZM64.584 18.632H59.328V16.256H64.584V18.632ZM43.884 16.256H48.852V18.632H43.884V16.256ZM43.884 12.188H48.852V14.528H43.884V12.188ZM56.7 16.256V18.632H51.444V16.256H56.7ZM56.7 12.188V14.528H51.444V12.188H56.7ZM67.176 10.388H59.328V7.868H56.7V10.388H51.444V7.868H48.852V10.388H41.4V20.468H67.176V10.388ZM65.88 31.952C64.152 32.96 61.344 34.256 59.256 35.048C57.888 34.184 56.772 33.14 55.908 31.952H65.88ZM49.356 37.316V31.952H53.28C54.216 33.68 55.476 35.156 57.024 36.38L49.356 37.316ZM66.204 31.952H69.948V29.9H43.452C43.56 28.82 43.596 27.74 43.596 26.804V24.248H69.12V22.232H41.04V26.768C41.04 30.44 40.644 35.624 37.584 39.44C38.232 39.728 39.348 40.376 39.852 40.808C41.796 38.288 42.768 35.048 43.236 31.952H46.764V37.64C45.612 37.784 44.568 37.892 43.632 38L43.956 40.304C47.484 39.836 52.38 39.188 57.096 38.576L57.024 36.38C59.94 38.684 63.864 40.124 68.832 40.736C69.156 40.016 69.84 38.936 70.416 38.432C66.852 38.108 63.756 37.352 61.236 36.164C63.36 35.444 65.844 34.472 67.932 33.428L66.204 31.952ZM66.024 27.992V26.156H45.648V27.992H66.024ZM83.52 28.676C82.872 33.752 81.144 36.92 73.404 38.576C73.98 39.116 74.7 40.232 74.988 40.916C83.448 38.864 85.572 34.94 86.364 28.676H83.52ZM92.952 28.676V36.884C92.952 39.764 93.816 40.592 97.092 40.592H102.456C105.336 40.592 106.128 39.296 106.452 33.968C105.696 33.752 104.544 33.356 103.968 32.888C103.824 37.388 103.572 38.072 102.204 38.072H97.38C95.94 38.072 95.688 37.892 95.688 36.884V28.676H92.952ZM77.256 8.876V28.172H79.848V8.876H77.256ZM85.356 9.488V27.668H103.104V9.488H85.356ZM87.912 11.864H100.404V17.444H87.912V11.864ZM87.912 19.64H100.404V25.292H87.912V19.64Z"
            fill="#9FC730"
            fill-opacity="0.8"
          />
          <rect y="44" width="36" height="3" fill="#9FC730" fill-opacity="0.8" />
        </svg> */}

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
