import { memo, useEffect, VFC } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { Responsive } from '../../constant/BaseCss';
import { useMoistureData } from '../../hooks/useMoistureData';

import { Header } from '../layouts/Header';

export const Moisture: VFC = memo(() => {
  const { loading, moisture, getMoistures } = useMoistureData();

  useEffect(() => getMoistures(), []);

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
      {loading ? (
        <h1>水分量のページです</h1>
      ) : (
        <SMoisture>
          <Header />
          <main>
            <h1>越智自動車前畑</h1>
            <section className="moisture-graph">
            <LineChart width={700} height={500} data={moisture}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" interval="preserveStartEnd" />
              <YAxis interval="preserveStartEnd" />
              <Legend />
              <Line type="monotone" dataKey="moisture" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </section>
          </main>
        </SMoisture>
      )}
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
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;
