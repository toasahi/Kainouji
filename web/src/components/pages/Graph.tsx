import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { Responsive, Font, Color, FontWeight } from '../../constant/BaseCss';
import { useGetDetailField } from '../../hooks/useGetDetailField';
import { useGetGraphData } from '../../hooks/useGetGraphData';
import { useGetThreshold } from '../../hooks/useGetThreshold';

import { Header } from '../layouts/Header';
import { Modal } from '../modals/Modal';
import { PrimarySpinner } from '../spinners/PrimarySpinner';

export const Graph: VFC = memo(() => {
  const { getGraphData, graphData, loading } = useGetGraphData();
  const { getDetailField, field } = useGetDetailField();
  const { getThreshold, thresholds } = useGetThreshold();
  const [percent, setPercent] = useState('0');
  const [graph, setGraph] = useState('水分量');
  const [period, setPeriod] = useState('all');
  const [show, setShow] = useState(false);

  const onClickModal = () => setShow(!show);
  const onChangeGraphData = (event: ChangeEvent<HTMLSelectElement>) => setGraph(event.target.value);
  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => setPercent(event.target.value);

  const onChangePeriod = (event: ChangeEvent<HTMLSelectElement>) => setPeriod(event.target.value);
  const onClickSetting = () => {
    setPercent(thresholds?.moisture ?? '0');
    setShow(!show);
  };
  const param = useParams<{ id: string }>();
  const today = new Date();
  useEffect(() => getGraphData(period, param.id), [period]);

  useEffect(() => {
    getDetailField(param.id);
    getThreshold();
  }, []);

  return (
    <>
      {/* {loading ? (
        <div className="spinner-container" style={{ textAlign: 'center', marginTop: '300px' }}>
          <PrimarySpinner />
        </div>
      ) : (
        <> */}
      <SGraph>
        <Header />
        <main>
          <h1>{field?.field_name ?? '畑の名前'}</h1>
          <section>
            <div className="graph">
              <div className="dataContainer">
                <select onChange={onChangeGraphData}>
                  <option value="水分量">水分量</option>
                  <option value="気圧">気圧</option>
                  <option value="気温">気温</option>
                  <option value="湿度">湿度</option>
                </select>
                <select onChange={onChangePeriod}>
                  <option value="all">全期間</option>
                  <option value="one">１週間</option>
                  <option value="two">２週間</option>
                </select>
                <button onClick={onClickSetting}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="15" height="15" fill="url(#pattern4)" />
                    <defs>
                      <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image4" transform="scale(0.02)" />
                      </pattern>
                      <image
                        id="image4"
                        width="50"
                        height="50"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFPklEQVRoge2aW2xUVRSGP+wFYgcUsWqsULQMClXbxFREjQ+Y+KDRB40QgzESfNIXiCQavCRGvFBpi61PXl7w+uiTFwhaTcTEYDWCEQ1qaBFjYqK0hdZ2OuPDWrv7zJkz+5yze0pN5E8mZ2b22uuyL2uvtfaBs/h/YCcwBZRCn0lg2xzqlRpDVBphPgNzqFcqLAKKwBhQE/h/of4/DtRmLfScrBkCq4F5wBFkeRmMAIPAfGBF1kLTGNIMbAUaY+hW6fOHiLbv9HlNDI9GYAuwNLF2CZEHjiNr/A/gDgftS0r3ZETb89r2jKP/OuA3pRsEWjz0jcQKrBF/67MIdCPLJIg64BOluTuC133a9iHl+wegHujEeruTZGhM0Ih+ZMM+Dkzof98ie+IK4BXgT6x3itoHVwXaf0dm71JgJXAQ66K3I07j8yyMuSxkREOgrQP4SdvGVHgJKACfAg84+D4EfInMagnxYqP6/SiwJkCbCxnT5GPIJmVwGrggoj0HvKE0I8CLwMUp+DcDfYghJWAPMgthLFEdSsCDKfhPowH4URnsctC1qTBfNFE+C2F0qQ5HKF8VqXAdsh+mEG9ypnGLyp7EbWwiPI2MyHGil9hs4XzgGNVdeWrUAgeU4dtZMEyId1XmF1S6am/ksRuuPSumDtyMdSKJ3G7SEGUecmANI9Mdh1agBziMuNZR/d6jbXEYRPZFDWJMZngNGaFnY+jqEZdaoHoYXwB6ldaFV5V+h7fWISxAwoUJ4EIHXT2wD3tI7gauR1xmA+J1XsaeG/twG7NS6Y7hGaWfB6xFTuAu7Mn6cUy/PuwJ7Ipu27CJV28MzwGl24vEYZuQwYk6OKexk+qZXRG419G3FVkyYzFGGLQhM1NAYrVqeLiKPmbAXojqZKLOU0gAtwcJEO8ClsUo1qN9exIYYdCrfbpj6PLAPcATwDvAN8iAlShP3KZhLPVZj99r344UfdZon0Me8mqw+lagakMCjGjfXIo+Oe0z7CmzTN+scnafATCyfQcvklkQCz34DOnTtXHDMLSDHvIqdAyWZQr6+yTwK1IoOKzPAeBnB+O9qthG4KuEymwM9HXhSiQsuha4GvGKywM6V2AborA5sHzc7zjiWuPQDvxDvPt9JEIXk1UOAI+6hNQq8w3Ac8B+7fxRjHLGnQ7hNqYdm0LvjuFpDsQPkPBoPVJu8irwLUCqJxO4M8E6bIgyjhh2A+Kdcki00IfMhAlR6hz8ZhyiRCFpAFePGOAKGieRmXAZEZQZF6imQl6VGwYWJ6BvRU7sQ8gZM6Lfu0jm2ZYiK+A0cJGHvlWxGhsWJImlZoobVdYossQywXwkvikBr2fFNAHeVJlfE5+7JIIJCI/id1j6IoctAnbOlNltyBmSSTnGAx3IXikCt/syaQROICPyWIwwV+YYhyZkT1TDdtXhBPFXGpHYqgz+IjojW4wt2YwiidklKfgvRwrfJpJ4j2iPuAh7C7AlBf9pLMNmjJ9RXq5chwR7JhELFrH7gfsdfDdTWcQ2acAQcGuAtkFlm4zQ++KnJWBMP3Ky78JmkweU5nLkIDTXCkWkSB1GnvJrhU7kWqEFWwScQs6bJSozszuSoDGmSDeBlDHDFcC6gPA7I3itxxYTwn1rgKewdy9G1lAWRhg0I6F9CQnnb3LQdlPdQewgPuzoQCrvxojML06bkPuJc2PoNmPvO8J4X9s2xPBoQEo/Xhc7WWEtouzBiLZftG1VRNt/DuaFgVOUh9+z+sLAbMEkTlGfWXmFYzbefAB4Cxn9MAqc2TuWs5gz/AslyrEY0l6rswAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                  設定
                </button>
              </div>
              <p className="today">
                {today.getMonth() + 1}月{today.getDate()}日までの情報を表示
              </p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart
                width={400}
                height={350}
                data={graphData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="created_at" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey={graph} stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </section>
        </main>
      </SGraph>
      <Modal show={show} fieldId={param.id} percent={percent} onClick={onClickModal} onChange={onChangeRange} />
      {/* </>
      )} */}
    </>
  );
});

const SGraph = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    section {
      margin: 0 auto;
      margin-top: 45px;
      width: 100%;

      .graph {
        margin-bottom: 10px;
      }

      select,
      button {
        color: ${Color.primary};
        background-color: #fefefe;
        outline: none;
        border-radius: 25px;
        border: solid 1px rgba(232, 230, 230, 0.95);
        padding: 10px 15px;
        transition: all 0.25s ease 0s;
        width: 100px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.01);
        }
      }

      .dataContainer {
        display: flex;
        justify-content: space-around;
      }

      .today {
        margin-top: 30px;
        margin-right: 10px;
        text-align: right;
      }
    }

    button {
      position: relative;

      svg {
        position: absolute;
        top: 30%;
        left: 10%;
      }
    }

    h1 {
      font-size: ${Font.text3xl};
      text-align: center;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
      margin-top: 30px;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        opacity: 25%;
        height: 10px;
        width: 40%;
        left: 29%;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
      section {
        margin-top: 100px;
      }

      .graph {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      .dataContainer {
        width: 350px;
        display: flex;
        justify-content: space-around;
      }

      h1 {
        font-size: ${Font.text5xl};
        padding: 5px;
        margin: 30px 0;
        margin-top: 75px;
        margin-bottom: 30px;

        ::after {
          left: 30%;
          width: 40%;
          height: 15px; /* 線幅 */
        }
      }

      section {
        width: 900px;
      }
    }
  }
`;
