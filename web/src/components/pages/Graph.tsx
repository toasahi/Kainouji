import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { SGraph } from '../../constant/BaseCss';
import { useGetDetailField } from '../../hooks/useGetDetailField';
import { useGetGraphData } from '../../hooks/useGetGraphData';
import { useGetThreshold } from '../../hooks/useGetThreshold';
import { Header } from '../layouts/Header';
import { Modal } from '../modals/Modal';

export const Graph: VFC = memo(() => {
  const { getGraphData, graphData } = useGetGraphData();
  const { getDetailField, field } = useGetDetailField();
  const { getThreshold, thresholds } = useGetThreshold();
  const [percent, setPercent] = useState('0');
  const [graph, setGraph] = useState('水分量');
  const [period, setPeriod] = useState('all');
  const [show, setShow] = useState(false);
  const param = useParams<{ id: string }>();
  const today = new Date();
  const onClickModal = () => setShow(!show);
  const onChangeGraphData = (event: ChangeEvent<HTMLSelectElement>) => setGraph(event.target.value);
  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => setPercent(event.target.value);
  const onChangePeriod = (event: ChangeEvent<HTMLSelectElement>) => setPeriod(event.target.value);
  useEffect(() => {
    if (field != undefined) {
      getThreshold(field.chip_id);
    }
  }, [show]);
  useEffect(() => {
    getDetailField(param.id);
  }, []);
  useEffect(() => getGraphData(period, param.id), [period]);

  const onClickSetting = useCallback(() => {
    if (thresholds == undefined) {
      if (field !== undefined) {
        getThreshold(field.chip_id);
        setPercent(field?.moisture ?? '0');
      }
    } else {
      getThreshold(field!!.chip_id);
      setPercent(thresholds.moisture ?? '0');
    }
    setShow(!show);
  }, [field, thresholds, getThreshold, setPercent, setShow, show]);
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
      <Modal
        show={show}
        chipId={field?.chip_id ?? '0'}
        percent={percent}
        onClick={onClickModal}
        onChange={onChangeRange}
      />
      {/* </>
      )} */}
    </>
  );
});
