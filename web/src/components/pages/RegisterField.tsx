import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';

import { SRegisterField, SRegisterFieldCard } from '../../constant/BaseCss';
import { useGetVegetables } from '../../hooks/useGetVegetables';
import { Header } from '../layouts/Header';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { SecondInput } from '../Inputs/SecondInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../types/form/form';
import { PrimarySpinner } from '../spinners/PrimarySpinner';
import { Question } from '../icon/Question';

type State = {
  data?: IFormValues;
  imageUrl?: string;
};

export const RegisterField: VFC = memo(() => {
  const history = useHistory<State>();
  const state = history.location.state;
  const historyState = state === undefined;
  const [imageUrl, setImageUrl] = useState(historyState ? '' : state.data?.fieldImage);
  const [vegetable, setVegetable] = useState(historyState ? '' : state.data?.vegetable);
  const { getVegetables, loading, vegetableLists } = useGetVegetables();
  const onChangeVegetable = (event: ChangeEvent<HTMLSelectElement>) => {
    setVegetable(event.target.value);
  };
  const onChangeProcessImage = (event: ChangeEvent<HTMLInputElement>) =>
    event.currentTarget.files !== null
      ? setImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
      : setImageUrl('');

  useEffect(() => getVegetables(), []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    history.push({
      pathname: '/registerfield/confirm',
      state: {
        data: data,
        imageUrl: imageUrl,
      },
    });
  };

  return (
    <>
      {loading ? (
        <PrimarySpinner />
      ) : (
        <SRegisterField>
          <Header />
          <main>
            <SRegisterFieldCard>
              <div className="container">
                <h1>畑を登録</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <section>
                    <div className="item">
                      <label htmlFor="fieldName">名前</label>
                      <SecondInput
                        label="fieldName"
                        inputType="text"
                        register={register}
                        required
                        value={historyState ? '' : state.data?.fieldName}
                      />
                      {errors.fieldName && <span>畑の名前を入力してください</span>}
                    </div>
                    <div className="item">
                      <label htmlFor="chipId">チップID</label>
                      <SecondInput
                        label="chipId"
                        inputType="text"
                        register={register}
                        required
                        value={historyState ? '' : state.data?.chipId}
                      />
                      {errors.fieldName && <span>チップIDを入力してください</span>}
                      <Question />
                    </div>
                  </section>

                  <section>
                    <div className="item">
                      <label htmlFor="vegetable">育てる野菜</label>
                      <select
                        id="vegetable"
                        {...register('vegetable', { required: true })}
                        onChange={onChangeVegetable}
                        value={vegetable}
                      >
                        <option value="">選択してください</option>
                        {vegetableLists.map((vegetableList) => (
                          <option key={vegetableList.id} value={vegetableList.id}>
                            {vegetableList.vegetable}
                          </option>
                        ))}
                      </select>
                      {errors.vegetable && <span>野菜を選択してください</span>}
                    </div>

                    <div className="item">
                      <label htmlFor="settingDay">設置日</label>
                      <SecondInput
                        inputType="date"
                        label="settingDay"
                        register={register}
                        required
                        value={historyState ? '' : state.data?.settingDay}
                      />
                      {errors.settingDay && <span>設置日を入力してください</span>}
                    </div>
                  </section>

                  <div className="item">
                    <label htmlFor="image">畑の画像</label>
                    <div style={{ height: '160px' }}>
                      <SecondInput
                        inputType="file"
                        label="image"
                        register={register}
                        onChange={onChangeProcessImage}
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <PrimaryButton children="確認画面へ" position="after" onClick={() => console.log()} />
                  </div>
                </form>
              </div>
            </SRegisterFieldCard>
          </main>
        </SRegisterField>
      )}
    </>
  );
});
