import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Header } from '../layouts/Header';
import { PrimaryInput } from '../Inputs/PrimaryInput';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { useGetThreshold } from '../../hooks/useGetThreshold';
import { SecondInput } from '../Inputs/SecondInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../types/form/form';
import addImage from '../../images/addImage.png';

type State = {
  data?: IFormValues;
  imageUrl?: string;
};

export const SecondRegisterField: VFC = memo(() => {
  const history = useHistory<State>();
  const state = history.location.state;
  const historyState = state === undefined;
  const [imageUrl, setImageUrl] = useState(historyState ? '' : state.data?.fieldImage);
  const { getVegetables, loading, vegetableLists } = useGetVegitables();
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
    <SRegisterField>
      <Header />
      <main>
        <SCard>
          <div className="container">
            <h1>畑を登録</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <section>
                <div className="item">
                  <label htmlFor="vegetable">育てる野菜</label>
                  <select id="vegetable" {...register('vegetable', { required: true })}>
                    <option value="">選択してください</option>
                    <option value="きゅうり">きゅうり</option>
                    <option value="キャベツ">キャベツ</option>
                    <option value="トマト">トマト</option>
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
                {/* <label htmlFor="fieldImage">畑の画像</label> */}
                <label htmlFor="fieldImage">畑の画像</label>
                {/* {imageUrl === '' ? (
                  <>
                    <div style={{ width: '100%', height: '180px', backgroundColor: '#F9F9F9' }}>
                    <svg
                      width="150"
                      height="90"
                      viewBox="0 0 109 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ display: 'block', margin: '0 auto', paddingTop: '30px' }}
                    >
                      <rect width="109" height="90" transform="matrix(-1 0 0 1 109 0)" fill="url(#pattern6)" />
                      <defs>
                        <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image6" transform="translate(0.087156) scale(0.00917431 0.0111111)" />
                        </pattern>
                        <image
                          id="image6"
                          width="90"
                          height="90"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFMklEQVR4nO2dy2tdRRyAv6oktyXVFhfa+NhIUlDbpCltIm5q0J1/geJOrAimK/vAha2uRLG2gi/0H1DQSpEiKG5VpDa1ZiG4an1gbaukYG4i97r43aO36Zm58zhnzpyT+eBHIPfcOb/5MszjzNwbSCQSiUQikUgkEolEIpFIJBKJxABawD7ga+Aq0E1Bt+fiK2AOGHa22+NOYD6CSsUeZ3qunGiRJNvKdmrZ+yJIvm7xrErmDRrRj2leS+SjdLZO86ZFYKT4XBrNVWBj3gs60d1ycmk8uU51XUeiQJLoQCTRwhJwDJhGxqURYAY4DrTLvnnVU6VQcR7YrvEw0bvGtDxrqhYQIv5GLzljAmn1SbRjvG7h47hhmdZULSFE7LbwMWNYZi5rfR69EVlkmDCCLOIGkebRnni5Wuui7y3p2utY66IfL+laK6oeqELEEjJ1G8QksnBxHgx1VC0hVJxHL3sSuGBRnjVVCwgZS8g8eYb/l+APAG9g3pIrFf0zcBBpMVkFJoFDwC8RCC4jgot+D9igKX8D8H4EYmot+rDFfQ6XWOlGi37B4V4HPCsXU1gTSnJGU2RbE1JyRhNk53KTj5U+jvTCl5eB9RTzR9PRRQ68fNv7eQ74DfirF21gE3AzcBcwBuxApnxTFLyiNv0L2gx8ppQxQHaAz4GngVGP3G4F9gLfKO5jTVWSM4qSvYRMI+8rIccJ4E2uXdRY49wfFYiv7A+BuwPkOQ58Qo1Fg5vsn4BHAuXXz8Mub4pFNNjNRk4CmwPm5k1MomFwy+4Az6PfnutnGHgIeBH4GFgALgPLSJ97Gfih99oRYA8FHDjPIzbRoJbdAZ4xLGMn8C7wp6IsXVwB3kGmeIURo2i4XnYHeNLgfVPAZ9jLVcUp5EmkN7GKhmtlvzTg2vXIca9/KE5yFivAUeTTEc7ELBpE9gn0q7StwFmKF7w6ziCrRydiFw0wpHltGviD8iVncRG7Azn/UQfRKqaRwy6hJGexiIPsuoreStiWnNeyrbqROopuAd9RneQsziKDsBF1FH0Mdzlt4DlgSy/2Y78D3h+vmSZdN9FT+E3h9ueU6bMRsYLZ4ZzaifZdjGzJKfN2zzI/NUm8TqJ34idEVxefMjvIzkxjDjnurToBBeuApwZdVJcWPYzbA6IQLbqLPAUcakKLfhC4peokNGwGZpogek/VCRgw2wTRRlOoitnuK9q3/7KJcUUOJsvdZWSePIoMUHmhQnX9KDLPXja4vyp3IKxEk7hNkafJc428xUhRmCxqLuoKqFrs6lDt15ksk/MWI0VhsqhZ0nUdpp+/qwOmG7Yu3GhykU70QkGJFMUmxe9NPmT5RJGJOJStzXGO6ruL/lANKAsG720jfanPmbvVZIOhSdd1TlfQMLIXVrXgLGYVeZ4oqHwVRZT9ka7raAOPIt99FwP3K34fS3465gfNoy8g+29zyNdDVjlAqkR/GTQLN+qQ40CGkRNEsXYdl2jIQ6U2cjw3Vj7AbPVYC6aIs0V3KOjYWEycwk9K3tTvDs8yTxZeywiYRDZEXaUcyCnzoEd5K8C2wmsZCUdxF9O/qLFZjKjilZLrWikt4DT+/bVvzGNxgKaujCGPJauS/DtwT+m1jITdVHfIcVeA+kXFLqR1hZJ8Cflk7ZpkjDAPxk6zhroLFS3kwKHP1E8VK8CreH60omlMIGfhOvgL7iCLkcbOk4tgB/A2coLIpR9+C4dldZl7abEzhHwr2Czy1cbjyEZr9s8QFoFfgR+B74EvkP+u5PSA6F+iIt8t7A49qQAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="fieldImage">
                      <img src={imageUrl} style={{ width: '100%', height: '180px' }} />
                    </label>
                  </>
                )} */}
                {/* <label htmlFor="fieldImage">
                  <div style={{ width: '100%', height: '180px', backgroundColor: '#F9F9F9' }}>
                    <svg
                      width="150"
                      height="90"
                      viewBox="0 0 109 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ display: 'block', margin: '0 auto', paddingTop: '30px' }}
                    >
                      <rect width="109" height="90" transform="matrix(-1 0 0 1 109 0)" fill="url(#pattern6)" />
                      <defs>
                        <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image6" transform="translate(0.087156) scale(0.00917431 0.0111111)" />
                        </pattern>
                        <image
                          id="image6"
                          width="90"
                          height="90"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFMklEQVR4nO2dy2tdRRyAv6oktyXVFhfa+NhIUlDbpCltIm5q0J1/geJOrAimK/vAha2uRLG2gi/0H1DQSpEiKG5VpDa1ZiG4an1gbaukYG4i97r43aO36Zm58zhnzpyT+eBHIPfcOb/5MszjzNwbSCQSiUQikUgkEolEIpFIJBKJxABawD7ga+Aq0E1Bt+fiK2AOGHa22+NOYD6CSsUeZ3qunGiRJNvKdmrZ+yJIvm7xrErmDRrRj2leS+SjdLZO86ZFYKT4XBrNVWBj3gs60d1ycmk8uU51XUeiQJLoQCTRwhJwDJhGxqURYAY4DrTLvnnVU6VQcR7YrvEw0bvGtDxrqhYQIv5GLzljAmn1SbRjvG7h47hhmdZULSFE7LbwMWNYZi5rfR69EVlkmDCCLOIGkebRnni5Wuui7y3p2utY66IfL+laK6oeqELEEjJ1G8QksnBxHgx1VC0hVJxHL3sSuGBRnjVVCwgZS8g8eYb/l+APAG9g3pIrFf0zcBBpMVkFJoFDwC8RCC4jgot+D9igKX8D8H4EYmot+rDFfQ6XWOlGi37B4V4HPCsXU1gTSnJGU2RbE1JyRhNk53KTj5U+jvTCl5eB9RTzR9PRRQ68fNv7eQ74DfirF21gE3AzcBcwBuxApnxTFLyiNv0L2gx8ppQxQHaAz4GngVGP3G4F9gLfKO5jTVWSM4qSvYRMI+8rIccJ4E2uXdRY49wfFYiv7A+BuwPkOQ58Qo1Fg5vsn4BHAuXXz8Mub4pFNNjNRk4CmwPm5k1MomFwy+4Az6PfnutnGHgIeBH4GFgALgPLSJ97Gfih99oRYA8FHDjPIzbRoJbdAZ4xLGMn8C7wp6IsXVwB3kGmeIURo2i4XnYHeNLgfVPAZ9jLVcUp5EmkN7GKhmtlvzTg2vXIca9/KE5yFivAUeTTEc7ELBpE9gn0q7StwFmKF7w6ziCrRydiFw0wpHltGviD8iVncRG7Azn/UQfRKqaRwy6hJGexiIPsuoreStiWnNeyrbqROopuAd9RneQsziKDsBF1FH0Mdzlt4DlgSy/2Y78D3h+vmSZdN9FT+E3h9ueU6bMRsYLZ4ZzaifZdjGzJKfN2zzI/NUm8TqJ34idEVxefMjvIzkxjDjnurToBBeuApwZdVJcWPYzbA6IQLbqLPAUcakKLfhC4peokNGwGZpogek/VCRgw2wTRRlOoitnuK9q3/7KJcUUOJsvdZWSePIoMUHmhQnX9KDLPXja4vyp3IKxEk7hNkafJc428xUhRmCxqLuoKqFrs6lDt15ksk/MWI0VhsqhZ0nUdpp+/qwOmG7Yu3GhykU70QkGJFMUmxe9NPmT5RJGJOJStzXGO6ruL/lANKAsG720jfanPmbvVZIOhSdd1TlfQMLIXVrXgLGYVeZ4oqHwVRZT9ka7raAOPIt99FwP3K34fS3465gfNoy8g+29zyNdDVjlAqkR/GTQLN+qQ40CGkRNEsXYdl2jIQ6U2cjw3Vj7AbPVYC6aIs0V3KOjYWEycwk9K3tTvDs8yTxZeywiYRDZEXaUcyCnzoEd5K8C2wmsZCUdxF9O/qLFZjKjilZLrWikt4DT+/bVvzGNxgKaujCGPJauS/DtwT+m1jITdVHfIcVeA+kXFLqR1hZJ8Cflk7ZpkjDAPxk6zhroLFS3kwKHP1E8VK8CreH60omlMIGfhOvgL7iCLkcbOk4tgB/A2coLIpR9+C4dldZl7abEzhHwr2Czy1cbjyEZr9s8QFoFfgR+B74EvkP+u5PSA6F+iIt8t7A49qQAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </div>
                  </label> */}

                <div style={{ height: '160px' }}>
                  <SecondInput
                    inputType="file"
                    label="fieldImage"
                    register={register}
                    onChange={onChangeProcessImage}
                    required={false}
                  />
                </div>
              </div>
              <div className="buttonContainer">
                <PrimaryButton children="送信" position="after" onClick={() => console.log()} />
              </div>
            </form>
          </div>
        </SCard>
      </main>
    </SRegisterField>
  );
});

