import MainLayout from "../../assets/components/Layouts/Main/MainLayout";

import * as S from "../../assets/Styles/Dashboard";
import React, { useState, useEffect, ReactNode } from "react";
// import Description from "../../assets/Componets/Description";
import axios from "axios";
import { oneonone } from "@prisma/client";
import theme from "../../util/theme";

export default function DashBoard() {
  const [oneonones, setOneonones] = useState<Array<oneonone>>([]);
  const [isLoading, setLoading] = useState(true);

  async function getUserOneonone() {
    await axios
      .get("/api/oneonone/getAllOneonone", {
        params: { userId: "63bc060c6bc9bd40061ad30a" },
      })
      .then((res) => {
        if (res.status === 200) {
          setOneonones([...res.data.oneonones]);
          setLoading(false);
          console.log("Data ↓\n", res.data.oneonones);
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  useEffect(() => {
    getUserOneonone();
    console.log("ONEONONE ↓\n", oneonones);
  }, []);

  //  if (isLoading) return <h1>Loading...</h1>

  return (
    <S.Div>
      <S.Colum1>
        <S.Activities>
          <h3>
            minhas <strong>actions</strong>
          </h3>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <S.GroupList>
              {oneonones.map((item) => {
                return (
                  <S.ItemListDasboard key={item.id}>
                    {item.name}
                  </S.ItemListDasboard>
                );
              })}
            </S.GroupList>
          )}
        </S.Activities>
      </S.Colum1>
      <S.Colum2>
        <S.Scores>
          <S.Box>
            45
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            16
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong color="#F3426C">+10</strong>
            </small>
          </S.Box>
          <S.Box>
            26
            <span>
              <strong>tasks</strong> realizadas
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
        </S.Scores>
        <S.Scores>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
          <S.Box>
            888
            <span>
              <strong>nota</strong> média
            </span>
            <small>
              2022 • q3 • <strong>+10</strong>
            </small>
          </S.Box>
        </S.Scores>

        <S.Okrs>
          <h3>
            meus <strong>1ON1</strong>
          </h3>
          <S.ListOkrs>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <S.GroupList>
                {oneonones.map((item) => {
                  return (
                    <S.ItemListDasboard key={item.id}>
                      {item.name}
                    </S.ItemListDasboard>
                  );
                })}
              </S.GroupList>
            )}
          </S.ListOkrs>
        </S.Okrs>

        <S.History>
          <h3>
            meu <strong>histórico</strong>
          </h3>
          <S.ListOkrs>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <S.GroupList>
                {oneonones.map((item) => {
                  return (
                    <S.ItemListDasboard key={item.id}>
                      {item.name}
                    </S.ItemListDasboard>
                  );
                })}
              </S.GroupList>
            )}
          </S.ListOkrs>
        </S.History>
      </S.Colum2>
    </S.Div>
  );
}
DashBoard.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout  color={theme.colorSecond}>{page}</MainLayout>;
};
