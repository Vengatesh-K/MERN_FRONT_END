import { useSelector } from "react-redux";

export const useAuthToken = () => {
  const authToken = useSelector(
    (state) => state?.user?.tokenReducer?.authToken
  );

  return authToken;
};
