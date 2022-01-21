import { memo, useEffect, VFC } from 'react';
import { Link } from 'react-router-dom';

import { SLookField, SContainer } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import defaultImage from '../../images/defaultImage.jpeg';
import { useGetField } from '../../hooks/useGetFields';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useCookies } from 'react-cookie';
import { PrimarySpinner } from '../spinners/PrimarySpinner';
import { useLogin } from '../../hooks/useLogin';

export const LookField: VFC = memo(() => {
  const { fields, getFields, loading } = useGetField();
  const { loginUser } = useLoginUser();
  const { loginState } = useLogin();
  const [cookies, setCookie] = useCookies(['id']);
  useEffect(() => {
    loginState();
    if (loginUser != null) {
      setCookie('id', loginUser.uid, { path: '/' });
    }
    if (loginUser !== null && loginUser.uid !== undefined) {
      setCookie('id', loginUser.uid, { path: '/' });
      if (loginUser.uid != null) {
        getFields(loginUser.uid);
      }
    } else {
      if (Object.keys(cookies).length !== 0) {
        getFields(cookies.id);
      }
    }
  }, [loginUser]);
  return (
    <>
      {loading ? (
        <PrimarySpinner />
      ) : (
        <SLookField>
          <Header />
          <main>
            <section>
              <h1>畑を見る</h1>
              <SContainer>
                {fields?.map((field, index) => (
                  <Link key={index} to={`lookfield/graph/${field.id}`}>
                    <div className="filedContent">
                      <img
                        src={field.image_name === '' ? defaultImage : process.env.REACT_APP_S3_URL + field.image_name}
                        alt="畑の画像"
                      />
                      <div>
                        <h2>{field.field_name}</h2>
                        <p>設置日:{field.setting_date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </SContainer>
            </section>
          </main>
        </SLookField>
      )}
    </>
  );
});
