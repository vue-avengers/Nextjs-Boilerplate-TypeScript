/* eslint-disable no-console */
import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';

export enum EnumContentType {
  JSON = 'application/json',
  XML = 'application/xml',
  FORM = 'application/x-www-form-urlencoded',
}

class HttpApiService {
  private axiosInstance: AxiosInstance | undefined;

  private baseURL: string;

  private token: string | null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = null;

    this.createAxiosInstance();
  }

  private defaultOptions = (): any => {
    // Set the AUTH token for any request

    const authHttpHeader = 'Bearer token'; // Token goes here
    this.token = authHttpHeader;

    const options = {
      baseURL: this.baseURL,
      // withCredentials: true, // Window Authentification
      headers: {
        Accept: 'application/json',
        // 'Authorization': `${authHttpHeader}` // OAuth Authetification
      },
    };
    return options;
  };

  /**
   * Create instance
   */
  private createAxiosInstance() {
    this.axiosInstance = axios.create(this.defaultOptions());

    // this.checkAutorization()

    // Add a request interceptor
    this.axiosInstance.interceptors.request.use(
      config => config,
      error => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  protected getToken() {
    return this.token;
  }

  protected get(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axiosInstance!.get(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  protected create(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return this.post(endpoint, data, conf);
  }

  protected post(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axiosInstance!.post(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  protected update(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axiosInstance!.put(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  protected delete(endpoint: string, id: any, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axiosInstance!.delete(`${endpoint}/${id}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  protected deleteFile(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axiosInstance!.delete(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  handleSuccess(response: AxiosResponse) {
    // console.log('handleSuccess' + JSON.stringify(response))
    return response;
  }

  handleError = (err: any) => {
    console.log(`HttpService::Error : ${err}`);
    if (!err.response) {
      console.log(`Network error: ${err}`);
    } else if (err.response !== undefined) {
      const { status } = err.response;
      if (status === 401 || status === 500) {
        console.log(
          `HttpService::Error(401 or 500) : ${err.response.data.Message}`
        );
      }
    }
    return Promise.reject(err);
  };

  redirectTo = (document: any, path: string) => {
    // eslint-disable-next-line no-param-reassign
    document.location = path;
  };
}

export default HttpApiService;
