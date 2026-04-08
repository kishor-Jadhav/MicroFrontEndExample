export const shellStore = {
  custEvendata: {},
  custEvenuserConfig: {}
};

window.shellStore = shellStore;

export const setEventData = (data) => {
  shellStore.custEvendata = data;

  window.dispatchEvent(
    new CustomEvent("shell:cust-event-data-updated", {
      detail: shellStore.custEvendata
    })
  );
};

export const setEventUserConfig = (config) => {
  shellStore.custEvenuserConfig = config;

  window.dispatchEvent(
    new CustomEvent("shell:user-config-updated", {
      detail: shellStore.custEvenuserConfig
    })
  );
};

export const getCustEventData = () => shellStore.custEvendata;
export const getCustEventUserConfig = () => shellStore.custEvenuserConfig;