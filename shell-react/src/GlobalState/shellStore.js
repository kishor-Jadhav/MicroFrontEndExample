export const shellStore = {
  data: {},
  userConfig: {}
};

window.shellStore = shellStore;

export const setData = (data) => {
  shellStore.data = data;

  window.dispatchEvent(
    new CustomEvent("shell:data-updated", {
      detail: shellStore.data
    })
  );
};

export const setUserConfig = (config) => {
  shellStore.userConfig = config;

  window.dispatchEvent(
    new CustomEvent("shell:user-config-updated", {
      detail: shellStore.userConfig
    })
  );
};

export const getData = () => shellStore.data;
export const getUserConfig = () => shellStore.userConfig;