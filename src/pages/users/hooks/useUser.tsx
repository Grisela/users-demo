import { url } from "../../../constant/urls";
import { useLazyGetDataQuery } from "../../../services/apiServices";

const useUser = () => {
  const [getData, { data, isFetching, isError, isLoading }] =
    useLazyGetDataQuery();

  const fetchUser = async (id?: string) => {
    const apiUrl = id ? `${url.user_list}/${id}` : `${url.user_list}`;
    try {
      const { data } = await getData(apiUrl);
      return { data };
    } catch (err) {
      return { err };
    }
  };

  return {
    queries: { fetchUser },
    data,
    isFetching,
    isError,
    isLoading,
  };
};

export default useUser;
