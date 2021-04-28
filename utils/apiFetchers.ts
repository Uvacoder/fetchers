import axios, { Method } from "axios";

interface fetchers {
  method: Method;
  token?: string | null;
  url: string;
  data?: any;
}

const responder = (responseType: string, responseData: any) => {
  return { responseType, responseData };
};

export const apiFetchers = async (fetchers: fetchers) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: fetchers.token,
  };

  try {
    let response = await axios({
      headers,
      method: fetchers.method,
      url: fetchers.url,
      data: fetchers.data,
    });

    console.log(response);

    switch (response.status) {
      case 200:
        return responder("success", response.data);
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
};
