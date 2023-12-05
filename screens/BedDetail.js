import React, { useState, useEffect } from "react";
import { Center, Spinner, Text, Box, ScrollView } from "native-base";
import { Header } from "../components";

const BedDetailScreen = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [bedDetail, setBedDetail] = useState([]);
  useEffect(() => {
    fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=35prop&cityid=${route.params.id}&type=1`)
      .then((response) => response.json())
      .then((json) => setBedDetail(json.hospitals))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <>
      <Header title="Bed Detail" withBackBtn={true} />
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" color="#98b0ff" />
        </Center>
      ) : (
        <ScrollView>
          <Box px="20px" mb={5}>
            <Box>
              {bedDetail.map((item) => {
                return (
                  <>
                    <Box my={2} borderWidth={1} paddingLeft={2} paddingRight={2} backgroundColor="#98a6ff" rounded="lg">
                      <Text>Nama : {item.name}</Text>
                      <Text>Alamat : {item.address}</Text>
                      <Text>No. Telepon : {item.phone}</Text>
                      <Text>Ketersediaan Kasur : {item.bed_availability}</Text>
                      <Text>Status : {item.info}</Text>
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

export default BedDetailScreen;
