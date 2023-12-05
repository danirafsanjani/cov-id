import React, { useState, useEffect } from "react";
import { Center, Spinner, Text, Box, ScrollView } from "native-base";
import { Header } from "../components";
import axios from "axios";

const CovidScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [covidDetail, setDataCovid] = useState([]);
  const [covidProvinsi, setDataProvinsi] = useState([]);

  useEffect(() => {
    const fetchDataCovid = async () => {
      try {
        const dataCovid = await axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
        setDataCovid(dataCovid.data);
        setLoading(false);
        return dataCovid;
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDataCovid();
  }, []);

  useEffect(() => {
    const fetchDataProvinsi = async () => {
      try {
        const dataProvinsi = await axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi");
        setDataProvinsi(dataProvinsi.data);
        setLoading(false);
        return dataProvinsi;
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDataProvinsi();
  }, []);

  return (
    <>
      <Header title="Data Statistic Covid" withLogo={true} />
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" color="#98b0ff" />
        </Center>
      ) : (
        <ScrollView>
          <Box px="20px" mb={5}>
            <Box alignItems="center" my={4} borderWidth={1} backgroundColor="#98a6ff" borderColor="#98a6ff" rounded="lg">
              <>
                <Text mt={1} my={1} style={{ fontSize: 21 }}>
                  Data Covid Indonesia
                </Text>
                <Text>Positif : {covidDetail.positif}</Text>
                <Text>Dirawat : {covidDetail.dirawat}</Text>
                <Text>Sembuh : {covidDetail.sembuh}</Text>
                <Text>Meninggal : {covidDetail.meninggal}</Text>
              </>
            </Box>
            <Box>
              {covidProvinsi.map((item) => {
                return (
                  <>
                    <Box my={2} borderWidth={1} paddingLeft={2} backgroundColor="#98baff" rounded="lg">
                      <Text textAlign="center">{item.provinsi}</Text>
                      <Text>Positif : {item.kasus}</Text>
                      <Text>Dirawat : {item.dirawat}</Text>
                      <Text>Sembuh : {item.sembuh}</Text>
                      <Text>Meninggal : {item.meninggal}</Text>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
        </ScrollView>
      )}
    </>
  );
};

export default CovidScreen;
