import { memo, useEffect, VFC } from 'react';
import { useParams } from 'react-router-dom';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { Responsive, Font, Color } from '../../constant/BaseCss';
import { useMoistureData } from '../../hooks/useMoistureData';

import { Header } from '../layouts/Header';

export const Moisture: VFC = memo(() => {
  const { loading, moisture, getMoistures } = useMoistureData();
  const param = useParams<{ id: string }>();

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
          <section className="moisture-graph">
            <h2>水分量</h2>
            {/* <LineChart width={700} height={500} data={moisture}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="created_at" interval="preserveStartEnd" />
                <YAxis interval="preserveStartEnd" />
                <Legend />
                <Line type="monotone" dataKey="moisture" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart> */}
            {/* <LineChart width={700} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="created_at" interval="preserveStartEnd" />
                <YAxis interval="preserveStartEnd" />
                <Legend />
                <Line type="monotone" dataKey="水分量" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart> */}
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
  min-height: 95vh;

  main {
    width: 80%;

    section {
      margin: 0 auto;
    }

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;
      text-align: center;
      position: relative;

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
        margin-top: 75px;
        margin-bottom: 30px;
      }

      section {
        width: 900px;
      }
    }
  }
`;
