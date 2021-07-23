import { memo, VFC } from 'react';
import { Vegetable } from '../../types/api/vegetable';

type Props = {
    vegetableLists : Vegetable | null;
}

// export const PrimarySelect: VFC = memo((props) => {
//     const {VegetableLists} = props;
//     return (
//         <select id="vegetable" value={vegetable} onChange={onChangeVegetable}>
//             <option value="">選択してください</option>
//             {vegetableLists.map((vegetableList) => (
//               <option key={vegetableList.id} value={vegetableList.id}>
//                 {vegetableList.vegetable}
//               </option>
//             ))}
//           </select>
//     )
  
// });