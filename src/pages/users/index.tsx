import { useEffect } from "react";
import useUser from "./hooks/useUser";
import type { IUserResponse } from "../../store/types/user.type";
import CardViewComponent from "../../components/CardView";
import { motion } from "framer-motion";
import { Center, Grid, Space, Title } from "@mantine/core";
import { isEmpty } from "lodash";

const UserPage = () => {
  const {
    queries: { fetchUser },
    data,
    isFetching,
  } = useUser();

  const handleCardView = () => {};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 1,
          delay: 1,
        }}
      >
        <Center style={{ flexDirection: "column" }}>
          <motion.div
            animate={{ y: [0, -5, 0], x: [0, -5, 0] }} // Bounces up and down
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              display: "inline-flex",
            }}
          >
            <Title fz={"4vw"} c={"yellow"}>
              User Demos
            </Title>
          </motion.div>
          <Space h={50} />
        </Center>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          <Grid
            mt={50}
            type="container"
            breakpoints={{
              xs: "300px",
              sm: "400px",
              md: "400px",
              lg: "600px",
              xl: "800px",
            }}
          >
            {isEmpty(data) && !isFetching ? (
              <Center h={"50vh"}>No User Yet!</Center>
            ) : (
              data?.map((e: IUserResponse, idx: number) => {
                return (
                  <Grid.Col
                    span={{ base: 12, md: 6, lg: 4, xl: 3 }}
                    key={idx}
                    onClick={() => handleCardView()}
                  >
                    <CardViewComponent name={e.name} />
                  </Grid.Col>
                );
              })
            )}
          </Grid>
        </motion.div>
      </motion.div>
    </>
  );
};

export default UserPage;