const SRegisterField = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    span {
      color: red;
      font-size: ${Font.textSm};
      line-height: 2;
    }

    select {
      color: ${Color.primary};
      outline: none;
      border-radius: 10px;
      border: solid 1px rgba(232, 230, 230, 0.95);
      padding: 13px;
      transition: all 0.25s ease 0s;
      width: 100%;

      &:focus {
        border: solid 1px #491818;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    main {
      width: 80%;
    }
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

const SCard = styled.section`
  margin: 0 auto;
  width: 85%;

  h1 {
    font-size: ${Font.text3xl};
    text-align: center;
    padding: 5px;
    margin: 20px 0;
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

  .buttonContainer {
    text-align: center;
    margin-top: 10px;
  }

  .item {
    margin-top: 15px;

    label {
      line-height: 2;
    }
  }

  @media (min-width: ${Responsive.md}) {
    width: 85%;
    height: 680px;
    padding: 15px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    h1 {
      font-size: ${Font.text3xl};
      text-align: center;
      padding: 5px;
      margin: 20px 0;
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

    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
    }

    .container {
      width: 80%;
      margin: 0 auto;
    }

    .item {
      margin-top: 20px;

      label {
        line-height: 3;
      }
    }

    .buttonContainer {
      text-align: center;
      margin-top: 25px;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 700px;
    height: 680px;
    margin-top: 25px;
    padding: 25px;

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;

      ::after {
        border-radius: 5px; /* 線幅の半分 */
        bottom: 0;
        left: 28%;
        width: 250px;
        height: 15px; /* 線幅 */
      }
    }

    .item {
      width: 100%;
    }
  }
`;
