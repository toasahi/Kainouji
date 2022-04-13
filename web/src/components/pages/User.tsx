import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';

import { SUser, SUserCard } from '../../constant/BaseCss';
import { PrimaryInput } from '../Inputs/PrimaryInput';
import { Header } from '../layouts/Header';
import { useCookies } from 'react-cookie';
import { useLoginUser, userInfoData } from '../../hooks/useLoginUser';
import { SecondInput } from "../Inputs/SecondInput";
import { useForm } from "react-hook-form";
import { IFormValues } from "../../types/form/form";

export const User: VFC = memo(() => {
  const [imageUrl, setImageUrl] = useState('');
  const onChangeProcessImage = (event: ChangeEvent<HTMLInputElement>) =>
    event.currentTarget.files !== null
      ? setImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
      : setImageUrl('');
  const [cookies] = useCookies(['id']);
  const { userInfo, userData } = userInfoData();
  useEffect(() => userData(cookies.id), []);
  const { loginUser } = useLoginUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  return (
    <>
      <SUser>
        <Header />
        <main>
          <SUserCard>
            <div className="container">
              <h1>マイページ</h1>
              <section className="userContainer">
                <div className="userImage">
                  {imageUrl === '' ? (
                    <>
                      <label htmlFor="image">
                        <svg
                          width="90"
                          height="90"
                          viewBox="0 0 90 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect width="90" height="90" fill="url(#pattern8)" />
                          <rect x="53" y="53" width="30" height="30" fill="url(#pattern9)" />
                          <defs>
                            <pattern id="pattern8" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image8" transform="scale(0.0111111)" />
                            </pattern>
                            <pattern id="pattern9" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image9" transform="scale(0.0333333)" />
                            </pattern>
                            <image
                              id="image8"
                              width="90"
                              height="90"
                              xlinkHref="data:image/png;base64,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"
                            />
                            <image
                              id="image9"
                              width="30"
                              height="30"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAt0lEQVRIie2VsQ3CMBBF32UHKKDJPAgQA0AXhOR9ghC0YQFSME5SZA4fFZKhyxGsCPwr35f8n+4snSEpksRyaVvrBjgDirCvlnLrm5FZwEAJTIApytESYAXPgvM8JvhjJXAC/x74ZXPtal14oRQlHxKiQovHXddyf3rvHZ+GhgKIkotwCb1xvLFXDkDzBU5DRhEa1t9Jw7paSe+ccYw6gRP4f8EqtEFpWji2jj0O6ICODGfKSIqlBwZ8JRAxWUbyAAAAAElFTkSuQmCC"
                            />
                          </defs>
                        </svg>
                      </label>
                      <PrimaryInput type="file" inputId="image" onChange={onChangeProcessImage} hidden />
                    </>
                  ) : (
                    <>
                      <label htmlFor="image">
                        <img src={imageUrl} className="iconImage" />
                      </label>
                      <PrimaryInput type="file" inputId="image" onChange={onChangeProcessImage} hidden={true} />
                    </>
                  )}
                </div>
                <div className="userInfo">
                  <label htmlFor="username">ユーザー名</label>
                  <div>
                    <SecondInput
                      inputType="text"
                      label="username"
                      register={register}
                      required={false}
                      value={userInfo != undefined ? userInfo : 'なし'}
                    />
                  </div>
                  <label htmlFor="email">メール</label>
                  <div>
                    <SecondInput
                      inputType="text"
                      label="email"
                      register={register}
                      required={false}
                      value={loginUser?.email != null ? loginUser?.email : 'なし'}
                    />
                  </div>
                </div>
              </section>
            </div>
          </SUserCard>
        </main>
      </SUser>
    </>
  );
});
