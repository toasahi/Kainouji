import { memo, useEffect, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import defaultImage from '../../images/defaultImage.jpeg';
import { useGetField } from '../../hooks/useGetFields';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useCookies } from 'react-cookie';

export const LookField: VFC = memo(() => {
  const { loading, fields, getFields } = useGetField();
  const { loginUser } = useLoginUser();
  const [cookies, setCookie] = useCookies(['id']);
  useEffect(() => {
    if (loginUser !== null && loginUser.id !== undefined) {
      setCookie('id', loginUser.id, { path: '/' });
      getFields(loginUser.id);
    } else {
      if (Object.keys(cookies).length !== 0) {
        getFields(cookies.id);
      }
    }
  }, []);

  console.log(process.env.REACT_APP_S3_URL);
  return (
    <SLookField>
      <Header />
      <main>
        <section>
          <h1>畑を見る</h1>
          <SContainer>
            {fields?.map((field, index) => (
              <Link key={index} to={`lookfield/graph/${field.id}`}>
                <div className="filedContent">
                  <img
                    src={field.image_name === '' ? defaultImage : process.env.REACT_APP_S3_URL + field.image_name}
                    alt="畑の画像"
                  />
                  <div>
                    <h2>{field.field_name}</h2>
                    <p>設置日:{field.setting_date}</p>
                  </div>
                </div>
              </Link>
            ))}
            <Link to="lookfield/graph/1">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>きゅうり畑</h2>
                  <p>設置日:2021/08/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph/2">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph/3">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph">
              <div className="filedContent">
                <img src={defaultImage} alt="畑の画像" />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
            <Link to="lookfield/graph">
              <div className="filedContent">
                <img src={defaultImage} />
                <div>
                  <h2>越智自動車前畑</h2>
                  <p>設置日:2021/09/02</p>
                </div>
              </div>
            </Link>
          </SContainer>
        </section>
      </main>
    </SLookField>
  );
});

const SLookField = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    section {
      text-align: center;
    }

    h1 {
      font-size: ${Font.text3xl};
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 40%;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;

      h1 {
        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 78px;
        margin-bottom: 30px;

        ::after {
          left: 38%;
          width: 24%;
          opacity: 25%;
          height: 15px; /* 線幅 */
        }
      }
    }
  }
`;

const SContainer = styled.div`
  padding: 10px;
  .filedContent {
    display: flex;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 90px;
      object-fit:cover;
    }

    div {
      padding:5px;
      text-align: left;
      line-height: 2;
      p {
        white-space: nowrap;
      }
    }
  }

  @media (min-width: ${Responsive.sm}) {
    .filedContent {
      div {
        line-height: 2;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    margin-left: 10px;

    .filedContent {
      display: block;
      background-color: #fefefe;
      margin-bottom: 30px;
      height: 250px;
      width: 100%;
      border-radius: 12px;
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

      div {
        padding: 10px;

        p {
          font-size: ${Font.textSm};
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.01);
      }

      img {
        border-radius: 12px 12px 0 0;
        height: 160px;
      }
    }

    a {
      width: 30%;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    .filedContent {
      div {

        h2 {
          font-size: ${Font.textXl};
        }
      }
    }
  }

  @media (min-width: ${Responsive.xl}) {
    padding: 30px;

    .filedContent {
      width: 300px;

      div {
        padding: 10px 15px;
      }
    }
  }
`;
