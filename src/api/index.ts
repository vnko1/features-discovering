// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   CreateAxiosDefaults,
//   isAxiosError,
// } from "axios";
// import { BASE_URL } from "@/config";
// import { Endpoints, PartnersResponse } from "./config.type";

// abstract class ApiInstance {
//   protected api: AxiosInstance;

//   constructor(config: CreateAxiosDefaults) {
//     this.api = axios.create(config);
//   }

//   protected tryCatchWrapper<T, K = undefined>(
//     cb: (data: K) => Promise<AxiosResponse<T>>
//   ) {
//     return async function (data: K): Promise<AxiosResponse<T>> {
//       try {
//         return await cb(data);
//       } catch (error) {
//         if (isAxiosError(error)) throw error;
//         else throw new Error("Something went wrong!");
//       }
//     };
//   }
// }

// class StrapiApi extends ApiInstance {
//   private static instance: StrapiApi;
//   constructor() {
//     super({
//       baseURL: BASE_URL + "api/",
//       params: { publicationState: "live" },
//     });
//     if (!StrapiApi.instance) StrapiApi.instance = this;
//     return StrapiApi.instance;
//   }

//   getPartners = this.tryCatchWrapper<PartnersResponse>(async () => {
//     return await this.api.get(Endpoints.Partners);
//   });
// }

// export const strapiApi = new StrapiApi();
