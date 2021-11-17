import { ChangeEvent, memo, VFC } from 'react';
import { SRangeSlider } from '../../constant/BaseCss';

type Props = {
  percent: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RangeSlider: VFC<Props> = memo((props) => {
  const { percent, onChange } = props;
  return (
    <SRangeSlider>
      <input type="range" value={percent} onChange={onChange} />
      <div id="h4-container">
        <div id="h4-subcontainer">
          <h4
            style={{ left: `${percent}%`, transform: `translateX(-50%) scale(' + (${1 + Number(percent) / 100}) + ')` }}
          >
            {percent}
            <span></span>
          </h4>
        </div>
      </div>
    </SRangeSlider>
  );
});
