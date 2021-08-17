import { memo, useEffect, VFC } from 'react';
import { useParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { Responsive, Font, Color, FontWeight } from '../../constant/BaseCss';
import { useMoistureData } from '../../hooks/useMoistureData';

import { Header } from '../layouts/Header';

export const Moisture: VFC = memo(() => {
  const { loading, moisture, getMoistures } = useMoistureData();
  const param = useParams<{ id: string }>();
  const today = new Date();
  console.log(today.getMonth() + 1, today.getDate());

  console.log(moisture);

  useEffect(() => getMoistures(param.id), []);

  const data = [
    {
      name: '2010年',
      水分量: 4000,
    },
    {
      name: '2011年',
      水分量: 3000,
    },
    {
      name: '2012年',
      水分量: 2000,
    },
    {
      name: '2013年',
      水分量: 2780,
    },
    {
      name: '2014年',
      水分量: 1890,
    },
    {
      name: '2015年',
      水分量: 2390,
    },
    {
      name: '2016年',
      水分量: 3490,
    },
    {
      name: '2017年',
      水分量: 5700,
    },
    {
      name: '2018年',
      水分量: 5490,
    },
  ];
  return (
    <>
      {/* {loading ? (
        <h1>水分量のページです</h1>
      ) : ( */}
      <SMoisture>
        <Header />
        <main>
          <h1>越智自動車前畑</h1>
          <section>
            <div style={{ display: 'flex' }}>
              <div>
                <select>
                  <option>水分量</option>
                  <option>気圧</option>
                  <option>気温</option>
                  <option>湿度</option>
                </select>
                <select>
                  <option>全期間</option>
                  <option>1週間</option>
                  <option>2週間</option>
                </select>
              </div>
              <p>
                {today.getMonth() + 1}月{today.getDate()}日までの情報を表示
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="水分量" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </section>
        </main>
      </SMoisture>
      {/* )} */}
    </>
  );
});

const SMoisture = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    section {
      margin: 0 auto;

      select {
        color: ${Color.primary};
        outline: none;
        border-radius: 25px;
        border: solid 1px rgba(232, 230, 230, 0.95);
        padding: 10px 15px;
        transition: all 0.25s ease 0s;
        width: 100px;
        -webkit-appearance: none;
        appearance: none;
      }
    }

    h1 {
      font-size: ${Font.text2xl};
      text-align: center;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
      margin-top: 20px;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        opacity: 25%;
        height: 10px;
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
