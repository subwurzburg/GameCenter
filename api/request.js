import axios from "axios";

const axiosConfig = {
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
};

const apiRequest = axios.create(axiosConfig);

// 請求攔截器，處理請求配置
apiRequest.interceptors.request.use(
  (config) => {
    // 在此處可加入額外的請求處理，例如設置授權標頭、攔截特定錯誤等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 回應攔截器，處理回應數據
apiRequest.interceptors.response.use(
  (response) => {
    // 在此處可加入額外的回應處理，例如檢查錯誤狀態碼、轉換回應數據格式等
    return response;
  },
  (error) => {
    // 在此處可加入額外的錯誤處理，例如統一錯誤格式、顯示錯誤訊息等
    return Promise.reject(error);
  }
);

export default apiRequest;